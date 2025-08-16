"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
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
    "/assets/img/extension-maison-ossature/img3.webp",
    "/assets/img/extension-maison-ossature/img4.webp",
    "/assets/img/extension-maison-ossature/img5.webp",
    "/assets/img/extension-maison-ossature/img6.webp",
    "/assets/img/extension-maison-ossature/img7.webp",
    "/assets/img/extension-maison-ossature/img8.webp"
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

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