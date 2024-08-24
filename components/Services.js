"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import charpenteTrad from "/assets/img/AKNE8751.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import ossature from "/assets/img/ossature.jpg";
import preau from "/assets/img/BYPV7724.jpg";
import carport from "/assets/img/carport.jpg";
import terrasse from "/assets/img/terrasse.jpg";
import menuiserieExt from "/assets/img/menuiserie-ext.jpg";
import bardage from "/assets/img/bardage2.jpg";
import solivage from "/assets/img/solivage.jpg";
import menuiserieG from "/assets/img/menuiserie-g.jpg";
import homeBg from "/assets/img/home.webp";
import Link from "next/link";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const services = [
  {
    id: 1,
    title: "Charpente traditionnelle",
    imageUrl: charpenteTrad,
    endPoint: "/charpente-traditionelle",
    className: "md:basis-[calc(50%-10px)]",
  },
  {
    id: 2,
    title: "Charpente industrielle",
    imageUrl: charpenteIndus,
    endPoint: "/charpente-industrielle",
    className: "md:basis-[calc(50%-10px)]",
  },
  {
    id: 3,
    title: "Extension ou maison ossature",
    imageUrl: ossature,
    endPoint: "/extension-ou-maison-ossature",
    className: "md:basis-[calc(33.33%-10px)]",
  },
  {
    id: 4,
    title: "Préau",
    imageUrl: preau,
    endPoint: "/preau",
    className: "md:basis-[calc(25%-10px)]",
  },
  {
    id: 5,
    title: "Carport",
    imageUrl: carport,
    endPoint: "/carport",
    className: "md:basis-[calc(33.33%-10px)]",
  },
  {
    id: 6,
    title: "Terrasse",
    imageUrl: terrasse,
    endPoint: "/terrasse",
    className: "md:basis-[calc(20%-10px)]",
  },
  {
    id: 7,
    title: "Aménagement des combles",
    imageUrl: homeBg,
    endPoint: "/amenagement-des-combles",
    className: "md:basis-[calc(33.33%-10px)]",
  },
  {
    id: 8,
    title: "Menuiserie extérieure",
    imageUrl: menuiserieExt,
    endPoint: "/menuiserie-exterieure",
    className: "md:basis-[calc(25%-10px)]",
  },
  {
    id: 9,
    title: "Bardages",
    imageUrl: bardage,
    endPoint: "/bardage",
    className: "md:basis-[calc(30%-10px)]",
  },
  {
    id: 10,
    title: "Solivage porteur (plancher)",
    imageUrl: solivage,
    endPoint: "/solivage-porteur",
    className: "md:basis-[calc(25%-10px)]",
  },
  {
    id: 11,
    title: "Menuiserie Générale",
    imageUrl: menuiserieG,
    endPoint: "/menuiserie-generale",
    className: "md:basis-[calc(20%-10px)]",
  },
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const ref = React.useRef();
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    updateLayout(); // Initial check
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex ${
        isMobile ? "flex-col" : "md:flex-row md:flex-wrap"
      } w-[90vw] gap-4 px-2 py-4 mb-4 lg:mb-8 mx-auto`}
    >
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={`flex flex-wrap gap-4 w-full`}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={images}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-full ${
                isMobile ? "basis-full" : service.className
              } dark-shadow rounded-xl overflow-hidden relative flex-1 h-[30vh] md:h-[15vh] lg:h-[30vh] flex items-center justify-center`}
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                priority
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 rounded-lg">
                <h1
                  className={`${
                    dosisFont.className
                  } text-2xl font-black text-center capitalize tracking-wider ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300 bg-white/70 py-1 px-2 rounded-xl max-w-[90%]`}
                >
                  {service.title}
                </h1>
                {hoveredIndex === index && (
                  <Link
                    href={service.endPoint}
                    passHref
                    className={`${dosisFont.className} underline absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black/50 rounded-lg transition-opacity duration-300`}
                  >
                    En savoir plus
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Services;
