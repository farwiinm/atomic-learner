"use client";

import Script from "next/script";
import { CALENDLY_URL } from "@/lib/content";

export default function CalendlyEmbed() {
  const isConfigured = Boolean(process.env.NEXT_PUBLIC_CALENDLY_URL);

  return (
    <div className="rounded-3xl border border-line bg-white overflow-hidden">
      {!isConfigured && (
        <div className="p-4 text-[13.5px] text-muted bg-amber-soft border-b border-line">
          Calendly isn&apos;t connected yet — set <code className="font-mono text-[12.5px]">NEXT_PUBLIC_CALENDLY_URL</code> in your environment to activate live booking. Showing a placeholder below.
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
