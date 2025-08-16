"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import CarportHero from "@/components/services-pages/carport-page/CarportHero";
import CarportIntro from "@/components/services-pages/carport-page/CarportIntro";
import CarportGallery from "@/components/services-pages/carport-page/CarportGallery";
import CarportAdvantages from "@/components/services-pages/carport-page/CarportAdvantages";
import CarportCTA from "@/components/services-pages/carport-page/CarportCTA";

function Carport() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = ["/assets/img/carport/img1.webp"];

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