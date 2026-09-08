import { Button } from "@/components/Button";
import PageHero from "@/components/PageHero";
import { subjects } from "@/lib/content";

export const metadata = { title: "Subjects — Atomic Learner" };

export default function SubjectsPage() {
  return (
    <main>
      <PageHero
        title="Focused Support Across Key Subjects"
        description="Cambridge and Edexcel, O/L and A/L — Mathematics, ICT and the Sciences, each approached with the same structured, diagnostic-first method."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid sm:grid-cols-2 gap-6">
          {subjects.map((s) => (
            <div key={s.slug} id={s.slug} className="bg-card border border-line rounded-[20px] p-7 scroll-mt-24">
              <h2 className="text-[20px] font-extrabold text-navy mb-2.5">{s.name}</h2>
              <p className="text-[14.5px] text-muted mb-2">Cambridge · Edexcel · O/L · A/L</p>
              <p className="text-[15px] text-ink mb-6">{s.blurb}</p>
              <Button href="/book" variant="secondary" className="!py-2.5 !px-5 !text-[14px]">
                Discuss {s.name}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
