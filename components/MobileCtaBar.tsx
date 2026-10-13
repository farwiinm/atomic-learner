import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";

export default function MobileCtaBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 backdrop-blur px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/book-free-trial"
          className="flex-1 rounded-xl bg-navy py-3.5 text-center text-[15.5px] font-semibold text-white"
        >
          Book free trial
        </Link>
        {WHATSAPP_HREF && (
          <a
            href={WHATSAPP_HREF}
            aria-label="Message us on WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white text-navy"
          >
            <MessageCircle size={22} />
          </a>
        )}
        {PHONE_HREF && (
          <a
            href={PHONE_HREF}
            aria-label="Call us"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white text-navy"
          >
            <Phone size={22} />
          </a>
        )}
      </div>
    </div>
  );
}
