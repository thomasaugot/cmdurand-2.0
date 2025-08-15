"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import ExtensionOssatureHero from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureHero";
import ExtensionOssatureIntro from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureIntro";
import ExtensionOssatureGallery from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureGallery";
import ExtensionOssatureBenefits from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureBenefits";
import ExtensionOssatureCTA from "@/components/services-pages/extension-ou-maison-ossature-page/ExtensionOssatureCTA";

import img1 from "@/assets/img/extension-maison-ossature/img1.webp";
import img2 from "@/assets/img/extension-maison-ossature/img2.webp";
import img3 from "@/assets/img/extension-maison-ossature/img3.webp";
import img4 from "@/assets/img/extension-maison-ossature/img4.webp";
import img5 from "@/assets/img/extension-maison-ossature/img5.webp";
import img6 from "@/assets/img/extension-maison-ossature/img6.webp";
import img7 from "@/assets/img/extension-maison-ossature/img7.webp";
import img8 from "@/assets/img/extension-maison-ossature/img8.webp";

function ExtensionOssature() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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