import Link from "next/link";
import { landingPages } from "@/lib/landing-pages";

/** Small internal-link strip shown above the footer so Google can reach every class page. */
export default function ClassLinks() {
  return (
    <nav aria-label="Classes" className="border-t border-[#E4E7EC] bg-[#F7F8FA]">
      <div className="mx-auto max-w-5xl px-5 py-8">
        <p className="mb-3 text-sm font-semibold text-[#5B6472]">Classes</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {landingPages.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/classes/${p.slug}`}
                className="text-sm font-medium text-[#0B1F3A] underline-offset-4 hover:underline"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
