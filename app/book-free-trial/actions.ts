"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { SUBJECTS } from "@/lib/site";

export type EnquiryState = {
  errors?: Record<string, string>;
  values?: Record<string, string | string[]>;
  formError?: string;
};

const LEVELS = ["Grade 10", "Grade 11", "Grade 12", "Grade 13"];
const SYLLABI = ["Cambridge", "Edexcel", "Not sure yet"];

export async function submitEnquiry(_prev: EnquiryState, fd: FormData): Promise<EnquiryState> {
  const get = (k: string) => String(fd.get(k) ?? "").trim();
  const subjects = fd.getAll("subjects").map(String).filter((s) => (SUBJECTS as readonly string[]).includes(s));

  const values = {
    name: get("name"),
    role: get("role"),
    whatsapp: get("whatsapp"),
    email: get("email"),
    country: get("country"),
    syllabus: get("syllabus"),
    level: get("level"),
    subjects,
    mode: get("mode"),
    preferred_times: get("preferred_times"),
    exam_session: get("exam_session"),
    heard_from: get("heard_from"),
  };

  // Honeypot: bots fill the hidden "company" field. Pretend it worked.
  if (get("company")) redirect("/thank-you");

  const errors: Record<string, string> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!["parent", "student"].includes(values.role)) errors.role = "Please choose parent or student.";
  if (values.whatsapp.replace(/\D/g, "").length < 7) errors.whatsapp = "Please enter a WhatsApp number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.country) errors.country = "Please choose your country.";
  if (!SYLLABI.includes(values.syllabus)) errors.syllabus = "Please choose a syllabus.";
  if (!LEVELS.includes(values.level)) errors.level = "Please choose a grade.";
  if (subjects.length === 0) errors.subjects = "Please tick at least one subject.";
  if (!["online", "in-person"].includes(values.mode)) errors.mode = "Please choose online or in person.";
  if (fd.get("consent") !== "on") errors.consent = "Please tick the box to continue.";

  if (Object.keys(errors).length) return { errors, values };

  const row = {
    name: values.name,
    contact_role: values.role,
    whatsapp: values.whatsapp,
    email: values.email,
    country: values.country,
    syllabus: values.syllabus,
    level: values.level,
    subjects,
    mode: values.mode,
    preferred_times: values.preferred_times || null,
    time_zone: get("tz") || null,
    exam_session: values.exam_session || null,
    heard_from: values.heard_from || null,
    consent: true,
    utm_source: get("utm_source") || null,
    utm_medium: get("utm_medium") || null,
    utm_campaign: get("utm_campaign") || null,
    referrer: get("referrer") || null,
  };

  let saved = false;
  let emailed = false;

  // 1) Save to Supabase (insert only, no read-back, so no SELECT policy is needed)
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("enquiries").insert(row);
      if (error) console.error("enquiry save failed:", error.message);
      else saved = true;
    } catch (e) {
      console.error("enquiry save error:", e);
    }
  }

  // 2) Email a copy to the owner with Resend
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.ENQUIRY_NOTIFY_EMAIL;
  if (resendKey && notifyTo) {
    try {
      const text = [
        `New free trial enquiry`,
        ``,
        `Name: ${row.name} (${row.contact_role})`,
        `WhatsApp: ${row.whatsapp}`,
        `Email: ${row.email}`,
        `Country: ${row.country}`,
        `Syllabus: ${row.syllabus}`,
        `Grade: ${row.level}`,
        `Subjects: ${subjects.join(", ")}`,
        `Mode: ${row.mode}`,
        `Preferred days and times: ${row.preferred_times ?? "-"}`,
        `Time zone: ${row.time_zone ?? "-"}`,
        `Exam session: ${row.exam_session ?? "-"}`,
        `Heard about us: ${row.heard_from ?? "-"}`,
        `Source: ${row.utm_source ?? "-"} / ${row.utm_medium ?? "-"} / ${row.utm_campaign ?? "-"}`,
      ].join("\n");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Tandem Learner <onboarding@resend.dev>",
          to: [notifyTo],
          reply_to: row.email,
          subject: `Free trial enquiry: ${row.name}, ${row.level}, ${subjects.join(", ")}`,
          text,
        }),
      });
      if (res.ok) emailed = true;
      else console.error("enquiry email failed:", res.status, await res.text());
    } catch (e) {
      console.error("enquiry email error:", e);
    }
  }

  if (!saved && !emailed) {
    return {
      values,
      formError:
        "We could not send your enquiry just now. Please message us on WhatsApp or try again in a few minutes.",
    };
  }

  // Remember the choice for the thank-you page (kept out of the URL on purpose).
  const jar = await cookies();
  jar.set("al_enquiry", JSON.stringify({ n: row.name, e: row.email, m: row.mode }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });

  redirect("/thank-you");
}
