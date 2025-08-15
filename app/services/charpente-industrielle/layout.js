export const metadata = {
  title: "Charpente Industrielle Missillac | Bâtiment Industriel Pontchâteau (44)",
  description: "Spécialiste charpente industrielle à Missillac et Pontchâteau. Construction hangar, entrepôt, bâtiment agricole. Charpentier industriel Loire-Atlantique. Devis gratuit.",
  keywords: [
    "charpente industrielle missillac",
    "charpente industrielle pontchateau", 
    "hangar bois 44",
    "entrepôt charpente loire atlantique",
    "bâtiment industriel missillac",
    "charpente métallique pontchateau",
    "hangar agricole 44",
    "construction industrielle missillac",
    "charpente lamellé collé pontchateau",
    "bâtiment commercial loire atlantique",
    "structure industrielle 44",
    "charpentier industriel missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/charpente-industrielle"
  },
  openGraph: {
    title: "Charpente Industrielle Missillac | Construction Bâtiment Industriel",
    description: "Construction charpente industrielle à Missillac. Spécialiste hangar et bâtiment industriel Loire-Atlantique.",
    url: "https://www.cmdurand.fr/charpente-industrielle",
  }
};

export default function CharpenteIndustrielleLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à la charpente industrielle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Charpente Industrielle",
            "description": "Services de charpente industrielle pour hangars, entrepôts et bâtiments industriels à Missillac et Pontchâteau",
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
              "Saint-Nazaire",
              "Guérande"
            ],
            "serviceType": "Charpente industrielle",
            "additionalType": [
              "Hangar industriel",
              "Entrepôt",
              "Bâtiment agricole",
              "Structure métallique",
              "Charpente lamellé-collé",
              "Bâtiment commercial"
            ]
          })
        }}
      />
      {children}
    </>
  );
}