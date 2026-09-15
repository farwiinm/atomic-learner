# Atomic Learner, Next.js App

Personalized tutoring marketing site, booking, and diagnostic assessment engine.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Supabase (Postgres, Auth). See `supabase/schema.sql`
- Calendly embed for booking
- Self-hosted variable fonts (Plus Jakarta Sans, Inter) in `public/fonts`

## Getting started

```bash
npm install
cp .env.example .env.local
# fill in your keys in .env.local
npm run dev
```

Then visit http://localhost:3000

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
  Required for the diagnostic assessment engine, learning plans, and parent portal.
  The marketing homepage itself works without these.
- `NEXT_PUBLIC_CALENDLY_URL`. Your Calendly scheduling page URL, used on `/book`.
  Without it, the Calendly embed shows a placeholder notice instead of failing silently.

**Security note:** if you ever paste real Supabase keys into a chat, email, or ticket,
treat the service role key as compromised and rotate it in Supabase under
Settings, API, before going live. It bypasses all Row Level Security, so it should
only ever live in your local `.env.local` (never committed) and in Vercel's
environment variable settings.

## Fonts

Plus Jakarta Sans and Inter are self-hosted as variable font files in `public/fonts/`
and loaded via `next/font/local` in `app/layout.tsx`. This avoids any runtime or
build-time dependency on Google's font CDN, so it works identically in every
environment including offline or restricted-network builds.

## Database schema

Run these two files, in order, in the Supabase SQL editor:

1. `supabase/schema.sql`: tables and Row Level Security policies
2. `supabase/seed.sql`: subjects, Mathematics topics, and one fully working
   placeholder assessment (Cambridge O/L Mathematics, 6 questions) so the
   attempt-taking flow is testable end to end immediately after setup.

The schema covers:

- Subjects, parents, students
- Call requests (a lightweight local record alongside Calendly bookings)
- Assessment engine: one assessment per curriculum, level and subject, reused
  across every student who matches that combination
- Assessment attempts, answers, and computed per-topic gap scores
- Learning plans and monthly progress updates
- Row Level Security policies. See the SECURITY NOTE comment block in
  `schema.sql` above the RLS section: attempts and answers are currently
  readable and writable by anyone who has the attempt's UUID, since no login
  is required to take a diagnostic. Tighten this once a lightweight
  attempt-token or auth model exists, before handling real student data at
  scale.

## Diagnostic assessment flow

- `/diagnostic/start`: pick syllabus, level and subject. Creates an
  `assessment_attempts` row, then redirects to `/diagnostic/[attemptId]`.
- `/diagnostic/[attemptId]`: the real question by question flow
  (`AttemptFlow` component). Each answer is written to `assessment_answers`
  via a Server Action as the student progresses.
- Submitting the last question computes per-topic scores
  (`attempt_topic_scores`) and redirects to `/diagnostic/submitted`.
- `/admin/attempts`: a simple teacher-facing list of attempts.
- `/admin/attempts/[attemptId]`: a topic by topic score breakdown for one attempt.

**The `/admin/*` routes have no authentication yet.** Anyone with the URL can
view them. Do not link to `/admin` from public navigation, and add a real
auth guard (Supabase Auth with a teacher role check, or middleware) before
relying on this for anything sensitive.

To add real questions for another subject or level, follow the pattern in
`supabase/seed.sql`: insert into `assessments` (one row per curriculum, level
and subject combination), then `questions` and `question_options`. The
`is_published` flag on `assessments` controls whether `/diagnostic/start` can
find it.

## Page structure

The marketing site is a single consolidated homepage (`/`) covering the
problem, the five-stage method, a diagnostic preview, a sample learning plan,
subjects, the teacher, parent visibility, location, pricing, and FAQ, each as
its own section with an anchor id. Header navigation links to these anchors
(for example `/#pricing`) instead of separate pages, so browsing the site
never leaves the homepage.

Separate routes exist only where a distinct page is functionally necessary:

- `/book`: Calendly booking
- `/diagnostic/start`, `/diagnostic/[attemptId]`, `/diagnostic/submitted`: the
  assessment flow
- `/plan`: learning plan viewer (still a structural stub, see the TODO
  comment in `app/plan/page.tsx`)
- `/admin/attempts`, `/admin/attempts/[attemptId]`: teacher review
- `/privacy`, `/terms`, `/cancellation-policy`, `/contact`: legal and contact
  pages, linked from the footer

All private and functional routes are excluded from search indexing via
`robots: noindex`.

## Testing locally before deploying

```bash
npm install
npm run build
npm run start
```

Then open http://localhost:3000 and click through the whole homepage, the
booking page, and (if your Supabase schema and seed are applied) the
diagnostic flow at `/diagnostic/start`.

## Deploying to Vercel

1. Push this repository to GitHub (replace the previous repository contents
   entirely with this folder).
2. Import the repository in Vercel.
3. Add the environment variables from `.env.example` in the Vercel project
   settings (Project, Settings, Environment Variables).
4. Deploy.
