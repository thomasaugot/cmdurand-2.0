"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { dosis, gotham } from "@/lib/fonts";
import PopupForm from "../forms/PopupForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "L'expertise Bois au Service de vos Projets";

  const handleDevisClick = () => setIsFormOpen(true);
  const handleRealisationsClick = () => (window.location.href = "/services");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const buttonVariant = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center"
    >
      <div className="filter-home bg-white h-screen w-[200vw] absolute" />

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/assets/img/home.webp)` }}
      />

      <div className="flex flex-col items-center justify-center text-center z-10 px-6 max-w-7xl mx-auto pt-24">
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
          className={`${gotham.className} text-7xl md:text-8xl lg:text-9xl font-normal mb-8 text-white`}
          style={{
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          <span className="text-primary">Charpente</span>{" "}
          <span className="font-roboto -ml-1">M</span>
          enuiserie <span className="text-primary">Durand</span>
        </motion.h1>

        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-12 flex justify-center min-h-[3rem]"
        >
          <div className="text-xl md:text-2xl lg:text-3xl text-white font-medium flex items-center">
            <span
              className="inline-block"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
            >
              {displayedText}
            </span>
            <span
              className={`inline-block w-0.5 h-6 bg-white ml-1 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
            onClick={handleDevisClick}
            className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors"
          >
            Devis Gratuit →
          </motion.button>

          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
            onClick={handleRealisationsClick}
            className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all"
          >
            Nos Services →
          </motion.button>
        </motion.div>
      </div>

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Hero;