"use client";

import { useActionState, useEffect, useState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/book-free-trial/actions";
import { SUBJECTS } from "@/lib/site";

const COUNTRIES = [
  "Sri Lanka",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Saudi Arabia",
  "Oman",
  "Bahrain",
  "Maldives",
  "India",
  "Singapore",
  "Malaysia",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Canada",
  "United States",
  "Other",
];
const EXAMS = ["Oct/Nov 2026", "Jan 2027", "May/June 2027", "Oct/Nov 2027", "2028 or later", "Not sure yet"];
const HEARD = ["Google", "Facebook", "Instagram", "TikTok", "YouTube", "Friend or family", "Tuition listing site", "Other"];

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted/70 focus:outline-none focus:border-blue";
const label = "block text-[13.5px] font-semibold text-navy mb-1.5";
const err = "text-[13px] text-[#B42318] mt-1";

const initial: EnquiryState = {};

function str(v: unknown) {
  return typeof v === "string" ? v : "";
}

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const [hidden, setHidden] = useState({ tz: "", utm_source: "", utm_medium: "", utm_campaign: "", referrer: "" });
  const v = state.values ?? {};
  const e = state.errors ?? {};
  const pickedSubjects = Array.isArray(v.subjects) ? v.subjects : [];

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    let tz = "";
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      /* ignore */
    }
    setHidden({
      tz,
      utm_source: q.get("utm_source") || "",
      utm_medium: q.get("utm_medium") || "",
      utm_campaign: q.get("utm_campaign") || "",
      referrer: document.referrer || "",
    });
  }, []);

  return (
    <form action={action} className="bg-white border border-line rounded-[24px] p-6 md:p-8 space-y-5" noValidate>
      {Object.entries(hidden).map(([k, val]) => (
        <input key={k} type="hidden" name={k} value={val} />
      ))}
      {/* Spam trap: real people never see or fill this */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.formError && (
        <div role="alert" className="rounded-xl bg-[#FEF3F2] border border-[#FDA29B] px-4 py-3 text-[14px] text-[#B42318]">
          {state.formError}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="name">Your name</label>
          <input id="name" name="name" className={field} defaultValue={str(v.name)} autoComplete="name" />
          {e.name && <p className={err}>{e.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="role">I am a</label>
          <select id="role" name="role" className={field} defaultValue={str(v.role) || ""}>
            <option value="" disabled>Choose</option>
            <option value="parent">Parent</option>
            <option value="student">Student</option>
          </select>
          {e.role && <p className={err}>{e.role}</p>}
        </div>
        <div>
          <label className={label} htmlFor="whatsapp">WhatsApp number</label>
          <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" className={field} defaultValue={str(v.whatsapp)} placeholder="+94 77 123 4567" autoComplete="tel" />
          {e.whatsapp && <p className={err}>{e.whatsapp}</p>}
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={field} defaultValue={str(v.email)} autoComplete="email" />
          {e.email && <p className={err}>{e.email}</p>}
        </div>
        <div>
          <label className={label} htmlFor="country">Country</label>
          <select id="country" name="country" className={field} defaultValue={str(v.country) || "Sri Lanka"}>
            {COUNTRIES.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          {e.country && <p className={err}>{e.country}</p>}
        </div>
        <div>
          <label className={label} htmlFor="syllabus">Syllabus</label>
          <select id="syllabus" name="syllabus" className={field} defaultValue={str(v.syllabus) || ""}>
            <option value="" disabled>Choose</option>
            <option>Cambridge</option>
            <option>Edexcel</option>
            <option>Not sure yet</option>
          </select>
          {e.syllabus && <p className={err}>{e.syllabus}</p>}
        </div>
        <div>
          <label className={label} htmlFor="level">Grade</label>
          <select id="level" name="level" className={field} defaultValue={str(v.level) || ""}>
            <option value="" disabled>Choose</option>
            {["Grade 10", "Grade 11", "Grade 12", "Grade 13"].map((g) => (<option key={g}>{g}</option>))}
          </select>
          {e.level && <p className={err}>{e.level}</p>}
        </div>
        <div>
          <label className={label} htmlFor="exam_session">Planned exam session</label>
          <select id="exam_session" name="exam_session" className={field} defaultValue={str(v.exam_session) || ""}>
            <option value="">Choose (optional)</option>
            {EXAMS.map((x) => (<option key={x}>{x}</option>))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={label}>Subjects</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {SUBJECTS.map((s) => (
            <label key={s} className="flex items-center gap-2.5 rounded-xl border border-line px-3.5 py-2.5 text-[14.5px] text-navy cursor-pointer">
              <input type="checkbox" name="subjects" value={s} defaultChecked={pickedSubjects.includes(s)} className="h-4 w-4 accent-[#0B1F3A]" />
              {s}
            </label>
          ))}
        </div>
        {e.subjects && <p className={err}>{e.subjects}</p>}
      </fieldset>

      <fieldset>
        <legend className={label}>Class type</legend>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            ["online", "Online on Google Meet (1.5 hours)"],
            ["in-person", "In person in Kalubowila (2 hours)"],
          ].map(([val, text]) => (
            <label key={val} className="flex items-center gap-2.5 rounded-xl border border-line px-3.5 py-3 text-[14.5px] text-navy cursor-pointer">
              <input type="radio" name="mode" value={val} defaultChecked={str(v.mode) === val} className="h-4 w-4 accent-[#0B1F3A]" />
              {text}
            </label>
          ))}
        </div>
        {e.mode && <p className={err}>{e.mode}</p>}
      </fieldset>

      <div>
        <label className={label} htmlFor="preferred_times">Preferred days and times</label>
        <input id="preferred_times" name="preferred_times" className={field} defaultValue={str(v.preferred_times)} placeholder={`For example: weekdays after 5 pm${hidden.tz ? ` (${hidden.tz})` : ""}`} />
        <p className="text-[12.5px] text-muted mt-1">Please include your time zone if you are outside Sri Lanka.</p>
      </div>

      <div>
        <label className={label} htmlFor="heard_from">How did you hear about us?</label>
        <select id="heard_from" name="heard_from" className={field} defaultValue={str(v.heard_from) || ""}>
          <option value="">Choose (optional)</option>
          {HEARD.map((x) => (<option key={x}>{x}</option>))}
        </select>
      </div>

      <div>
        <label className="flex items-start gap-3 text-[13.5px] text-muted cursor-pointer">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-[#0B1F3A]" />
          <span>
            I agree that Tandem Learner may use these details to contact me about the free trial class. See the{" "}
            <a href="/privacy" className="underline text-navy">privacy policy</a>.
          </span>
        </label>
        {e.consent && <p className={err}>{e.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-navy px-6 py-4 text-[16px] font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Sending..." : "Book free trial"}
      </button>
      <p className="text-[12.5px] text-muted text-center">Next, you pick your trial time on a calendar.</p>
    </form>
  );
}
