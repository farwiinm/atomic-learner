import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { createAssessmentAction } from "@/app/portal/(authenticated)/assessments/actions";

const curricula = [
  { value: "cambridge", label: "Cambridge" },
  { value: "edexcel", label: "Edexcel" },
];
const levels = [
  { value: "ol", label: "O/L" },
  { value: "al", label: "A/L" },
];
const subjects = [
  { value: "mathematics", label: "Mathematics" },
  { value: "ict", label: "ICT" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
];

const errorMessages: Record<string, string> = {
  "invalid-subject":
    "That subject could not be found. Check the subjects table in Supabase.",
  "create-failed":
    "Could not create the assessment. It may already exist for this curriculum, level and subject combination.",
};

export default async function NewAssessmentPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] : null;

  return (
    <div className="max-w-[560px]">
      <Link
        href="/portal"
        className="text-[13.5px] text-muted mb-6 inline-block"
      >
        ← Back to assessments
      </Link>
      <h1 className="text-[22px] font-extrabold text-navy mb-6">
        New Assessment
      </h1>

      {message && (
        <div className="flex gap-3 items-start bg-amber-soft border border-amber/30 rounded-xl px-4 py-3.5 mb-6 text-[14px] text-ink">
          <AlertCircle size={18} className="text-amber shrink-0 mt-0.5" />
          <p className="m-0">{message}</p>
        </div>
      )}

      <form
        action={createAssessmentAction}
        className="space-y-6 bg-white border border-line rounded-2xl p-7"
      >
        <div>
          <label className="block text-[13.5px] font-semibold text-navy mb-2">
            Curriculum
          </label>
          <select
            name="curriculum"
            required
            className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            {curricula.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[13.5px] font-semibold text-navy mb-2">
            Level
          </label>
          <select
            name="level"
            required
            className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            {levels.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[13.5px] font-semibold text-navy mb-2">
            Subject
          </label>
          <select
            name="subject"
            required
            className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[13.5px] font-semibold text-navy mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Cambridge O/L Mathematics, Diagnostic"
            className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-navy text-white py-3.5 rounded-full font-semibold text-[15px]"
        >
          Create Assessment
        </button>
        <p className="text-[13px] text-muted">
          The assessment starts as a draft. You will add questions next, then
          publish it when ready.
        </p>
      </form>
    </div>
  );
}
