"use client";

import Image from "next/image";
import React, { useState } from "react";
import charpenteTraditionelle from "/assets/img/charp-trad.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import logobg from "/app/logo-bw.png";
import Link from "next/link";
import PopupForm from "@/components/PopupForm";

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRedirect = () => {};

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 md:px-48 py-[150px] flex flex-col gap-10 relative brick-bg">
      <BackToHomepageButton />
      <div className="relative flex flex-col text-center items-center md:flex-row">
        <svg
          width="300"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-4 left-4 z-10 dark-shadow"
        >
          <rect width="100%" height="100%" fill="#f37139" />
        </svg>
        <Image
          src={charpenteTraditionelle}
          width={200}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[300px] z-20"
        />
        <div className="flex flex-col md:ml-20 relative w-[90vw] md:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-center md:text-left text-4xl md:text-5xl lg:text-nowrap font-semibold mt-16 md:mt-0"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Charpente traditionelle
          </motion.h1>
          <p className="text-darkGrey w-[90vw] md:w-full mt-6 md:mt-10">
            Dans notre service de Charpente Traditionnelle, chaque pièce de bois raconte une
            histoire séculaire. Notre équipe d&apos;artisans dévoués sculpte avec précision,
            fusionnant savoir-faire traditionnel et passion pour créer des structures qui défient le
            temps. Chaque projet incarne l&apos;excellence de notre métier, alliant expertise,
            dévotion et un profond respect pour le matériau et son héritage.
          </p>
          <div className="flex flex-col md:flex-row mt-10 align-center justify-center gap-6 md:gap-0">
            <p className="text-darkGrey font-semibold w-[80vw] mx-auto text-center md:text-left">
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
