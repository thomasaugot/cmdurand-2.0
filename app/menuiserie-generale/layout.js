export const metadata = {
  title: "Menuiserie Générale Missillac | Menuisier Sur Mesure Pontchâteau (44)",
  description: "Spécialiste menuiserie générale à Missillac et Pontchâteau. Meubles sur mesure, agencement intérieur. Menuisier artisan Loire-Atlantique. Devis gratuit.",
  keywords: [
    "menuiserie générale missillac",
    "menuiserie générale pontchateau", 
    "menuisier sur mesure 44",
    "meubles sur mesure loire atlantique",
    "agencement intérieur missillac",
    "menuiserie artisanale pontchateau",
    "placard sur mesure 44",
    "dressing sur mesure missillac",
    "bibliothèque sur mesure pontchateau",
    "menuisier artisan loire atlantique",
    "ébénisterie 44",
    "escalier bois missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/menuiserie-generale"
  },
  openGraph: {
    title: "Menuiserie Générale Missillac | Menuisier Artisan Sur Mesure",
    description: "Menuiserie générale sur mesure à Missillac. Spécialiste meubles et agencement Loire-Atlantique.",
    url: "https://www.cmdurand.fr/menuiserie-generale",
  }
};

export default function MenuiserieGeneraleLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à la menuiserie générale */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Menuiserie Générale",
            "description": "Services de menuiserie générale et meubles sur mesure à Missillac et Pontchâteau",
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
            "serviceType": "Menuiserie générale",
            "additionalType": [
              "Meubles sur mesure",
              "Agencement intérieur",
              "Placard sur mesure",
              "Dressing",
              "Bibliothèque",
              "Escalier bois"
            ]
          })
        }}
      />
      {children}
    </>
  );
}