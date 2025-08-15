import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const TerrasseIntro = () => {
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
                Espaces de vie extérieure
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                Sublimez vos moments en plein air
              </h3>
            </div>

            <div className="space-y-6">
              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Transformez votre espace extérieur en un havre de paix avec nos services 
                de construction de terrasses. Nous comprenons l'importance d'avoir un espace 
                extérieur fonctionnel et accueillant.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Que vous rêviez d'une terrasse en bois chaleureuse et rustique ou d'une terrasse 
                en composite moderne et facile d'entretien, notre équipe d'experts est là pour 
                vous aider à concrétiser votre vision.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Nous travaillons en étroite collaboration avec vous pour concevoir et construire 
                une terrasse qui répond à vos besoins, à votre style de vie et à votre budget.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey mb-3`}>
                Qualité et durabilité
              </h4>
              <p className={`${dosisFont.className} text-darkGrey`}>
                Nos terrasses sont construites avec des matériaux de haute qualité et des 
                techniques robustes pour assurer leur durabilité et leur longévité.
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
                <div className="text-3xl font-bold text-primary mb-2">100m2</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Surface maximale</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Terrasses créées</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1-2</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Semaines de réalisation</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Ans de garantie</div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey`}>
                Types de terrasses
              </h4>
              <ul className="space-y-2">
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Terrasses bois naturel et exotique
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Terrasses composite haute performance
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Aménagements sur pilotis
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Terrasses avec pergolas intégrées
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TerrasseIntro;