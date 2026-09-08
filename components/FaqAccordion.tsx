"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need to commit before the first call?",
    a: "No. Stage 01 — Talk is a short, no-commitment conversation to discuss your child's situation, subject, level and goals. There's no charge and no obligation to continue.",
  },
  {
    q: "How does the diagnostic assessment work?",
    a: "After the initial call, your child completes a short assessment for the relevant subject and level. It's reviewed by the teacher to identify strengths, gaps and priority topics — the goal is direction, not a score.",
  },
  {
    q: "Where do sessions take place?",
    a: "All sessions take place at the teacher's private teaching space in Kalubowila — a quiet, consistent environment for one-to-one learning. The exact address is shared privately once a consultation is booked.",
  },
  {
    q: "Is it the same teacher every session?",
    a: "Yes. One teacher is involved throughout — from the first call, through the diagnostic and learning plan, to every lesson and progress update.",
  },
  {
    q: "How will I know if my child is progressing?",
    a: "You'll receive a monthly progress update covering what's been completed, current focus areas, topics that need more practice, and priorities for the following month.",
  },
  {
    q: "What subjects and levels are covered?",
    a: "Mathematics, ICT, Physics, Chemistry and Biology, for Cambridge and Edexcel O/L and A/L.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-[720px] divide-y divide-line border-y border-line">
      {faqs.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center gap-4 py-5 text-left"
          >
            <span className="text-[16px] font-semibold text-navy">{item.q}</span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-muted transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="text-[15px] text-muted pb-5 pr-8 animate-fade-up">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
