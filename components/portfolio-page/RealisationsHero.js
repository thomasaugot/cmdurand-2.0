import React from "react";
import { motion } from "framer-motion";
import { gotham } from "@/lib/fonts";

const RealisationsHero = () => (
  <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey">
    {/* Zone blanche pour navbar */}
    <div className="absolute top-0 left-0 right-0 h-[90px] md:h-36 bg-white z-0"></div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <h2
        className={`font-roboto text-primary text-sm sm:text-base lg:text-lg font-bold mb-6 uppercase tracking-wider`}
      >
        Nos Réalisations
      </h2>

      <h1
        className={`${gotham.className} text-white text-5xl lg:text-7xl font-bold mb-8`}
      >
        <span className={`font-roboto text-primary text-6xl lg:text-8xl`}>
          N
        </span>
        otre Savoir-Faire à l'Œuvre
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
        Découvrez quelques-uns de nos projets réalisés : charpente, menuiserie,
        extensions... Chaque réalisation témoigne de notre savoir-faire et de
        notre passion pour le travail du bois.
      </p>
    </motion.div>
  </section>
);

export default RealisationsHero;
