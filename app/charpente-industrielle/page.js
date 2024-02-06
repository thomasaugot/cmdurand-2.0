"use client";

import Image from "next/image";
import React, { useState } from "react";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function CharpenteIndustrielle() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRedirect = () => {};

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 lg:px-36 py-[150px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <BackToHomepageButton />
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row justify-center gap-8">
        <Image
          src={charpenteIndus}
          width={220}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[350px] z-20 dark-shadow"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-center text-4xl lg:text-5xl xl:text-nowrap font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Charpente industrielle
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Chez nous, la charpente industrielle va bien au-delà de simples structures en bois.
            C&apos;est notre art, notre passion et notre expertise. Nous nous engageons à fournir à
            nos clients des solutions innovantes et durables pour leurs projets de construction. Que
            vous construisiez un entrepôt, un complexe industriel ou tout autre bâtiment nécessitant
            une charpente solide, nous sommes là pour vous accompagner à chaque étape. Notre équipe
            hautement qualifiée travaille avec précision et efficacité pour concevoir et installer
            des charpentes qui répondent aux normes les plus strictes en matière de qualité et de
            sécurité. Avec notre expérience éprouvée et notre engagement envers l&apos;excellence,
            vous pouvez avoir confiance que votre projet de charpente industrielle est entre de
            bonnes mains avec nous.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6 lg:gap-0">
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

export default CharpenteIndustrielle;
