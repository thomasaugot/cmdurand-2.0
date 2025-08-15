import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const CarportIntro = () => {
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
                Abris & Protection
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                Protection élégante pour vos véhicules
              </h3>
            </div>

            <div className="space-y-6">
              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Offrez une protection élégante à votre véhicule avec notre service de construction 
                de carports. Nous comprenons l'importance de préserver votre voiture, votre caravane 
                ou votre bateau des éléments extérieurs.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Un carport bien conçu offre non seulement une protection contre les intempéries et 
                les rayons du soleil, mais il constitue également un ajout fonctionnel et attrayant 
                à votre espace extérieur.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Que vous recherchiez un design moderne, classique ou sur mesure, notre équipe 
                d'experts vous aide à créer un carport qui s'harmonise parfaitement avec le style 
                de votre maison.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey mb-3`}>
                Notre approche
              </h4>
              <p className={`${dosisFont.className} text-darkGrey`}>
                Nous utilisons des matériaux de haute qualité et des techniques de construction 
                robustes pour garantir la durabilité et la solidité de chaque carport.
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
                <div className="text-3xl font-bold text-primary mb-2">50m2</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Surface maximale</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Carports construits</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-3</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Jours de montage</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Ans de garantie</div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey`}>
                Types d'abris
              </h4>
              <ul className="space-y-2">
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Carports voitures (1 à 3 véhicules)
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Abris camping-cars et caravanes
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Hangars à bateaux et équipements
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Abris de jardin multifonctions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarportIntro;