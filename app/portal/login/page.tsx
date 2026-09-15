import type { Metadata } from "next";
import { loginAction } from "@/app/portal/actions";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Portal Login",
  robots: { index: false, follow: false },
};

const errorMessages: Record<string, string> = {
  "wrong-password": "That password isn't correct. Try again.",
  "not-configured":
    "The portal password hasn't been set yet. Add PORTAL_PASSWORD to your environment variables.",
};

export default async function PortalLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;
  const message = error ? errorMessages[error] : null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="w-full max-w-[380px]">
        <h1 className="text-[22px] font-extrabold text-navy mb-2">
          Teacher Portal
        </h1>
        <p className="text-muted text-[14.5px] mb-7">
          Enter the portal password to continue.
        </p>

        {message && (
          <div className="flex gap-3 items-start bg-amber-soft border border-amber/30 rounded-xl px-4 py-3.5 mb-6 text-[14px] text-ink">
            <AlertCircle size={18} className="text-amber shrink-0 mt-0.5" />
            <p className="m-0">{message}</p>
          </div>
        )}

        <form action={loginAction} className="space-y-4">
          <input type="hidden" name="next" value={next ?? "/portal"} />
          <div>
            <label className="block text-[13.5px] font-semibold text-navy mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full border border-line rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy text-white py-3.5 rounded-full font-semibold text-[15px]"
          >
            Enter Portal
          </button>
        </form>
      </div>
    </main>
  );
}
