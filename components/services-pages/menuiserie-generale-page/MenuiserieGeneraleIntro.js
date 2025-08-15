import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const MenuiserieGeneraleIntro = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenu principal */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
                Artisanat & Sur mesure
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                L'art de la menuiserie à votre service
              </h3>
            </div>

            <div className="space-y-6">
              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Que ce soit pour la fabrication sur mesure de meubles, la pose de fenêtres et portes, 
                ou la création d'éléments de décoration intérieure, notre équipe expérimentée met tout 
                son savoir-faire au service de vos projets.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Nous comprenons que chaque détail compte, c'est pourquoi nous accordons une attention 
                particulière à la sélection des matériaux et à la précision de la fabrication.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Que vous souhaitiez apporter une touche d'élégance à votre intérieur ou améliorer 
                la fonctionnalité de vos espaces, nous sommes là pour concrétiser vos idées avec 
                des solutions sur mesure et durables.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey mb-3`}>
                Notre philosophie
              </h4>
              <p className={`${dosisFont.className} text-darkGrey`}>
                Transformer votre vision en réalité, avec passion et expertise, 
                pour des créations uniques qui vous ressemblent.
              </p>
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Créations sur mesure</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Types de projets</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Sur mesure</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Ans de garantie</div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey`}>
                Nos domaines d'expertise
              </h4>
              <ul className="space-y-2">
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mobilier sur mesure et intégré
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Aménagements intérieurs
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Décoration et finitions bois
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Rénovation et restauration
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuiserieGeneraleIntro;