"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import MenuiserieGeneraleHero from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleHero";
import MenuiserieGeneraleIntro from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleIntro";
import MenuiserieGeneraleGallery from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleGallery";
import MenuiserieGeneraleServices from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleServices";
import MenuiserieGeneraleCTA from "@/components/services-pages/menuiserie-generale-page/MenuiserieGeneraleCTA";

function MenuiserieGenerale() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = ["/assets/img/menuiserie-générale/img1.webp"];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

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