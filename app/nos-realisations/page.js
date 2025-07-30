"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import localFont from "next/font/local";
import { portfolioProjects } from "@/data/portfolio";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../assets/fonts/RobotoMono-Regular.ttf",
});

function NosRealisationsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const openImageModal = (projectIndex, imageIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(filteredProjects[projectIndex].images[imageIndex]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentProjectImages = filteredProjects[currentProject].images;
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentImageIndex < currentProjectImages.length - 1
          ? currentImageIndex + 1
          : 0;
    } else {
      newIndex =
        currentImageIndex > 0
          ? currentImageIndex - 1
          : currentProjectImages.length - 1;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(currentProjectImages[newIndex]);
  };

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const filterCategories = [
    { key: "all", label: "Tous les projets" },
    { key: "charpente", label: "Charpente" },
    { key: "extension", label: "Extensions" },
    { key: "terrasse", label: "Terrasses" },
    { key: "bardage", label: "Bardage" },
    { key: "menuiserie", label: "Menuiserie" },
    { key: "autres", label: "Autres services" },
  ];

  const getImageSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 h-80";
      case "medium":
        return "col-span-1 h-40";
      case "small":
        return "col-span-1 h-40";
      default:
        return "col-span-1 h-40";
    }
  };

  return (
    <div className="min-h-screen brick-bg">
      <ContactDetailsService />

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-darkGrey tracking-wider text-5xl lg:text-7xl font-bold mb-6">
              <span
                className={`${robotoFont.className} text-primary text-6xl lg:text-8xl`}
              >
                N
              </span>
              os Réalisations
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`${dosisFont.className} text-darkGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed`}
          >
            Découvrez nos projets réalisés : charpente, menuiserie,
            extensions... Chaque réalisation témoigne de notre savoir-faire et
            de notre passion pour le travail du bois.
          </motion.p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`${
                  dosisFont.className
                } px-6 py-3 rounded-lg transition-all duration-300 font-medium
                  ${
                    activeFilter === filter.key
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-darkGrey hover:bg-lightGrey"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: projectIndex * 0.1,
                ease: "easeOut",
              }}
              className="mb-24 last:mb-0"
            >
              {/* Project Header */}
              <div className="bg-white rounded-xl shadow-custom-medium p-8 mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2
                      className={`${dosisFont.className} text-darkGrey font-bold text-2xl lg:text-3xl mb-4`}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed mb-6`}
                    >
                      {project.description}
                    </p>
                    <div className="bg-lightGrey/30 rounded-lg p-4">
                      <h4
                        className={`${dosisFont.className} font-bold text-darkGrey mb-2`}
                      >
                        Défis techniques :
                      </h4>
                      <p
                        className={`${dosisFont.className} text-darkGrey text-sm`}
                      >
                        {project.challenges}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <span
                        className={`${dosisFont.className} text-primary font-bold text-sm uppercase tracking-wide`}
                      >
                        {project.serviceType}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-darkGrey">
                      <FaCalendarAlt className="text-primary" />
                      <span className={`${dosisFont.className} text-sm`}>
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-darkGrey">
                      <FaClock className="text-primary" />
                      <span className={`${dosisFont.className} text-sm`}>
                        {project.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-darkGrey">
                      <FaUser className="text-primary" />
                      <span className={`${dosisFont.className} text-sm`}>
                        {project.client}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Images Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(0, 3).map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: imageIndex * 0.1,
                      ease: "easeOut",
                    }}
                    className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-custom-light h-64"
                    onClick={() => openImageModal(projectIndex, imageIndex)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3
                          className={`${dosisFont.className} font-bold text-base mb-1`}
                        >
                          {image.title}
                        </h3>
                        <p
                          className={`${dosisFont.className} text-xs opacity-90 line-clamp-2`}
                        >
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 px-6 lg:px-12 bg-primary"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className={`${dosisFont.className} font-bold text-3xl lg:text-4xl mb-6`}
          >
            Un projet similaire en tête ?
          </h2>
          <p
            className={`${dosisFont.className} text-xl mb-8 opacity-90 leading-relaxed`}
          >
            Chaque projet est unique. Parlons du vôtre et voyons comment nous
            pouvons concrétiser vos idées avec notre savoir-faire artisanal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleToggleForm}
              className={`${dosisFont.className} bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-custom-medium transition-all duration-300 transform hover:scale-105`}
            >
              Demander un devis gratuit
            </button>
            <Link
              href="/contact"
              className={`${dosisFont.className} border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white hover:text-primary text-center`}
            >
              Nous contacter
            </Link>
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className={`${dosisFont.className} text-white/80 hover:text-white transition-colors underline`}
            >
              → Découvrir tous nos services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Modal Image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <IoMdClose size={24} />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <GrFormPrevious size={32} />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <GrFormNext size={32} />
            </button>

            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md backdrop-blur-sm">
              <h3 className={`${dosisFont.className} font-bold text-lg mb-2`}>
                {selectedImage.title}
              </h3>
              <p className={`${dosisFont.className} text-sm opacity-90`}>
                {selectedImage.description}
              </p>
            </div>

            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </motion.div>
      )}

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default NosRealisationsPage;
