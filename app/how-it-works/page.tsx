import { Button } from "@/components/Button";
import PageHero from "@/components/PageHero";
import { processStages } from "@/lib/content";

export const metadata = { title: "How It Works — Atomic Learner" };

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Atomic Learner Method"
        title="One Clear Process. Personalized Around the Student."
        description="Every student moves through the same five stages. What happens inside each one is built specifically around them."
      />

      <section className="py-16 md:py-20">
        <div className="container-page max-w-[820px]">
          <div className="space-y-14">
            {processStages.map((stage, i) => (
              <div key={stage.n} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-teal text-teal flex items-center justify-center font-bold text-[14px]">
                    {stage.n}
                  </div>
                  {i < processStages.length - 1 && <div className="w-px flex-1 bg-line mt-3" />}
                </div>
                <div className="pb-2">
                  <h2 className="text-[21px] font-extrabold text-navy mb-2.5">{stage.title}</h2>
                  <p className="text-[15.5px] text-muted max-w-[520px]">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-navy rounded-[24px] p-9 md:p-11 text-white text-center">
            <h3 className="text-[22px] md:text-[26px] font-extrabold mb-3">
              Ready to start with a conversation?
            </h3>
            <p className="text-white/70 text-[15px] mb-7 max-w-[440px] mx-auto">
              No purchase is required before Stage 01 — Talk.
            </p>
            <Button href="/book" variant="inverse">Book a Parent–Teacher Call</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
