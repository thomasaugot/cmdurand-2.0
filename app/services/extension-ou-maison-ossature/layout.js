export const metadata = {
  title: "Extension Ossature Bois Missillac | Maison Bois Pontchâteau (44)",
  description: "Spécialiste extension ossature bois et maison bois à Missillac et Pontchâteau. Construction écologique Loire-Atlantique. Charpentier expert. Devis gratuit.",
  keywords: [
    "extension ossature bois missillac",
    "extension bois pontchateau", 
    "maison ossature bois 44",
    "extension maison loire atlantique",
    "ossature bois missillac",
    "agrandissement maison pontchateau",
    "construction bois 44",
    "extension moderne missillac",
    "maison bois sur mesure pontchateau",
    "charpentier ossature bois loire atlantique",
    "extension écologique 44",
    "surélévation ossature bois missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/extension-ou-maison-ossature"
  },
  openGraph: {
    title: "Extension Ossature Bois Missillac | Construction Maison Bois",
    description: "Construction extension et maison ossature bois à Missillac. Spécialiste construction bois Loire-Atlantique.",
    url: "https://www.cmdurand.fr/extension-ou-maison-ossature",
  }
};

export default function ExtensionOssatureLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à l'extension ossature bois */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Extension et Maison Ossature Bois",
            "description": "Services d'extension de maison et construction maison ossature bois à Missillac et Pontchâteau",
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
            "serviceType": "Extension ossature bois",
            "additionalType": [
              "Maison ossature bois",
              "Extension maison",
              "Agrandissement",
              "Construction bois",
              "Surélévation",
              "Extension moderne"
            ]
          })
        }}
      />
      {children}
    </>
  );
}