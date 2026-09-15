"use client";

import { useState } from "react";
import { startAttemptAction } from "@/app/diagnostic/actions";
import { Button } from "./Button";

const curricula = [
  { value: "cambridge", label: "Cambridge" },
  { value: "edexcel", label: "Edexcel" },
];
const levels = [
  { value: "ol", label: "O/L" },
  { value: "al", label: "A/L" },
];
const subjects = [
  { value: "mathematics", label: "Mathematics" },
  { value: "ict", label: "ICT" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
];

function Segmented({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <button
          type="button"
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4.5 py-2.5 rounded-xl border-[1.5px] text-[14.5px] font-semibold transition-all ${
            value === opt.value
              ? "bg-navy border-navy text-white"
              : "bg-white border-line text-ink hover:border-blue"
          }`}
        >
          {opt.label}
        </button>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default function StartAssessmentForm() {
  const [curriculum, setCurriculum] = useState("cambridge");
  const [level, setLevel] = useState("ol");
  const [subject, setSubject] = useState("mathematics");

  return (
    <form action={startAttemptAction} className="space-y-7">
      <div>
        <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted mb-2.5">
          Syllabus
        </div>
        <Segmented name="curriculum" options={curricula} value={curriculum} onChange={setCurriculum} />
      </div>
      <div>
        <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted mb-2.5">Level</div>
        <Segmented name="level" options={levels} value={level} onChange={setLevel} />
      </div>
      <div>
        <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted mb-2.5">
          Subject
        </div>
        <Segmented name="subject" options={subjects} value={subject} onChange={setSubject} />
      </div>
      <div>
        <label className="block text-[13.5px] font-semibold text-navy mb-2">
          Email <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="parent@example.com"
          className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <Button type="submit" full>
        Begin Assessment
      </Button>
      <p className="text-[13px] text-muted text-center">
        If this subject and level combination doesn&apos;t have a published assessment yet,
        you&apos;ll be taken back here.
      </p>
    </form>
  );
}
