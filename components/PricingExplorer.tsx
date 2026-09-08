"use client";

import { useState } from "react";
import { pricing } from "@/lib/content";

export default function PricingExplorer() {
  const [level, setLevel] = useState<"ol" | "al">("ol");

  return (
    <div>
      <div className="inline-flex bg-white border border-line rounded-full p-1 mb-8">
        {(["ol", "al"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`px-6.5 py-2.5 rounded-full text-[14.5px] font-semibold transition-colors ${
              level === l ? "bg-navy text-white" : "text-muted"
            }`}
          >
            {l.toUpperCase().replace("OL", "O/L").replace("AL", "A/L")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {pricing[level].map((p) => (
          <div key={p.subject} className="bg-white border border-line rounded-2xl p-5">
            <h4 className="text-[15px] font-bold text-navy mb-2.5">{p.subject}</h4>
            <div className="text-[21px] font-extrabold">
              LKR {p.amount.toLocaleString()}
              <span className="text-[12.5px] font-medium text-muted"> / session</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
