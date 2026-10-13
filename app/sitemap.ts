import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE_URL;

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/edexcel-tuition-colombo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cambridge-tuition-colombo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fees`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/book-free-trial`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cancellation-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const guides: MetadataRoute.Sitemap = [
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...articles.map((a) => ({
      url: `${base}/resources/${a.slug}`,
      lastModified: new Date(a.published),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  // /booked and /thank-you are noindex and left out on purpose.
  return [...core, ...guides];
}
