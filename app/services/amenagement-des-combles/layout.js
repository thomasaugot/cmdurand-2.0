export const metadata = {
  title: "Aménagement Combles Missillac | Combles Pontchâteau (44)",
  description: "Spécialiste aménagement combles à Missillac et Pontchâteau. Transformation combles en chambres, bureau. Charpentier expert Loire-Atlantique. Devis gratuit.",
  keywords: [
    "aménagement combles missillac",
    "combles pontchateau", 
    "aménagement combles 44",
    "transformation combles loire atlantique",
    "combles aménageables missillac",
    "isolation combles pontchateau",
    "chambre dans les combles 44",
    "bureau combles missillac",
    "aménagement grenier pontchateau",
    "charpentier combles loire atlantique",
    "surélévation maison 44",
    "extension combles missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/amenagement-des-combles"
  },
  openGraph: {
    title: "Aménagement Combles Missillac | Expert Transformation Combles",
    description: "Transformez vos combles en espace habitable à Missillac. Charpentier spécialiste aménagement combles Loire-Atlantique.",
    url: "https://www.cmdurand.fr/amenagement-des-combles",
  }
};

export default function AmenagementComblesLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique à l'aménagement des combles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Aménagement des Combles",
            "description": "Services d'aménagement et transformation de combles en espaces habitables à Missillac et Pontchâteau",
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
              "Prinquiau"
            ],
            "serviceType": "Aménagement combles",
            "additionalType": [
              "Transformation combles",
              "Isolation combles",
              "Création chambre combles",
              "Bureau dans combles"
            ]
          })
        }}
      />
      {children}
    </>
  );
}