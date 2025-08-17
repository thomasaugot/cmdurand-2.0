"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import AmenagementComblesHero from "@/components/services-pages/amenagement-combles-page/AmenagementComblesHero";
import AmenagementComblesIntro from "@/components/services-pages/amenagement-combles-page/AmenagementComblesIntro";
import AmenagementComblesGallery from "@/components/services-pages/amenagement-combles-page/AmenagementComblesGallery";
import AmenagementComblesProcess from "@/components/services-pages/amenagement-combles-page/AmenagementComblesProcess";
import AmenagementComblesCTA from "@/components/services-pages/amenagement-combles-page/AmenagementComblesCTA";

function AmenagementCombles() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = ["/assets/img/aménagement-combles/img1.webp"];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">

      <AmenagementComblesHero />

      <AmenagementComblesIntro />

      <AmenagementComblesGallery images={images} />

      <AmenagementComblesProcess />

      <AmenagementComblesCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default AmenagementCombles;