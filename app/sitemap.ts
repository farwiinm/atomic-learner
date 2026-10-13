import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";

const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://atomiclearnerlk.vercel.app").replace(
  /\/$/,
  "",
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    {
      url: `${base}/cancellation-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const classes: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${base}/classes/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // /booked is intentionally left out: it is a thank-you page with noindex.
  return [...core, ...classes];
}
