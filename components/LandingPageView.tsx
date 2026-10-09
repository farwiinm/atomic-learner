import Link from "next/link";
import { landingBySlug, type LandingPage } from "@/lib/landing-pages";
import { articles } from "@/lib/articles";
import { pricing, sessionLength } from "@/lib/content";

const NAVY = "text-[#0B1F3A]";
const MUTED = "text-[#5B6472]";

const stages = [
  ["Talk", "A short call to understand the student and the goal."],
  ["Diagnose", "A worksheet that shows which topics are secure and which are not."],
  ["Plan", "A written plan that covers the gaps first, in order."],
  ["Learn", "One to one sessions, online or in person."],
  ["Review", "A monthly update so you can see what has changed."],
];

function lkr(n: number) {
  return `LKR ${n.toLocaleString("en-US")}`;
}

export default function LandingPageView({
  page,
  siteUrl,
}: {
  page: LandingPage;
  siteUrl: string;
}) {
  const url = `${siteUrl}/classes/${page.slug}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Atomic Learner", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.label, item: url },
    ],
  };

  return (
    <main className="bg-[#F7F8FA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, crumbLd]) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-28 md:pt-36">
        <p className="mb-4 flex items-center text-sm font-semibold text-[#3E63DD]">
          <span className="mr-2.5 inline-block h-[7px] w-[7px] rounded-full bg-[#12A594]" />
          {page.eyebrow}
        </p>
        <h1 className={`max-w-3xl text-4xl font-semibold leading-tight md:text-5xl ${NAVY}`}>
          {page.h1}
        </h1>
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${MUTED}`}>{page.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-base font-semibold text-white"
          >
            Book a free intro call
          </Link>
          <a
            href="#how"
            className="rounded-xl border border-[#E4E7EC] bg-white px-6 py-3.5 text-base font-semibold text-[#0B1F3A]"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Price */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {page.levels.map((lvl) => (
            <div key={lvl} className="rounded-2xl border border-[#E4E7EC] bg-white p-6">
              <p className={`text-sm font-semibold ${MUTED}`}>{lvl === "ol" ? "O/L" : "A/L"}</p>
              <p className={`mt-2 text-3xl font-semibold ${NAVY}`}>
                {lkr(pricing[lvl])}
                <span className={`ml-2 text-base font-medium ${MUTED}`}>per session</span>
              </p>
              <p className={`mt-3 text-sm ${MUTED}`}>
                Online {sessionLength.online}, in person {sessionLength.physical}. One to one.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <h2 className={`text-2xl font-semibold ${NAVY}`}>Who this is for</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {page.forWhom.map((t) => (
            <li
              key={t}
              className={`relative rounded-xl border border-[#E4E7EC] bg-white py-4 pl-11 pr-4 text-base ${NAVY}`}
            >
              <span className="absolute left-4 top-[22px] h-2 w-2 rounded-full bg-[#12A594]" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <h2 className={`text-2xl font-semibold ${NAVY}`}>{page.topicsHeading}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {page.topics.map((g) => (
            <div key={g.title} className="rounded-2xl border border-[#E4E7EC] bg-white p-6">
              <h3 className={`text-lg font-semibold ${NAVY}`}>{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className={`text-base ${MUTED}`}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <h2 className={`text-2xl font-semibold ${NAVY}`}>{page.approachHeading}</h2>
        <div className="mt-5 max-w-3xl space-y-4">
          {page.approach.map((p) => (
            <p key={p.slice(0, 24)} className={`text-lg leading-relaxed ${MUTED}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-5xl scroll-mt-24 px-5 pb-12">
        <h2 className={`text-2xl font-semibold ${NAVY}`}>How it works</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-5">
          {stages.map(([name, desc], i) => (
            <li key={name} className="rounded-xl border border-[#E4E7EC] bg-white p-5">
              <p className="text-sm font-semibold text-[#12A594]">Step {i + 1}</p>
              <p className={`mt-1 text-lg font-semibold ${NAVY}`}>{name}</p>
              <p className={`mt-2 text-sm leading-relaxed ${MUTED}`}>{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-12">
        <h2 className={`text-2xl font-semibold ${NAVY}`}>Common questions</h2>
        <div className="mt-5 divide-y divide-[#E4E7EC] rounded-2xl border border-[#E4E7EC] bg-white">
          {page.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className={`cursor-pointer list-none text-base font-semibold ${NAVY}`}>
                {f.q}
              </summary>
              <p className={`mt-3 text-base leading-relaxed ${MUTED}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <h2 className={`text-lg font-semibold ${NAVY}`}>Also see</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {page.related.map((slug) => {
            const r = landingBySlug[slug];
            if (!r) return null;
            return (
              <Link
                key={slug}
                href={`/classes/${slug}`}
                className="rounded-full border border-[#E4E7EC] bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A]"
              >
                {r.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Related guides */}
      {articles.some((a) => a.landing === page.slug) ? (
        <section className="mx-auto max-w-5xl px-5 pb-12">
          <h2 className={`text-lg font-semibold ${NAVY}`}>Study guides</h2>
          <ul className="mt-4 space-y-3">
            {articles
              .filter((a) => a.landing === page.slug)
              .map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/resources/${a.slug}`}
                    className="text-base font-medium text-[#0B1F3A] underline-offset-4 hover:underline"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="rounded-2xl bg-[#0B1F3A] p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Find out exactly where the marks are being lost
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#B7C4DE]">
            Book a short call. No pressure, and nothing to prepare.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-xl bg-[#E8A33D] px-7 py-3.5 text-base font-semibold text-[#412402]"
          >
            Book a free intro call
          </Link>
        </div>
      </section>
    </main>
  );
}
