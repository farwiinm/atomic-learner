"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hashPortalPassword } from "@/lib/portal-auth";

const COOKIE_NAME = "portal_auth";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const nextPath = String(formData.get("next") ?? "/portal");

  const expectedPassword = process.env.PORTAL_PASSWORD;

  if (!expectedPassword) {
    redirect("/portal/login?error=not-configured");
  }

  if (password !== expectedPassword) {
    redirect(
      `/portal/login?error=wrong-password&next=${encodeURIComponent(nextPath)}`,
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, await hashPortalPassword(expectedPassword), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  redirect(nextPath.startsWith("/portal") ? nextPath : "/portal");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect("/portal/login");
}
