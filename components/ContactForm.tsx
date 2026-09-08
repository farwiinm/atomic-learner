"use client";

import { useState } from "react";
import { Button } from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO (Phase 2): send this to a Supabase table (e.g. `call_requests`)
    // or a route handler that emails the teacher, instead of only
    // simulating success client-side.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-teal-soft border border-teal/30 rounded-2xl p-7 text-center">
        <h2 className="text-[18px] font-bold text-navy mb-2">Message received</h2>
        <p className="text-[14.5px] text-muted">
          Thanks for reaching out — you&apos;ll hear back shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[13.5px] font-semibold text-navy mb-2">Your name</label>
        <input
          required
          type="text"
          className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label className="block text-[13.5px] font-semibold text-navy mb-2">Email</label>
        <input
          required
          type="email"
          className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>
      <div>
        <label className="block text-[13.5px] font-semibold text-navy mb-2">Message</label>
        <textarea
          required
          rows={5}
          className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue resize-none"
        />
      </div>
      <Button type="submit" full>Send Message</Button>
    </form>
  );
}
