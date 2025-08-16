"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import CharpenteHero from "@/components/services-pages/charpente-traditionelle-page/CharpenteHero";
import CharpenteIntro from "@/components/services-pages/charpente-traditionelle-page/CharpenteIntro";
import CharpenteGallery from "@/components/services-pages/charpente-traditionelle-page/CharpenteGallery";
import CharpenteProcess from "@/components/services-pages/charpente-traditionelle-page/CharpenteProcess";
import CharpenteCTA from "@/components/services-pages/charpente-traditionelle-page/CharpenteCTA";

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/charpente-traditionelle/img1.webp",
    "/assets/img/charpente-traditionelle/img2.webp",
    "/assets/img/charpente-traditionelle/img3.webp",
    "/assets/img/charpente-traditionelle/img4.webp",
    "/assets/img/charpente-traditionelle/img5.webp",
    "/assets/img/charpente-traditionelle/img6.webp",
    "/assets/img/charpente-traditionelle/img7.webp",
    "/assets/img/charpente-traditionelle/img8.webp",
    "/assets/img/charpente-traditionelle/img9.webp",
    "/assets/img/charpente-traditionelle/img10.webp",
    "/assets/img/charpente-traditionelle/img11.webp",
    "/assets/img/charpente-traditionelle/img13.webp",
    "/assets/img/charpente-traditionelle/img14.webp",
    "/assets/img/charpente-traditionelle/img15.webp",
    "/assets/img/charpente-traditionelle/img16.webp",
    "/assets/img/charpente-traditionelle/img17.webp",
    "/assets/img/charpente-traditionelle/img18.webp",
    "/assets/img/charpente-traditionelle/img19.webp",
    "/assets/img/charpente-traditionelle/img20.webp",
    "/assets/img/charpente-traditionelle/img21.webp",
    "/assets/img/charpente-traditionelle/img22.webp",
    "/assets/img/charpente-traditionelle/img23.webp",
    "/assets/img/charpente-traditionelle/img24.webp",
    "/assets/img/charpente-traditionelle/img25.webp",
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <CharpenteHero />

      <CharpenteIntro />

      <CharpenteGallery images={images} />

      <CharpenteProcess />

      <CharpenteCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default CharpenteTraditionelle;