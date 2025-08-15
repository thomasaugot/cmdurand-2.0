"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import CharpenteHero from "@/components/services-pages/charpente-traditionelle-page/CharpenteHero";
import CharpenteIntro from "@/components/services-pages/charpente-traditionelle-page/CharpenteIntro";
import CharpenteGallery from "@/components/services-pages/charpente-traditionelle-page/CharpenteGallery";
import CharpenteProcess from "@/components/services-pages/charpente-traditionelle-page/CharpenteProcess";
import CharpenteCTA from "@/components/services-pages/charpente-traditionelle-page/CharpenteCTA";

import img1 from "@/assets/img/charpente-traditionelle/img1.webp";
import img2 from "@/assets/img/charpente-traditionelle/img2.webp";
import img3 from "@/assets/img/charpente-traditionelle/img3.webp";
import img4 from "@/assets/img/charpente-traditionelle/img4.webp";
import img5 from "@/assets/img/charpente-traditionelle/img5.webp";
import img6 from "@/assets/img/charpente-traditionelle/img6.webp";
import img7 from "@/assets/img/charpente-traditionelle/img7.webp";
import img8 from "@/assets/img/charpente-traditionelle/img8.webp";
import img9 from "@/assets/img/charpente-traditionelle/img9.webp";
import img10 from "@/assets/img/charpente-traditionelle/img10.webp";
import img11 from "@/assets/img/charpente-traditionelle/img11.webp";
import img13 from "@/assets/img/charpente-traditionelle/img13.webp";
import img14 from "@/assets/img/charpente-traditionelle/img14.webp";
import img15 from "@/assets/img/charpente-traditionelle/img15.webp";
import img16 from "@/assets/img/charpente-traditionelle/img16.webp";
import img17 from "@/assets/img/charpente-traditionelle/img17.webp";
import img18 from "@/assets/img/charpente-traditionelle/img18.webp";
import img19 from "@/assets/img/charpente-traditionelle/img19.webp";
import img20 from "@/assets/img/charpente-traditionelle/img20.webp";
import img21 from "@/assets/img/charpente-traditionelle/img21.webp";
import img22 from "@/assets/img/charpente-traditionelle/img22.webp";
import img23 from "@/assets/img/charpente-traditionelle/img23.webp";
import img24 from "@/assets/img/charpente-traditionelle/img24.webp";
import img25 from "@/assets/img/charpente-traditionelle/img25.webp";

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="min-h-screen">
      <ContactDetailsService />

      <CharpenteHero />

      <CharpenteIntro />

      <CharpenteGallery images={images} />

      <CharpenteProcess />

      <CharpenteCTA handleToggleForm={handleToggleForm} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default CharpenteTraditionelle;