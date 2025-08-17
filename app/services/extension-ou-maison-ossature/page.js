"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import ExtensionOssatureHero from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureHero";
import ExtensionOssatureIntro from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureIntro";
import ExtensionOssatureGallery from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureGallery";
import ExtensionOssatureBenefits from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureBenefits";
import ExtensionOssatureCTA from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureCTA";

function ExtensionOssature() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    "/assets/img/extension-maison-ossature/img1.webp",
    "/assets/img/extension-maison-ossature/img2.webp",
    "/assets/img/extension-maison-ossature/Agrandissement_Ossature_Bois_2025/chantier-1.jpg",
    "/assets/img/extension-maison-ossature/Bardage_Maison_Ossature_Bois_2024/chantier-1.jpg",
    "/assets/img/extension-maison-ossature/Maison_Ossature_Bois_Charpente_2024/chantier-8.jpg",
    "/assets/img/bardage/img3.webp",
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ExtensionOssatureHero />

      <ExtensionOssatureIntro />

      <ExtensionOssatureGallery images={images} />

      <ExtensionOssatureBenefits />

      <ExtensionOssatureCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default ExtensionOssature;
