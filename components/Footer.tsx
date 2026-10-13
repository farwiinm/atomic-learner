import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12 mb-[74px] md:mb-0">
      <div className="container-page flex flex-wrap justify-between gap-6 text-[13.5px] text-muted">
        <span>© {new Date().getFullYear()} Atomic Learner. All rights reserved.</span>
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="hover:text-navy transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-navy transition-colors">Terms</Link>
          <Link href="/cancellation-policy" className="hover:text-navy transition-colors">Cancellation Policy</Link>
          <Link href="/contact" className="hover:text-navy transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
