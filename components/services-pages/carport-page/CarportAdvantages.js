import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const CarportAdvantages = () => {
  const advantages = [
    {
      title: "Protection toutes saisons",
      description: "Votre véhicule à l'abri des intempéries, grêle, neige et UV",
      icon: "☂️"
    },
    {
      title: "Solution économique",
      description: "Alternative abordable au garage, installation rapide",
      icon: "💰"
    },
    {
      title: "Design personnalisable",
      description: "Styles variés pour s'harmoniser avec votre architecture",
      icon: "🎨"
    },
    {
      title: "Valorisation du bien",
      description: "Ajout fonctionnel qui augmente la valeur de votre propriété",
      icon: "📈"
    }
  ];

  const materials = [
    {
      name: "Bois lamellé-collé",
      benefits: ["Résistance exceptionnelle", "Esthétique naturelle", "Durabilité 25+ ans"],
      usage: "Idéal pour grandes portées"
    },
    {
      name: "Ossature bois traditionnelle", 
      benefits: ["Économique", "Facile d'entretien", "Modulable"],
      usage: "Parfait pour carports standards"
    },
    {
      name: "Structure métallique",
      benefits: ["Solidité maximale", "Portées importantes", "Entretien minimal"],
      usage: "Recommandé pour usage intensif"
    }
  ];

  const configurations = [
    {
      type: "Carport simple",
      description: "1 véhicule - 3x6m",
      features: ["Poteaux bois ou métal", "Toiture 1 pente", "Évacuation eau"]
    },
    {
      type: "Carport double", 
      description: "2 véhicules - 6x6m",
      features: ["Structure renforcée", "Toiture 2 pentes", "Gouttières intégrées"]
    },
    {
      type: "Carport adossé",
      description: "Contre la maison",
      features: ["Économie de structure", "Étanchéité murale", "Raccord existant"]
    },
    {
      type: "Carport camping-car",
      description: "Véhicules hauts - 4x8m",
      features: ["Hauteur 3,5m mini", "Portée libre", "Accès facilité"]
    }
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
          <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
            Avantages & Solutions
          </h2>
          <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
            Pourquoi choisir un carport ?
          </h3>
          <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
            Une solution pratique et esthétique pour protéger vos véhicules 
            tout en valorisant votre propriété.
          </p>
        </motion.div>

        {/* Avantages principaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
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
              <div className="text-4xl mb-4">{advantage.icon}</div>
              
              <h4 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3`}>
                {advantage.title}
              </h4>
              
              <p className={`${dosisFont.className} text-darkGrey text-sm leading-relaxed`}>
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Matériaux */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lightGrey/20 rounded-xl p-8 mb-16"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8 text-center`}>
            Nos matériaux de construction
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
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
                className="bg-white rounded-xl p-6 shadow-custom-light"
              >
                <h5 className={`${dosisFont.className} font-bold text-primary text-lg mb-3`}>
                  {material.name}
                </h5>
                <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 italic`}>
                  {material.usage}
                </p>
                <ul className="space-y-2">
                  {material.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className={`${dosisFont.className} text-darkGrey text-sm flex items-center`}>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Configurations */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8`}>
            Configurations disponibles
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {configurations.map((config, index) => (
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
                className="bg-white rounded-xl p-6 shadow-custom-light border-2 border-lightGrey/30 hover:border-primary transition-colors duration-300"
              >
                <h5 className={`${dosisFont.className} font-bold text-primary text-lg mb-2`}>
                  {config.type}
                </h5>
                <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 font-medium`}>
                  {config.description}
                </p>
                <ul className="space-y-1">
                  {config.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`${dosisFont.className} text-darkGrey text-xs flex items-center`}>
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarportAdvantages;