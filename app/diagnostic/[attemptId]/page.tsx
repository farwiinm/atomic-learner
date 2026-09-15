import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAttempt, getAssessmentBySlug } from "@/lib/diagnostics";
import AttemptFlow from "@/components/AttemptFlow";

export const metadata: Metadata = {
  title: "Diagnostic Assessment | Atomic Learner",
  robots: { index: false, follow: false },
};

export default async function DiagnosticAttemptPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;

  const attempt = await getAttempt(attemptId);
  if (!attempt) notFound();

  // The attempt only stores assessment_id. Look the assessment back up by
  // its curriculum/level/subject to get the full question tree with a
  // stable, cache-friendly query shape.
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const { data: assessmentRow } = await supabase
    .from("assessments")
    .select("curriculum, level, subjects ( slug )")
    .eq("id", attempt.assessment_id)
    .single();

  if (!assessmentRow) notFound();

  const subjectSlug = (assessmentRow as unknown as { subjects: { slug: string } }).subjects.slug;
  const assessment = await getAssessmentBySlug(
    assessmentRow.curriculum,
    assessmentRow.level,
    subjectSlug
  );

  if (!assessment || assessment.questions.length === 0) notFound();

  if (attempt.status !== "in_progress") {
    return (
      <main className="py-20">
        <div className="container-page max-w-[560px] text-center">
          <h1 className="text-[26px] font-extrabold text-navy mb-4">
            This assessment has already been submitted
          </h1>
          <p className="text-muted text-[15.5px]">
            The teacher will review the results and be in touch with next steps.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16 md:py-20">
      <div className="container-page max-w-[820px]">
        <AttemptFlow
          attemptId={attempt.id}
          assessment={assessment}
          curriculum={assessmentRow.curriculum}
          level={assessmentRow.level}
          subjectSlug={subjectSlug}
        />
      </div>
    </main>
  );
}
