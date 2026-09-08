import PageHero from "@/components/PageHero";

export const metadata = { title: "Cancellation & Rescheduling Policy — Atomic Learner" };

export default function CancellationPolicyPage() {
  return (
    <main>
      <PageHero title="Cancellation & Rescheduling Policy" />
      <section className="py-16 md:py-20">
        <div className="container-page max-w-[720px] text-[15px] text-muted leading-relaxed space-y-4">
          <p>
            This page is a placeholder. Replace this content with Atomic Learner&apos;s actual
            cancellation and rescheduling policy — for example, how much notice is required to
            reschedule a session, and how cancellations are handled.
          </p>
        </div>
      </section>
    </main>
  );
}
