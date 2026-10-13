"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: { initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void };
  }
}

export default function CalendlyInline({ url, name, email }: { url: string; name?: string; email?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  const init = useCallback(() => {
    if (done.current || !ref.current || !window.Calendly) return;
    done.current = true;
    const q = new URLSearchParams({ hide_gdpr_banner: "1" });
    if (name) q.set("name", name);
    if (email) q.set("email", email);
    window.Calendly.initInlineWidget({
      url: `${url}${url.includes("?") ? "&" : "?"}${q.toString()}`,
      parentElement: ref.current,
    });
  }, [url, name, email]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <div ref={ref} style={{ minWidth: 320, height: 760 }} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" onReady={init} />
    </>
  );
}
