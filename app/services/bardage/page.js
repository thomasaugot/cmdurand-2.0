"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import BardageHero from "@/components/services-pages/bardage-page/BardageHero";
import BardageIntro from "@/components/services-pages/bardage-page/BardageIntro";
import BardageGallery from "@/components/services-pages/bardage-page/BardageGallery";
import BardageTypes from "@/components/services-pages/bardage-page/BardageTypes";
import BardageCTA from "@/components/services-pages/bardage-page/BardageCTA";

function Bardage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/bardage/img1.webp",
    "/assets/img/bardage/img2.webp",
    "/assets/img/bardage/img3.webp",
    "/assets/img/bardage/img4.webp",
    "/assets/img/bardage/img5.webp",
    "/assets/img/bardage/img6.webp",
    "/assets/img/bardage/img7.webp",
    "/assets/img/bardage/img8.webp",
    "/assets/img/bardage/img9.webp",
    "/assets/img/bardage/img10.webp"
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <BardageHero />

      <BardageIntro />

      <BardageGallery images={images} />

      <BardageTypes />

      <BardageCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Bardage;