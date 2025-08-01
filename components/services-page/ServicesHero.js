import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../assets/fonts/RobotoMono-Regular.ttf",
});

const ServicesHero = () => (
  <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey">
    {/* Zone blanche pour navbar - NETTE */}
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
      <h1 className="text-white text-5xl lg:text-7xl font-bold mb-8">
        <span className={`${robotoFont.className} text-primary`}>L</span>
        'Expertise Bois à Votre Service
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p className={`${dosisFont.className} text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto`}>
        Une expertise complète en charpente et menuiserie
      </p>
    </motion.div>
  </section>
);

export default ServicesHero;