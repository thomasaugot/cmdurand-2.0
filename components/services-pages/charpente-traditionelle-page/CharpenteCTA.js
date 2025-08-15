import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });

const CharpenteCTA = ({ handleToggleForm }) => {
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
          Prêt à donner vie à votre projet ?
        </h2>
        <p
          className={`${dosisFont.className} text-xl mb-8 opacity-90 leading-relaxed`}
        >
          Que vous rêviez d'une charpente traditionnelle pour votre nouvelle construction 
          ou d'une restauration respectueuse de l'ancien, nous sommes là pour vous accompagner.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80`}>
              06 76 50 85 51
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80 text-sm`}>
              Devis sous 48h
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80`}>
              Missillac (44)
            </span>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/nos-realisations"
            className={`${dosisFont.className} text-white/80 hover:text-white transition-colors underline`}
          >
            → Découvrir toutes nos réalisations
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CharpenteCTA;