import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const CharpenteIntro = () => {
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
                Notre expertise
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                La charpente traditionnelle, un art millénaire
              </h3>
            </div>

            <div className="space-y-6">
              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Chez nous, la charpente traditionnelle incarne l'essence même du savoir-faire artisanal. 
                Chaque pièce de bois est choisie avec soin, travaillée avec précision, pour créer des 
                structures robustes et intemporelles.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Notre équipe de charpentiers expérimentés met tout son cœur et son expertise dans chaque 
                projet, qu'il s'agisse de la restauration d'une vieille maison de campagne ou de la 
                construction d'une nouvelle demeure.
              </p>

              <p className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed`}>
                Nous comprenons l'importance de préserver les techniques traditionnelles tout en intégrant 
                les innovations modernes pour garantir des résultats à la fois authentiques et durables.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey mb-3`}>
                Notre engagement
              </h4>
              <p className={`${dosisFont.className} text-darkGrey`}>
                Avec nous, votre charpente traditionnelle est bien plus qu'une simple structure : 
                c'est un témoignage de notre engagement envers l'excellence et notre passion pour le métier.
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
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Années d'expérience</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Charpentes réalisées</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Bois français</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className={`${dosisFont.className} text-darkGrey font-medium`}>Ans de garantie</div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className={`${dosisFont.className} font-bold text-darkGrey`}>
                Techniques maîtrisées
              </h4>
              <ul className="space-y-2">
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Assemblages traditionnels à tenons et mortaises
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Charpentes à chevrons porteurs
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Restauration de charpentes anciennes
                </li>
                <li className={`${dosisFont.className} text-darkGrey flex items-center`}>
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Traitement préventif du bois
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharpenteIntro;