import { redirect } from "next/navigation";

// Old class pages were replaced. Temporary redirect for now; it will point to subject pages in the next update.
export default function OldClassPage() {
  redirect("/");
}
