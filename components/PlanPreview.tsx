"use client";

import { useState } from "react";

const tabs = ["Overview", "Strengths", "Focus Areas", "Roadmap", "Checkpoints"] as const;
type Tab = (typeof tabs)[number];

export default function PlanPreview() {
  const [active, setActive] = useState<Tab>("Overview");

  return (
    <div className="bg-white border border-line rounded-[24px] overflow-hidden">
      <div className="flex border-b border-line overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5.5 py-4 text-[14px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
              active === tab ? "text-navy border-blue" : "text-muted border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-7 md:p-8">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-amber bg-amber-soft px-3 py-1.5 rounded-full font-semibold mb-5">
          Illustrative Sample — Not Real Student Data
        </span>

        {active === "Overview" && (
          <div className="animate-fade-up">
            <div className="text-[17px] font-bold text-navy mb-5">
              Goal: Improve Cambridge O/L Mathematics exam confidence.
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Curriculum</h4>
                <ul className="space-y-2 text-[14.5px]">
                  <li className="pb-2 border-b border-line">Cambridge O/L</li>
                  <li className="pb-2 border-b border-line">Mathematics</li>
                  <li className="pb-2 border-b border-line">Session frequency: Weekly</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Current Position</h4>
                <ul className="space-y-2 text-[14.5px]">
                  <li className="pb-2 border-b border-line">Solid arithmetic foundation</li>
                  <li className="pb-2 border-b border-line">Gaps in algebraic manipulation</li>
                  <li className="pb-2 border-b border-line">Exam technique needs work</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {active === "Strengths" && (
          <div className="animate-fade-up grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Stronger Areas</h4>
              <ul className="space-y-2 text-[14.5px]">
                <li className="pb-2 border-b border-line">Basic arithmetic</li>
                <li className="pb-2 border-b border-line">Linear equations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Consistency</h4>
              <ul className="space-y-2 text-[14.5px]">
                <li className="pb-2 border-b border-line">Reliable on repetitive problem types</li>
                <li className="pb-2 border-b border-line">Good numerical accuracy</li>
              </ul>
            </div>
          </div>
        )}

        {active === "Focus Areas" && (
          <div className="animate-fade-up grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Priority Areas</h4>
              <ul className="space-y-2 text-[14.5px]">
                <li className="pb-2 border-b border-line">Algebraic manipulation</li>
                <li className="pb-2 border-b border-line">Functions</li>
                <li className="pb-2 border-b border-line">Coordinate geometry</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Why These</h4>
              <ul className="space-y-2 text-[14.5px]">
                <li className="pb-2 border-b border-line">Recur across most exam papers</li>
                <li className="pb-2 border-b border-line">Build directly on current gaps</li>
              </ul>
            </div>
          </div>
        )}

        {active === "Roadmap" && (
          <div className="animate-fade-up">
            {[
              ["Weeks 1–2", "Foundation repair"],
              ["Weeks 3–5", "Core concept development"],
              ["Weeks 6–8", "Applied problem solving"],
              ["Weeks 9+", "Exam-focused practice"],
            ].map(([week, focus], i, arr) => (
              <div
                key={week}
                className={`flex gap-4 py-3.5 ${i < arr.length - 1 ? "border-b border-line" : ""}`}
              >
                <div className="min-w-[95px] font-bold text-blue text-[13.5px]">{week}</div>
                <p className="text-[14.5px] m-0">{focus}</p>
              </div>
            ))}
          </div>
        )}

        {active === "Checkpoints" && (
          <div className="animate-fade-up grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Checkpoint 1 — Week 4</h4>
              <p className="text-[14.5px]">Algebra accuracy review</p>
            </div>
            <div>
              <h4 className="text-[13px] uppercase tracking-wide text-muted font-bold mb-3">Checkpoint 2 — Week 8</h4>
              <p className="text-[14.5px]">Mixed-topic mock assessment</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
