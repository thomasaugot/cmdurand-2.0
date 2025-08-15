import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const TerrasseMaterials = () => {
  const materials = [
    {
      title: "Bois Exotique",
      description: "Charme naturel et résistance exceptionnelle",
      features: ["Teck, ipé, cumaru", "Naturellement imputrescible", "Vieillissement noble"],
      icon: "🌳"
    },
    {
      title: "Bois Européen",
      description: "Tradition et authenticité locale",
      features: ["Pin, mélèze, douglas", "Traitement classe 4", "Aspect chaleureux"],
      icon: "🌲"
    },
    {
      title: "Composite",
      description: "Performance et facilité d'entretien",
      features: ["Sans entretien", "Anti-dérapant", "Couleurs durables"],
      icon: "🔬"
    },
    {
      title: "Mixte",
      description: "Combinaison structure et design",
      features: ["Structure acier/alu", "Habillage bois/composite", "Grandes portées"],
      icon: "⚡"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude du Terrain",
      description: "Analyse du sol, pente, exposition et contraintes techniques."
    },
    {
      number: "02", 
      title: "Conception & Devis",
      description: "Plans personnalisés et chiffrage détaillé selon vos envies."
    },
    {
      number: "03",
      title: "Préparation du Support",
      description: "Terrassement, fondations et structure porteuse."
    },
    {
      number: "04",
      title: "Pose & Finitions",
      description: "Installation du platelage et finitions soignées."
    }
  ];

  const configurations = [
    {
      title: "Terrasse de plain-pied",
      description: "Prolongement naturel de votre maison au niveau du sol",
      surface: "20-80m²",
      characteristics: ["Accès direct", "Intégration paysagère", "Évacuation des eaux", "Bordures décoratives"]
    },
    {
      title: "Terrasse surélevée",
      description: "Structure sur pilotis pour terrain en pente",
      surface: "30-100m²",
      characteristics: ["Vue dégagée", "Ventilation optimale", "Rangement dessous", "Garde-corps sécurisés"]
    },
    {
      title: "Terrasse avec pergola",
      description: "Espace ombragé pour plus de confort",
      surface: "25-120m²",
      characteristics: ["Protection solaire", "Structure intégrée", "Plantes grimpantes", "Éclairage possible"]
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
            Matériaux & configurations
          </h2>
          <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
            Chaque terrasse est unique
          </h3>
          <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
            Du choix des matériaux à la configuration finale, nous adaptons chaque 
            terrasse à vos goûts, votre budget et votre environnement.
          </p>
        </motion.div>

        {/* Types de matériaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {materials.map((material, index) => (
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
              <div className="text-4xl mb-4 text-center">{material.icon}</div>
              
              <h4 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3 text-center`}>
                {material.title}
              </h4>
              
              <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 text-center leading-relaxed`}>
                {material.description}
              </p>

              <ul className="space-y-2">
                {material.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`${dosisFont.className} text-darkGrey text-xs flex items-center`}>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Configurations */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lightGrey/20 rounded-xl p-8 mb-16"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8 text-center`}>
            Configurations possibles
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            {configurations.map((config, index) => (
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
                  <h5 className={`${dosisFont.className} font-bold text-primary text-lg mb-2`}>
                    {config.title}
                  </h5>
                  <span className={`${dosisFont.className} text-darkGrey text-xs font-medium bg-primary/10 px-2 py-1 rounded`}>
                    {config.surface}
                  </span>
                </div>
                
                <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 leading-relaxed`}>
                  {config.description}
                </p>
                
                <ul className="space-y-1">
                  {config.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className={`${dosisFont.className} text-darkGrey text-xs flex items-center`}>
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Processus de réalisation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8`}>
            Processus de réalisation
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
                    {step.number}
                  </div>
                  
                  {/* Contenu */}
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      {step.number}
                    </div>
                    
                    <h5 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3`}>
                      {step.title}
                    </h5>
                    
                    <p className={`${dosisFont.className} text-darkGrey text-sm leading-relaxed`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecteur entre les étapes */}
                {index < processSteps.length - 1 && (
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

export default TerrasseMaterials;