export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DIONZ Skilltech Pvt Ltd",
    url: "https://www.dionzskilltech.com",
    logo: "https://www.dionzskilltech.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kollam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9633150030",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://wa.me/919633150030",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
