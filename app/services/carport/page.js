"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import CarportHero from "@/components/services-pages/carport-page/CarportHero";
import CarportIntro from "@/components/services-pages/carport-page/CarportIntro";
import CarportGallery from "@/components/services-pages/carport-page/CarportGallery";
import CarportAdvantages from "@/components/services-pages/carport-page/CarportAdvantages";
import CarportCTA from "@/components/services-pages/carport-page/CarportCTA";

function Carport() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = ["/assets/img/carport/img1.webp","/assets/img/carport/Carport_Structure_Bois_Bardage_Douglas_2020/chantier-3.jpg", "/assets/img/carport/Charpente_Industrielle_Carport_Traditionnel_2021/chantier-3.jpg"];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
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