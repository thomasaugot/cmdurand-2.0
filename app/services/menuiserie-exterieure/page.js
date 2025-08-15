"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import MenuiserieExterieureHero from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureHero";
import MenuiserieExterieureIntro from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureIntro";
import MenuiserieExterieureGallery from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureGallery";
import MenuiserieExterieureProducts from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureProducts";
import MenuiserieExterieureCTA from "@/components/services-pages/menuiserie-exterieure-page/MenuiserieExterieureCTA";

import img1 from "@/assets/img/menuiserie-extérieure/img1.webp";

function MenuiserieExterieure() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

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