import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqSection, FinalCta, Hero, Section, Steps, Ticks } from "@/components/Blocks";
import PriceTable from "@/components/PriceTable";
import { FAQ_ITEMS } from "@/lib/faq";
import { SESSION_LENGTH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Tuition Fees: Edexcel & Cambridge Classes | Tandem Learner" },
  description:
    "Clear per-session fees for Grades 10 to 13, online and in person. Your first trial class is free.",
  alternates: { canonical: `${SITE_URL}/fees` },
};

export default function Fees() {
  return (
    <main>
      <Hero eyebrow="Fees" h1="Tuition Fees for Edexcel and Cambridge Classes" aside={<PriceTable />}>
        <p className="text-[18px] text-muted max-w-[520px] mb-7">
          Here are the fees for Edexcel maths tuition in Colombo, and for every other subject we teach at Tandem Learner.
          Prices are per session, for one student, in Sri Lankan rupees. Your first trial class is free.
        </p>
        <Button href="/book-free-trial">Book free trial</Button>
      </Hero>

      <Section id="included" title="What every session includes" intro="The fee covers the class and everything around it.">
        <div className="max-w-[760px]">
          <Ticks
            items={[
              "One-to-one teaching, live online or in person.",
              "A personalised path that shows where the student stands against their exam date.",
              "Free access to our interactive learning platform, with each class lesson saved on it.",
              "Topical past paper drills, with a review test after every 5 to 10 topics.",
              "Full past papers once the syllabus plan is complete.",
              "A monthly progress report for one parent, on WhatsApp or their preferred platform.",
            ]}
          />
        </div>
      </Section>

      <Section id="formats" title="Online or in person">
        <div className="grid md:grid-cols-2 gap-5 max-w-[860px]">
          <div className="bg-card border border-line rounded-[20px] p-6">
            <h3 className="text-[18px] font-bold text-navy mb-2">Online on Google Meet</h3>
            <p className="text-[15px] text-muted m-0">
              {SESSION_LENGTH.online} per session. You join from home with a laptop or tablet, a steady connection and a
              pen and paper.
            </p>
          </div>
          <div className="bg-card border border-line rounded-[20px] p-6">
            <h3 className="text-[18px] font-bold text-navy mb-2">In person in Kalubowila</h3>
            <p className="text-[15px] text-muted m-0">
              {SESSION_LENGTH.inPerson} per session at 40, Wijayaba Mawatha, Kalubowila. A quiet space with no screen to
              distract.
            </p>
          </div>
        </div>
      </Section>

      <Section id="trial" title="Your free trial class" intro="Free for online and in-person students, with no obligation to continue.">
        <div className="max-w-[860px] space-y-6">
          <Ticks
            items={[
              "An introduction to the teacher, the institute and the student.",
              "A lesson with theory, a demonstration or videos, then exercises.",
              "Revision and practice on the interactive learning platform for 30 minutes.",
            ]}
          />
          <div className="overflow-x-auto bg-white border border-line rounded-[18px]">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="text-[12.5px] text-muted">
                  <th className="px-5 py-3 font-semibold">Trial class</th>
                  <th className="px-5 py-3 font-semibold">Lesson</th>
                  <th className="px-5 py-3 font-semibold">Platform practice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-semibold">Online ({SESSION_LENGTH.online})</td>
                  <td className="px-5 py-3">1 hour</td>
                  <td className="px-5 py-3">30 minutes</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-semibold">In person ({SESSION_LENGTH.inPerson})</td>
                  <td className="px-5 py-3">1 hour 30 minutes</td>
                  <td className="px-5 py-3">30 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" title="How it works">
        <Steps />
      </Section>

      <FaqSection
        items={FAQ_ITEMS.filter((f) =>
          ["How much do classes cost?", "Is the trial class really free?", "Online or in person: which is better?", "What is the interactive learning platform, and do I pay for it?"].includes(f.q),
        )}
        title="Questions about fees"
      />

      <FinalCta title="Start with the free trial class." text="Pick a time that suits you, online or in person." />
    </main>
  );
}
