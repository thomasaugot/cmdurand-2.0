export const metadata = {
  title: "Terrasse Bois Missillac | Construction Terrasse Pontchâteau (44)",
  description: "Construction terrasse bois et composite à Missillac et Pontchâteau. Terrasse sur mesure, platelage bois. Charpentier spécialiste Loire-Atlantique. Devis gratuit.",
  keywords: [
    "terrasse bois missillac",
    "terrasse pontchateau", 
    "terrasse composite 44",
    "construction terrasse loire atlantique",
    "terrasse sur mesure missillac",
    "platelage bois pontchateau",
    "terrasse extérieure 44",
    "deck bois missillac",
    "terrasse surélevée pontchateau",
    "charpentier terrasse loire atlantique",
    "terrasse en bois 44",
    "aménagement extérieur missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/terrasse"
  },
  openGraph: {
    title: "Terrasse Bois Missillac | Construction Terrasse Sur Mesure",
    description: "Construction de terrasse bois et composite à Missillac. Spécialiste terrasse extérieure Loire-Atlantique.",
    url: "https://www.cmdurand.fr/terrasse",
  }
};

export default function TerrasseLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à la terrasse */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction Terrasse",
            "description": "Services de construction de terrasses en bois et composite à Missillac et Pontchâteau",
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
              "Crossac",
              "Donges",
              "Prinquiau",
              "La Baule",
              "Pornichet"
            ],
            "serviceType": "Terrasse",
            "additionalType": [
              "Terrasse bois",
              "Terrasse composite",
              "Platelage bois",
              "Terrasse sur mesure",
              "Deck bois",
              "Aménagement extérieur"
            ]
          })
        }}
      />
      {children}
    </>
  );
}