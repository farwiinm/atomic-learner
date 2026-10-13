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
 * Loads Google Analytics 4 and Vercel Analytics. Events:
 *  - cta_click       any link to /book-free-trial
 *  - contact_click   tel:, mailto: and WhatsApp links
 *  - form_submitted  conversion 1 (sent from the thank-you page)
 *  - trial_booked    conversion 2 (a booking finished inside the Calendly embed)
 */
export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const base = {
        link_text: (a.textContent || "").trim().slice(0, 60),
        link_url: href,
        page_path: window.location.pathname,
      };
      if (href.startsWith("tel:") || href.startsWith("mailto:") || href.includes("wa.me")) {
        send("contact_click", base);
      } else if (href.startsWith("/book-free-trial")) {
        send("cta_click", base);
      }
    }

    function onMessage(e: MessageEvent) {
      const data = e.data as { event?: string } | null;
      if (data && typeof data === "object" && data.event === "calendly.event_scheduled") {
        try {
          sessionStorage.setItem("al_trial_booked", "1");
        } catch {
          /* ignore */
        }
        send("trial_booked", { method: "calendly_embed", page_path: window.location.pathname });
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
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      ) : null}
      <VercelAnalytics />
    </>
  );
}
