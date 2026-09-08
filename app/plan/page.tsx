import type { Metadata } from "next";
import PlanPreview from "@/components/PlanPreview";

export const metadata: Metadata = {
  title: "Your Learning Plan — Atomic Learner",
  robots: { index: false, follow: false },
};

/**
 * Phase 2 TODO: replace the static PlanPreview demo with the parent's real
 * `learning_plans` row (fetched via Supabase server client, gated behind
 * parent auth), including a link to the generated PDF in Supabase Storage.
 */
export default function PlanViewerPage() {
  return (
    <main className="py-16 md:py-20">
      <div className="container-page max-w-[820px]">
        <h1 className="text-[26px] font-extrabold text-navy mb-2">Your Learning Plan</h1>
        <p className="text-muted text-[15px] mb-8">
          Showing a sample plan layout. Once Supabase is connected, this page will show your
          child&apos;s real learning plan here.
        </p>
        <PlanPreview />
      </div>
    </main>
  );
}
