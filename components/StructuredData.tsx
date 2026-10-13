import { ADDRESS, NEARBY_AREAS, PHONE_DISPLAY, PRICE_RANGE, SITE_URL } from "@/lib/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: "Tandem Learner",
    url: SITE_URL,
    description:
      "One-to-one Cambridge and Edexcel (London) tuition for Grades 10 to 13 in Mathematics, ICT, Computer Science, Physics, Chemistry and Biology. Online or in person in Kalubowila.",
    priceRange: PRICE_RANGE,
    ...(PHONE_DISPLAY ? { telephone: PHONE_DISPLAY } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.area,
      addressRegion: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
    areaServed: ["Colombo", ...NEARBY_AREAS],
    knowsLanguage: "en",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
