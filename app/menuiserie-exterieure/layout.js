export const metadata = {
  title: "Menuiserie Extérieure Missillac | Fenêtres Portes Pontchâteau (44)",
  description: "Spécialiste menuiserie extérieure à Missillac et Pontchâteau. Fenêtres, portes, volets bois sur mesure. Menuisier expert Loire-Atlantique. Devis gratuit.",
  keywords: [
    "menuiserie extérieure missillac",
    "menuiserie extérieure pontchateau", 
    "fenêtres bois 44",
    "portes extérieures loire atlantique",
    "volets bois missillac",
    "menuiserie sur mesure pontchateau",
    "porte d'entrée bois 44",
    "fenêtres sur mesure missillac",
    "volets battants pontchateau",
    "menuisier extérieur loire atlantique",
    "porte fenêtre bois 44",
    "clôture bois missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/menuiserie-exterieure"
  },
  openGraph: {
    title: "Menuiserie Extérieure Missillac | Fenêtres Portes Sur Mesure",
    description: "Menuiserie extérieure sur mesure à Missillac. Spécialiste fenêtres et portes bois Loire-Atlantique.",
    url: "https://www.cmdurand.fr/menuiserie-exterieure",
  }
};

export default function MenuiserieExterieureLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à la menuiserie extérieure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Menuiserie Extérieure",
            "description": "Services de menuiserie extérieure sur mesure : fenêtres, portes, volets à Missillac et Pontchâteau",
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
            "serviceType": "Menuiserie extérieure",
            "additionalType": [
              "Fenêtres bois",
              "Portes extérieures",
              "Volets bois",
              "Porte d'entrée",
              "Menuiserie sur mesure",
              "Clôture bois"
            ]
          })
        }}
      />
      {children}
    </>
  );
}