"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import CharpenteHero from "@/components/services-pages/charpente-traditionnelle-page/CharpenteHero";
import CharpenteIntro from "@/components/services-pages/charpente-traditionnelle-page/CharpenteIntro";
import CharpenteGallery from "@/components/services-pages/charpente-traditionnelle-page/CharpenteGallery";
import CharpenteProcess from "@/components/services-pages/charpente-traditionnelle-page/CharpenteProcess";
import CharpenteCTA from "@/components/services-pages/charpente-traditionnelle-page/CharpenteCTA";

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/charpente-traditionnelle/img2.webp",
    "/assets/img/charpente-traditionnelle/img3.webp",
    "/assets/img/charpente-traditionnelle/img4.webp",
    "/assets/img/charpente-traditionnelle/img5.webp",
    "/assets/img/charpente-traditionnelle/img6.webp",
    "/assets/img/charpente-traditionnelle/img7.webp",
    "/assets/img/charpente-traditionnelle/img9.webp",
    "/assets/img/charpente-traditionnelle/img11.webp",
    "/assets/img/charpente-traditionnelle/img16.webp",
    "/assets/img/charpente-traditionnelle/img17.webp",
    "/assets/img/charpente-traditionnelle/img18.webp",
    "/assets/img/charpente-traditionnelle/img19.webp",
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
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
