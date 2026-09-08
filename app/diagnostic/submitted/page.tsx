import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnostic Submitted — Atomic Learner",
  robots: { index: false, follow: false },
};

export default function DiagnosticSubmittedPage() {
  return (
    <main className="py-20">
      <div className="container-page max-w-[560px] text-center">
        <div className="w-14 h-14 rounded-full bg-teal-soft flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-teal" />
        </div>
        <h1 className="text-[26px] font-extrabold text-navy mb-4">Diagnostic Submitted</h1>
        <p className="text-muted text-[15.5px]">
          Thank you for completing the assessment. The teacher will review the results and
          prepare a personalized learning plan — you&apos;ll be notified once it&apos;s ready.
        </p>
      </div>
    </main>
  );
}
