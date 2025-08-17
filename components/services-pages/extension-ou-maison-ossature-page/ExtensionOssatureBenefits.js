import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaThermometerHalf, FaRulerCombined, FaSeedling } from "react-icons/fa";

const ExtensionOssatureBenefits = () => {
  const benefits = [
    {
      title: "Rapidité de construction",
      description:
        "Montage en atelier puis assemblage sur site pour un chantier éclair",
      icon: <FaBolt className="text-primary" />,
    },
    {
      title: "Performance énergétique",
      description:
        "Isolation intégrée et étanchéité parfaite pour un confort optimal",
      icon: <FaThermometerHalf className="text-primary" />,
    },
    {
      title: "Flexibilité architecturale",
      description: "Grandes portées et ouvertures possibles, design sur mesure",
      icon: <FaRulerCombined className="text-primary" />,
    },
    {
      title: "Respect de l'environnement",
      description:
        "Matériau renouvelable, stockage carbone et faible empreinte",
      icon: <FaSeedling className="text-primary" />,
    },
  ];

  const types = [
    {
      title: "Extension latérale",
      description: "Agrandissement sur le côté de la maison existante",
      features: [
        "Cuisine agrandie",
        "Salon supplémentaire",
        "Chambre parentale",
      ],
      surface: "20-40m²",
    },
    {
      title: "Extension arrière",
      description: "Prolongement vers le jardin pour plus d'espace de vie",
      features: ["Séjour ouvert", "Véranda intégrée", "Accès terrasse"],
      surface: "30-60m²",
    },
    {
      title: "Surélévation",
      description: "Ajout d'un étage complet pour doubler la surface",
      features: [
        "Chambres supplémentaires",
        "Bureau indépendant",
        "Salle de bains",
      ],
      surface: "50-100m²",
    },
    {
      title: "Maison neuve",
      description: "Construction complète à ossature bois",
      features: [
        "Architecture moderne",
        "Haute performance",
        "Délais maîtrisés",
      ],
      surface: "80-200m²",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Étude de faisabilité",
      description:
        "Analyse du terrain, contraintes réglementaires et techniques",
    },
    {
      step: "02",
      title: "Conception & plans",
      description:
        "Élaboration des plans architecturaux et techniques détaillés",
    },
    {
      step: "03",
      title: "Fabrication atelier",
      description: "Préparation des éléments d'ossature en atelier contrôlé",
    },
    {
      step: "04",
      title: "Montage & finitions",
      description:
        "Assemblage sur site et réalisation des finitions intérieures",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Avantages de l'ossature bois */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`font-roboto text-primary text-sm font-bold mb-4 uppercase tracking-wider`}
          >
            Avantages
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            Pourquoi choisir l'ossature bois ?
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            L'ossature bois combine performance technique, rapidité de mise en
            œuvre et respect de l'environnement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
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
              <div className="text-4xl mb-4 flex justify-center">{benefit.icon}</div>

              <h4
                className="font-bold text-darkGrey text-lg mb-3"
              >
                {benefit.title}
              </h4>

              <p
                className="text-darkGrey text-base leading-relaxed"
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Types d'extensions */}
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
            Types d'extensions et constructions
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type, index) => (
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
                    {type.title}
                  </h5>
                  <span
                    className="text-darkGrey text-base font-medium bg-primary/10 px-2 py-1 rounded"
                  >
                    {type.surface}
                  </span>
                </div>

                <p
                  className="text-darkGrey text-base mb-4 leading-relaxed"
                >
                  {type.description}
                </p>

                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-darkGrey text-base flex items-center"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processus */}
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
            Notre processus de réalisation
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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
                <div className="bg-white rounded-xl shadow-custom-medium p-6 text-center relative overflow-hidden h-52">
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
                {index < process.length - 1 && (
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

export default ExtensionOssatureBenefits;