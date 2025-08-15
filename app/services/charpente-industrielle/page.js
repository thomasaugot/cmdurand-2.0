"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import CharpenteIndustrielleHero from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleHero";
import CharpenteIndustrielleIntro from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleIntro";
import CharpenteIndustrielleGallery from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleGallery";
import CharpenteIndustrielleSpecs from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleSpecs";
import CharpenteIndustrielleCTA from "@/components/services-pages/charpente-industrielle-page/CharpenteIndustrielleCTA";

import img1 from "@/assets/img/charpente-industrielle/img1.webp";

function CharpenteIndustrielle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

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