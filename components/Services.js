"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/data/services";
import useDeviceDetect from "@/hooks/useDeviceDetect";

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
  const { isMobile, isMobileLandscape, isTablet, isTabletLandscape, isDesktop } = useDeviceDetect();

  const ref = React.useRef();
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Logique pour déterminer combien de services afficher
  const getServicesToShow = () => {
    if (isMobile && !isMobileLandscape) {
      return servicesData; // Tous les services sur mobile portrait
    }
    if (isMobile && isMobileLandscape) {
      return servicesData.slice(0, 10); // 10 services sur mobile landscape
    }
    if (isTablet && !isTabletLandscape) {
      return servicesData.slice(0, 10); // 10 services sur tablet portrait
    }
    if (isTablet && isTabletLandscape) {
      return servicesData.slice(0, 9); // 9 services sur tablet landscape
    }
    if (isDesktop) {
      return servicesData.slice(0, 9); // 9 services sur desktop
    }
    return servicesData.slice(0, 9); // Par défaut
  };

  const servicesToShow = getServicesToShow();

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
        <Link href={`/services${service.endPoint}`}>
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
            {servicesToShow.map((service, index) => (
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