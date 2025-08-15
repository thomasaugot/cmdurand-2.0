import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const SolivageTechniques = () => {
  const techniques = [
    {
      title: "Solivage Traditionnel",
      description: "Méthode éprouvée avec solives en bois massif",
      features: ["Bois massif qualité structure", "Assemblages traditionnels", "Durabilité maximale"],
      icon: "🌲"
    },
    {
      title: "Planchers Techniques",
      description: "Solutions modernes pour performances optimales",
      features: ["Isolation intégrée", "Passages techniques", "Rigidité renforcée"],
      icon: "⚙️"
    },
    {
      title: "Solivage Mixte",
      description: "Combinaison bois-acier pour grandes portées",
      features: ["Portées importantes", "Déformations minimales", "Optimisation des coûts"],
      icon: "🏗️"
    },
    {
      title: "Renforcement",
      description: "Consolidation de structures existantes",
      features: ["Diagnostic préalable", "Solutions sur mesure", "Respect de l'existant"],
      icon: "🔧"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude Structurelle",
      description: "Analyse des charges, portées et contraintes techniques du projet."
    },
    {
      number: "02", 
      title: "Calculs & Dimensionnement",
      description: "Calculs de résistance et dimensionnement précis des éléments porteurs."
    },
    {
      number: "03",
      title: "Préparation & Usinage",
      description: "Préparation des bois et usinage précis en atelier."
    },
    {
      number: "04",
      title: "Pose & Assemblage",
      description: "Montage rigoureux et assemblages de qualité sur chantier."
    }
  ];

  const specifications = [
    {
      title: "Classes de bois",
      description: "Utilisation exclusive de bois classés C24 minimum pour usage structurel",
      icon: "📏"
    },
    {
      title: "Normes de calcul",
      description: "Respect de l'Eurocode 5 pour tous les dimensionnements structures",
      icon: "📐"
    },
    {
      title: "Contrôle qualité",
      description: "Vérification systématique des assemblages et de la géométrie",
      icon: "✅"
    },
    {
      title: "Garantie décennale",
      description: "Couverture complète de la responsabilité décennale sur l'ouvrage",
      icon: "🛡️"
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
            Nos techniques
          </h2>
          <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
            Solutions adaptées à chaque projet
          </h3>
          <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
            Du solivage traditionnel aux planchers techniques modernes, nous maîtrisons 
            toutes les techniques pour créer des structures porteuses durables.
          </p>
        </motion.div>

        {/* Types de techniques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techniques.map((technique, index) => (
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
              <div className="text-4xl mb-4 text-center">{technique.icon}</div>
              
              <h4 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3 text-center`}>
                {technique.title}
              </h4>
              
              <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 text-center leading-relaxed`}>
                {technique.description}
              </p>

              <ul className="space-y-2">
                {technique.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`${dosisFont.className} text-darkGrey text-xs flex items-center`}>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Processus */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8 text-center`}>
            Notre processus de réalisation
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
                    
                    <h4 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3`}>
                      {step.title}
                    </h4>
                    
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

        {/* Spécifications techniques */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-lightGrey/20 rounded-xl p-8"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8 text-center`}>
            Exigences techniques
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
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
                <div className="text-3xl mb-3">{spec.icon}</div>
                <h5 className={`${dosisFont.className} font-bold text-darkGrey mb-2`}>
                  {spec.title}
                </h5>
                <p className={`${dosisFont.className} text-darkGrey text-sm leading-relaxed`}>
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolivageTechniques;