import Link from "next/link";

export default function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-line px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(11,31,58,0.08)]">
      <Link
        href="/book"
        className="block text-center bg-navy text-white py-3.5 rounded-full font-semibold text-[15px]"
      >
        Book a Parent–Teacher Call
      </Link>
    </div>
  );
}
