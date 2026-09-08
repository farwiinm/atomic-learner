import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";

export const metadata = { title: "FAQs — Atomic Learner" };

export default function FaqPage() {
  return (
    <main>
      <PageHero title="Frequently Asked Questions" />
      <section className="py-16 md:py-20">
        <div className="container-page">
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
