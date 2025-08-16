import React from "react";
import { motion } from "framer-motion";

const SolivageIntro = () => {
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
                Structures porteuses
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                L'ossature de votre habitat
              </h3>
            </div>

            <div className="space-y-6">
              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Que vous envisagiez de construire une nouvelle maison ou de
                rénover un espace existant, nos experts en solivage porteur sont
                là pour vous accompagner à chaque étape du processus.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Nous commençons par une évaluation approfondie de vos besoins et
                de la structure de votre bâtiment, afin de concevoir un plan de
                solivage qui garantit une distribution uniforme de la charge et
                une solidité optimale.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Grâce à notre expérience dans le domaine de la charpente, nous
                proposons une variété de solutions de solivage porteur, allant
                des méthodes traditionnelles aux techniques modernes.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4
                className="font-bold text-darkGrey mb-3"
              >
                Notre engagement qualité
              </h4>
              <p className="text-darkGrey">
                Matériaux de haute qualité et techniques éprouvées pour assurer
                durabilité et longévité, dans le respect des normes de sécurité
                en vigueur.
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
                <div className="text-3xl font-bold text-primary mb-2">
                  150m2
                </div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Surface maximale
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Planchers réalisés
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-3</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Semaines d'intervention
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Ans de durabilité
                </div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className="font-bold text-darkGrey">
                Types de solivage
              </h4>
              <ul className="space-y-2">
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Solivage bois traditionnel
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Planchers techniques modernes
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Renforcement de structures
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Planchers sur vide sanitaire
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolivageIntro;
