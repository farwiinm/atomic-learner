import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Call Booked | Atomic Learner",
  robots: { index: false, follow: false },
};

export default function BookedConfirmationPage() {
  return (
    <main className="py-20">
      <div className="container-page max-w-[560px] text-center">
        <div className="w-14 h-14 rounded-full bg-teal-soft flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-teal" />
        </div>
        <h1 className="text-[28px] font-extrabold text-navy mb-4">
          Your call is booked
        </h1>
        <p className="text-muted text-[15.5px] mb-8">
          Thank you for booking a Parent-Teacher call. We will contact you at
          the scheduled time. A confirmation with the details has also been sent
          to your email.
        </p>
        <Link href="/" className="text-blue font-semibold text-[15px]">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
