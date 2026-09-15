import { notFound } from "next/navigation";
import { getAttempt, getTopicScores } from "@/lib/diagnostics";
import { createClient } from "@/lib/supabase/server";
import ReportSummaryBlock from "@/components/ReportSummaryBlock";

export default async function PortalAttemptReviewPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;

  const attempt = await getAttempt(attemptId);
  if (!attempt) notFound();

  const topicScores = await getTopicScores(attemptId);

  const supabase = await createClient();
  const { data: meta } = await supabase
    .from("assessments")
    .select("title, curriculum, level, subjects ( name )")
    .eq("id", attempt.assessment_id)
    .single();

  const subjectMeta = meta as unknown as {
    title: string;
    curriculum: string;
    level: string;
    subjects: { name: string };
  } | null;

  return (
    <div className="max-w-[760px]">
      <h1 className="text-[22px] font-extrabold text-navy mb-1">
        {subjectMeta?.title ?? "Diagnostic Attempt"}
      </h1>
      <p className="text-[14px] text-muted mb-1">
        {subjectMeta?.curriculum?.toUpperCase()} ·{" "}
        {subjectMeta?.level?.toUpperCase()} · {subjectMeta?.subjects?.name}
      </p>
      <p className="text-[13.5px] text-muted mb-8">
        Contact: {attempt.contact_email ?? "Not provided"} · Status:{" "}
        {attempt.status} · Submitted:{" "}
        {attempt.submitted_at
          ? new Date(attempt.submitted_at).toLocaleString()
          : "Not yet"}
      </p>

      <div className="bg-white border border-line rounded-2xl p-7 mb-8">
        <h2 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-5">
          Topic Breakdown
        </h2>
        {topicScores.length === 0 && (
          <p className="text-muted text-[14.5px]">
            No scored answers yet for this attempt.
          </p>
        )}
        <div className="space-y-4">
          {topicScores.map((t) => {
            const pct =
              t.total_count > 0
                ? Math.round((t.correct_count / t.total_count) * 100)
                : 0;
            return (
              <div key={t.topic_id}>
                <div className="flex justify-between text-[14.5px] mb-1.5">
                  <span className="font-medium">{t.topic_name}</span>
                  <span className="text-muted">
                    {t.correct_count} / {t.total_count} correct
                  </span>
                </div>
                <div className="h-2 bg-line rounded-full overflow-hidden">
                  <div
                    className={`h-full ${pct >= 70 ? "bg-teal" : pct >= 40 ? "bg-amber" : "bg-red-400"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ReportSummaryBlock
        title={subjectMeta?.title ?? "Diagnostic Attempt"}
        curriculum={subjectMeta?.curriculum ?? ""}
        level={subjectMeta?.level ?? ""}
        subject={subjectMeta?.subjects?.name ?? ""}
        contactEmail={attempt.contact_email}
        submittedAt={attempt.submitted_at}
        topicScores={topicScores}
      />
    </div>
  );
}
