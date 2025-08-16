import React from "react";
import { motion } from "framer-motion";

const ExtensionOssatureIntro = () => {
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
                Ossature bois
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                Votre rêve de maison prend forme
              </h3>
            </div>

            <div className="space-y-6">
              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Votre rêve de maison prend forme avec notre expertise en
                extension et construction à ossature. Nous comprenons que votre
                maison est bien plus qu'un simple bâtiment : c'est votre refuge,
                votre havre de paix.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                L'ossature bois offre une flexibilité de conception
                incomparable, permettant des espaces lumineux, aérés et
                personnalisés selon vos besoins et vos goûts.
              </p>

              <p
                className="text-darkGrey text-lg leading-relaxed"
              >
                Notre équipe qualifiée travaille en étroite collaboration avec
                vous à chaque étape du processus, de la conception à la
                réalisation, pour s'assurer que votre projet correspond
                parfaitement à votre vision.
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h4
                className="font-bold text-darkGrey mb-3"
              >
                Notre engagement
              </h4>
              <p className="text-darkGrey">
                Avec notre engagement envers la qualité, la durabilité et le
                service client, vous pouvez avoir l'assurance que votre projet
                sera entre de bonnes mains.
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
                  120m2
                </div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Surface maximale
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Extensions réalisées
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">6-8</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Semaines de chantier
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-custom-light p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">-40%</div>
                <div
                  className="text-darkGrey font-medium"
                >
                  Consommation énergétique
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
                  Extensions de maisons existantes
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Maisons neuves à ossature bois
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Agrandissements de plain-pied
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Surélévations et étages
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionOssatureIntro;
