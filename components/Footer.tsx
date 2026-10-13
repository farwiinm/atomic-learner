import Link from "next/link";
import { ADDRESS_LINE, EMAIL, MAPS_LINK, PHONE_DISPLAY, PHONE_HREF, SITE_PAGES, WHATSAPP_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg pb-28 md:pb-0">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-[18px] font-bold text-navy mb-2">Tandem Learner</div>
          <p className="text-[14.5px] text-muted max-w-[300px] m-0">
            One-to-one Cambridge and Edexcel (London) classes for Grades 10 to 13, in English.
          </p>
        </div>
        <div>
          <div className="text-[13px] font-bold uppercase tracking-wide text-muted mb-3">Visit and contact</div>
          <p className="text-[14.5px] text-navy m-0 mb-2">{ADDRESS_LINE}</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-[14.5px] underline text-navy">
            Get directions
          </a>
          <div className="mt-3 space-y-1 text-[14.5px]">
            {PHONE_HREF && (
              <div>
                <a href={PHONE_HREF} className="text-navy underline">{PHONE_DISPLAY}</a>
              </div>
            )}
            <div>
              <a href={`mailto:${EMAIL}`} className="text-navy underline">{EMAIL}</a>
            </div>
            {WHATSAPP_HREF && (
              <div>
                <a href={WHATSAPP_HREF} className="text-navy underline">WhatsApp</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="text-[13px] font-bold uppercase tracking-wide text-muted mb-3">Pages</div>
          <ul className="space-y-2 text-[14.5px] m-0 p-0 list-none">
            {SITE_PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-navy hover:underline">{p.label}</Link>
              </li>
            ))}
            <li><Link href="/book-free-trial" className="text-navy hover:underline">Book a free trial</Link></li>
            <li><Link href="/privacy" className="text-muted hover:underline">Privacy</Link></li>
            <li><Link href="/terms" className="text-muted hover:underline">Terms</Link></li>
            <li><Link href="/cancellation-policy" className="text-muted hover:underline">Cancellation policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-[13px] text-muted">
        &copy; {new Date().getFullYear()} Tandem Learner
      </div>
    </footer>
  );
}
