export const metadata = {
  title: "Réalisations Charpente Menuiserie Missillac | Portfolio Pontchâteau (44)",
  description: "Découvrez nos réalisations de charpente et menuiserie à Missillac et Pontchâteau. Portfolio de nos projets en Loire-Atlantique : charpente, extension, terrasse, bardage.",
  keywords: [
    "réalisations charpente missillac",
    "portfolio charpentier pontchâteau",
    "projets charpente loire atlantique",
    "réalisations menuiserie 44",
    "chantiers charpente missillac",
    "photos travaux charpentier pontchâteau",
    "exemples charpente traditionnelle 44",
    "réalisations extension bois loire atlantique",
    "photos terrasse bois missillac",
    "portfolio bardage pontchâteau"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/nos-realisations"
  },
  openGraph: {
    title: "Réalisations Charpente Menuiserie Missillac | Portfolio Loire-Atlantique",
    description: "Découvrez nos réalisations de charpente et menuiserie en Loire-Atlantique. Portfolio de projets à Missillac et Pontchâteau.",
    url: "https://www.cmdurand.fr/nos-realisations",
  }
};

export default function NosRealisationsLayout({ children }) {
  return (
    <>
      {/* Structured Data pour la page réalisations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Réalisations Charpente Menuiserie Durand",
            "description": "Portfolio de nos réalisations de charpente et menuiserie à Missillac et Pontchâteau",
            "url": "https://www.cmdurand.fr/nos-realisations",
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
            "about": [
              {
                "@type": "Service",
                "name": "Charpente Traditionnelle",
                "description": "Réalisations de charpente traditionnelle en Loire-Atlantique"
              },
              {
                "@type": "Service", 
                "name": "Extension Ossature Bois",
                "description": "Portfolio d'extensions ossature bois à Missillac et Pontchâteau"
              },
              {
                "@type": "Service",
                "name": "Terrasse Bois",
                "description": "Exemples de terrasses en bois réalisées en Loire-Atlantique"
              },
              {
                "@type": "Service",
                "name": "Bardage",
                "description": "Réalisations de bardage bois et composite en Loire-Atlantique"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}