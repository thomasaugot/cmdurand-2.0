"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";

import charpenteTrad from "@/assets/img/charpente-traditionelle/img2.webp";
import charpenteIndus from "@/assets/img/charpente-industrielle/img1.webp";
import ossature from "@/assets/img/extension-maison-ossature/img1.webp";
import preau from "@/assets/img/préau/img1.webp";
import carport from "@/assets/img/carport/img1.webp";
import terrasse from "@/assets/img/terrasse/img3.webp";
import menuiserieExt from "@/assets/img/menuiserie-extérieure/img1.webp";
import bardage from "@/assets/img/bardage/img3.webp";
import solivage from "@/assets/img/solivage-porteur/img3.webp";
import menuiserieG from "@/assets/img/menuiserie-générale/img1.webp";
import homeBg from "@/assets/img/home.webp";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const services = [
  {
    id: 1,
    title: "Charpente traditionnelle",
    description: "Charpentes en bois massif assemblées selon les techniques ancestrales",
    imageUrl: charpenteTrad,
    endPoint: "/charpente-traditionelle",
    featured: true,
  },
  {
    id: 2,
    title: "Extension ossature bois",
    description: "Extensions performantes et maisons neuves en ossature bois",
    imageUrl: ossature,
    endPoint: "/extension-ou-maison-ossature",
    featured: true,
  },
  {
    id: 3,
    title: "Terrasses & Aménagements",
    description: "Terrasses en bois exotique, composite et aménagements extérieurs",
    imageUrl: terrasse,
    endPoint: "/terrasse",
    featured: true,
  },
  {
    id: 4,
    title: "Charpente industrielle",
    description: "Solutions industrielles et fermettes pour tous projets",
    imageUrl: charpenteIndus,
    endPoint: "/charpente-industrielle",
    featured: false,
  },
  {
    id: 5,
    title: "Menuiserie sur mesure",
    description: "Escaliers, placards et aménagements intérieurs personnalisés",
    imageUrl: menuiserieG,
    endPoint: "/menuiserie-generale",
    featured: false,
  },
  {
    id: 6,
    title: "Bardage & Façades",
    description: "Bardages bois pour protection et embellissement de façades",
    imageUrl: bardage,
    endPoint: "/bardage",
    featured: false,
  },
  {
    id: 7,
    title: "Aménagement combles",
    description: "Transformation de combles perdus en espaces habitables",
    imageUrl: homeBg,
    endPoint: "/amenagement-des-combles",
    featured: false,
  },
  {
    id: 8,
    title: "Préaux & Carports",
    description: "Structures de protection pour vos véhicules et espaces extérieurs",
    imageUrl: preau,
    endPoint: "/preau",
    featured: false,
  },
  {
    id: 9,
    title: "Menuiserie extérieure",
    description: "Volets, portails et menuiseries extérieures sur mesure",
    imageUrl: menuiserieExt,
    endPoint: "/menuiserie-exterieure",
    featured: false,
  }
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = React.useRef();
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const featuredServices = services.filter(service => service.featured);
  const regularServices = services.filter(service => !service.featured);

  return (
    <div ref={ref} className="max-w-8xl mx-auto">
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
        >
          {/* TOUTES les cards à la même taille */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className={`${dosisFont.className} text-xl font-bold mb-2 group-hover:text-primary transition-colors`}>
                    {service.title}
                  </h3>
                  <p className={`${dosisFont.className} text-white/90 text-sm mb-4 leading-relaxed line-clamp-2`}>
                    {service.description}
                  </p>
                  <Link
                    href={service.endPoint}
                    className={`${dosisFont.className} inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm`}
                  >
                    Découvrir
                    <span>→</span>
                  </Link>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-primary/15 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;