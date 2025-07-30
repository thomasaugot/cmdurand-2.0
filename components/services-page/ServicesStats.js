import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

const ServicesStats = () => (
  <section className="py-20 px-6 lg:px-12 bg-white">
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { number: "11", label: "Services" },
        { number: "15+", label: "Années" },
        { number: "500+", label: "Projets" },
        { number: "100%", label: "Français" }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-4xl font-bold text-primary mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {stat.number}
          </motion.div>
          <div className={`${dosisFont.className} text-darkGrey`}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesStats;