import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const BardageHero = () => (
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
        Bardage & Revêtements
      </h2>
      
      <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
        <span className={`${robotoFont.className} text-primary`}>H</span>
        abillez votre Maison{" "}
        <span className="text-primary">avec Style</span>
      </h1>
      
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      
      <p className={`${dosisFont.className} text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed`}>
        Protection, esthétique et performance pour vos façades
      </p>
    </motion.div>
  </section>
);

export default BardageHero;