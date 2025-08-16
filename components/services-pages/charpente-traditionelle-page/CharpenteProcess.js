import React from "react";
import { motion } from "framer-motion";

const CharpenteProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Étude & Conception",
      description:
        "Analyse de votre projet, prise de mesures et conception des plans techniques adaptés à vos besoins.",
    },
    {
      number: "02",
      title: "Sélection du Bois",
      description:
        "Choix rigoureux des essences de bois français, contrôle qualité et préparation des pièces.",
    },
    {
      number: "03",
      title: "Taille Traditionnelle",
      description:
        "Façonnage des pièces selon les techniques ancestrales, assemblages à tenons et mortaises.",
    },
    {
      number: "04",
      title: "Levage & Montage",
      description:
        "Installation et assemblage sur site avec notre équipe de charpentiers expérimentés.",
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
            Notre processus
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            De l'idée à la réalisation
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Chaque charpente traditionnelle suit un processus méticuleux,
            alliant savoir-faire ancestral et techniques modernes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="bg-white rounded-xl shadow-custom-medium p-6 text-center relative overflow-hidden">
                {/* Numéro en arrière-plan */}
                <div className="absolute top-4 right-4 text-primary/10 font-bold text-6xl leading-none">
                  {step.number}
                </div>

                {/* Contenu */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                    {step.number}
                  </div>

                  <h4
                    className="font-bold text-darkGrey text-lg mb-3"
                  >
                    {step.title}
                  </h4>

                  <p
                    className="text-darkGrey text-sm leading-relaxed"
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

        {/* Section finale */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-lightGrey/20 rounded-xl p-8 text-center"
        >
          <h4
            className="font-bold text-darkGrey text-xl mb-4"
          >
            Pourquoi choisir la charpente traditionnelle ?
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary text-2xl mb-2">🏛️</div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Durabilité
              </h5>
              <p className="text-darkGrey text-sm">
                Résistance exceptionnelle et longévité séculaire
              </p>
            </div>
            <div>
              <div className="text-primary text-2xl mb-2">🎨</div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Esthétique
              </h5>
              <p className="text-darkGrey text-sm">
                Beauté naturelle et charme authentique
              </p>
            </div>
            <div>
              <div className="text-primary text-2xl mb-2">🌿</div>
              <h5
                className="font-bold text-darkGrey mb-2"
              >
                Écologie
              </h5>
              <p className="text-darkGrey text-sm">
                Matériau renouvelable et circuit court
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharpenteProcess;
