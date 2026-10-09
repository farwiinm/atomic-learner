"use client";

import { useEffect } from "react";

/**
 * Fires one conversion event when someone lands on /booked after
 * completing a Calendly booking. Mark "generate_lead" as a key event in GA4.
 */
export default function BookedConversion() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("al_lead_sent")) return;
      sessionStorage.setItem("al_lead_sent", "1");
    } catch {
      /* storage unavailable, still send once per load */
    }
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", { method: "calendly", page_path: "/booked" });
    }
  }, []);

  return null;
}
