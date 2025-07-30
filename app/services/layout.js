export const metadata = {
  title: "Nos Services Charpente Menuiserie Missillac | Pontchâteau (44)",
  description: "Découvrez tous nos services de charpente et menuiserie à Missillac : charpente traditionnelle, extension ossature bois, terrasse, bardage. Artisan Loire-Atlantique.",
  keywords: [
    "services charpente missillac",
    "services menuiserie pontchateau",
    "charpentier loire atlantique",
    "menuisier 44",
    "artisan bois missillac",
    "charpente traditionnelle pontchateau",
    "extension ossature bois 44",
    "terrasse bois missillac",
    "bardage loire atlantique",
    "carport pontchateau",
    "aménagement combles 44"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/services"
  },
  openGraph: {
    title: "Services Charpente Menuiserie Missillac | Artisan Loire-Atlantique",
    description: "Tous nos services de charpente et menuiserie à Missillac et Pontchâteau. Expertise artisanale en Loire-Atlantique.",
    url: "https://www.cmdurand.fr/services",
  }
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {/* Structured Data pour la page services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Services Charpente Menuiserie",
            "description": "Tous nos services de charpente et menuiserie à Missillac et Pontchâteau",
            "url": "https://www.cmdurand.fr/services",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Charpente Menuiserie",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Charpente Traditionnelle",
                    "description": "Construction charpente traditionnelle en bois"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Extension Ossature Bois",
                    "description": "Extension et maison ossature bois sur mesure"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Menuiserie Générale",
                    "description": "Menuiserie sur mesure et agencement intérieur"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Terrasse Bois",
                    "description": "Construction terrasse bois et composite"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}