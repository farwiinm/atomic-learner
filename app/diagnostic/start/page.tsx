import type { Metadata } from "next";
import StartAssessmentForm from "@/components/StartAssessmentForm";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Diagnostic Assessment | Atomic Learner",
  robots: { index: false, follow: false },
};

const errorMessages: Record<string, string> = {
  "not-available":
    "That combination of syllabus, level and subject does not have a published assessment yet. Try a different combination, or contact us to set one up.",
  "could-not-start":
    "Something went wrong starting the assessment. Please try again in a moment.",
  "not-configured":
    "The assessment database isn't connected yet. Add your Supabase keys to .env.local and run the schema and seed SQL files, then try again.",
};

export default async function StartDiagnosticPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] : null;

  return (
    <main className="py-16 md:py-20">
      <div className="container-page max-w-[560px]">
        <h1 className="text-[28px] font-extrabold text-navy mb-3">Start Your Diagnostic Assessment</h1>
        <p className="text-muted text-[15.5px] mb-9">
          Choose the syllabus, level and subject to begin. This normally happens after a
          Parent-Teacher call, but you&apos;re welcome to preview it here.
        </p>
        {message && (
          <div className="flex gap-3 items-start bg-amber-soft border border-amber/30 rounded-xl px-4 py-3.5 mb-7 text-[14px] text-ink">
            <AlertCircle size={18} className="text-amber shrink-0 mt-0.5" />
            <p className="m-0">{message}</p>
          </div>
        )}
        <StartAssessmentForm />
      </div>
    </main>
  );
}
