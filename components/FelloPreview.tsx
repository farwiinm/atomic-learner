"use client";

import { useState } from "react";

export default function FelloPreview() {
  const [tab, setTab] = useState<"note" | "practice">("note");
  const [shown, setShown] = useState(false);

  return (
    <div className="bg-white border border-line rounded-[20px] overflow-hidden shadow-[0_20px_60px_-24px_rgba(11,31,58,0.22)]">
      <div className="px-6 pt-5 pb-4 border-b border-line">
        <div className="text-[11.5px] font-bold uppercase tracking-wide text-muted mb-1">
          Sample topic
        </div>
        <div className="text-[17px] font-bold text-navy">Simultaneous equations</div>
      </div>

      <div className="flex gap-2 px-6 pt-4">
        {(
          [
            ["note", "Short note"],
            ["practice", "Practice"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-full text-[13.5px] font-semibold transition-colors ${
              tab === key ? "bg-navy text-white" : "bg-bg text-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="px-6 py-5 min-h-[190px]">
        {tab === "note" ? (
          <div className="space-y-3 text-[14.5px] text-ink">
            <p className="m-0">
              Make the numbers in front of one letter match. Then add or subtract the two
              equations to remove that letter.
            </p>
            <div className="bg-bg rounded-xl px-4 py-3 text-[14px]">
              <b>Step 1.</b> Match the coefficients
              <br />
              <b>Step 2.</b> Add or subtract to eliminate one letter
              <br />
              <b>Step 3.</b> Substitute back to find the other
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="m-0 text-[14.5px] text-ink">
              Solve <b>x + y = 7</b> and <b>x - y = 1</b>.
            </p>
            <button
              onClick={() => setShown(!shown)}
              className="text-[13.5px] font-semibold text-blue"
            >
              {shown ? "Hide worked solution" : "Show worked solution"}
            </button>
            {shown && (
              <div className="bg-bg rounded-xl px-4 py-3 text-[14px] text-ink">
                Add the equations: 2x = 8, so x = 4.
                <br />
                Substitute: 4 + y = 7, so y = 3.
                <br />
                <b>Answer: x = 4, y = 3</b>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
