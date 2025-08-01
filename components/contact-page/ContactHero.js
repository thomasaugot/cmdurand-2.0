import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../assets/fonts/RobotoMono-Regular.ttf",
});

const ContactHero = () => (
  <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey">    
    {/* Zone blanche pour navbar */}
    <div className="absolute top-0 left-0 right-0 h-[90px] md:h-36 bg-white z-0"></div>
    
    {/* Effets visuels */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl z-5"></div>
    <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl z-5"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl z-5"></div>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <h2 className={`${robotoFont.className} text-primary text-sm sm:text-base lg:text-lg font-bold mb-6 uppercase tracking-wider`}>
        Contactez-nous
      </h2>
      
      <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
        <span className={`${robotoFont.className} text-primary`}>T</span>
        ransformons votre projet en{" "}
        <span className="text-primary">réalité</span>
      </h1>
      
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <p className={`${dosisFont.className} text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto mb-12`}>
        Expertise en charpente et menuiserie depuis des années à Missillac.<br />
        Nous accompagnons particuliers et professionnels dans leurs projets les plus ambitieux.
      </p>
      
      {/* CTAs principaux */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.a 
          href="tel:+33676508551"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${dosisFont.className} bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl flex items-center gap-3 text-lg`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          Appelez-nous maintenant
        </motion.a>
        
        <motion.a 
          href="mailto:charpente.menuiserie.durand@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${dosisFont.className} bg-transparent border-2 border-white text-white hover:bg-white hover:text-darkGrey font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl flex items-center gap-3 text-lg`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          Envoyez un email
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default ContactHero;