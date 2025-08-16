import React from "react";
import { motion } from "framer-motion";
import { gotham } from "@/lib/fonts";

const ServicesHero = ({
  serviceCategories,
  activeCategory,
  setActiveCategory,
}) => (
  <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey brick-bg-dark">
    {/* Zone blanche pour navbar - NETTE */}
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
        Nos Services
      </h2>

      <h1
        className={`${gotham.className} text-white text-5xl lg:text-7xl font-bold mb-8`}
      >
        <span className={`font-roboto text-primary`}>L</span>
        'Expertise Bois à Votre Service
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p className="text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto mb-12">
        Une expertise complète en charpente et menuiserie
      </p>

      {/* Service Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {serviceCategories.map((category) => (
          <motion.button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all
              ${
                activeCategory === category.key
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-darkGrey hover:bg-lightGrey hover:shadow-md"
              }`}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ServicesHero;