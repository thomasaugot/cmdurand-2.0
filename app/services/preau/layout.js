export const metadata = {
  title: "Préau Bois Missillac | Abri Extérieur Pontchâteau (44)",
  description:
    "Construction préau bois sur mesure à Missillac et Pontchâteau. Abri extérieur, pergola couverte. Charpentier spécialiste Loire-Atlantique. Devis gratuit.",
  keywords: [
    "préau missillac",
    "préau pontchateau",
    "préau bois 44",
    "abri extérieur loire atlantique",
    "pergola couverte missillac",
    "préau sur mesure pontchateau",
    "abri jardin bois 44",
    "construction préau missillac",
    "préau adossé pontchateau",
    "abri terrasse loire atlantique",
    "préau moderne 44",
    "shelter bois missillac",
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/preau",
  },
  openGraph: {
    title: "Préau Bois Missillac | Construction Abri Extérieur",
    description:
      "Construction de préau bois sur mesure à Missillac. Spécialiste abri extérieur Loire-Atlantique.",
    url: "https://www.cmdurand.fr/preau",
  },
};

export default function PreauLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique au préau */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Préau",
            description:
              "Services de construction de préaux en bois pour espaces extérieurs à Missillac et Pontchâteau",
            provider: {
              "@type": "LocalBusiness",
              name: "Charpente Menuiserie Durand",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Missillac",
                addressRegion: "Loire-Atlantique",
                postalCode: "44780",
                addressCountry: "FR",
              },
            },
            areaServed: [
              "Missillac",
              "Pontchâteau",
              "Loire-Atlantique",
              "Besné",
              "Crossac",
              "Donges",
              "Prinquiau",
              "La Baule",
              "Pornichet",
            ],
            serviceType: "Préau",
            additionalType: [
              "Abri extérieur",
              "Pergola couverte",
              "Préau bois",
              "Préau sur mesure",
              "Abri jardin",
              "Abri terrasse",
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
