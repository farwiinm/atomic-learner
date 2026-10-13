"use client";

import { useEffect } from "react";

/**
 * Fires "trial_booked" if /booked is opened as a full page and the booking was not
 * already counted from the Calendly embed. If /booked loads inside the embed, it does nothing.
 */
export default function BookedConversion() {
  useEffect(() => {
    if (window.self !== window.top) return;
    try {
      if (sessionStorage.getItem("al_trial_booked")) return;
      sessionStorage.setItem("al_trial_booked", "1");
    } catch {
      /* ignore */
    }
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag === "function") gtag("event", "trial_booked", { method: "calendly_redirect", page_path: "/booked" });
  }, []);
  return null;
}
