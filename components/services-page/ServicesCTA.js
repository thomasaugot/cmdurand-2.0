import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

const ServicesCTA = ({ setIsFormOpen }) => (
  <section className="py-20 px-6 lg:px-12 bg-primary text-white text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className={`${dosisFont.className} font-bold text-4xl mb-6`}>
        Un projet en tête ?
      </h2>
      <p className={`${dosisFont.className} text-xl mb-8 max-w-2xl mx-auto`}>
        Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${dosisFont.className} bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-lightGrey transition-all shadow-lg`}
        >
          Demander un devis
        </motion.button>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/realisations"
            className={`${dosisFont.className} border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all text-center inline-block`}
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default ServicesCTA;