import type { Metadata } from "next";
import { cookies } from "next/headers";
import CalendlyInline from "@/components/CalendlyInline";
import FormSubmittedEvent from "@/components/FormSubmittedEvent";
import { CALENDLY, PHONE_HREF, PHONE_DISPLAY, SESSION_LENGTH, WHATSAPP_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Thank You | Tandem Learner" },
  robots: { index: false, follow: false },
};

type Saved = { n?: string; e?: string; m?: "online" | "in-person" };

export default async function ThankYou() {
  const jar = await cookies();
  let saved: Saved = {};
  try {
    saved = JSON.parse(jar.get("al_enquiry")?.value || "{}");
  } catch {
    saved = {};
  }
  const mode = saved.m === "online" ? "online" : saved.m === "in-person" ? "inPerson" : null;
  const url = mode === "online" ? CALENDLY.online : mode === "inPerson" ? CALENDLY.inPerson : "";
  const firstName = (saved.n || "").split(" ")[0];

  return (
    <main className="py-14 md:py-20">
      <FormSubmittedEvent />
      <div className="container-page max-w-[860px]">
        <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          Enquiry received
        </div>
        <h1 className="text-[30px] md:text-[42px] font-extrabold leading-[1.1] text-navy mb-4">
          {firstName ? `Thank you, ${firstName}.` : "Thank you."} Now pick your free trial time.
        </h1>
        <p className="text-[17px] text-muted mb-8 max-w-[600px]">
          Choose a time below. You will get a confirmation email and a reminder
          {mode === "online" ? ", with the Google Meet link included." : "."}
        </p>

        {url ? (
          <div className="bg-white border border-line rounded-[20px] overflow-hidden">
            <CalendlyInline url={url} name={saved.n} email={saved.e} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Online trial class", SESSION_LENGTH.online, CALENDLY.online],
              ["In-person trial class", SESSION_LENGTH.inPerson, CALENDLY.inPerson],
            ].map(([t, len, href]) =>
              href ? (
                <a key={t} href={href} target="_blank" rel="noopener noreferrer" className="block bg-white border border-line rounded-2xl p-6">
                  <div className="text-[17px] font-bold text-navy mb-1">{t}</div>
                  <div className="text-[14px] text-muted mb-4">{len}, free</div>
                  <span className="text-[14.5px] font-semibold text-blue">Choose a time</span>
                </a>
              ) : null,
            )}
          </div>
        )}

        <p className="text-[14.5px] text-muted mt-8">
          Prefer to talk first?{" "}
          {WHATSAPP_HREF && (
            <a className="underline text-navy" href={WHATSAPP_HREF}>
              Message us on WhatsApp
            </a>
          )}
          {WHATSAPP_HREF && PHONE_HREF ? " or " : ""}
          {PHONE_HREF && (
            <a className="underline text-navy" href={PHONE_HREF}>
              call {PHONE_DISPLAY}
            </a>
          )}
          .
        </p>
      </div>
    </main>
  );
}
