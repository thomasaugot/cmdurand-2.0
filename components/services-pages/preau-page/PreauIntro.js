import React from "react";
import { motion } from "framer-motion";

const PreauIntro = () => {
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
                Espaces couverts
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                Votre refuge extérieur par tous les temps
              </h3>
            </div>

            <div className="space-y-6">
              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Un préau bien conçu offre non seulement une protection contre
                les intempéries, mais crée également un espace polyvalent et
                accueillant pour se détendre, se divertir ou simplement profiter
                de la nature.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Notre équipe d'experts travaille avec vous pour concevoir et
                construire un préau sur mesure qui répond à vos besoins
                spécifiques et s'intègre harmonieusement à votre environnement.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Que vous recherchiez un design contemporain, rustique ou
                traditionnel, nous mettons à votre disposition notre
                savoir-faire et notre créativité pour réaliser votre vision.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4
                className="font-bold text-darkGrey mb-3"
              >
                Notre engagement
              </h4>
              <p className="text-darkGrey">
                Avec des matériaux de haute qualité et une attention méticuleuse
                aux détails, nous créons un préau durable, fonctionnel et
                esthétique.
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
                <div className="text-3xl font-bold text-primary mb-2">80m2</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Surface maximale
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Préaux construits
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1-2</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Semaines de chantier
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
            </div>

            <div className="bg-lightGrey/20 rounded-xl p-6 space-y-4">
              <h4 className="font-bold text-darkGrey">
                Types de préaux
              </h4>
              <ul className="space-y-2">
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Préaux scolaires et collectifs
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Abris de jardin et terrasses
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Espaces de réception extérieure
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Abris multifonctions
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreauIntro;
