"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Charpente traditionnelle",
    description:
      "Charpentes en bois massif assemblées selon les techniques ancestrales",
    imageUrl: "/assets/img/charpente-traditionnelle/img2.webp",
    endPoint: "/services/charpente-traditionelle",
    featured: true,
  },
  {
    id: 2,
    title: "Extension ossature bois",
    description: "Extensions performantes et maisons neuves en ossature bois",
    imageUrl: "/assets/img/extension-maison-ossature/img1.webp",
    endPoint: "/services/extension-ou-maison-ossature",
    featured: true,
  },
  {
    id: 3,
    title: "Terrasses & Aménagements",
    description:
      "Terrasses en bois exotique, composite et aménagements extérieurs",
    imageUrl: "/assets/img/terrasse/img3.webp",
    endPoint: "/services/terrasse",
    featured: true,
  },
  {
    id: 4,
    title: "Charpente industrielle",
    description: "Solutions industrielles et fermettes pour tous projets",
    imageUrl: "/assets/img/charpente-industrielle/img1.webp",
    endPoint: "/services/charpente-industrielle",
    featured: false,
  },
  {
    id: 5,
    title: "Menuiserie sur mesure",
    description: "Escaliers, placards et aménagements intérieurs personnalisés",
    imageUrl: "/assets/img/menuiserie-générale/img1.webp",
    endPoint: "/services/menuiserie-generale",
    featured: false,
  },
  {
    id: 6,
    title: "Bardage & Façades",
    description: "Bardages bois pour protection et embellissement de façades",
    imageUrl: "/assets/img/bardage/img3.webp",
    endPoint: "/services/bardage",
    featured: false,
  },
  {
    id: 7,
    title: "Aménagement combles",
    description: "Transformation de combles perdus en espaces habitables",
    imageUrl: "/assets/img/home.webp",
    endPoint: "/services/amenagement-des-combles",
    featured: false,
  },
  {
    id: 8,
    title: "Préaux & Carports",
    description:
      "Structures de protection pour vos véhicules et espaces extérieurs",
    imageUrl: "/assets/img/préau/img1.webp",
    endPoint: "/services/preau",
    featured: false,
  },
  {
    id: 9,
    title: "Menuiserie extérieure",
    description: "Volets, portails et menuiseries extérieures sur mesure",
    imageUrl: "/assets/img/menuiserie-extérieure/img1.webp",
    endPoint: "/services/menuiserie-exterieure",
    featured: false,
  },
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

const Services = ({ enableRedirect = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = React.useRef();
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const featuredServices = services.filter((service) => service.featured);
  const regularServices = services.filter((service) => !service.featured);

  const ServiceCard = ({ service, index }) => {
    const cardContent = (
      <div
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
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-2">
            {service.description}
          </p>
          {!enableRedirect && (
            <Link
              href={service.endPoint}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
            >
              Découvrir
              <span>→</span>
            </Link>
          )}
          {enableRedirect && (
            <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
              Découvrir
              <span>→</span>
            </div>
          )}
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-primary/15 transition-opacity duration-300 ${
            hoveredIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    );

    if (enableRedirect) {
      return (
        <Link href={service.endPoint}>
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  };

  return (
    <div ref={ref} className="max-w-8xl mx-auto">
      {isVisible && (
        <motion.div variants={variants} initial="hidden" animate="show">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key={service.id} variants={cardVariants}>
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;