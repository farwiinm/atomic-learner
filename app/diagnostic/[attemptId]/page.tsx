import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Assessment — Atomic Learner",
  robots: { index: false, follow: false },
};

/**
 * Phase 2 TODO:
 * - Look up the `assessment_attempts` row for `attemptId` via the Supabase
 *   server client, joined to its `assessments` → `questions` → `question_options`.
 * - Render the question flow (reuse the visual language from
 *   components/DiagnosticDemo.tsx, but wired to real data).
 * - On each answer, insert into `assessment_answers`.
 * - On completion, compute `attempt_topic_scores`, mark the attempt
 *   `submitted`, and redirect to /diagnostic/submitted.
 */
export default async function DiagnosticAttemptPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;

  return (
    <main className="py-20">
      <div className="container-page max-w-[640px] text-center">
        <h1 className="text-[26px] font-extrabold text-navy mb-4">Diagnostic Assessment</h1>
        <p className="text-muted text-[15.5px]">
          This is a placeholder for attempt <code className="font-mono text-[13.5px]">{attemptId}</code>.
          Connect Supabase to load real assessment questions here.
        </p>
      </div>
    </main>
  );
}
