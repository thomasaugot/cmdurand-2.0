"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import BardageHero from "@/components/services-pages/bardage-page/BardageHero";
import BardageIntro from "@/components/services-pages/bardage-page/BardageIntro";
import BardageGallery from "@/components/services-pages/bardage-page/BardageGallery";
import BardageTypes from "@/components/services-pages/bardage-page/BardageTypes";
import BardageCTA from "@/components/services-pages/bardage-page/BardageCTA";

import img1 from "@/assets/img/bardage/img1.webp";
import img2 from "@/assets/img/bardage/img2.webp";
import img3 from "@/assets/img/bardage/img3.webp";
import img4 from "@/assets/img/bardage/img4.webp";
import img5 from "@/assets/img/bardage/img5.webp";
import img6 from "@/assets/img/bardage/img6.webp";
import img7 from "@/assets/img/bardage/img7.webp";
import img8 from "@/assets/img/bardage/img8.webp";
import img9 from "@/assets/img/bardage/img9.webp";
import img10 from "@/assets/img/bardage/img10.webp";

function Bardage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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