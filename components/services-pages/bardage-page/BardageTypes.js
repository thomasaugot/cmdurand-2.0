import React from "react";
import { motion } from "framer-motion";
import { FaTree, FaFlask, FaIndustry, FaBolt, FaShieldAlt, FaThermometerHalf, FaStar } from "react-icons/fa";

const BardageTypes = () => {
  const bardageTypes = [
    {
      title: "Bois Naturel",
      description: "Charme authentique et performances naturelles",
      features: [
        "Pin, mélèze, cèdre",
        "Traitement autoclave",
        "Finitions variées",
      ],
      icon: <FaTree className="text-primary" />,
    },
    {
      title: "Composite",
      description: "Innovation et durabilité sans compromis",
      features: ["Sans entretien", "Résistant aux UV", "Aspect bois garanti"],
      icon: <FaFlask className="text-primary" />,
    },
    {
      title: "Fibrociment",
      description: "Robustesse et esthétique contemporaine",
      features: [
        "Incombustible",
        "Résistant intempéries",
        "Large gamme couleurs",
      ],
      icon: <FaIndustry className="text-primary" />,
    },
    {
      title: "Métallique",
      description: "Modernité et performance industrielle",
      features: ["Longévité maximale", "Étanchéité parfaite", "Design épuré"],
      icon: <FaBolt className="text-primary" />,
    },
  ];

  const techniques = [
    {
      title: "Pose horizontale",
      description:
        "Classique et intemporelle, elle élargit visuellement la façade",
    },
    {
      title: "Pose verticale",
      description: "Moderne et élégante, elle élance la structure vers le haut",
    },
    {
      title: "Pose en diagonale",
      description: "Originale et dynamique, pour un effet architectural unique",
    },
    {
      title: "Pose à claire-voie",
      description:
        "Aérée et contemporaine, parfaite pour les jeux d'ombre et lumière",
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
            Types de bardage
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            Une solution pour chaque projet
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Du bois traditionnel aux matériaux les plus innovants, découvrez
            notre gamme complète de bardages pour habiller votre façade.
          </p>
        </motion.div>

        {/* Types de bardage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bardageTypes.map((type, index) => (
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
              className="bg-white rounded-xl shadow-custom-medium p-6 border-2 border-lightGrey/30 hover:border-primary hover:shadow-custom-heavy transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center flex justify-center">{type.icon}</div>

              <h4
                className="font-bold text-darkGrey text-lg mb-3 text-center"
              >
                {type.title}
              </h4>

              <p
                className="text-darkGrey text-base mb-4 text-center leading-relaxed"
              >
                {type.description}
              </p>

              <ul className="space-y-2">
                {type.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-darkGrey text-base flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Techniques de pose */}
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
            Techniques de pose
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white rounded-lg p-6 shadow-custom-light"
              >
                <h5
                  className="font-bold text-primary text-lg mb-3"
                >
                  {technique.title}
                </h5>
                <p
                  className="text-darkGrey text-base leading-relaxed"
                >
                  {technique.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Avantages du bardage */}
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
            Les bénéfices du bardage
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaShieldAlt className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Protection
              </h5>
              <p className="text-darkGrey text-base">
                Bouclier efficace contre intempéries et UV
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaThermometerHalf className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Isolation
              </h5>
              <p className="text-darkGrey text-base">
                Amélioration des performances thermiques
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom-light">
              <div className="text-3xl mb-4 flex justify-center">
                <FaStar className="text-primary" />
              </div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Esthétique
              </h5>
              <p className="text-darkGrey text-base">
                Modernisation et valorisation de la façade
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BardageTypes;