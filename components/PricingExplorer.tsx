"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { pricing, sessionLength } from "@/lib/content";

const levels = [
  { key: "ol", label: "O/L" },
  { key: "al", label: "A/L" },
] as const;

export default function PricingExplorer() {
  const [level, setLevel] = useState<"ol" | "al">("ol");
  const rate = pricing[level].toLocaleString("en-US");

  return (
    <div>
      <div className="inline-flex bg-white border border-line rounded-full p-1 mb-8">
        {levels.map((l) => (
          <button
            key={l.key}
            onClick={() => setLevel(l.key)}
            className={`px-6.5 py-2.5 rounded-full text-[14.5px] font-semibold transition-colors ${
              level === l.key ? "bg-navy text-white" : "text-muted"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 max-w-3xl">
        {/* Online (primary) */}
        <div className="bg-navy text-white rounded-2xl p-7 flex flex-col">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-white/70 mb-3">
            Online, one to one
          </div>
          <div className="text-[34px] font-extrabold leading-none">
            LKR {rate}
            <span className="text-[14px] font-medium text-white/70"> / session</span>
          </div>
          <p className="text-[14.5px] text-white/80 mt-3 mb-6">
            {sessionLength.online} per session. Live with Ms. Fathima, from anywhere in
            the world.
          </p>
          <div className="mt-auto">
            <Button href="/book" variant="teal" full>
              Book a free intro call
            </Button>
          </div>
        </div>

        {/* In person */}
        <div className="bg-white border border-line rounded-2xl p-7 flex flex-col">
          <div className="text-[12.5px] font-semibold uppercase tracking-wide text-muted mb-3">
            In person, Kalubowila
          </div>
          <div className="text-[34px] font-extrabold leading-none text-navy">
            LKR {rate}
            <span className="text-[14px] font-medium text-muted"> / session</span>
          </div>
          <p className="text-[14.5px] text-muted mt-3 mb-6">
            {sessionLength.physical} per session, one to one. Same price as online.
          </p>
          <div className="mt-auto">
            <Link
              href="/book"
              className="block text-center rounded-xl border-[1.5px] border-navy px-5 py-3 text-[15px] font-semibold text-navy"
            >
              Book a free intro call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}