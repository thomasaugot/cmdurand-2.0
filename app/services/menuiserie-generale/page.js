"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import MenuiserieGeneraleHero from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleHero";
import MenuiserieGeneraleIntro from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleIntro";
import MenuiserieGeneraleGallery from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleGallery";
import MenuiserieGeneraleServices from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleServices";
import MenuiserieGeneraleCTA from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleCTA";

function MenuiserieGenerale() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = ["/assets/img/menuiserie-générale/img1.webp", "/assets/img/menuiserie-générale/Habillage_Escalier_Beton_Lamelle_Colle_Chene_2020/chantier-3.jpg", "/assets/img/menuiserie-générale/Parquet_Teck_Pont_Bateau_Salle_Bain_2020/chantier-1.jpg"];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <MenuiserieGeneraleHero />

      <MenuiserieGeneraleIntro />

      <MenuiserieGeneraleGallery images={images} />

      <MenuiserieGeneraleServices />

      <MenuiserieGeneraleCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default MenuiserieGenerale;