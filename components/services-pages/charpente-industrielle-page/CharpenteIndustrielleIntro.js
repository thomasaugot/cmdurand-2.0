import React from "react";
import { motion } from "framer-motion";

const CharpenteIndustrielleIntro = () => {
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
                Solutions industrielles
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                La force au service de vos projets
              </h3>
            </div>

            <div className="space-y-6">
              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Chez nous, la charpente industrielle va bien au-delà de simples
                structures en bois. C'est notre art, notre passion et notre
                expertise. Nous nous engageons à fournir à nos clients des
                solutions innovantes et durables pour leurs projets de
                construction.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Que vous construisiez un entrepôt, un complexe industriel ou
                tout autre bâtiment nécessitant une charpente solide, nous
                sommes là pour vous accompagner à chaque étape.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Notre équipe hautement qualifiée travaille avec précision et
                efficacité pour concevoir et installer des charpentes qui
                répondent aux normes les plus strictes en matière de qualité et
                de sécurité.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4
                className="font-bold text-darkGrey mb-3"
              >
                Notre engagement
              </h4>
              <p className="text-darkGrey">
                Avec notre expérience éprouvée et notre engagement envers
                l'excellence, vous pouvez avoir confiance que votre projet de
                charpente industrielle est entre de bonnes mains.
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
                  500m2
                </div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Surface maximale
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Projets industriels
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">48h</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Délai d'étude
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Aux normes
                </div>
              </div>
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className="font-bold text-darkGrey">
                Types de projets
              </h4>
              <ul className="space-y-2">
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Entrepôts et hangars industriels
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Complexes logistiques
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Bâtiments agricoles
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Structures sportives et événementielles
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharpenteIndustrielleIntro;
