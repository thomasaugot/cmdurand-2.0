"use client";

import Image from "next/image";
import React, { useState } from "react";
import charpenteTraditionelle from "/assets/img/charp-trad.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRedirect = () => {};

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 lg:px-48 py-[150px] flex flex-col gap-10 relative brick-bg">
      <BackToHomepageButton />
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row">
        <svg
          width="300"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-4 left-4 z-10 dark-shadow hidden lg:block "
        >
          <rect width="100%" height="100%" fill="#f37139" />
        </svg>
        <Image
          src={charpenteTraditionelle}
          width={200}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[300px] z-20"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-center lg:text-left text-4xl lg:text-5xl lg:text-nowrap font-semibold mt-16 lg:mt-0"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Charpente traditionelle
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Dans notre service de Charpente Traditionnelle, chaque pièce de bois raconte une
            histoire séculaire. Notre équipe d&apos;artisans dévoués sculpte avec précision,
            fusionnant savoir-faire traditionnel et passion pour créer des structures qui défient le
            temps. Chaque projet incarne l&apos;excellence de notre métier, alliant expertise,
            dévotion et un profond respect pour le matériau et son héritage.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 align-center justify-center gap-6 lg:gap-0">
            <p className="text-darkGrey font-semibold w-[80vw] mx-auto text-center lg:text-left">
              Des questions? Nous sommes là pour vous renseigner !
            </p>
            <button
              onClick={handleToggleForm}
              className="primary-button flex primary-button-bg dark-shadow text-nowrap mx-auto"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default CharpenteTraditionelle;
