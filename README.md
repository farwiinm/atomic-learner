# Atomic Learner — Next.js App

Personalized tutoring marketing site + booking + (Phase 2) diagnostic assessment engine.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Supabase (Postgres, Auth) — see `supabase/schema.sql`
- Calendly embed for booking

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
  — required for Phase 2 (diagnostic assessments, learning plans, parent portal).
  The marketing site itself works without these.
- `NEXT_PUBLIC_CALENDLY_URL` — your Calendly scheduling page URL, used on `/book`.
  Without it, the Calendly embed shows a placeholder notice.

## Fonts

This project is set up to use `next/font/google` (Plus Jakarta Sans + Inter), but
`app/layout.tsx` currently uses system font fallbacks because the build sandbox this
was developed in has no internet access to fetch Google Fonts. On Vercel this isn't
an issue — see the comment block at the top of `app/layout.tsx` for the two-line
change to switch back to self-hosted Google Fonts via `next/font/google`.

## Database schema

Run `supabase/schema.sql` in the Supabase SQL editor (or `supabase db push`) to set up:

- Subjects, parents, students
- Call requests (lightweight record alongside Calendly bookings)
- Assessment engine: one assessment per (curriculum, level, subject), reused across students
- Assessment attempts, answers, and computed per-topic gap scores
- Learning plans and monthly progress updates
- Row Level Security policies (parents can only read their own children's data;
  published assessments are publicly readable so a first-time visitor can start
  a diagnostic without an account)

## Routes

Public pages: `/`, `/how-it-works`, `/subjects`, `/pricing`, `/teacher`, `/location`,
`/faq`, `/book`, `/contact`, `/privacy`, `/terms`, `/cancellation-policy`.

Private/functional routes (excluded from search indexing via `robots: noindex`):
`/diagnostic/[attemptId]`, `/diagnostic/submitted`, `/plan`.

These are currently structural stubs with TODO comments marking exactly where to wire
in real Supabase queries — see each file for specifics.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy.
