-- =========================================================
-- Atomic Learner — Supabase schema
-- Run this in the Supabase SQL editor (or via `supabase db push`)
-- =========================================================

-- ---------- Reference data ----------

create type curriculum as enum ('cambridge', 'edexcel');
create type academic_level as enum ('ol', 'al');

create table subjects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,          -- e.g. 'mathematics'
  name text not null,                 -- e.g. 'Mathematics'
  created_at timestamptz not null default now()
);

-- ---------- People ----------

create table parents (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid references auth.users(id) on delete set null,
  full_name text not null,
  email text unique not null,
  phone text,
  created_at timestamptz not null default now()
);

create table students (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references parents(id) on delete cascade,
  full_name text not null,
  curriculum curriculum not null,
  level academic_level not null,
  created_at timestamptz not null default now()
);

-- ---------- Bookings (lightweight local record of Calendly bookings) ----------
-- The booking UI itself is a Calendly embed; this table exists so the teacher
-- has one place to see enquiries even before a Calendly webhook is wired up.

create table call_requests (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  email text not null,
  phone text,
  student_curriculum curriculum,
  student_level academic_level,
  subject_id uuid references subjects(id),
  notes text,
  calendly_event_uri text,            -- populated once a Calendly webhook fires
  status text not null default 'new', -- new | scheduled | completed | cancelled
  created_at timestamptz not null default now()
);

-- ---------- Diagnostic assessment engine ----------
-- One assessment is authored per (curriculum, level, subject) and reused
-- across every student who matches that combination.

create table assessments (
  id uuid primary key default gen_random_uuid(),
  curriculum curriculum not null,
  level academic_level not null,
  subject_id uuid not null references subjects(id),
  title text not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  unique (curriculum, level, subject_id)
);

create table topics (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects(id),
  name text not null,                 -- e.g. 'Algebraic manipulation'
  created_at timestamptz not null default now()
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references assessments(id) on delete cascade,
  topic_id uuid not null references topics(id),
  difficulty text not null default 'foundation', -- foundation | intermediate | advanced
  prompt text not null,
  order_index int not null default 0,
  created_at timestamptz not null default now()
);

create table question_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references questions(id) on delete cascade,
  label text not null,
  is_correct boolean not null default false,
  order_index int not null default 0
);

-- ---------- Student attempts ----------

create table assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references assessments(id),
  student_id uuid references students(id),
  -- allow anonymous attempts before a student record exists (first-time visitors)
  contact_email text,
  status text not null default 'in_progress', -- in_progress | submitted | reviewed
  submitted_at timestamptz,
  reviewed_at timestamptz,
  reviewed_by text,
  created_at timestamptz not null default now()
);

create table assessment_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references assessment_attempts(id) on delete cascade,
  question_id uuid not null references questions(id),
  selected_option_id uuid references question_options(id),
  is_correct boolean,
  created_at timestamptz not null default now()
);

-- Computed per-topic gap score for a finished attempt, used to render the
-- topic map and to seed the learning plan.
create table attempt_topic_scores (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references assessment_attempts(id) on delete cascade,
  topic_id uuid not null references topics(id),
  correct_count int not null default 0,
  total_count int not null default 0,
  unique (attempt_id, topic_id)
);

-- ---------- Learning plans ----------

create table learning_plans (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  attempt_id uuid references assessment_attempts(id),
  goal text not null,
  stronger_areas text[] not null default '{}',
  priority_areas text[] not null default '{}',
  roadmap jsonb not null default '[]', -- [{ "range": "Weeks 1-2", "focus": "..." }]
  checkpoints jsonb not null default '[]',
  pdf_url text,                        -- Supabase Storage URL once generated
  published_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------- Monthly progress updates ----------

create table progress_updates (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references students(id),
  period_label text not null,          -- e.g. 'August 2026'
  covered text[] not null default '{}',
  current_focus text,
  needs_practice text,
  next_month text[] not null default '{}',
  sent_via text default 'whatsapp',
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------- Row Level Security ----------
-- Enable RLS everywhere; policies to be refined once auth roles
-- (parent vs teacher/admin) are finalized. For now, service role bypasses RLS
-- for teacher-side operations via the server client + service key.

alter table parents enable row level security;
alter table students enable row level security;
alter table call_requests enable row level security;
alter table assessments enable row level security;
alter table topics enable row level security;
alter table questions enable row level security;
alter table question_options enable row level security;
alter table assessment_attempts enable row level security;
alter table assessment_answers enable row level security;
alter table attempt_topic_scores enable row level security;
alter table learning_plans enable row level security;
alter table progress_updates enable row level security;

-- Parents can read their own record and their own children's data.
create policy "parents_select_own" on parents
  for select using (auth_user_id = auth.uid());

create policy "students_select_own" on students
  for select using (
    parent_id in (select id from parents where auth_user_id = auth.uid())
  );

create policy "learning_plans_select_own" on learning_plans
  for select using (
    student_id in (
      select s.id from students s
      join parents p on p.id = s.parent_id
      where p.auth_user_id = auth.uid()
    )
  );

create policy "progress_updates_select_own" on progress_updates
  for select using (
    student_id in (
      select s.id from students s
      join parents p on p.id = s.parent_id
      where p.auth_user_id = auth.uid()
    )
  );

-- Published assessments and their content are publicly readable so a fresh
-- visitor can take a diagnostic without an account first.
create policy "assessments_public_read_published" on assessments
  for select using (is_published = true);

create policy "topics_public_read" on topics
  for select using (true);

create policy "questions_public_read" on questions
  for select using (
    assessment_id in (select id from assessments where is_published = true)
  );

create policy "question_options_public_read" on question_options
  for select using (
    question_id in (
      select q.id from questions q
      join assessments a on a.id = q.assessment_id
      where a.is_published = true
    )
  );

-- Anyone can create a call request (public enquiry form) and start/submit
-- an anonymous attempt; write access is intentionally permissive here since
-- these are public-facing lead-generation actions with no sensitive reads.
create policy "call_requests_insert_public" on call_requests
  for insert with check (true);

create policy "attempts_insert_public" on assessment_attempts
  for insert with check (true);

create policy "attempts_update_own_session" on assessment_attempts
  for update using (true);

create policy "answers_insert_public" on assessment_answers
  for insert with check (true);
