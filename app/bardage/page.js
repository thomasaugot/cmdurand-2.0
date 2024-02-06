"use client";

import Image from "next/image";
import React, { useState } from "react";
import preau from "/assets/img/bardage.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function Bardage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRedirect = () => {};

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 md:px-36 lg:px-36 py-[150px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <BackToHomepageButton />
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row justify-center gap-8">
        <Image
          src={preau}
          width={300}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[360px] z-20 dark-shadow"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-center text-4xl lg:text-5xl font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Bardage (Différents types de revêtements extérieurs)
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Chez Charpente Menuiserie Durand, nous comprenons l&apos;importance d&apos;un bardage de
            qualité pour protéger et embellir votre maison. Avec notre service de bardage, nous vous
            offrons une gamme complète de revêtements extérieurs pour répondre à vos besoins
            spécifiques et mettre en valeur le caractère unique de votre propriété. Que vous
            recherchiez un aspect traditionnel avec du bois naturel, une esthétique moderne avec des
            matériaux composites, ou une solution pratique avec des revêtements en PVC, notre équipe
            expérimentée est là pour vous conseiller et réaliser votre projet avec expertise. Le
            bardage de votre maison ne se limite pas seulement à l&apos;esthétique ; il joue
            également un rôle crucial dans la protection contre les intempéries et les dommages
            causés par l&apos;exposition aux éléments extérieurs. C&apos;est pourquoi nous veillons
            à choisir des matériaux durables et résistants, tout en vous offrant une variété de
            styles et de finitions pour correspondre à vos préférences esthétiques. Avec notre
            savoir-faire artisanal et notre souci du détail, nous nous engageons à vous fournir un
            bardage de qualité supérieure qui ajoutera de la valeur et du caractère à votre maison.
            Faites confiance à Charpente Menuiserie Durand pour transformer l&apos;apparence
            extérieure de votre propriété et lui donner un nouveau souffle de vie.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6">
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

export default Bardage;
