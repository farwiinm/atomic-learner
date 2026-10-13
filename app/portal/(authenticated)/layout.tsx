import Link from "next/link";
import { logoutAction } from "@/app/portal/actions";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-line bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/portal"
              className="font-extrabold text-navy text-[16px]"
            >
              Atomic Learner Portal
            </Link>
            <nav className="flex gap-6 text-[14px] font-medium text-muted">
              <Link href="/portal" className="hover:text-navy">
                Assessments
              </Link>
              <Link href="/portal/attempts" className="hover:text-navy">
                Attempts
              </Link>
            </nav>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-[13.5px] text-muted hover:text-navy font-medium"
            >
              Log out
            </button>
          </form>
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-6 py-10">{children}</div>
    </div>
  );
}
