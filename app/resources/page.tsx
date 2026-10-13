import type { Metadata } from "next";
import Link from "next/link";
import { articles, readMinutes } from "@/lib/articles";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://tandemlearner.com").replace(
  /\/$/,
  "",
);

export const metadata: Metadata = {
  title: "Study Guides for O/L and A/L Students and Parents | Tandem Learner",
  description:
    "Practical guides on O/L and A/L Maths, Sciences and ICT: finding learning gaps, using past papers, choosing a tutor, and online versus in person tuition.",
  alternates: { canonical: `${siteUrl}/resources` },
};

export default function ResourcesIndex() {
  return (
    <main className="bg-[#F7F8FA]">
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-28 md:pt-36">
        <p className="mb-4 flex items-center text-sm font-semibold text-[#3E63DD]">
          <span className="mr-2.5 inline-block h-[7px] w-[7px] rounded-full bg-[#12A594]" />
          Study guides
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
          Practical guides for O/L and A/L students and their parents
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B6472]">
          Short, honest guides on finding gaps, using past papers well, and choosing the right
          kind of help for Cambridge and Edexcel exams.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/resources/${a.slug}`}
                className="block h-full rounded-2xl border border-[#E4E7EC] bg-white p-6 transition-colors hover:border-[#12A594]"
              >
                <p className="text-sm font-semibold text-[#12A594]">{a.category}</p>
                <h2 className="mt-2 text-xl font-semibold leading-snug text-[#0B1F3A]">
                  {a.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#5B6472]">{a.description}</p>
                <p className="mt-4 text-sm font-medium text-[#5B6472]">
                  {readMinutes(a)} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
