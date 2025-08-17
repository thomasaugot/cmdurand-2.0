"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import MenuiserieExterieureHero from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureHero";
import MenuiserieExterieureIntro from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureIntro";
import MenuiserieExterieureGallery from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureGallery";
import MenuiserieExterieureProducts from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureProducts";
import MenuiserieExterieureCTA from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureCTA";

function MenuiserieExterieure() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/menuiserie-extérieure/img1.webp",
    "/assets/img/menuiserie-extérieure/Abri_Jardin_Ossature_Bois_Terrasse_Cumaru_2020/chantier-3.jpg",
    "/assets/img/menuiserie-extérieure/Fabrication_Pergola_2020/chantier-1.jpg",
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <MenuiserieExterieureHero />

      <MenuiserieExterieureIntro />

      <MenuiserieExterieureGallery images={images} />

      <MenuiserieExterieureProducts />

      <MenuiserieExterieureCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default MenuiserieExterieure;
