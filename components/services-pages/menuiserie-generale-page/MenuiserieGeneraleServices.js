import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const MenuiserieGeneraleServices = () => {
  const services = [
    {
      title: "Mobilier sur mesure",
      description: "Créations uniques adaptées à vos espaces et besoins",
      items: ["Bibliothèques intégrées", "Dressings sur mesure", "Bureaux et tables", "Étagères murales"],
      icon: "🪑"
    },
    {
      title: "Aménagements intérieurs",
      description: "Optimisation et embellissement de vos espaces de vie",
      items: ["Placards et rangements", "Cloisons décoratives", "Escaliers intérieurs", "Habillages muraux"],
      icon: "🏠"
    },
    {
      title: "Cuisine & Salle de bain",
      description: "Aménagements fonctionnels pour les pièces d'eau",
      items: ["Plans de travail bois", "Façades d'armoires", "Meubles vasques", "Éléments décoratifs"],
      icon: "🍳"
    },
    {
      title: "Décoration & Finitions",
      description: "Touches finales qui font toute la différence",
      items: ["Moulures et baguettes", "Lambris décoratifs", "Cadres et encadrements", "Objets déco bois"],
      icon: "🎨"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Écoute & Conseil",
      description: "Analyse de vos besoins et conseils personnalisés"
    },
    {
      step: "02", 
      title: "Conception",
      description: "Création des plans et choix des matériaux"
    },
    {
      step: "03",
      title: "Fabrication",
      description: "Réalisation en atelier avec finitions soignées"
    },
    {
      step: "04",
      title: "Installation",
      description: "Pose et ajustements sur site"
    }
  ];

  const advantages = [
    {
      title: "100% Sur mesure",
      description: "Chaque création est unique et adaptée à vos besoins précis",
      icon: "📐"
    },
    {
      title: "Matériaux nobles",
      description: "Sélection rigoureuse d'essences de bois de qualité",
      icon: "🌳"
    },
    {
      title: "Finitions parfaites",
      description: "Attention aux détails et finitions de niveau artisanal",
      icon: "✨"
    },
    {
      title: "Durabilité garantie",
      description: "Créations conçues pour durer et traverser le temps",
      icon: "⏳"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Services */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
            Nos services
          </h2>
          <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
            Menuiserie générale sur mesure
          </h3>
          <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
            De la conception à la réalisation, nous créons tous vos équipements 
            et aménagements intérieurs en bois.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
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
              className="bg-white rounded-xl shadow-custom-medium p-6 border-2 border-lightGrey/30 hover:border-primary transition-colors duration-300"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              
              <h4 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3 text-center`}>
                {service.title}
              </h4>
              
              <p className={`${dosisFont.className} text-darkGrey text-sm mb-4 text-center leading-relaxed`}>
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={`${dosisFont.className} text-darkGrey text-xs flex items-center`}>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {item}
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
          className="bg-lightGrey/20 rounded-xl p-8 mb-16"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8 text-center`}>
            Notre processus de création
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
                    
                    <h5 className={`${dosisFont.className} font-bold text-darkGrey text-lg mb-3`}>
                      {item.title}
                    </h5>
                    
                    <p className={`${dosisFont.className} text-darkGrey text-sm leading-relaxed`}>
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

        {/* Avantages */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4 className={`${dosisFont.className} font-bold text-darkGrey text-2xl mb-8`}>
            Pourquoi choisir notre menuiserie ?
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
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
                className="bg-white rounded-xl p-6 shadow-custom-light text-center"
              >
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h5 className={`${dosisFont.className} font-bold text-primary text-lg mb-2`}>
                  {advantage.title}
                </h5>
                <p className={`${dosisFont.className} text-darkGrey text-sm leading-relaxed`}>
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuiserieGeneraleServices;