import React from "react";
import { motion } from "framer-motion";

const BardageIntro = () => {
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
              <h2
                className={`font-roboto text-primary text-sm font-bold mb-4 uppercase tracking-wider`}
              >
                Revêtements extérieurs
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                Protection et esthétique de vos façades
              </h3>
            </div>

            <div className="space-y-6">
              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Chez Charpente Menuiserie Durand, nous comprenons l'importance
                d'un bardage de qualité pour protéger et embellir votre maison.
                Avec notre service de bardage, nous vous offrons une gamme
                complète de revêtements extérieurs.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Que vous recherchiez un aspect traditionnel avec du bois
                naturel, une esthétique moderne avec des matériaux composites,
                ou une solution pratique avec des revêtements techniques, notre
                équipe expérimentée est là pour vous conseiller.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Le bardage ne se limite pas à l'esthétique ; il joue un rôle
                crucial dans la protection contre les intempéries et
                l'amélioration de l'isolation thermique de votre habitation.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4
                className="font-bold text-darkGrey mb-3"
              >
                Notre engagement qualité
              </h4>
              <p className="text-darkGrey">
                Nous choisissons des matériaux durables et résistants, tout en
                vous offrant une variété de styles et de finitions pour
                correspondre à vos préférences esthétiques.
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
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Types de bardage
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Façades habillées
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Ans de garantie
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">-30%</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Déperditions thermiques
                </div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className="font-bold text-darkGrey">
                Matériaux proposés
              </h4>
              <ul className="space-y-2">
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Bois naturel (pin, mélèze, cèdre)
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Bois composite et fibrociment
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Lames PVC et bardage métallique
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Panneaux isolants intégrés
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BardageIntro;
