import Link from "next/link";
import { Button } from "@/components/Button";
import PathBuilder from "@/components/PathBuilder";
import DiagnosticDemo from "@/components/DiagnosticDemo";
import PlanPreview from "@/components/PlanPreview";
import PricingExplorer from "@/components/PricingExplorer";
import SectionConnector from "@/components/SectionConnector";
import { processStages, subjects } from "@/lib/content";
import { CheckCircle2, GraduationCap, Clock3, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <div className="container-page grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              Cambridge &amp; Edexcel · O/L &amp; A/L
            </div>
            <h1 className="text-[34px] md:text-[54px] font-extrabold leading-[1.08] text-navy mb-5">
              A Learning Plan Built Around One Student.
            </h1>
            <p className="text-[18px] text-muted max-w-[480px] mb-8">
              Personalized tutoring in Mathematics, ICT and the Sciences — with a diagnostic
              assessment, a structured learning plan, and regular parent progress updates, all
              from one teacher.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-9">
              <Button href="/book">Book a Parent–Teacher Call</Button>
              <Button href="/how-it-works" variant="secondary">See How It Works</Button>
            </div>
            <div className="flex flex-wrap gap-5 text-[13.5px] text-muted">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={15} className="text-teal shrink-0" /> MSc Big Data Analytics
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={15} className="text-teal shrink-0" /> BSc Biotechnology
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 size={15} className="text-amber shrink-0" /> 7+ Years Teaching
              </span>
            </div>
          </div>

          <PathBuilder />
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="border-y border-line py-6">
        <div className="container-page flex flex-wrap justify-center items-center gap-x-9 gap-y-3 text-[13.5px] font-semibold text-muted">
          {["Cambridge", "Edexcel", "O/L", "A/L", "MSc Big Data Analytics", "BSc Biotechnology", "7+ Years Teaching"].map(
            (item, i) => (
              <span key={item} className="flex items-center gap-9">
                {item}
                {i < 6 && <span className="w-px h-4 bg-line hidden sm:block" />}
              </span>
            )
          )}
        </div>
      </div>

      {/* ============ THE PROBLEM ============ */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight">
              More tuition isn&apos;t always the answer. Better direction is.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Attending Classes, Still Struggling",
                body: "New topics keep coming while earlier knowledge gaps stay unresolved.",
              },
              {
                title: "No Clear Starting Point",
                body: "Parents can sense there's a problem but can't pin down exactly where it begins.",
              },
              {
                title: "Generic Lesson Plans",
                body: "A standard class timetable rarely adapts to one student's specific strengths and weaknesses.",
              },
              {
                title: "Little Parent Visibility",
                body: "You know how many classes were attended — but not what academic progress actually happened.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-card border border-line rounded-[18px] p-6">
                <h3 className="text-[16.5px] font-bold text-navy mb-2.5">{card.title}</h3>
                <p className="text-[14.5px] text-muted m-0">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionConnector
        label="Here's the shift"
        text="instead of another generic class, Atomic Learner runs every student through the same five-stage process — starting by finding out exactly where they stand."
      />

      {/* ============ THE METHOD ============ */}
      <section className="py-20 md:py-24" id="how">
        <div className="container-page">
          <div className="max-w-[640px] mb-14">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3.5">
              One Clear Process. Personalized Around the Student.
            </h2>
            <p className="text-[16.5px] text-muted">
              Every student moves through the same five stages — the plan inside each one is
              built specifically for them.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-0.5 bg-line" />
            {processStages.map((stage) => (
              <div key={stage.n} className="relative z-10">
                <div className="w-11 h-11 rounded-full bg-white border-2 border-line flex items-center justify-center font-bold text-muted text-[14px] mb-4.5">
                  {stage.n}
                </div>
                <h3 className="text-[15.5px] font-bold text-navy mb-2">{stage.title}</h3>
                <p className="text-[13.5px] text-muted m-0">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionConnector
        label="Stage 02 in practice"
        text="the diagnostic isn't a generic quiz — it's a short, targeted assessment built for the exact subject and level, designed to reveal where the real gaps are."
      />

      {/* ============ DIAGNOSTIC DEMO ============ */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3.5">
              Don&apos;t Guess Where the Problem Is. Find It.
            </h2>
            <p className="text-[16.5px] text-muted">A short preview of how a diagnostic assessment works.</p>
          </div>
          <DiagnosticDemo />
        </div>
      </section>

      <SectionConnector
        label="Stage 03 in practice"
        text="every diagnostic feeds directly into a personalized learning plan — reviewed by the teacher, then delivered to the parent as a PDF."
      />

      {/* ============ PLAN PREVIEW ============ */}
      <section className="py-20 md:py-24" id="plan">
        <div className="container-page">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3.5">
              Know Exactly What You&apos;re Working On.
            </h2>
            <p className="text-[16.5px] text-muted">
              Every plan is delivered as a PDF after the diagnostic. Here&apos;s an illustrative sample.
            </p>
          </div>
          <PlanPreview />
        </div>
      </section>

      <SectionConnector
        label="Stage 04, always"
        text="one teacher carries the plan into every session — the same person who diagnosed the gaps is the one closing them."
      />

      {/* ============ SUBJECTS ============ */}
      <section className="py-20 md:py-24" id="subjects">
        <div className="container-page">
          <div className="max-w-[640px] mb-12">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight">
              Focused Support Across Key Subjects
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((s) => (
              <Link
                key={s.slug}
                href={`/subjects#${s.slug}`}
                className="bg-card border border-line rounded-[18px] p-5.5 hover:border-blue transition-colors"
              >
                <h3 className="text-[16px] font-bold text-navy mb-2">{s.name}</h3>
                <p className="text-[13px] text-muted m-0 leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ONE TEACHER ============ */}
      <section className="py-6 md:py-10">
        <div className="container-page">
          <div className="bg-navy rounded-[28px] p-10 md:p-14 text-white">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <div className="w-full max-w-[220px] md:max-w-none aspect-square md:aspect-[4/5] rounded-[20px] bg-gradient-to-br from-[#1A3660] to-navy border border-white/10 flex items-center justify-center mx-auto md:mx-0">
                <GraduationCap size={52} className="text-white/30" />
              </div>
              <div>
                <h2 className="text-[24px] md:text-[32px] font-extrabold mb-3.5">
                  No Hand-Offs. No Tutor Roulette.
                </h2>
                <p className="text-white/70 text-[15.5px] mb-6">
                  The teacher who discusses your concerns is the teacher who reviews the
                  diagnostic, creates the plan, teaches the lessons and tracks progress.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Talk", "Assess", "Plan", "Teach", "Review"].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="bg-white/10 px-4 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap">
                        {step}
                      </span>
                      {i < arr.length - 1 && <span className="text-white/35 text-[13px]">→</span>}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5 text-[13.5px] text-white/75 mb-7">
                  <span>MSc Big Data Analytics</span>
                  <span>BSc Biotechnology</span>
                  <span>7+ Years Teaching Experience</span>
                </div>
                <Button href="/teacher" variant="inverse">Meet Your Teacher</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector
        label="Stage 05, monthly"
        text="progress isn't a mystery — parents get a structured update on what's been covered and what's next."
      />

      {/* ============ PARENT VISIBILITY ============ */}
      <section className="py-20 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-extrabold text-navy mb-4 leading-tight">
              You Shouldn&apos;t Have to Guess Whether Progress Is Happening.
            </h2>
            <p className="text-muted text-[15.5px]">
              Parents receive a monthly progress update by WhatsApp, outlining what&apos;s been
              covered, current priorities and what comes next.
            </p>
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-amber bg-amber-soft px-3 py-1.5 rounded-full font-semibold mb-3.5">
              Illustrative Sample
            </span>
            <div className="bg-white border border-line rounded-[20px] overflow-hidden max-w-[400px]">
              <div className="px-6.5 py-5.5 border-b border-line flex justify-between items-start">
                <div>
                  <h4 className="text-[16px] text-navy mb-1 font-bold">Monthly Learning Snapshot</h4>
                  <div className="text-[12.5px] text-muted">Mathematics · Cambridge O/L</div>
                </div>
                <span className="text-[11.5px] font-bold text-blue bg-blue-soft px-2.5 py-1 rounded-lg whitespace-nowrap">
                  August
                </span>
              </div>
              <div className="px-6.5 py-5.5 space-y-4">
                <div>
                  <div className="text-[11.5px] font-bold uppercase tracking-wide text-muted mb-2">
                    Covered This Month
                  </div>
                  {["Algebraic manipulation", "Simultaneous equations", "Functions introduction"].map((i) => (
                    <div key={i} className="text-[14px] pl-4 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[11.5px] font-bold uppercase tracking-wide text-muted mb-2">Current Focus</div>
                  <div className="text-[14px] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue">
                    Graph interpretation
                  </div>
                </div>
                <div>
                  <div className="text-[11.5px] font-bold uppercase tracking-wide text-muted mb-2">
                    Needs More Practice
                  </div>
                  <div className="text-[14px] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber">
                    Word problems
                  </div>
                </div>
                <div>
                  <div className="text-[11.5px] font-bold uppercase tracking-wide text-muted mb-2">Next Month</div>
                  {["Coordinate geometry", "Timed exam questions"].map((i) => (
                    <div key={i} className="text-[14px] pl-4 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section className="py-20 md:py-24" id="location">
        <div className="container-page">
          <div className="max-w-[640px] mx-auto text-center mb-12">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3.5">
              Where Sessions Take Place
            </h2>
            <p className="text-[16.5px] text-muted">
              All sessions currently take place at the private teaching space in Kalubowila.
            </p>
          </div>

          <div className="bg-card border border-line rounded-[24px] p-8 md:p-10 max-w-[640px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-soft text-blue px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-4.5">
              <MapPin size={14} />
              Private Teaching Space — Kalubowila
            </div>
            <h3 className="text-[22px] font-extrabold text-navy mb-3">
              A focused, dedicated space for every session.
            </h3>
            <p className="text-muted text-[15.5px] mb-6">
              All lessons are conducted at the teacher&apos;s private teaching space in Kalubowila —
              a quiet, consistent environment designed for focused, one-to-one learning.
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
              The exact address is shared privately once a consultation is booked or a session is
              confirmed.
            </div>
            <Button href="/book" full>Explore Kalubowila Classes</Button>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="py-20 md:py-24" id="pricing">
        <div className="container-page">
          <div className="max-w-[640px] mb-10">
            <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3.5">
              Transparent Pricing
            </h2>
            <p className="text-[16.5px] text-muted">No hidden fees, no &quot;contact us to find out.&quot;</p>
          </div>
          <PricingExplorer />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="bg-gradient-to-br from-navy to-[#152C52] rounded-[28px] px-8 md:px-10 py-16 md:py-20 text-center text-white">
            <h2 className="text-[26px] md:text-[38px] font-extrabold mb-4">
              Start With a Conversation, Not a Commitment.
            </h2>
            <p className="text-white/70 text-[16px] max-w-[480px] mx-auto mb-8">
              Book a short call with the teacher to discuss your child&apos;s situation, goals and
              the right next step — no purchase required.
            </p>
            <Button href="/book" variant="inverse">Book a Parent–Teacher Call</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
