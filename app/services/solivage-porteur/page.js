"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import SolivageHero from "@/components/services-pages/solivage-page/SolivageHero";
import SolivageIntro from "@/components/services-pages/solivage-page/SolivageIntro";
import SolivageGallery from "@/components/services-pages/solivage-page/SolivageGallery";
import SolivageTechniques from "@/components/services-pages/solivage-page/SolivageTechniques";
import SolivageCTA from "@/components/services-pages/solivage-page/SolivageCTA";

function Solivage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/solivage-porteur/img1.webp",
    "/assets/img/solivage-porteur/img2.webp",
    "/assets/img/solivage-porteur/img3.webp"
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <SolivageHero />

      <SolivageIntro />

      <SolivageGallery images={images} />

      <SolivageTechniques />

      <SolivageCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Solivage;