import React from "react";
import { motion } from "framer-motion";
import { FaUmbrella, FaBullseye, FaLeaf, FaShieldAlt } from "react-icons/fa";

const PreauFeatures = () => {
  const features = [
    {
      title: "Protection intégrale",
      description: "Abri efficace contre pluie, neige, vent et rayons UV",
      icon: <FaUmbrella className="text-primary" />,
    },
    {
      title: "Polyvalence d'usage",
      description:
        "Espace modulable pour détente, jeux, réceptions ou stockage",
      icon: <FaBullseye className="text-primary" />,
    },
    {
      title: "Intégration paysagère",
      description: "Design harmonieux qui s'intègre à votre environnement",
      icon: <FaLeaf className="text-primary" />,
    },
    {
      title: "Solidité garantie",
      description: "Structure robuste conçue pour résister aux intempéries",
      icon: <FaShieldAlt className="text-primary" />,
    },
  ];

  const applications = [
    {
      title: "Préaux scolaires",
      description: "Espaces couverts pour cours de récréation et activités",
      surface: "50-200m²",
      characteristics: [
        "Hauteur adaptée",
        "Ouvertures sécurisées",
        "Sol antidérapant",
        "Évacuation optimisée",
      ],
    },
    {
      title: "Abris de jardin",
      description: "Protection pour terrasses et espaces de détente",
      surface: "20-80m²",
      characteristics: [
        "Design personnalisé",
        "Matériaux nobles",
        "Éclairage intégré",
        "Ventilation naturelle",
      ],
    },
    {
      title: "Espaces événementiels",
      description: "Structures pour réceptions et rassemblements",
      surface: "30-150m²",
      characteristics: [
        "Grandes portées",
        "Modulable",
        "Esthétique soignée",
        "Acoustique adaptée",
      ],
    },
  ];

  const construction = [
    {
      step: "01",
      title: "Analyse du site",
      description: "Étude du terrain, exposition et contraintes réglementaires",
    },
    {
      step: "02",
      title: "Conception personnalisée",
      description: "Plans sur mesure selon usage et intégration paysagère",
    },
    {
      step: "03",
      title: "Fabrication & préparation",
      description: "Usinage précis des éléments en atelier",
    },
    {
      step: "04",
      title: "Montage & finitions",
      description: "Assemblage sur site et finitions de qualité",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Avantages */}
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
            Avantages
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            Pourquoi choisir un préau ?
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Un espace couvert polyvalent qui étend votre lieu de vie vers
            l'extérieur, par tous les temps et en toute saison.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
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
              className="bg-white rounded-xl shadow-custom-medium p-6 text-center hover:shadow-custom-heavy transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 flex justify-center">{feature.icon}</div>

              <h4
                className="font-bold text-darkGrey text-lg mb-3"
              >
                {feature.title}
              </h4>

              <p
                className="text-darkGrey text-base leading-relaxed"
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Applications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lightGrey/20 rounded-xl p-8 mb-16"
        >
          <h4
            className="font-bold text-darkGrey text-2xl mb-8 text-center"
          >
            Nos domaines d'application
          </h4>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
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
                className="bg-white rounded-xl p-6 shadow-custom-light border-2 border-lightGrey/30 hover:border-primary transition-colors duration-300"
              >
                <div className="mb-4">
                  <h5
                    className="font-bold text-primary text-lg mb-2"
                  >
                    {app.title}
                  </h5>
                  <span
                    className="text-darkGrey text-base font-medium bg-primary/10 px-2 py-1 rounded"
                  >
                    {app.surface}
                  </span>
                </div>

                <p
                  className="text-darkGrey text-base mb-4 leading-relaxed"
                >
                  {app.description}
                </p>

                <ul className="space-y-2">
                  {app.characteristics.map((char, charIndex) => (
                    <li
                      key={charIndex}
                      className="text-darkGrey text-base flex items-center"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processus de construction */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4
            className="font-bold text-darkGrey text-2xl mb-8"
          >
            Processus de construction
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {construction.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-custom-medium p-6 text-center relative overflow-hidden h-48">
                  {/* Numéro en arrière-plan */}
                  <div className="absolute top-4 right-4 text-primary/10 font-bold text-6xl leading-none">
                    {item.step}
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      {item.step}
                    </div>

                    <h5
                      className="font-bold text-darkGrey text-lg mb-3"
                    >
                      {item.title}
                    </h5>

                    <p
                      className="text-darkGrey text-base leading-relaxed"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecteur entre les étapes */}
                {index < construction.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreauFeatures;