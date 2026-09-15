/**
 * Simple one-way hash used only to avoid storing the raw portal password in
 * a cookie. This is not meant to be cryptographically bulletproof, it is a
 * lightweight shared-password gate for a single internal tool, not a
 * multi-user auth system. If real per-user accounts are needed later,
 * replace this with Supabase Auth.
 *
 * Uses the Web Crypto API (not Node's `crypto` module) so this works in
 * both the Node runtime and the Edge runtime, since middleware.ts runs on
 * the Edge runtime and does not support Node built-ins.
 */
export async function hashPortalPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
