import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FaqSection, FinalCta, Hero, Prose, Section, Ticks } from "@/components/Blocks";
import PriceTable from "@/components/PriceTable";
import type { FaqItem } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cambridge O Level, IGCSE & A Level Tuition | Tandem Learner" },
  description:
    "Cambridge O Level, IGCSE and A Level tuition in English. One-to-one online or at Kalubowila. Book a free trial class.",
  alternates: { canonical: `${SITE_URL}/cambridge-tuition-colombo` },
};

const faqs: FaqItem[] = [
  {
    q: "Which Cambridge qualifications do you teach?",
    a: "Cambridge O Level, Cambridge IGCSE and Cambridge A Level, for Grades 10 to 13, in Mathematics, ICT, Computer Science, Physics, Chemistry and Biology.",
  },
  {
    q: "What is the difference between London O/L and Cambridge O Level?",
    a: "London O/L is the local name for the Edexcel International GCSE. Cambridge O Level is a separate qualification from Cambridge. They cover similar subjects, but the content, paper structure and mark schemes differ, so a student should prepare for the board they will sit.",
  },
  {
    q: "How much do Cambridge classes cost?",
    a: "Grade 10 and 11: LKR 2,000 online and LKR 2,500 in person. Grade 12 and 13: LKR 3,000 online and LKR 3,500 in person. Prices are per session, and the first trial class is free.",
  },
];

export default function CambridgePage() {
  return (
    <main>
      <Hero eyebrow="Cambridge O Level, IGCSE and A Level" h1="Cambridge Tuition in Sri Lanka: O Level, IGCSE and A Level" aside={<PriceTable />}>
        <p className="text-[18px] text-muted max-w-[520px] mb-7">
          Tandem Learner runs one-to-one Cambridge tuition classes in Sri Lanka for Grades 10 to 13, taught in English,
          online or in person in Kalubowila. Your first trial class is free.
        </p>
        <Button href="/book-free-trial">Book free trial</Button>
      </Hero>

      <Section id="what-is-cambridge" title="Cambridge O Level, IGCSE and A Level">
        <Prose>
          <p>
            Cambridge qualifications are set by Cambridge University Press &amp; Assessment, often shortened to CIE in
            Sri Lanka. Students usually sit O Level or IGCSE in Grades 10 and 11, and AS and A Level in Grades 12 and 13.
          </p>
          <p>
            Cambridge papers have their own structure, command words and mark schemes. Practising with the right style of
            question matters as much as knowing the content, and it is where a focused class plan helps most.
          </p>
        </Prose>
      </Section>

      <Section id="subjects" title="Cambridge subjects we teach">
        <div className="max-w-[760px] space-y-5">
          <Ticks
            items={[
              "Mathematics",
              "Physics",
              "Chemistry (Cambridge O Level 5070 and A Level)",
              "Biology (Cambridge O Level 5090 and A Level)",
              "ICT (Cambridge IGCSE 0417)",
              "Computer Science (Cambridge IGCSE 0478 and O Level 2210)",
            ]}
          />
          <p className="text-[14.5px] text-muted m-0">
            ICT and Computer Science are separate subjects with separate syllabuses. We confirm your child&apos;s exact course
            and exam session in the free trial class.
          </p>
        </div>
      </Section>

      <Section id="how-classes-work" title="How our Cambridge classes work">
        <div className="max-w-[760px]">
          <Ticks
            items={[
              "Every class is one to one, with the same teacher each time.",
              "A personalised path shows where your child stands against their exam date.",
              "Topical past paper drills build familiarity with Cambridge questions.",
              "A review test follows every 5 to 10 topics. Full past papers start once the syllabus plan is complete.",
              "Each class lesson is saved on our interactive learning platform, with short notes and practice, free for students.",
              "One parent receives a monthly progress report on WhatsApp or their preferred platform.",
            ]}
          />
        </div>
      </Section>

      <Section id="cambridge-or-edexcel" title="Cambridge or Edexcel?">
        <Prose>
          <p>
            If you are choosing between the two, check which board your school or exam centre offers, then think about
            your child&apos;s subjects and exam style. We teach both, and we are glad to talk it through in the trial class.
            You can also read about our{" "}
            <Link href="/edexcel-tuition-colombo" className="underline text-navy">
              Edexcel (London) classes
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={faqs} title="Cambridge questions" />

      <FinalCta title="Try a Cambridge class for free." text="Choose online or in person. No obligation to continue." />
    </main>
  );
}
