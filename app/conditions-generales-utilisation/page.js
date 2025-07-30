"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PopupForm from "@/components/forms/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

export default function ConditionsGeneralesUtilisation() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 lg:px-36 py-[200px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row justify-center gap-8">
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
            Conditions Générales d&apos;Utilisation
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Bienvenue sur notre site web. En naviguant sur ce site, vous
            acceptez de vous conformer aux conditions générales
            d&apos;utilisation suivantes. Si vous n&apos;acceptez pas ces
            conditions, veuillez ne pas utiliser notre site.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Utilisation du site
          </h2>
          <br />
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}
          >
            Vous êtes autorisé à utiliser notre site web à des fins légales et
            de manière conforme aux présentes conditions générales. Vous
            acceptez de ne pas utiliser notre site à des fins illégales ou
            interdites par la loi.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Propriété intellectuelle
          </h2>
          <br />
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}
          >
            Tout le contenu présent sur notre site web, y compris mais sans
            s&apos;y limiter, les textes, les images, les graphiques, les logos
            et les vidéos, est la propriété de Charpente Menuiserie Durand et
            est protégé par les lois sur la propriété intellectuelle.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Limitation de responsabilité
          </h2>
          <br />
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}
          >
            Nous nous efforçons de maintenir les informations présentes sur
            notre site web à jour et exactes. Cependant, nous ne garantissons
            pas l&apos;exactitude, l&apos;exhaustivité ou la pertinence des
            informations. En aucun cas, nous ne serons responsables des dommages
            directs, indirects, accessoires, spéciaux ou consécutifs découlant
            de l&apos;utilisation ou de l&apos;incapacité d&apos;utiliser notre
            site.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Modification des conditions générales
          </h2>
          <br />
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}
          >
            Nous nous réservons le droit de modifier ces conditions générales à
            tout moment et sans préavis. Il est de votre responsabilité de
            consulter régulièrement cette page pour prendre connaissance des
            modifications éventuelles.
          </p>
          <br />
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}
          >
            Merci d&apos;avoir pris connaissance de nos conditions générales
            d&apos;utilisation et de notre politique de confidentialité. Si vous
            avez des questions, n&apos;hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 items-center justify-center gap-6 lg:gap-0">
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
