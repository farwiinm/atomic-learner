import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FaqSection, FinalCta, Hero, Prose, Section, Ticks } from "@/components/Blocks";
import PriceTable from "@/components/PriceTable";
import type { FaqItem } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Edexcel (London) O/L & A/L Tuition Colombo | Tandem Learner" },
  description:
    "Edexcel IGCSE (London O/L) and IAL (London A/L) tuition in English. One-to-one online or at Kalubowila. Free trial class.",
  alternates: { canonical: `${SITE_URL}/edexcel-tuition-colombo` },
};

const faqs: FaqItem[] = [
  {
    q: "Is Edexcel available in Sri Lanka?",
    a: "Yes. Edexcel International GCSE and International Advanced Level exams, often called London O/L and London A/L, are available in Sri Lanka through registered exam centres. We teach both courses.",
  },
  {
    q: "Do you teach Edexcel online?",
    a: "Yes. Online Edexcel classes run on Google Meet for 1.5 hours. In-person classes run for 2 hours in Kalubowila.",
  },
  {
    q: "How much do Edexcel classes cost?",
    a: "Grade 10 and 11: LKR 2,000 online and LKR 2,500 in person. Grade 12 and 13: LKR 3,000 online and LKR 3,500 in person. Prices are per session, and the first trial class is free.",
  },
];

export default function EdexcelPage() {
  return (
    <main>
      <Hero eyebrow="Edexcel IGCSE and IAL" h1="Edexcel (London) Tuition in Sri Lanka: IGCSE and IAL" aside={<PriceTable />}>
        <p className="text-[18px] text-muted max-w-[520px] mb-7">
          Tandem Learner provides one-to-one Edexcel tuition in Sri Lanka for Grades 10 to 13, online or in person in
          Kalubowila. Classes are in English, and your first trial class is free.
        </p>
        <Button href="/book-free-trial">Book free trial</Button>
      </Hero>

      <Section id="what-is-london" title="What London O/L and London A/L mean">
        <Prose>
          <p>
            Edexcel is the exam board of Pearson, a company based in London. That is why many Sri Lankan families call its
            International GCSE (IGCSE) &quot;London O/L&quot; and its International Advanced Level (IAL) &quot;London A/L&quot;. Students
            usually sit the IGCSE in Grades 10 and 11, and the IAL in Grades 12 and 13.
          </p>
          <p>
            Edexcel exams reward clear working and accurate use of subject language. A student who knows the syllabus but
            has not practised in the Edexcel style often loses marks they could have kept.
          </p>
        </Prose>
      </Section>

      <Section id="subjects" title="Edexcel subjects we teach">
        <div className="max-w-[760px] space-y-5">
          <Ticks
            items={[
              "Mathematics",
              "Physics",
              "Chemistry",
              "Biology",
              "ICT (Edexcel IGCSE 4IT1)",
              "Computer Science (Edexcel IGCSE 4CP0)",
            ]}
          />
          <p className="text-[14.5px] text-muted m-0">
            ICT and Computer Science are separate courses, so each has its own class plan. We confirm your child&apos;s exact
            course and exam session in the free trial class.
          </p>
        </div>
      </Section>

      <Section id="how-classes-work" title="How our Edexcel classes work">
        <div className="max-w-[760px]">
          <Ticks
            items={[
              "Every class is one to one, with the same teacher each time.",
              "A personalised path shows where your child stands against their exam date.",
              "Topical past paper drills build familiarity with Edexcel questions.",
              "A review test follows every 5 to 10 topics. Full past papers start once the syllabus plan is complete.",
              "Each class lesson is saved on our interactive learning platform, with short notes and practice, free for students.",
              "One parent receives a monthly progress report on WhatsApp or their preferred platform.",
            ]}
          />
        </div>
      </Section>

      <Section id="edexcel-or-cambridge" title="Not sure whether Edexcel is the right board?">
        <Prose>
          <p>
            The choice usually depends on your school, the subjects your child wants and how they handle each exam style.
            We teach both boards, so we can talk it through with you in the trial class. You can also read about our{" "}
            <Link href="/cambridge-tuition-colombo" className="underline text-navy">
              Cambridge classes
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <FaqSection items={faqs} title="Edexcel questions" />

      <FinalCta title="Try an Edexcel class for free." text="Choose online or in person. No obligation to continue." />
    </main>
  );
}
