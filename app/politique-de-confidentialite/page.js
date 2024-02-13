"use client";

import React, { useState } from "react";
import BackToHomepageButton from "@/components/BackButton";
import { motion } from "framer-motion";
import PopupForm from "@/components/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

export default function PolitiqueDeConfidentialite() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 lg:px-36 py-[150px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <BackToHomepageButton />
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
            Politique de confidentialité
          </motion.h1>
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}>
            Nous attachons une grande importance à la protection de vos données personnelles. Cette
            politique de confidentialité explique comment nous collectons, utilisons et protégeons
            vos informations lorsque vous utilisez notre site web.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Collecte des informations personnelles
          </h2>
          <br />
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}>
            Lorsque vous utilisez notre site web et que vous soumettez le formulaire de contact,
            nous collectons les informations suivantes : votre nom, votre adresse e-mail et votre
            numéro de téléphone. Nous utilisons ces informations uniquement dans le but de répondre
            à vos demandes et de vous fournir des informations sur nos services.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Partage des informations personnelles
          </h2>
          <br />
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}>
            Nous ne partageons pas vos informations personnelles avec des tiers sans votre
            consentement explicite. Vos données ne seront pas vendues, échangées ou louées à des
            tiers à des fins commerciales.
          </p>
          <br />
          <h2 className="capitalize text-black tracking-wider text-center text-xl xl:text-nowrap font-semibold mx-auto">
            Protection des informations personnelles
          </h2>
          <br />
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}>
            Nous prenons des mesures de sécurité appropriées pour protéger vos informations
            personnelles contre la perte, l&apos;accès non autorisé, la divulgation,
            l&apos;altération ou la destruction. Vous avez le droit de demander l&apos;accès à vos
            données personnelles, de les rectifier, de les supprimer ou de restreindre leur
            traitement. Vous avez également le droit de vous opposer au traitement de vos données
            personnelles ou de demander leur portabilité.
          </p>
          <br />
          <p className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full`}>
            Si vous avez des questions concernant notre politique de confidentialité ou si vous
            souhaitez exercer vos droits en matière de protection des données, veuillez nous
            contacter à l&apos;adresse suivante : charpente.menuiserie.durand@gmail.com , ou
            directement via notre formulaire de contact ci-dessous.
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
