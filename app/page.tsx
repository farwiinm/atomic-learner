import { Button } from "@/components/Button";
import PricingExplorer from "@/components/PricingExplorer";
import FaqAccordion from "@/components/FaqAccordion";
import FelloPreview from "@/components/FelloPreview";
import { pricing, sessionLength } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

const steps = [
  ["Talk", "A short call about your goals"],
  ["Diagnose", "Find the exact gaps"],
  ["Plan", "A written plan, gaps first"],
  ["Learn", "1:1 sessions with notes and practice"],
  ["Review", "A monthly update for parents"],
];

const subjectList = ["Mathematics", "ICT", "Physics", "Chemistry", "Biology"];

function lkr(n: number) {
  return `LKR ${n.toLocaleString("en-US")}`;
}

export default function Home() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="pt-14 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <div className="container-page grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              Cambridge &amp; Edexcel · O/L &amp; A/L
            </div>
            <h1 className="text-[34px] md:text-[52px] font-extrabold leading-[1.08] text-navy mb-5">
              Maths and Science tutoring, planned around one student.
            </h1>
            <p className="text-[18px] text-muted max-w-[500px] mb-8">
              Atomic Learner is a STEM academy for O/L and A/L students. Every
              student starts with a diagnostic, then learns from a plan built
              around it.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-8">
              <Button href="/book">Book a Free Intro Call</Button>
              <Button href="#pricing" variant="secondary">
                See Pricing
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
              {["1:1 sessions", "Diagnostic first", "Monthly parent updates"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-teal shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-navy text-white rounded-[22px] p-6">
              <div className="flex items-baseline justify-between mb-1">
                <div className="text-[18px] font-bold">Online</div>
                <div className="text-[13px] text-white/70">{sessionLength.online} sessions</div>
              </div>
              <p className="text-[14px] text-white/70 mb-4 m-0">
                Live, one to one. Students in Sri Lanka and abroad.
              </p>
              <div className="flex gap-6 text-[15px]">
                <span>O/L <b>{lkr(pricing.ol)}</b></span>
                <span>A/L <b>{lkr(pricing.al)}</b></span>
              </div>
            </div>
            <div className="bg-white border border-line rounded-[22px] p-6">
              <div className="flex items-baseline justify-between mb-1">
                <div className="text-[18px] font-bold text-navy">In person</div>
                <div className="text-[13px] text-muted">{sessionLength.physical} sessions</div>
              </div>
              <p className="text-[14px] text-muted mb-4 m-0">
                One to one at our teaching space in Kalubowila.
              </p>
              <div className="flex gap-6 text-[15px] text-navy">
                <span>O/L <b>{lkr(pricing.ol)}</b></span>
                <span>A/L <b>{lkr(pricing.al)}</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-16 md:py-20 scroll-mt-20" id="how">
        <div className="container-page">
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-10 max-w-[600px]">
            Five steps, the same for every student.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map(([title, line], i) => (
              <div key={title} className="bg-card border border-line rounded-[18px] p-5">
                <div className="text-[13px] font-bold text-teal mb-2">Step {i + 1}</div>
                <h3 className="text-[17px] font-bold text-navy mb-1.5">{title}</h3>
                <p className="text-[14px] text-muted m-0">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUBJECTS ============ */}
      <section className="py-16 md:py-20 scroll-mt-20" id="subjects">
        <div className="container-page">
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-3">
            STEM subjects, O/L and A/L.
          </h2>
          <p className="text-[16.5px] text-muted mb-8">Cambridge and Edexcel.</p>
          <div className="flex flex-wrap gap-3">
            {subjectList.map((s) => (
              <span
                key={s}
                className="bg-card border border-line rounded-full px-6 py-3 text-[16px] font-semibold text-navy"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARNING PLATFORM ============ */}
      <section className="py-16 md:py-20 scroll-mt-20" id="platform">
        <div className="container-page grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <div className="text-[13.5px] font-semibold text-blue mb-3">Fello Learner</div>
            <h2 className="text-[26px] md:text-[34px] font-extrabold text-navy leading-tight mb-4">
              Notes and practice between sessions.
            </h2>
            <p className="text-[16.5px] text-muted mb-6 max-w-[460px]">
              Our learning platform gives every topic a short note, then practice
              questions with worked solutions. It is being built topic by topic,
              starting with Maths.
            </p>
            <Button href="https://fellolearner.com" variant="secondary">
              Visit Fello Learner
            </Button>
          </div>
          <FelloPreview />
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="py-16 md:py-20 scroll-mt-20" id="pricing">
        <div className="container-page">
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-8">
            Pricing, per session.
          </h2>
          <PricingExplorer />
          <p className="text-[14.5px] text-muted mt-8 max-w-[620px]">
            In-person sessions are held in Kalubowila, close to Dehiwala, Mount
            Lavinia, Wellawatte and Nugegoda. The address is shared when you
            book.
          </p>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="py-6 md:py-10 scroll-mt-20" id="about">
        <div className="container-page">
          <div className="bg-navy rounded-[28px] p-8 md:p-12 text-white">
            <div className="max-w-[620px]">
              <h2 className="text-[24px] md:text-[32px] font-extrabold mb-4">
                A data-driven approach to teaching STEM.
              </h2>
              <p className="text-white/75 text-[15.5px] mb-7">
                Every plan starts from evidence about what a student actually
                knows, then adjusts as they improve. Teaching is led by Ms.
                Fathima.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["MSc Big Data Analytics", "BSc Biotechnology", "7+ years teaching"].map((c) => (
                  <span key={c} className="bg-white/10 px-4 py-2 rounded-full text-[13.5px] font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-20 scroll-mt-20" id="faq">
        <div className="container-page">
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-navy leading-tight mb-8">
            Questions parents ask.
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="bg-gradient-to-br from-navy to-[#152C52] rounded-[28px] px-8 md:px-10 py-14 md:py-16 text-center text-white">
            <h2 className="text-[26px] md:text-[36px] font-extrabold mb-3">
              Start with a short call.
            </h2>
            <p className="text-white/70 text-[16px] max-w-[440px] mx-auto mb-7">
              Tell us about your child and the exam. No commitment.
            </p>
            <Button href="/book" variant="inverse">
              Book a Free Intro Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
