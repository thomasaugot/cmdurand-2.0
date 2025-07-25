export const metadata = {
  title: "Charpente Traditionnelle Missillac | Charpentier Pontchâteau (44)",
  description: "Spécialiste charpente traditionnelle à Missillac et Pontchâteau. Charpentier expert Loire-Atlantique. Devis gratuit. 20 ans d'expérience en charpente bois.",
  keywords: [
    "charpente traditionnelle missillac",
    "charpentier pontchateau", 
    "charpente bois 44",
    "charpentier loire atlantique",
    "charpente traditionnelle pontchateau",
    "artisan charpentier missillac",
    "charpente bois traditionnelle",
    "renovation charpente 44",
    "construction charpente missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/charpente-traditionnelle"
  },
  openGraph: {
    title: "Charpente Traditionnelle Missillac | Charpentier Expert",
    description: "Charpentier traditionnel à Missillac. Expertise charpente bois Loire-Atlantique.",
    url: "https://www.cmdurand.fr/charpente-traditionnelle",
  }
};

export default function CharpenteTraditionnelleLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à la charpente traditionnelle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Charpente Traditionnelle",
            "description": "Services de charpente traditionnelle en bois massif à Missillac et Pontchâteau",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Charpente Menuiserie Durand",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Missillac",
                "addressRegion": "Loire-Atlantique",
                "postalCode": "44780",
                "addressCountry": "FR"
              }
            },
            "areaServed": [
              "Missillac",
              "Pontchâteau", 
              "Loire-Atlantique",
              "Besné",
              "Crossac"
            ],
            "serviceType": "Charpente traditionnelle"
          })
        }}
      />
      {children}
    </>
  );
}