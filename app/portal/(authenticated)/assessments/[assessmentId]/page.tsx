import Link from "next/link";
import { Copy, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import {
  addQuestionAction,
  deleteQuestionAction,
  togglePublishAction,
  createTopicAction,
  generateStudentLinkAction,
} from "@/app/portal/(authenticated)/assessments/actions";

export default async function AssessmentDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>;
  searchParams: Promise<{ newLink?: string }>;
}) {
  const { assessmentId } = await params;
  const { newLink } = await searchParams;

  const supabase = await createClient();

  const { data: assessment } = await supabase
    .from("assessments")
    .select(
      `id, curriculum, level, title, is_published, subject_id,
       subjects ( id, name ),
       questions (
         id, prompt, difficulty, order_index, topic_id,
         topics ( name ),
         question_options ( id, label, is_correct, order_index )
       )`,
    )
    .eq("id", assessmentId)
    .single();

  if (!assessment) {
    return (
      <div>
        <p className="text-muted">Assessment not found.</p>
        <Link href="/portal" className="text-blue font-semibold text-[14px]">
          Back to assessments
        </Link>
      </div>
    );
  }

  const { data: topics } = await supabase
    .from("topics")
    .select("id, name")
    .eq("subject_id", assessment.subject_id)
    .order("name");

  const questions = [...(assessment.questions ?? [])].sort(
    (a, b) => a.order_index - b.order_index,
  );
  const subject = assessment.subjects as unknown as {
    id: string;
    name: string;
  } | null;

  const studentUrl = newLink
    ? `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/diagnostic/${newLink}`
    : null;

  return (
    <div>
      <Link
        href="/portal"
        className="text-[13.5px] text-muted mb-4 inline-block"
      >
        ← Back to assessments
      </Link>

      <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-[22px] font-extrabold text-navy mb-1">
            {assessment.title}
          </h1>
          <p className="text-[14px] text-muted capitalize">
            {assessment.curriculum} · {assessment.level.toUpperCase()} ·{" "}
            {subject?.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1.5 rounded-full text-[12.5px] font-semibold ${
              assessment.is_published
                ? "bg-teal-soft text-teal"
                : "bg-amber-soft text-amber"
            }`}
          >
            {assessment.is_published ? "Published" : "Draft"}
          </span>
          <form
            action={async () => {
              "use server";
              await togglePublishAction(assessment.id, assessment.is_published);
            }}
          >
            <button
              type="submit"
              className="border border-line px-4 py-2 rounded-full text-[13.5px] font-semibold text-navy"
            >
              {assessment.is_published ? "Unpublish" : "Publish"}
            </button>
          </form>
        </div>
      </div>

      {/* Generate student link */}
      <div className="bg-white border border-line rounded-2xl p-6 mb-8">
        <h2 className="text-[15px] font-bold text-navy mb-3">
          Generate Student Link
        </h2>
        <p className="text-[13.5px] text-muted mb-4">
          Creates a one-time attempt link you can send directly to a student or
          parent. No login required on their end.
        </p>
        {studentUrl && (
          <div className="flex items-center gap-2 bg-teal-soft border border-teal/30 rounded-xl px-4 py-3 mb-4 text-[13.5px]">
            <code className="flex-1 break-all">{studentUrl}</code>
            <Copy size={16} className="shrink-0 text-teal" />
          </div>
        )}
        <form
          action={generateStudentLinkAction}
          className="flex gap-3 flex-wrap"
        >
          <input type="hidden" name="assessmentId" value={assessment.id} />
          <input
            type="email"
            name="email"
            placeholder="Student or parent email (optional)"
            className="flex-1 min-w-[220px] border border-line rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue"
          />
          <button
            type="submit"
            className="bg-navy text-white px-5 py-2.5 rounded-full text-[14px] font-semibold"
          >
            Generate Link
          </button>
        </form>
        {!assessment.is_published && (
          <p className="text-[13px] text-amber mt-3">
            This assessment is still a draft. Publish it before sending links to
            students, or the link will show as unavailable.
          </p>
        )}
      </div>

      {/* Questions list */}
      <div className="bg-white border border-line rounded-2xl p-6 mb-8">
        <h2 className="text-[15px] font-bold text-navy mb-4">
          Questions ({questions.length})
        </h2>
        {questions.length === 0 && (
          <p className="text-muted text-[14px] mb-2">
            No questions yet. Add the first one below.
          </p>
        )}
        <div className="space-y-4">
          {questions.map((q, i) => {
            const topic = q.topics as unknown as { name: string } | null;
            const options = [...(q.question_options ?? [])].sort(
              (a, b) => a.order_index - b.order_index,
            );
            return (
              <div key={q.id} className="border border-line rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[12.5px] text-muted">
                    Q{i + 1} · {topic?.name ?? "No topic"} · {q.difficulty}
                  </div>
                  <form
                    action={async () => {
                      "use server";
                      await deleteQuestionAction(q.id, assessment.id);
                    }}
                  >
                    <button type="submit" aria-label="Delete question">
                      <Trash2
                        size={15}
                        className="text-muted hover:text-red-500"
                      />
                    </button>
                  </form>
                </div>
                <p className="text-[14.5px] font-medium mb-2">{q.prompt}</p>
                <ul className="text-[13.5px] text-muted space-y-1">
                  {options.map((opt) => (
                    <li
                      key={opt.id}
                      className={
                        opt.is_correct ? "text-teal font-semibold" : ""
                      }
                    >
                      {opt.is_correct ? "✓ " : "• "}
                      {opt.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add question form */}
      <div className="bg-white border border-line rounded-2xl p-6">
        <h2 className="text-[15px] font-bold text-navy mb-4">Add a Question</h2>
        <form action={addQuestionAction} className="space-y-4">
          <input type="hidden" name="assessmentId" value={assessment.id} />
          <input type="hidden" name="orderIndex" value={questions.length + 1} />

          <div>
            <label className="block text-[13px] font-semibold text-navy mb-1.5">
              Topic
            </label>
            <select
              name="topicId"
              required
              className="w-full border border-line rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue"
            >
              {(topics ?? []).map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            {(!topics || topics.length === 0) && (
              <p className="text-[12.5px] text-amber mt-1.5">
                No topics exist for this subject yet. Add one in Supabase
                (table: topics) before adding questions.
              </p>
            )}
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-navy mb-1.5">
              Difficulty
            </label>
            <select
              name="difficulty"
              required
              defaultValue="foundation"
              className="w-full border border-line rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue"
            >
              <option value="foundation">Foundation</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-navy mb-1.5">
              Question
            </label>
            <textarea
              name="prompt"
              required
              rows={2}
              className="w-full border border-line rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue resize-none"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-navy mb-1.5">
              Answer options
            </label>
            <p className="text-[12.5px] text-muted mb-2.5">
              Select the radio button next to the correct option.
            </p>
            <div className="space-y-2.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="correctIndex"
                    value={i}
                    required={i === 0}
                  />
                  <input
                    type="text"
                    name="optionLabel"
                    placeholder={`Option ${i + 1}`}
                    className="flex-1 border border-line rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-navy text-white px-5 py-2.5 rounded-full text-[14px] font-semibold"
          >
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
}
