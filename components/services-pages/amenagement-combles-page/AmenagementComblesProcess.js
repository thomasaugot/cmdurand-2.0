import React from "react";
import { motion } from "framer-motion";
import { FaRuler, FaHome, FaSun, FaExpand, FaHeart } from "react-icons/fa";
import { FaStairs, FaEuroSign } from "react-icons/fa6";


const AmenagementComblesProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Étude de Faisabilité",
      description:
        "Analyse de la charpente existante, hauteur sous plafond et contraintes techniques.",
    },
    {
      number: "02",
      title: "Conception & Plans",
      description:
        "Élaboration des plans d'aménagement optimisés selon vos besoins et le budget.",
    },
    {
      number: "03",
      title: "Isolation & Cloisons",
      description:
        "Installation de l'isolation thermique et acoustique, pose des cloisons.",
    },
    {
      number: "04",
      title: "Finitions & Livraison",
      description:
        "Pose des revêtements, menuiseries intérieures et finitions de qualité.",
    },
  ];

  const considerations = [
    {
      title: "Hauteur minimum",
      description: "1,80m sous le faîtage pour un aménagement confortable",
      icon: <FaRuler className="text-primary" />,
    },
    {
      title: "Isolation renforcée",
      description: "Performance thermique optimale été comme hiver",
      icon: <FaHome className="text-primary" />,
    },
    {
      title: "Accès sécurisé",
      description: "Escalier fixe aux normes pour un usage quotidien",
      icon: <FaStairs className="text-primary" />,
    },
    {
      title: "Éclairage naturel",
      description: "Fenêtres de toit ou lucarnes selon la configuration",
      icon: <FaSun className="text-primary" />,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`font-roboto text-primary text-base font-bold mb-4 uppercase tracking-wider`}
          >
            Notre méthode
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            De l'idée à l'espace de vie
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Un processus structuré pour transformer vos combles en respectant
            les contraintes techniques et vos attentes.
          </p>
        </motion.div>

        {/* Étapes du processus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-custom-medium p-6 text-center relative overflow-hidden h-64">
                {/* Numéro en arrière-plan */}
                <div className="absolute top-4 right-4 text-primary/10 font-bold text-6xl leading-none">
                  {step.number}
                </div>

                {/* Contenu */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                    {step.number}
                  </div>

                  <h4
                    className="font-bold text-darkGrey text-lg mb-3"
                  >
                    {step.title}
                  </h4>

                  <p
                    className="text-darkGrey text-base leading-relaxed"
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecteur entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Points d'attention */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lightGrey/20 rounded-xl p-8"
        >
          <h4
            className="font-bold text-darkGrey text-2xl mb-8 text-center"
          >
            Points clés pour un aménagement réussi
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {considerations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white rounded-xl p-6 text-center shadow-custom-light"
              >
                <div className="text-3xl mb-3 flex justify-center">{item.icon}</div>
                <h5
                  className="font-bold text-darkGrey mb-2"
                >
                  {item.title}
                </h5>
                <p
                  className="text-darkGrey text-base leading-relaxed"
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Avantages de l'aménagement */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h4
            className="font-bold text-darkGrey text-xl mb-8"
          >
            Les bénéfices d'un aménagement de combles
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaEuroSign className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Valeur ajoutée
              </h5>
              <p className="text-darkGrey text-base">
                Augmentation significative de la valeur de votre bien
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaExpand className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Surface habitable
              </h5>
              <p className="text-darkGrey text-base">
                Gain d'espace sans extension au sol
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaHeart className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Confort de vie
              </h5>
              <p className="text-darkGrey text-base">
                Nouveaux espaces adaptés à vos besoins
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenagementComblesProcess;