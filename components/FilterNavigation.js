import React from "react";
import { motion } from "framer-motion";

const FilterNavigation = ({ activeFilter, setActiveFilter }) => {
  const filterCategories = [
    { key: "all", label: "Tous les projets" },
    { key: "charpente", label: "Charpente" },
    { key: "extension", label: "Extensions & Ossature" },
    { key: "bardage", label: "Bardage" },
    { key: "menuiserie", label: "Menuiserie" },
    { key: "terrasse", label: "Terrasses" },
    { key: "autres", label: "Autres services" },
  ];

  return (
    <section className="py-12 px-6 lg:px-12 bg-gradient-to-br from-lightGrey/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {filterCategories.map((filter, index) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium border-2
                ${
                  activeFilter === filter.key
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-white text-darkGrey border-gray-200 hover:border-primary/50 hover:bg-lightGrey/50"
                }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterNavigation;
