import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTools, FaUsers, FaHandshake } from "react-icons/fa";

const ServicesRecruitment = () => (
  <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-darkGrey to-darkGrey/90 text-white relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
    <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className={`font-roboto text-primary text-sm font-bold mb-4 uppercase tracking-wider`}
        >
          Nous recrutons
        </h2>

        <h3
          className="text-4xl lg:text-5xl font-bold mb-8 leading-tight"
        >
          Notre équipe <span className="text-primary">s'agrandit</span> !
        </h3>

        <p
          className="text-xl lg:text-2xl text-lightGrey mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Le succès de notre entreprise nous pousse à recruter de nouveaux
          talents passionnés par le travail du bois et l'artisanat de qualité.
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          >
            <FaTools className="text-primary text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-3">
              Savoir-faire reconnu
            </h4>
            <p className="text-lightGrey">
              Rejoignez une équipe d'artisans expérimentés et perfectionnez vos
              techniques
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          >
            <FaUsers className="text-primary text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-3">
              Esprit d'équipe
            </h4>
            <p className="text-lightGrey">
              Ambiance conviviale et collaborative dans une entreprise à taille
              humaine
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          >
            <FaHandshake className="text-primary text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-3">
              Projets variés
            </h4>
            <p className="text-lightGrey">
              Chaque projet est unique : charpente, menuiserie, rénovation...
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100063695462775"
            target="_blank"
            rel="noreferrer"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 text-lg"
          >
            <FaFacebook className="text-xl" />
            Voir notre offre d'emploi
          </a>

          <a
            href="mailto:charpente.menuiserie.durand@gmail.com?subject=Candidature spontanée"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-darkGrey font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg"
          >
            Candidature spontanée
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lightGrey/80 text-sm mt-6"
        >
          Postulez dès maintenant et participez à notre développement !
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default ServicesRecruitment;
