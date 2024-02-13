"use client";

import Image from "next/image";
import React, { useState } from "react";
import charpenteTraditionelle from "/assets/img/charp-trad.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function CharpenteTraditionelle() {
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
          src={charpenteTraditionelle}
          width={200}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[290px] z-20 dark-shadow"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            className="capitalize text-black tracking-wider text-center text-4xl lg:text-5xl xl:text-nowrap font-semibold mt-8 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Charpente traditionelle
          </motion.h1>
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}>
            Chez nous, la Charpente Traditionnelle incarne l&apos;essence même du savoir-faire
            artisanal. Chaque pièce de bois est choisie avec soin, travaillée avec précision, pour
            créer des structures robustes et intemporelles. Notre équipe de charpentiers
            expérimentés met tout son cœur et son expertise dans chaque projet, qu&apos;il
            s&apos;agisse de la restauration d&apos;une vieille maison de campagne ou de la
            construction d&apos;une nouvelle demeure. Nous comprenons l&apos;importance de préserver
            les techniques traditionnelles tout en intégrant les innovations modernes pour garantir
            des résultats à la fois authentiques et durables. Avec nous, votre charpente
            traditionnelle est bien plus qu&apos;une simple structure : c&apos;est un témoignage de
            notre engagement envers l&apos;excellence et notre passion pour le métier.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6 lg:gap-0">
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

export default CharpenteTraditionelle;
