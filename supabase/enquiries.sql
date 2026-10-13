-- Run once in the Supabase SQL editor.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  contact_role text not null check (contact_role in ('parent', 'student')),
  whatsapp text not null,
  email text not null,
  country text not null,
  syllabus text not null,
  level text not null,
  subjects text[] not null,
  mode text not null check (mode in ('online', 'in-person')),
  preferred_times text,
  time_zone text,
  exam_session text,
  heard_from text,
  consent boolean not null check (consent = true),
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  status text not null default 'new'
);

alter table public.enquiries enable row level security;

-- The website may add enquiries. Nobody can read them with the public key.
-- You read them in the Supabase dashboard (Table Editor), which bypasses RLS.
drop policy if exists "enquiries_insert_public" on public.enquiries;
create policy "enquiries_insert_public"
  on public.enquiries for insert
  to anon
  with check (consent = true);
