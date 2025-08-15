import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const MenuiserieExterieureIntro = () => {
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
                Menuiserie sur mesure
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                L'art du bois au service de vos extérieurs
              </h3>
            </div>

            <div className="space-y-6">
              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Chez Charpente Menuiserie Durand, notre engagement envers la qualité et l'excellence 
                se reflète dans chaque détail de notre travail, même à l'extérieur de votre maison.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Que vous souhaitiez installer une nouvelle porte d'entrée élégante, des fenêtres 
                sur mesure, des volets en bois traditionnels ou encore une terrasse en bois, notre 
                équipe qualifiée est là pour réaliser votre vision.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Nous comprenons l'importance de choisir les bons matériaux et les bonnes finitions 
                pour résister aux éléments extérieurs tout en ajoutant une touche d'esthétique 
                à votre maison.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey mb-3`}>
                Notre savoir-faire
              </h4>
              <p className={`${dosisFont.className} text-darkGrey`}>
                Nous travaillons avec vous pour concevoir et fabriquer des produits sur mesure 
                qui complètent le style architectural de votre maison.
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
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Menuiseries posées</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Essences de bois</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1-2</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Jours de pose</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Ans de garantie</div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey`}>
                Nos spécialités
              </h4>
              <ul className="space-y-2">
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Portes d'entrée et portes-fenêtres
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Fenêtres sur mesure et rénovation
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Volets battants et coulissants
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Terrasses et aménagements bois
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuiserieExterieureIntro;