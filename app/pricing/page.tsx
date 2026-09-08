import PageHero from "@/components/PageHero";
import PricingExplorer from "@/components/PricingExplorer";

export const metadata = { title: "Pricing — Atomic Learner" };

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="Transparent Pricing"
        description="No hidden fees, no 'contact us to find out.' Standard session rates by subject and level, shown upfront."
      />
      <section className="py-16 md:py-20">
        <div className="container-page">
          <PricingExplorer />
          <p className="text-[13.5px] text-muted mt-8 max-w-[560px]">
            Rates reflect a standard weekly session at the private teaching space in Kalubowila.
            Frequency and any additional sessions are agreed with the teacher based on the
            student&apos;s learning plan.
          </p>
        </div>
      </section>
    </main>
  );
}
