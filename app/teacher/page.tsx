import { Button } from "@/components/Button";
import PageHero from "@/components/PageHero";
import { GraduationCap } from "lucide-react";

export const metadata = { title: "Meet Your Teacher — Atomic Learner" };

export default function TeacherPage() {
  return (
    <main>
      <PageHero
        eyebrow="One Teacher. One Plan."
        title="Meet Your Teacher"
        description="The same person who discusses your concerns is the one who reviews the diagnostic, builds the plan, teaches every session and tracks progress."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start max-w-[900px]">
          <div className="w-full max-w-[260px] aspect-[4/5] rounded-[20px] bg-gradient-to-br from-navy-2 to-navy border border-line flex items-center justify-center mx-auto md:mx-0">
            <GraduationCap size={56} className="text-white/40" />
          </div>

          <div>
            <h2 className="text-[24px] font-extrabold text-navy mb-4">[TEACHER NAME]</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted mb-6">
              <span>MSc Big Data Analytics</span>
              <span>BSc Biotechnology</span>
              <span>7+ Years Teaching Experience</span>
            </div>
            <div className="space-y-4 text-[15.5px] text-ink">
              <p>
                Every student who works with Atomic Learner works directly and consistently
                with one teacher — from the first conversation through to ongoing progress
                reviews. There is no hand-off to a different tutor and no rotating teaching
                staff.
              </p>
              <p>
                That consistency means the person who identifies a student&apos;s gaps in the
                diagnostic assessment is the same person designing the learning plan, teaching
                every session, and adjusting the approach as the student improves.
              </p>
              <p>
                An analytical, structured approach — shaped by a background in data analytics
                and biotechnology — is paired with a patient, approachable teaching style suited
                to students who are still building confidence in a subject.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/book">Book a Parent–Teacher Call</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
