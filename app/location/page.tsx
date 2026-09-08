import { Button } from "@/components/Button";
import PageHero from "@/components/PageHero";
import { CheckCircle2, MapPin } from "lucide-react";

export const metadata = { title: "Location — Atomic Learner" };

export default function LocationPage() {
  return (
    <main>
      <PageHero
        title="Where Sessions Take Place"
        description="All sessions currently take place at the private teaching space in Kalubowila."
      />

      <section className="py-16 md:py-20">
        <div className="container-page max-w-[640px]">
          <div className="bg-card border border-line rounded-[24px] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 bg-blue-soft text-blue px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-4.5">
              <MapPin size={14} />
              Private Teaching Space — Kalubowila
            </div>
            <h2 className="text-[22px] font-extrabold text-navy mb-3">
              A focused, dedicated space for every session.
            </h2>
            <p className="text-muted text-[15.5px] mb-6">
              All lessons are conducted at the teacher&apos;s private teaching space in
              Kalubowila — a quiet, consistent environment designed for focused, one-to-one
              learning.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                "A quiet, distraction-free environment built for learning",
                "Consistent study location, every session",
                "Straightforward for families comfortable travelling to Kalubowila",
              ].map((b) => (
                <li key={b} className="flex gap-2.5 items-start text-[14.5px]">
                  <CheckCircle2 size={18} className="text-teal shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="bg-bg rounded-xl px-4 py-3.5 text-[13.5px] text-muted mb-6">
              The exact address is shared privately once a consultation is booked or a session
              is confirmed.
            </div>
            <Button href="/book" full>Explore Kalubowila Classes</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
