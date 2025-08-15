import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

const RealisationsCTA = ({ handleToggleForm }) => {
  return (
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
  );
};

export default RealisationsCTA;