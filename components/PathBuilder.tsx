"use client";

import { useState } from "react";
import { Button } from "./Button";

const syllabusOptions = ["Cambridge", "Edexcel"];
const levelOptions = ["O/L", "A/L"];
const subjectOptions = ["Mathematics", "ICT", "Physics", "Chemistry", "Biology"];

const rates: Record<string, number> = {
  Mathematics: 4500,
  ICT: 4500,
  Physics: 4800,
  Chemistry: 4800,
  Biology: 4800,
};

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-5">
      <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted mb-2.5">{label}</div>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4.5 py-2.5 rounded-xl border-[1.5px] text-[14.5px] font-semibold transition-all ${
              value === opt
                ? "bg-navy border-navy text-white"
                : "bg-white border-line text-ink hover:border-blue"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PathBuilder() {
  const [syllabus, setSyllabus] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);

  const complete = syllabus && level && subject;

  return (
    <div className="bg-white rounded-[24px] border border-line p-7 shadow-[0_20px_60px_-20px_rgba(11,31,58,0.18)]">
      <div className="text-[16px] font-bold text-navy mb-1">Find Your Starting Point</div>
      <div className="text-[13.5px] text-muted mb-6">A quick preview of what your learning path could look like.</div>

      <ChipGroup label="Step 1 — Which syllabus?" options={syllabusOptions} value={syllabus} onChange={setSyllabus} />
      <ChipGroup label="Step 2 — Which level?" options={levelOptions} value={level} onChange={setLevel} />
      <ChipGroup label="Step 3 — Which subject?" options={subjectOptions} value={subject} onChange={setSubject} />

      {complete && (
        <div className="pt-1.5 animate-fade-up">
          <div className="flex items-center gap-2 flex-wrap text-[15px] font-bold text-navy mb-4 pb-4 border-b border-dashed border-line">
            Your Starting Path
            <span className="bg-blue-soft text-blue px-3 py-1 rounded-lg text-[13.5px]">{syllabus}</span>
            <span className="bg-blue-soft text-blue px-3 py-1 rounded-lg text-[13.5px]">{level}</span>
            <span className="bg-blue-soft text-blue px-3 py-1 rounded-lg text-[13.5px]">{subject}</span>
          </div>
          <div className="flex items-center gap-2 text-[13.5px] text-muted mb-4 flex-wrap">
            <span className="text-navy font-semibold">Talk</span> →{" "}
            <span className="text-navy font-semibold">Diagnose</span> →{" "}
            <span className="text-navy font-semibold">Personalize</span>
          </div>
          <div className="flex justify-between items-baseline mb-5 px-4 py-3.5 bg-bg rounded-xl">
            <span className="text-muted text-[13.5px]">Standard session rate</span>
            <span className="text-[20px] font-extrabold text-navy">
              LKR {rates[subject]?.toLocaleString()}
            </span>
          </div>
          <Button href="/book" variant="teal" full>
            Discuss This Learning Path
          </Button>
        </div>
      )}
    </div>
  );
}
