import React from "react";
import { motion } from "framer-motion";

const CharpenteIndustrielleSpecs = () => {
  const specifications = [
    {
      title: "Portées exceptionnelles",
      description:
        "Jusqu'à 30 mètres de portée libre sans poteau intermédiaire",
      icon: "📏",
    },
    {
      title: "Charges importantes",
      description:
        "Dimensionnement pour charges lourdes et contraintes industrielles",
      icon: "⚖️",
    },
    {
      title: "Résistance au feu",
      description: "Traitement ignifuge selon normes européennes EN 1995",
      icon: "🔥",
    },
    {
      title: "Rapidité d'exécution",
      description: "Préfabrication en atelier pour un montage ultra-rapide",
      icon: "⚡",
    },
  ];

  const advantages = [
    {
      title: "Économique",
      points: ["Coût maîtrisé", "Délais raccourcis", "Maintenance réduite"],
    },
    {
      title: "Écologique",
      points: [
        "Matériau renouvelable",
        "Faible empreinte carbone",
        "Recyclable",
      ],
    },
    {
      title: "Technique",
      points: [
        "Grande flexibilité",
        "Excellente isolation",
        "Résistance sismique",
      ],
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
            className={`font-roboto text-primary text-sm font-bold mb-4 uppercase tracking-wider`}
          >
            Spécifications techniques
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            Performance et fiabilité industrielle
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Nos charpentes industrielles répondent aux exigences les plus
            strictes en matière de performance structurelle et de conformité
            réglementaire.
          </p>
        </motion.div>

        {/* Spécifications techniques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specifications.map((spec, index) => (
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
              <div className="text-4xl mb-4">{spec.icon}</div>
              <h4
                className="font-bold text-darkGrey text-lg mb-3"
              >
                {spec.title}
              </h4>
              <p
                className="text-darkGrey text-sm leading-relaxed"
              >
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Avantages */}
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
            Pourquoi choisir la charpente bois industrielle ?
          </h4>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <h5
                  className="font-bold text-primary text-xl mb-4"
                >
                  {advantage.title}
                </h5>
                <ul className="space-y-2">
                  {advantage.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-darkGrey flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section normes et certifications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-custom-light p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4
                className="font-bold text-darkGrey text-xl mb-4"
              >
                Conformité et certifications
              </h4>
              <p
                className="text-darkGrey leading-relaxed mb-6"
              >
                Toutes nos réalisations respectent scrupuleusement les normes en
                vigueur et font l'objet d'un suivi qualité rigoureux.
              </p>
              <ul className="space-y-2">
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Eurocode 5 (calcul structures bois)
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  DTU 31.1 et 31.2 (charpentes bois)
                </li>
                <li
                  className="text-darkGrey flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  NF EN 14081 (bois de structure)
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-xl p-6">
              <h5
                className="font-bold text-primary text-lg mb-3"
              >
                🏗️ Notre processus qualité
              </h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                    1
                  </span>
                  <span
                    className="text-darkGrey text-sm"
                  >
                    Étude structure par ingénieur
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                    2
                  </span>
                  <span
                    className="text-darkGrey text-sm"
                  >
                    Contrôle qualité matériaux
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                    3
                  </span>
                  <span
                    className="text-darkGrey text-sm"
                  >
                    Suivi de chantier rigoureux
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharpenteIndustrielleSpecs;
