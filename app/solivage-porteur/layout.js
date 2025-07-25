export const metadata = {
  title: "Solivage Porteur Missillac | Plancher Bois Pontchâteau (44)",
  description: "Spécialiste solivage porteur et plancher bois à Missillac et Pontchâteau. Renforcement structure, création plancher. Charpentier Loire-Atlantique. Devis gratuit.",
  keywords: [
    "solivage porteur missillac",
    "solivage porteur pontchateau", 
    "plancher bois 44",
    "solivage loire atlantique",
    "renforcement plancher missillac",
    "poutre porteuse pontchateau",
    "structure plancher 44",
    "solivage traditionnel missillac",
    "plancher porteur pontchateau",
    "charpentier plancher loire atlantique",
    "rénovation plancher 44",
    "création plancher missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/solivage-porteur"
  },
  openGraph: {
    title: "Solivage Porteur Missillac | Spécialiste Plancher Bois",
    description: "Solivage porteur et plancher bois à Missillac. Spécialiste structure plancher Loire-Atlantique.",
    url: "https://www.cmdurand.fr/solivage-porteur",
  }
};

export default function SolivageLayout({ children }) {
  return (
    <>
      {/* Structured Data spécifique au solivage porteur */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solivage Porteur",
            "description": "Services de solivage porteur et création de planchers bois à Missillac et Pontchâteau",
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
            "serviceType": "Solivage porteur",
            "additionalType": [
              "Plancher bois",
              "Renforcement plancher",
              "Poutre porteuse",
              "Structure plancher",
              "Solivage traditionnel",
              "Création plancher"
            ]
          })
        }}
      />
      {children}
    </>
  );
}