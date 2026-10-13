"use client";

import { useEffect } from "react";

/** Fires the "form_submitted" conversion once when the thank-you page loads. */
export default function FormSubmittedEvent() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("al_form_sent")) return;
      sessionStorage.setItem("al_form_sent", "1");
    } catch {
      /* storage unavailable: send once per load */
    }
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag === "function") gtag("event", "form_submitted", { page_path: "/thank-you" });
  }, []);
  return null;
}
