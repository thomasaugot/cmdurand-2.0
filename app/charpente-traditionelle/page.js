"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import PopupForm from "@/components/forms/PopupForm";
import ContactDetailsService from "@/components/ContactDetailsService";
import localFont from "next/font/local";

import img1 from "@/assets/img/charpente-traditionelle/img1.webp";
import img2 from "@/assets/img/charpente-traditionelle/img2.webp";
import img3 from "@/assets/img/charpente-traditionelle/img3.webp";
import img4 from "@/assets/img/charpente-traditionelle/img4.webp";
import img5 from "@/assets/img/charpente-traditionelle/img5.webp";
import img6 from "@/assets/img/charpente-traditionelle/img6.webp";
import img7 from "@/assets/img/charpente-traditionelle/img7.webp";
import img8 from "@/assets/img/charpente-traditionelle/img8.webp";
import img9 from "@/assets/img/charpente-traditionelle/img9.webp";
import img10 from "@/assets/img/charpente-traditionelle/img10.webp";
import img11 from "@/assets/img/charpente-traditionelle/img11.webp";
import img13 from "@/assets/img/charpente-traditionelle/img13.webp";
import img14 from "@/assets/img/charpente-traditionelle/img14.webp";
import img15 from "@/assets/img/charpente-traditionelle/img15.webp";
import img16 from "@/assets/img/charpente-traditionelle/img16.webp";
import img17 from "@/assets/img/charpente-traditionelle/img17.webp";
import img18 from "@/assets/img/charpente-traditionelle/img18.webp";
import img19 from "@/assets/img/charpente-traditionelle/img19.webp";
import img20 from "@/assets/img/charpente-traditionelle/img20.webp";
import img21 from "@/assets/img/charpente-traditionelle/img21.webp";
import img22 from "@/assets/img/charpente-traditionelle/img22.webp";
import img23 from "@/assets/img/charpente-traditionelle/img23.webp";
import img24 from "@/assets/img/charpente-traditionelle/img24.webp";
import img25 from "@/assets/img/charpente-traditionelle/img25.webp";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

function CharpenteTraditionelle() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="h-full px-6 lg:px-36 py-[200px] flex flex-col gap-10 relative brick-bg min-h-[100vh]">
      <ContactDetailsService />
      <div className="relative flex flex-col text-center items-center lg:flex-row justify-center gap-8 p-4">
        <div className="w-full lg:w-1/2">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Thumbs]}
            autoplay={{ delay: 3000 }}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress
            className="mt-4"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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
            Charpente Traditionnelle
          </motion.h1>
          <p
            className={`${dosisFont.className} text-darkGrey w-[90vw] lg:w-full mt-6 lg:mt-10`}
          >
            Chez nous, la Charpente Traditionnelle incarne l&apos;essence même
            du savoir-faire artisanal. Chaque pièce de bois est choisie avec
            soin, travaillée avec précision, pour créer des structures robustes
            et intemporelles. Notre équipe de charpentiers expérimentés met tout
            son cœur et son expertise dans chaque projet, qu&apos;il
            s&apos;agisse de la restauration d&apos;une vieille maison de
            campagne ou de la construction d&apos;une nouvelle demeure. Nous
            comprenons l&apos;importance de préserver les techniques
            traditionnelles tout en intégrant les innovations modernes pour
            garantir des résultats à la fois authentiques et durables. Avec
            nous, votre charpente traditionnelle est bien plus qu&apos;une
            simple structure : c&apos;est un témoignage de notre engagement
            envers l&apos;excellence et notre passion pour le métier.
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
