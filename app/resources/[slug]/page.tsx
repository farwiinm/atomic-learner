import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleBySlug, articles, readMinutes } from "@/lib/articles";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://tandemlearner.com").replace(
  /\/$/,
  "",
);

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug[slug];
  if (!a) return {};
  const url = `${siteUrl}/resources/${slug}`;
  return {
    title: `${a.title} | Tandem Learner`,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      type: "article",
      publishedTime: a.published,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articleBySlug[slug];
  if (!a) notFound();

  const url = `${siteUrl}/resources/${slug}`;
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.published,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: "Ms. Fathima" },
    publisher: { "@type": "Organization", name: "Tandem Learner", url: siteUrl },
  };

  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Tandem Learner", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Study guides", item: `${siteUrl}/resources` },
      { "@type": "ListItem", position: 3, name: a.title, item: url },
    ],
  };

  return (
    <main className="bg-[#F7F8FA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, crumbLd]) }}
      />

      <article className="mx-auto max-w-3xl px-5 pb-12 pt-28 md:pt-36">
        <Link href="/resources" className="text-sm font-semibold text-[#3E63DD]">
          Study guides
        </Link>
        <p className="mt-4 text-sm font-semibold text-[#12A594]">{a.category}</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-4xl">
          {a.title}
        </h1>
        <p className="mt-4 text-sm text-[#5B6472]">
          Written by Ms. Fathima, Lead Teacher at Tandem Learner &middot; {readMinutes(a)} min read
        </p>

        <p className="mt-8 text-lg leading-relaxed text-[#14181F]">{a.intro}</p>

        {a.sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="text-2xl font-semibold leading-snug text-[#0B1F3A]">{s.h}</h2>
            {s.p?.map((para) => (
              <p key={para.slice(0, 30)} className="mt-4 text-lg leading-relaxed text-[#14181F]">
                {para}
              </p>
            ))}
            {s.ul ? (
              <ul className="mt-4 space-y-2.5">
                {s.ul.map((li) => (
                  <li
                    key={li.slice(0, 30)}
                    className="relative pl-6 text-lg leading-relaxed text-[#14181F]"
                  >
                    <span className="absolute left-0 top-[13px] h-2 w-2 rounded-full bg-[#12A594]" />
                    {li}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {a.cta ? (
          <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-8">
            <h2 className="text-xl font-semibold text-white">
              Want a plan built around your child?
            </h2>
            <p className="mt-2 text-base text-[#B7C4DE]">
              One to one classes, online or in person, with a free trial class first.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book-free-trial"
                className="rounded-xl bg-[#E8A33D] px-6 py-3 text-base font-semibold text-[#412402]"
              >
                Book free trial
              </Link>
              <Link
                href={a.cta.href}
                className="rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white"
              >
                {a.cta.label}
              </Link>
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <h2 className="text-lg font-semibold text-[#0B1F3A]">More guides</h2>
          <ul className="mt-4 space-y-3">
            {more.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/resources/${m.slug}`}
                  className="text-base font-medium text-[#0B1F3A] underline-offset-4 hover:underline"
                >
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
