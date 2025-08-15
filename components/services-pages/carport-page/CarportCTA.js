import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });

const CarportCTA = ({ handleToggleForm }) => {
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
          Votre véhicule mérite un abri !
        </h2>
        <p
          className={`${dosisFont.className} text-xl mb-8 opacity-90 leading-relaxed`}
        >
          Voiture, camping-car, caravane ou bateau : nous concevons le carport idéal 
          pour protéger vos biens tout en embellissant votre propriété.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleToggleForm}
            className={`${dosisFont.className} bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-custom-medium transition-all duration-300 transform hover:scale-105`}
          >
            Devis sur mesure gratuit
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
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80`}>
              Conception sur mesure
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80`}>
              Montage en 2-3 jours
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className={`${dosisFont.className} text-white/80`}>
              25 ans de garantie
            </span>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/nos-realisations"
            className={`${dosisFont.className} text-white/80 hover:text-white transition-colors underline`}
          >
            → Voir nos autres constructions
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CarportCTA;