"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import TerrasseHero from "@/components/services-pages/terrasse-page/TerrasseHero";
import TerrasseIntro from "@/components/services-pages/terrasse-page/TerrasseIntro";
import TerrasseGallery from "@/components/services-pages/terrasse-page/TerrasseGallery";
import TerrasseMaterials from "@/components/services-pages/terrasse-page/TerrasseMaterials";
import TerrasseCTA from "@/components/services-pages/terrasse-page/TerrasseCTA";

function Terrasse() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/terrasse/img1.webp",
    "/assets/img/terrasse/img2.webp",
    "/assets/img/terrasse/img3.webp"
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <TerrasseHero />

      <TerrasseIntro />

      <TerrasseGallery images={images} />

      <TerrasseMaterials />

      <TerrasseCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Terrasse;