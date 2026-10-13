import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Steps } from "@/components/Blocks";
import {
  ADDRESS,
  ADDRESS_LINE,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRICE_RANGE,
  SITE_URL,
  WHATSAPP_HREF,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Book a Free Trial Class | Tandem Learner Kalubowila" },
  description:
    "Book a free trial class. Online on Google Meet or in person at 40, Wijayaba Mawatha, Kalubowila.",
  alternates: { canonical: `${SITE_URL}/book-free-trial` },
};

export default function BookFreeTrial() {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "Tandem Learner",
    url: SITE_URL,
    priceRange: PRICE_RANGE,
    ...(PHONE_DISPLAY ? { telephone: PHONE_DISPLAY } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.area,
      addressRegion: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
  };

  return (
    <main className="py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="container-page">
        <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          Free for online and in-person students
        </div>
        <h1 className="text-[30px] md:text-[44px] font-extrabold leading-[1.1] text-navy mb-4">Book Your Free Trial Class</h1>
        <p className="text-[17.5px] text-muted max-w-[640px] mb-10">
          Fill in the form, then pick a trial time on the calendar. You can attend online on Google Meet, or in person at{" "}
          {ADDRESS_LINE}.
        </p>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <EnquiryForm />

          <aside className="space-y-6">
            <div className="bg-card border border-line rounded-[20px] p-6">
              <h2 className="text-[18px] font-bold text-navy mb-3">Prefer to talk first?</h2>
              <div className="flex flex-wrap gap-3">
                {WHATSAPP_HREF && (
                  <a href={WHATSAPP_HREF} className="rounded-xl bg-navy px-5 py-3 text-[15px] font-semibold text-white">
                    WhatsApp us
                  </a>
                )}
                {PHONE_HREF && (
                  <a href={PHONE_HREF} className="rounded-xl border border-navy px-5 py-3 text-[15px] font-semibold text-navy">
                    Call {PHONE_DISPLAY}
                  </a>
                )}
                {!WHATSAPP_HREF && !PHONE_HREF && <p className="text-[14.5px] text-muted m-0">Use the form and we will get back to you.</p>}
              </div>
            </div>

            <div className="bg-card border border-line rounded-[20px] p-6">
              <h2 className="text-[18px] font-bold text-navy mb-2">Where classes take place</h2>
              <p className="text-[15px] text-ink mb-3">{ADDRESS_LINE}</p>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="Map showing Tandem Learner in Kalubowila"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[240px] w-full"
                />
              </div>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[14.5px] font-semibold text-blue underline">
                Open in Google Maps
              </a>
            </div>
          </aside>
        </div>

        <h2 className="text-[24px] md:text-[30px] font-extrabold text-navy mt-14 mb-5">What happens next</h2>
        <Steps />
      </div>
    </main>
  );
}
