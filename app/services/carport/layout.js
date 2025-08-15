export const metadata = {
  title: "Carport Bois Missillac | Abri Voiture Pontchâteau (44)",
  description: "Construction carport bois sur mesure à Missillac et Pontchâteau. Abri voiture, garage ouvert. Charpentier spécialiste Loire-Atlantique. Devis gratuit.",
  keywords: [
    "carport missillac",
    "carport pontchateau", 
    "carport bois 44",
    "abri voiture loire atlantique",
    "garage ouvert missillac",
    "carport sur mesure pontchateau",
    "abri auto bois 44",
    "construction carport missillac",
    "carport adossé pontchateau",
    "carport camping car loire atlantique",
    "abri véhicule bois 44",
    "carport aluminium missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/carport"
  },
  openGraph: {
    title: "Carport Bois Missillac | Construction Abri Voiture",
    description: "Construction de carport bois sur mesure à Missillac. Spécialiste abri voiture Loire-Atlantique.",
    url: "https://www.cmdurand.fr/carport",
  }
};

export default function CarportLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique au carport */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction Carport",
            "description": "Services de construction de carports en bois pour protection véhicules à Missillac et Pontchâteau",
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
            "serviceType": "Carport",
            "additionalType": [
              "Abri voiture",
              "Garage ouvert",
              "Carport bois",
              "Carport sur mesure",
              "Abri véhicule",
              "Carport adossé"
            ]
          })
        }}
      />
      {children}
    </>
  );
}