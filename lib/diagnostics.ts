import { createClient } from "@/lib/supabase/server";
import type { Assessment, AssessmentAttempt, TopicScore } from "@/lib/types";

/**
 * Fetch a published assessment by curriculum/level/subject slug, including
 * its full question set (with options), ordered for display.
 */
export async function getAssessmentBySlug(
  curriculum: string,
  level: string,
  subjectSlug: string
): Promise<Assessment | null> {
  const supabase = await createClient();

  const { data: subject } = await supabase
    .from("subjects")
    .select("id, slug, name")
    .eq("slug", subjectSlug)
    .single();

  if (!subject) return null;

  const { data: assessment, error } = await supabase
    .from("assessments")
    .select(
      `id, curriculum, level, subject_id, title, is_published,
       subjects ( id, slug, name ),
       questions (
         id, assessment_id, topic_id, difficulty, prompt, order_index,
         topics ( id, subject_id, name ),
         question_options ( id, question_id, label, is_correct, order_index )
       )`
    )
    .eq("curriculum", curriculum)
    .eq("level", level)
    .eq("subject_id", subject.id)
    .eq("is_published", true)
    .single();

  if (error || !assessment) return null;

  // Sort questions and options for stable display order
  const sorted = {
    ...assessment,
    questions: [...(assessment.questions ?? [])]
      .sort((a, b) => a.order_index - b.order_index)
      .map((q) => ({
        ...q,
        question_options: [...(q.question_options ?? [])].sort(
          (a, b) => a.order_index - b.order_index
        ),
      })),
  };

  return sorted as unknown as Assessment;
}

/**
 * Start a new attempt for an assessment. Returns the new attempt id.
 * `contactEmail` is optional. A visitor can start a diagnostic before
 * an account/student record exists.
 */
export async function createAttempt(
  assessmentId: string,
  contactEmail?: string
): Promise<string | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("assessment_attempts")
    .insert({
      assessment_id: assessmentId,
      contact_email: contactEmail ?? null,
      status: "in_progress",
    })
    .select("id")
    .single();

  if (error || !data) return null;
  return data.id;
}

export async function getAttempt(attemptId: string): Promise<AssessmentAttempt | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("assessment_attempts")
    .select("*")
    .eq("id", attemptId)
    .single();

  if (error || !data) return null;
  return data as AssessmentAttempt;
}

/**
 * Record a single answer for an attempt. Upserts so a student can change
 * their answer while still in progress.
 */
export async function recordAnswer(
  attemptId: string,
  questionId: string,
  selectedOptionId: string,
  isCorrect: boolean
) {
  const supabase = await createClient();

  await supabase
    .from("assessment_answers")
    .upsert(
      {
        attempt_id: attemptId,
        question_id: questionId,
        selected_option_id: selectedOptionId,
        is_correct: isCorrect,
      },
      { onConflict: "attempt_id,question_id" }
    );
}

/**
 * Finalize an attempt: compute per-topic scores from the recorded answers,
 * store them, and mark the attempt as submitted.
 */
export async function submitAttempt(attemptId: string, assessment: Assessment) {
  const supabase = await createClient();

  const { data: answers } = await supabase
    .from("assessment_answers")
    .select("question_id, is_correct")
    .eq("attempt_id", attemptId);

  const byTopic = new Map<string, { correct: number; total: number }>();

  for (const q of assessment.questions) {
    const answer = answers?.find((a) => a.question_id === q.id);
    const entry = byTopic.get(q.topic_id) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (answer?.is_correct) entry.correct += 1;
    byTopic.set(q.topic_id, entry);
  }

  const rows = Array.from(byTopic.entries()).map(([topic_id, { correct, total }]) => ({
    attempt_id: attemptId,
    topic_id,
    correct_count: correct,
    total_count: total,
  }));

  if (rows.length > 0) {
    await supabase
      .from("attempt_topic_scores")
      .upsert(rows, { onConflict: "attempt_id,topic_id" });
  }

  await supabase
    .from("assessment_attempts")
    .update({ status: "submitted", submitted_at: new Date().toISOString() })
    .eq("id", attemptId);
}

export async function getTopicScores(attemptId: string): Promise<TopicScore[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("attempt_topic_scores")
    .select("topic_id, correct_count, total_count, topics ( name )")
    .eq("attempt_id", attemptId);

  if (error || !data) return [];

  return data.map((row) => ({
    topic_id: row.topic_id,
    // topics is joined as an object via the FK relationship
    topic_name: (row as unknown as { topics: { name: string } }).topics?.name ?? "Unknown topic",
    correct_count: row.correct_count,
    total_count: row.total_count,
  }));
}
