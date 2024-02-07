"use client";

import Image from "next/image";
import React, { useState } from "react";
import preau from "/assets/img/menuiserie-g.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function MenuiserieGenerale() {
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
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[300px] z-20 dark-shadow"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            className="capitalize text-black text-center text-4xl lg:text-5xl font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Menuiserie Générale
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Que ce soit pour la fabrication sur mesure de meubles, la pose de fenêtres et portes, ou
            la création d&apos;éléments de décoration intérieure, notre équipe expérimentée met tout
            son savoir-faire au service de vos projets. Nous comprenons que chaque détail compte,
            c&apos;est pourquoi nous accordons une attention particulière à la sélection des
            matériaux et à la précision de la fabrication. Que vous souhaitiez apporter une touche
            d&apos;élégance à votre intérieur ou améliorer la fonctionnalité de vos espaces, nous
            sommes là pour concrétiser vos idées avec des solutions sur mesure et durables. Faites
            confiance à Charpente Menuiserie Durand pour tous vos besoins en menuiserie générale, et
            laissez-nous transformer votre vision en réalité, avec passion et expertise.
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

export default MenuiserieGenerale;
