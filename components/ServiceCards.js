"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import charpenteTrad from "/assets/img/charp-trad.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import ossature from "/assets/img/ossature.jpg";
import preau from "/assets/img/préau.jpg";
import carport from "/assets/img/carport.jpg";
import terrasse from "/assets/img/terrasse.jpg";
import { motion } from "framer-motion";
import menuiserieExt from "/assets/img/menuiserie-ext.jpg";
import bardage from "/assets/img/bardage.jpg";
import solivage from "/assets/img/solivage.jpg";
import menuiserieG from "/assets/img/menuiserie-g.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    title: "Charpente traditionnelle",
    imageUrl: charpenteTrad,
    endPoint: "/charpente-traditionelle",
  },
  {
    id: 2,
    title: "Charpente industrielle",
    imageUrl: charpenteIndus,
    endPoint: "/charpente-industrielle",
  },
  {
    id: 3,
    title: "Extension ou maison ossature",
    imageUrl: ossature,
    endPoint: "/extension-ou-maison-ossature",
  },
  { id: 4, title: "Préau", imageUrl: preau, endPoint: "/preau" },
  { id: 5, title: "Carport", imageUrl: carport, endPoint: "/carport" },
  { id: 6, title: "Terrasse", imageUrl: terrasse, endPoint: "/terrasse" },
  {
    id: 7,
    title: "Aménagement des combles",
    imageUrl: charpenteTrad,
    endPoint: "/amenagement-des-combles",
  },
  {
    id: 8,
    title: "Menuiserie extérieure",
    imageUrl: menuiserieExt,
    endPoint: "/menuiserie-exterieure",
  },
  {
    id: 9,
    title: "Bardage (différents types de revêtements extérieurs )",
    imageUrl: bardage,
    endPoint: "/bardage",
  },
  {
    id: 10,
    title: "Solivage porteur (plancher)",
    imageUrl: solivage,
    endPoint: "/solivage-porteur",
  },
  {
    id: 11,
    title: "Menuiserie Générale",
    imageUrl: menuiserieG,
    endPoint: "/menuiserie-generale",
  },
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const ServiceCard = ({ title, imageUrl, endPoint, id }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <motion.div
      variants={images}
      key={id}
      className="image-shadow relative flex items-center justify-center w-[42vw] h-[150px] lg:w-[180px] lg:h-[180px] overflow-hidden m-2 transition-transform transform hover:scale-105 text-white z-30"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-filter duration-500 rounded-lg inset-0`}
        />
      </div>
      {isHovered ? (
        <div className="primary-filter absolute inset-0 flex items-center justify-center z-11 transition-filter duration-500 rounded-lg">
          <Link
            href={endPoint}
            passHref
            className="bg-white text-black text-lg lg:text-xl px-2 lg:px-3 py-2 rounded-lg dark-shadow font-medium text-center"
          >
            En savoir plus
          </Link>
        </div>
      ) : (
        <h1
          className="filter-none z-10 text-xl lg:text-2xl justify-center text-center font-black capitalize"
          style={{
            WebkitTextStroke: "0.2px black",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {title}
        </h1>
      )}
    </motion.div>
  );
};

const ServiceCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 20%
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-wrap justify-center">
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center w-full z-30 lg:mb-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ServiceCards;
