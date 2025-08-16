import React from "react";
import { motion } from "framer-motion";

const ServiceFilters = ({
  serviceCategories,
  activeCategory,
  setActiveCategory,
}) => (
  <section className="pb-12 px-6 lg:px-12 bg-darkGrey">
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
  </section>
);

export default ServiceFilters;
