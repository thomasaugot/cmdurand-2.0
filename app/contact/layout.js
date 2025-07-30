export const metadata = {
  title: "Contact Charpente Menuiserie Durand Missillac | Devis Gratuit (44)",
  description: "Contactez Charpente Menuiserie Durand à Missillac pour vos projets de charpente et menuiserie. Devis gratuit, conseil personnalisé. Zone d'intervention Loire-Atlantique.",
  keywords: [
    "contact charpentier missillac",
    "devis charpente pontchateau",
    "charpentier loire atlantique contact",
    "menuisier 44 contact",
    "devis gratuit charpente missillac",
    "contact artisan bois pontchateau",
    "charpente menuiserie durand contact",
    "téléphone charpentier 44",
    "rendez vous charpentier missillac"
  ],
  alternates: {
    canonical: "https://www.cmdurand.fr/contact"
  },
  openGraph: {
    title: "Contact Charpentier Missillac | Devis Gratuit Charpente Menuiserie",
    description: "Contactez-nous pour vos projets de charpente à Missillac. Devis gratuit et conseils personnalisés.",
    url: "https://www.cmdurand.fr/contact",
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Structured Data pour la page contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Charpente Menuiserie Durand",
            "description": "Contactez-nous pour vos projets de charpente et menuiserie à Missillac",
            "url": "https://www.cmdurand.fr/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Charpente Menuiserie Durand",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Z.A. la Pommeraie, Rue des Indes",
                "addressLocality": "Missillac", 
                "addressRegion": "Loire-Atlantique",
                "postalCode": "44780",
                "addressCountry": "FR"
              },
              "telephone": "+33676508551",
              "email": "charpente.menuiserie.durand@gmail.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:30"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.4167,
                "longitude": -2.1500
              },
              "areaServed": [
                "Missillac",
                "Pontchâteau",
                "Loire-Atlantique",
                "Besné",
                "Crossac",
                "Donges",
                "Prinquiau"
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}