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
    <div className="h-full px-48 py-[150px] flex flex-col gap-10 relative">
      <BackToHomepageButton />
      <div className="relative flex">
        <svg
          width="300"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-4 left-4 z-10"
        >
          <rect width="100%" height="100%" fill="#f37139" />
        </svg>
        <Image
          src={charpenteTraditionelle}
          width={200}
          height={"auto"}
          alt="yourImg"
          className="w-[300px] z-20"
        />
        <div className="flex flex-col ml-20 relative w-[40vw]">
          <Image
            src={logobg}
            width={200}
            height={"auto"}
            alt="yourImg"
            className="w-[510px] -z-10 absolute top-[150px] -right-[100px] opacity-20"
          />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="capitalize text-black text-5xl lg:text-nowrap font-semibold"
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Charpente traditionelle
          </motion.h1>
          <p className="text-darkGrey w-full mt-10">
            Dans notre service de Charpente Traditionnelle, chaque pièce de bois raconte une
            histoire séculaire. Notre équipe d&apos;artisans dévoués sculpte avec précision,
            fusionnant savoir-faire traditionnel et passion pour créer des structures qui défient le
            temps. Chaque projet incarne l&apos;excellence de notre métier, alliant expertise,
            dévotion et un profond respect pour le matériau et son héritage.
          </p>
          <div className="flex mt-10 align-center justify-center">
            <p className="text-darkGrey font-semibold">
              Des questions? Nous sommes là pour vous renseigner !
            </p>
            <button
              onClick={handleRedirect}
              className="bg-primary rounded-lg text-center	align-middle transition duration-200 hover:scale-90 "
            >
              <span
                className="p-4 text-white flex justify-center text-center font-semibold text-nowrap"
                onClick={handleToggleForm}
              >
                Nous Contacter
              </span>
            </button>
          </div>
        </div>
      </div>
      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default CharpenteTraditionelle;
