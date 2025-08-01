import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const ContactInfo = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Adresse et localisation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
            Notre atelier
          </h3>
          <h4 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-8 leading-tight`}>
            Situés au cœur de la <span className="text-primary">Loire-Atlantique</span>
          </h4>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h5 className={`${dosisFont.className} text-lg font-bold text-darkGrey mb-2`}>
                  Charpente Menuiserie Durand
                </h5>
                <p className={`${dosisFont.className} text-darkGrey font-medium text-base leading-relaxed`}>
                  Z.A. la Pommeraie<br />
                  Rue des Indes<br />
                  44780 Missillac<br />
                  Loire-Atlantique
                </p>
              </div>
            </div>
          </div>
          
          <p className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}>
            Idéalement situés à Missillac, nous intervenons dans toute la région pour vos projets de charpente et menuiserie. Notre proximité nous permet d'être réactifs et disponibles pour tous vos besoins.
          </p>
        </motion.div>

        {/* Pourquoi nous choisir */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
            Nos atouts
          </h3>
          <h4 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-8 leading-tight`}>
            Pourquoi nous faire <span className="text-primary">confiance</span> ?
          </h4>
          
          <div className="space-y-6">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h5 className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}>
                  Savoir-faire artisanal
                </h5>
                <p className={`${dosisFont.className} text-darkGrey/70 text-base leading-relaxed`}>
                  Techniques traditionnelles et modernes maîtrisées pour tous vos projets de charpente et menuiserie
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h5 className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}>
                  Proximité et réactivité
                </h5>
                <p className={`${dosisFont.className} text-darkGrey/70 text-base leading-relaxed`}>
                  Basés à Missillac, nous intervenons rapidement dans toute la région Loire-Atlantique
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h5 className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}>
                  Accompagnement personnalisé
                </h5>
                <p className={`${dosisFont.className} text-darkGrey/70 text-base leading-relaxed`}>
                  De l'étude à la réalisation, nous vous conseillons et vous accompagnons à chaque étape
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h5 className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}>
                  Matériaux de qualité
                </h5>
                <p className={`${dosisFont.className} text-darkGrey/70 text-base leading-relaxed`}>
                  Sélection rigoureuse des bois et matériaux pour garantir la durabilité de vos réalisations
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactInfo;