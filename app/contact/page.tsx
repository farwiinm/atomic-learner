import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/Button";
import { ADDRESS_LINE, EMAIL, MAPS_LINK, PHONE_DISPLAY, PHONE_HREF, SITE_URL, WHATSAPP_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact | Tandem Learner" },
  description: "Contact Tandem Learner by WhatsApp, phone or email, or visit us in Kalubowila, Colombo.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        description="The quickest way to start is to book a free trial class. For general questions, reach us any of these ways."
      />
      <section className="py-16 md:py-20">
        <div className="container-page max-w-[560px] space-y-6">
          <div className="bg-card border border-line rounded-[20px] p-6 space-y-3 text-[15.5px] text-ink">
            {WHATSAPP_HREF && (
              <p className="m-0">
                WhatsApp: <a href={WHATSAPP_HREF} className="underline text-navy">{PHONE_DISPLAY}</a>
              </p>
            )}
            {PHONE_HREF && (
              <p className="m-0">
                Call: <a href={PHONE_HREF} className="underline text-navy">{PHONE_DISPLAY}</a>
              </p>
            )}
            <p className="m-0">
              Email: <a href={`mailto:${EMAIL}`} className="underline text-navy">{EMAIL}</a>
            </p>
            <p className="m-0">
              Address: {ADDRESS_LINE} (
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="underline text-navy">
                directions
              </a>
              )
            </p>
          </div>
          <Button href="/book-free-trial" full>
            Book free trial
          </Button>
        </div>
      </section>
    </main>
  );
}
