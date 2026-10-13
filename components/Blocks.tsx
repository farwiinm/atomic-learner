import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import FaqAccordion from "./FaqAccordion";
import type { FaqItem } from "@/lib/faq";

export function Hero({
  eyebrow,
  h1,
  children,
  aside,
}: {
  eyebrow: string;
  h1: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
      <div className={`container-page grid gap-10 md:gap-14 items-center ${aside ? "md:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div>
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            {eyebrow}
          </div>
          <h1 className="text-[30px] md:text-[46px] font-extrabold leading-[1.1] text-navy mb-5">{h1}</h1>
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="py-12 md:py-16 scroll-mt-20">
      <div className="container-page">
        <h2 className="text-[24px] md:text-[34px] font-extrabold text-navy leading-tight mb-3 max-w-[720px]">{title}</h2>
        {intro && <p className="text-[16.5px] text-muted mb-8 max-w-[680px]">{intro}</p>}
        {!intro && <div className="mb-6" />}
        {children}
      </div>
    </section>
  );
}

export function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 items-start text-[15.5px] text-ink">
          <CheckCircle2 size={19} className="text-teal shrink-0 mt-0.5" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-[16.5px] text-muted leading-relaxed max-w-[720px]">{children}</div>;
}

export const STEPS: [string, string][] = [
  ["Fill in the form", "Tell us the subject, grade and class type, then book a trial time."],
  ["Attend the free trial class", "Meet the teacher and try a real lesson, online or in person."],
  ["Take a short diagnostic", "See where your child stands and agree a class plan."],
  ["Start regular classes", "Learn one to one, with a monthly progress report for a parent."],
];

export function Steps() {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {STEPS.map(([title, line], i) => (
        <li key={title} className="bg-card border border-line rounded-[18px] p-5">
          <div className="text-[13px] font-bold text-teal mb-2">Step {i + 1}</div>
          <h3 className="text-[16.5px] font-bold text-navy mb-1.5">{title}</h3>
          <p className="text-[14px] text-muted m-0">{line}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqSection({ items, title = "Questions parents ask" }: { items: FaqItem[]; title?: string }) {
  return (
    <Section id="faq" title={title}>
      <FaqAccordion items={items} />
    </Section>
  );
}

export function FinalCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <div className="bg-gradient-to-br from-navy to-[#152C52] rounded-[28px] px-8 md:px-10 py-14 md:py-16 text-center text-white">
          <h2 className="text-[26px] md:text-[36px] font-extrabold mb-3">{title}</h2>
          <p className="text-white/70 text-[16px] max-w-[460px] mx-auto mb-7">{text}</p>
          <Button href="/book-free-trial" variant="inverse">
            Book free trial
          </Button>
        </div>
      </div>
    </section>
  );
}
