"use client";

import Image from "next/image";
import React, { useState } from "react";
import preau from "/assets/img/terrasse.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function Terrasse() {
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
            Terrasse
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Transformez votre espace extérieur en un havre de paix avec nos services de construction
            de terrasses. Chez Charpente Menuiserie Durand, nous comprenons l&apos;importance
            d&apos;avoir un espace extérieur fonctionnel et accueillant où vous pouvez vous
            détendre, recevoir des amis et profiter de la beauté de la nature. Que vous rêviez
            d&apos;une terrasse en bois chaleureuse et rustique ou d&apos;une terrasse en composite
            moderne et facile d&apos;entretien, notre équipe d&apos;experts est là pour vous aider à
            concrétiser votre vision. Nous travaillons en étroite collaboration avec vous pour
            concevoir et construire une terrasse qui répond à vos besoins, à votre style de vie et à
            votre budget. Nos terrasses sont construites avec des matériaux de haute qualité et des
            techniques de construction robustes pour assurer leur durabilité et leur longévité. Que
            vous souhaitiez une petite terrasse intime ou une grande terrasse pour accueillir des
            réunions familiales, nous sommes là pour faire de votre rêve une réalité. Faites de
            votre espace extérieur un lieu de rassemblement et de détente avec une magnifique
            terrasse conçue et construite par Charpente Menuiserie Durand. Contactez-nous dès
            aujourd&apos;hui pour commencer à planifier votre projet de terrasse.
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

export default Terrasse;
