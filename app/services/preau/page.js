"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import PreauHero from "@/components/services-pages/preau-page/PreauHero";
import PreauIntro from "@/components/services-pages/preau-page/PreauIntro";
import PreauGallery from "@/components/services-pages/preau-page/PreauGallery";
import PreauFeatures from "@/components/services-pages/preau-page/PreauFeatures";
import PreauCTA from "@/components/services-pages/preau-page/PreauCTA";

import img1 from "@/assets/img/préau/img1.webp";
import img2 from "@/assets/img/préau/img2.webp";
import img3 from "@/assets/img/préau/img3.webp";

function Préau() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1, img2, img3];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <PreauHero />

      <PreauIntro />

      <PreauGallery images={images} />

      <PreauFeatures />

      <PreauCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Préau;