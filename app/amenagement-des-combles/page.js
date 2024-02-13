"use client";

import Image from "next/image";
import React, { useState } from "react";
import preau from "/assets/img/préau.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function AmenagementCombles() {
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
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="capitalize tracking-wider text-black text-center text-4xl lg:text-5xl font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Aménagement des Combles
          </motion.h1>
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}>
            Que vous cherchiez à créer une chambre supplémentaire, un bureau à domicile, une salle
            de jeux pour les enfants ou tout autre espace fonctionnel, notre équipe expérimentée est
            là pour vous aider à réaliser votre projet. Nous comprenons l&apos;importance de tirer
            le meilleur parti de chaque mètre carré de votre maison, et nous travaillons en étroite
            collaboration avec vous pour concevoir un aménagement des combles qui répond à vos
            besoins, à votre style de vie et à votre budget. Avec notre expertise en charpente et en
            menuiserie, nous pouvons transformer vos combles en un espace utilisable et confortable,
            tout en préservant l&apos;intégrité structurelle de votre maison. Nous utilisons des
            matériaux de haute qualité et des techniques de construction innovantes pour assurer la
            solidité, la durabilité et la sécurité de chaque projet. Laissez-nous vous aider à
            libérer le potentiel inexploité de vos combles et à créer un espace supplémentaire qui
            répond à vos besoins et à ceux de votre famille. Contactez-nous dès aujourd&apos;hui
            pour discuter de votre projet d&apos;aménagement des combles avec l&apos;équipe de
            Charpente Menuiserie Durand.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6">
            <p
              className={`${dosisFont.className} text-darkGrey font-semibold w-[80vw] mx-auto text-center lg:text-left`}
            >
              Des questions? Nous sommes là pour vous renseigner !
            </p>
            <button
              onClick={handleToggleForm}
              className={`${dosisFont.className} primary-button flex primary-button-bg dark-shadow text-nowrap mx-auto`}
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

export default AmenagementCombles;
