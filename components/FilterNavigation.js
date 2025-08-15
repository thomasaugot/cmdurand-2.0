import React from "react";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Medium.ttf" });

const FilterNavigation = ({ activeFilter, setActiveFilter }) => {
  const filterCategories = [
    { key: "all", label: "Tous les projets" },
    { key: "charpente", label: "Charpente" },
    { key: "extension", label: "Extensions" },
    { key: "terrasse", label: "Terrasses" },
    { key: "bardage", label: "Bardage" },
    { key: "menuiserie", label: "Menuiserie" },
    { key: "autres", label: "Autres services" },
  ];

  return (
    <section className="py-8 px-6 lg:px-12 bg-lightGrey/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`${
                dosisFont.className
              } px-6 py-3 rounded-lg transition-all duration-300 font-medium
                ${
                  activeFilter === filter.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-darkGrey hover:bg-lightGrey"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterNavigation;