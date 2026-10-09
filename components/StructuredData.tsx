export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Atomic Learner",
    description:
      "Personalized Cambridge and Edexcel O/L and A/L tutoring in Mathematics, ICT, Physics, Chemistry and Biology, with diagnostic assessments and structured learning plans, delivered by one dedicated teacher.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://atomiclearnerlk.vercel.app",
    areaServed: [
      "Sri Lanka","Online worldwide",
      {
        "@type": "Place",
        name: "Kalubowila",
      },
      {
        "@type": "Place",
        name: "Dehiwala",
      },
      {
        "@type": "Place",
        name: "Mount Lavinia",
      },
      {
        "@type": "Place",
        name: "Wellawatte",
      },
      {
        "@type": "Place",
        name: "Nugegoda",
      },
      {
        "@type": "Place",
        name: "Colombo",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kalubowila",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    priceRange: "LKR 5,200 - LKR 6,600",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tutoring Subjects",
      itemListElement: [
        "Mathematics",
        "ICT",
        "Physics",
        "Chemistry",
        "Biology",
      ].map((subject) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: `${subject} Tutoring`,
          description: `Personalized Cambridge and Edexcel O/L and A/L ${subject} tutoring.`,
          provider: {
            "@type": "EducationalOrganization",
            name: "Atomic Learner",
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
