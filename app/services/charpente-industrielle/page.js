"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import CharpenteIndustrielleHero from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleHero";
import CharpenteIndustrielleIntro from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleIntro";
import CharpenteIndustrielleGallery from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleGallery";
import CharpenteIndustrielleSpecs from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleSpecs";
import CharpenteIndustrielleCTA from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleCTA";

function CharpenteIndustrielle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/charpente-industrielle/img1.webp",
    "/assets/img/charpente-industrielle/Charpente_Industrielle_2021/chantier-1.jpg",
    "/assets/img/charpente-industrielle/Charpente_Industrielle_Carport_Traditionnel_2021/chantier-2.jpg",
    "/assets/img/charpente-industrielle/Charpente_Industrielle_Zone_Amenageable_2021/chantier-5.jpg",
    "/assets/img/charpente-industrielle/Charpente_Industrielle_Maison_2021/chantier-6.jpg",
    "/assets/img/charpente-industrielle/Charpente_Industrielle_Carport_Traditionnel_2021/chantier-8.jpg",
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <CharpenteIndustrielleHero />

      <CharpenteIndustrielleIntro />

      <CharpenteIndustrielleGallery images={images} />

      <CharpenteIndustrielleSpecs />

      <CharpenteIndustrielleCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default CharpenteIndustrielle;
