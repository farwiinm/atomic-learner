"use client";

import Script from "next/script";
import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Gtag = (...args: unknown[]) => void;

function send(name: string, params: Record<string, unknown>) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/**
 * Loads Google Analytics 4 and Vercel Analytics, and tracks key clicks
 * without editing every button:
 *  - cta_click      any link to /book
 *  - contact_click  tel:, mailto: and WhatsApp links
 *  - calendly_scheduled  a booking completed inside the Calendly embed
 */
export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const text = (a.textContent || "").trim().slice(0, 60);
      const base = { link_text: text, link_url: href, page_path: window.location.pathname };

      if (href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("wa.me")) {
        send("contact_click", base);
      } else if (href === "/book" || href.startsWith("/book?") || href.includes("/book#")) {
        send("cta_click", base);
      }
    }

    function onMessage(e: MessageEvent) {
      const data = e.data as { event?: string } | null;
      if (data && typeof data === "object" && data.event === "calendly.event_scheduled") {
        send("calendly_scheduled", { page_path: window.location.pathname });
      }
    }

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
      <VercelAnalytics />
    </>
  );
}
