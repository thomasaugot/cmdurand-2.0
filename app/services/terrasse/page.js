"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import TerrasseHero from "@/components/services-pages/terrasse-page/TerrasseHero";
import TerrasseIntro from "@/components/services-pages/terrasse-page/TerrasseIntro";
import TerrasseGallery from "@/components/services-pages/terrasse-page/TerrasseGallery";
import TerrasseMaterials from "@/components/services-pages/terrasse-page/TerrasseMaterials";
import TerrasseCTA from "@/components/services-pages/terrasse-page/TerrasseCTA";

import img1 from "@/assets/img/terrasse/img1.webp";
import img2 from "@/assets/img/terrasse/img2.webp";
import img3 from "@/assets/img/terrasse/img3.webp";

function Terrasse() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1, img2, img3];

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