"use client";

import Image from "next/image";
import React, { useState } from "react";
import ossature from "/assets/img/ossature.jpg";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";

function ExtensionOssature() {
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
        <svg
          width="300"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-36 left-4 z-10 dark-shadow hidden lg:block "
        >
          <rect width="100%" height="100%" fill="#f37139" />
        </svg>
        <Image
          src={ossature}
          width={300}
          height={"auto"}
          alt="yourImg"
          className="w-[80vw] h-auto md:w-[60vw] lg:w-[300px] z-20"
        />
        <div className="flex flex-col lg:ml-20 relative w-[90vw] lg:w-[40vw]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-center text-4xl lg:text-5xl font-semibold mt-16 lg:mt-0 mx-auto"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Extension ou maison ossature
          </motion.h1>
          <p className="text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10">
            Votre rêve de maison prend forme avec notre expertise en extension et construction à
            ossature. Nous comprenons que votre maison est bien plus qu&apos;un simple bâtiment :
            c&apos;est votre refuge, votre havre de paix. C&apos;est pourquoi nous mettons tout en
            œuvre pour réaliser vos projets avec précision et dévouement. L&apos;ossature bois offre
            une flexibilité de conception incomparable, permettant des espaces lumineux, aérés et
            personnalisés selon vos besoins et vos goûts. Notre équipe qualifiée travaille en
            étroite collaboration avec vous à chaque étape du processus, de la conception à la
            réalisation, pour s&apos;assurer que votre nouvelle extension ou maison correspond
            parfaitement à votre vision. Que vous souhaitiez agrandir votre espace de vie existant
            ou construire une maison entièrement nouvelle, nous sommes là pour vous guider, vous
            conseiller et vous offrir des solutions sur mesure. Avec notre engagement envers la
            qualité, la durabilité et le service client, vous pouvez avoir l&apos;assurance que
            votre projet sera entre de bonnes mains.
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

export default ExtensionOssature;
