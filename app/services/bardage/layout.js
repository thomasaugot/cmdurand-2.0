export const metadata = {
  title: "Bardage Bois Missillac | Revêtement Extérieur Pontchâteau (44)",
  description: "Spécialiste bardage bois et revêtements extérieurs à Missillac et Pontchâteau. Bardage composite, PVC, bois naturel. Charpentier Loire-Atlantique. Devis gratuit.",
  keywords: [
    "bardage missillac",
    "bardage pontchateau", 
    "bardage bois 44",
    "revêtement extérieur loire atlantique",
    "bardage composite missillac",
    "bardage pvc pontchateau",
    "façade bois 44",
    "isolation extérieure bardage missillac",
    "bardage claire voie pontchateau",
    "entreprise bardage loire atlantique",
    "rénovation façade bardage 44",
    "bardage vertical horizontal missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/bardage"
  },
  openGraph: {
    title: "Bardage Bois Missillac | Expert Revêtement Extérieur",
    description: "Pose de bardage bois, composite et PVC à Missillac. Spécialiste revêtements extérieurs Loire-Atlantique.",
    url: "https://www.cmdurand.fr/bardage",
  }
};

export default function BardageLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique au bardage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bardage et Revêtements Extérieurs",
            "description": "Services de pose de bardage bois, composite et PVC pour revêtements extérieurs à Missillac et Pontchâteau",
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
            "serviceType": "Bardage",
            "additionalType": [
              "Bardage bois",
              "Bardage composite",
              "Bardage PVC",
              "Revêtement extérieur",
              "Isolation par l'extérieur",
              "Rénovation façade"
            ]
          })
        }}
      />
      {children}
    </>
  );
}