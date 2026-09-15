import { NextRequest, NextResponse } from "next/server";
import { hashPortalPassword } from "@/lib/portal-auth";

const COOKIE_NAME = "portal_auth";

export async function middleware(request: NextRequest) {
  const isPortalRoute = request.nextUrl.pathname.startsWith("/portal");
  const isLoginRoute = request.nextUrl.pathname === "/portal/login";

  if (!isPortalRoute || isLoginRoute) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME);
  const portalPassword = process.env.PORTAL_PASSWORD;

  if (!portalPassword) {
    // Portal password not configured at all. Block access rather than
    // leaving it open, and send the person to a page explaining why.
    const url = request.nextUrl.clone();
    url.pathname = "/portal/login";
    url.searchParams.set("error", "not-configured");
    return NextResponse.redirect(url);
  }

  const expectedHash = await hashPortalPassword(portalPassword);

  if (cookie?.value !== expectedHash) {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/login";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/portal/:path*",
};
