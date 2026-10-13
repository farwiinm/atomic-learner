import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageView from "@/components/LandingPageView";
import { landingBySlug, landingPages } from "@/lib/landing-pages";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://atomiclearnerlk.vercel.app").replace(
  /\/$/,
  "",
);

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = landingBySlug[slug];
  if (!page) return {};
  const url = `${siteUrl}/classes/${slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ClassesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landingBySlug[slug];
  if (!page) notFound();
  return <LandingPageView page={page} siteUrl={siteUrl} />;
}
