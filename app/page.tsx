import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqSection, FinalCta, Hero, Section, Steps, Ticks } from "@/components/Blocks";
import PriceTable from "@/components/PriceTable";
import { FAQ_ITEMS } from "@/lib/faq";
import { ADDRESS_LINE, MAPS_LINK, NEARBY_AREAS, SITE_URL, SUBJECTS, WEEKLY_CAPACITY } from "@/lib/site";
import { BookOpen, FolderOpen, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Cambridge & Edexcel Tuition in Colombo | Tandem Learner" },
  description:
    "One-to-one Cambridge and Edexcel (London) classes for Grades 10 to 13 in English. Maths, ICT, Computer Science and Sciences. Book a free trial class.",
  alternates: { canonical: `${SITE_URL}/` },
};

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="Edexcel (London) and Cambridge · Grades 10 to 13"
        h1="Cambridge and Edexcel (London) Tuition in Colombo: 1:1 Classes for Grades 10 to 13"
        aside={<PriceTable dark />}
      >
        <p className="text-[18px] text-muted max-w-[520px] mb-7">
          Tandem Learner offers Cambridge and Edexcel tuition in Colombo for O/L and A/L students. Every class is one to
          one, in English, online or in person in Kalubowila.
        </p>
        <div className="flex flex-wrap gap-3.5 mb-7">
          <Button href="/book-free-trial">Book free trial</Button>
          <Button href="/fees" variant="secondary">
            See all fees
          </Button>
        </div>
        <Ticks items={["Free trial class, online or in person", "One-to-one classes only", `Up to ${WEEKLY_CAPACITY} students a week`]} />
      </Hero>

      <Section id="what-you-get" title="What students get" intro="A clear plan, regular practice and a monthly report, from one teacher.">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-[980px]">
          <Ticks
            items={[
              "One-to-one classes, live online or in person.",
              "A personalised path that shows where the student stands against their exam date.",
              "Free access to our interactive learning platform, where each class lesson is saved.",
            ]}
          />
          <Ticks
            items={[
              "Topical past paper drills, with a review test after every 5 to 10 topics.",
              "Full past papers once the syllabus plan is complete.",
              "A monthly progress report for one parent, on WhatsApp or their preferred platform.",
            ]}
          />
        </div>
      </Section>

      <Section id="how-it-works" title="How it works">
        <Steps />
      </Section>

      <Section id="subjects" title="Subjects we teach" intro="For Edexcel (London) and Cambridge students in Grades 10 to 13.">
        <div className="flex flex-wrap gap-3">
          {SUBJECTS.map((s) => (
            <span key={s} className="bg-card border border-line rounded-full px-6 py-3 text-[16px] font-semibold text-navy">
              {s}
            </span>
          ))}
        </div>
        <p className="text-[14.5px] text-muted mt-5 max-w-[640px]">
          ICT and Computer Science are separate subjects with separate syllabuses, so each has its own class plan.
        </p>
      </Section>

      <Section
        id="platform"
        title="Your lessons, kept in one place"
        intro="We use an interactive learning platform in class. Each lesson taught in class is saved there as a full lesson, so a student can return to it later and understand the topic again."
      >
        <div className="grid sm:grid-cols-3 gap-4 max-w-[900px]">
          {[
            [BookOpen, "Learn", "The lessons taught in class, organised by topic."],
            [FolderOpen, "Revise", "Short notes for quick revision."],
            [PenLine, "Practice", "Practice questions and past paper questions."],
          ].map(([Icon, title, line]) => {
            const I = Icon as typeof BookOpen;
            return (
              <div key={title as string} className="bg-card border border-line rounded-[18px] p-5">
                <I size={22} className="text-teal mb-3" />
                <h3 className="text-[17px] font-bold text-navy mb-1.5">{title as string}</h3>
                <p className="text-[14px] text-muted m-0">{line as string}</p>
              </div>
            );
          })}
        </div>
        <p className="text-[14.5px] text-muted mt-5">Access is free for our students.</p>
      </Section>

      <Section id="teacher" title="Meet your teacher">
        <div className="bg-navy rounded-[28px] p-8 md:p-10 text-white max-w-[860px]">
          <p className="text-white/80 text-[16px] mb-5 max-w-[620px]">
            Classes are taught by Ms. Fathima, who brings a data-driven approach to every student&apos;s plan.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["MSc in Big Data Analytics", "BSc in Biotechnology", "7+ years teaching", "3 years in the IT industry"].map((c) => (
              <span key={c} className="bg-white/10 px-4 py-2 rounded-full text-[13.5px] font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="location" title="Where classes take place">
        <p className="text-[16.5px] text-muted max-w-[640px] mb-2">
          In-person classes are held at {ADDRESS_LINE}, within easy reach of {NEARBY_AREAS.slice(0, -1).join(", ")} and{" "}
          {NEARBY_AREAS[NEARBY_AREAS.length - 1]}.
        </p>
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-[15.5px] font-semibold text-blue underline">
          Get directions on Google Maps
        </a>
      </Section>

      <FaqSection items={FAQ_ITEMS.slice(0, 6)} />

      <FinalCta title="Try a class before you decide." text="Your first trial class is free, online or in person. No obligation." />
    </main>
  );
}
