"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import CarportHero from "@/components/services-pages/carport-page/CarportHero";
import CarportIntro from "@/components/services-pages/carport-page/CarportIntro";
import CarportGallery from "@/components/services-pages/carport-page/CarportGallery";
import CarportAdvantages from "@/components/services-pages/carport-page/CarportAdvantages";
import CarportCTA from "@/components/services-pages/carport-page/CarportCTA";

import img1 from "@/assets/img/carport/img1.webp";

function Carport() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <CarportHero />

      <CarportIntro />

      <CarportGallery images={images} />

      <CarportAdvantages />

      <CarportCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Carport;