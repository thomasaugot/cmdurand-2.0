import React from "react";
import { motion } from "framer-motion";
import { gotham } from "@/lib/fonts";

const MenuiserieGeneraleHero = () => (
  <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey brick-bg-dark">
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
        Menuiserie Générale
      </h2>

      <h1
        className={`${gotham.className} text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight`}
      >
        {" "}
        <span className={`font-roboto text-primary`}>C</span>
        réations <span className="text-primary">Sur Mesure</span>
      </h1>

      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

      <p className="text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
        Meubles, aménagements et décoration intérieure par nos artisans
        menuisiers
      </p>
    </motion.div>
  </section>
);

export default MenuiserieGeneraleHero;
