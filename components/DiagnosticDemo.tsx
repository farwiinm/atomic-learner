"use client";

import { useState } from "react";

const options = [
  { label: "x = 4", correct: false },
  { label: "x = 5", correct: true },
  { label: "x = 6", correct: false },
  { label: "x = 7.6", correct: false },
];

export default function DiagnosticDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = answered && options[selected].correct;

  return (
    <div className="bg-white border border-line rounded-[24px] p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-10">
      <div>
        <span className="inline-block bg-blue-soft text-blue px-3 py-1.5 rounded-full text-[12px] font-semibold mb-4">
          Assessment Preview
        </span>
        <div className="flex gap-4 text-[13px] text-muted mb-5 flex-wrap">
          <span>Question 08 / 15</span>
          <span>Topic: Algebra</span>
          <span>Difficulty: Foundation</span>
        </div>
        <div className="h-[5px] bg-line rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-teal transition-all duration-500"
            style={{ width: answered ? "60%" : "53%" }}
          />
        </div>
        <div className="text-[19px] font-bold text-navy mb-6">Solve for x: 3x + 7 = 22</div>
        <div className="space-y-2.5">
          {options.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setSelected(i)}
              className={`block w-full text-left px-4.5 py-3.5 rounded-xl border-[1.5px] text-[15px] font-medium transition-all ${
                selected === i && opt.correct
                  ? "bg-teal-soft border-teal text-[#0C6B60]"
                  : "bg-white border-line hover:border-blue hover:bg-blue-soft"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-line text-[14px] text-muted leading-relaxed">
          {!answered &&
            "The goal isn't simply to calculate a score. It's to identify what to work on next. This is only a visual demonstration."}
          {answered && correct &&
            "Nice — that's correct. The goal isn't simply to calculate a score. It's to identify what to work on next. This is only a visual demonstration."}
          {answered && !correct &&
            "Not quite — this is where a diagnostic starts to reveal exactly which step needs review. This is only a visual demonstration."}
        </div>
      </div>

      <div>
        <h4 className="text-[12.5px] uppercase tracking-wide text-muted font-bold mb-4">Topic Map</h4>
        {[
          { name: "Linear Equations", pct: 80, color: "bg-teal" },
          { name: "Algebraic Manipulation", pct: answered ? 55 : 40, color: "bg-amber" },
          { name: "Functions", pct: 25, color: "bg-amber" },
          { name: "Coordinate Geometry", pct: 15, color: "bg-amber" },
        ].map((t) => (
          <div key={t.name} className="flex justify-between items-center py-3 border-b border-line text-[14px]">
            <span>{t.name}</span>
            <div className="w-20 h-1.5 bg-line rounded-full overflow-hidden">
              <div className={`h-full ${t.color} transition-all duration-500`} style={{ width: `${t.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
