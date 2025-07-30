"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { FaCheck, FaShieldAlt, FaUsers, FaLeaf, FaClock, FaAward } from "react-icons/fa";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const engagements = [
  {
    icon: FaCheck,
    title: "Devis gratuit et détaillé",
    description: "Estimation précise et transparente de vos projets, sans engagement",
  },
  {
    icon: FaShieldAlt,
    title: "Travaux garantis",
    description: "Garantie décennale et assurance responsabilité civile professionnelle",
  },
  {
    icon: FaUsers,
    title: "Équipe qualifiée",
    description: "Artisans expérimentés et formés aux dernières techniques",
  },
  {
    icon: FaLeaf,
    title: "Matériaux durables",
    description: "Sélection rigoureuse de bois certifiés et matériaux éco-responsables",
  },
  {
    icon: FaClock,
    title: "Respect des délais",
    description: "Planning respecté et communication transparente tout au long du projet",
  },
  {
    icon: FaAward,
    title: "Satisfaction client",
    description: "Plus de 200 projets réalisés avec un taux de satisfaction de 100%",
  },
];

function EngagementsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-lightGrey/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${robotoFont.className} text-primary text-lg font-bold mb-4 uppercase tracking-wide`}>
            Nos engagements
          </h2>
          <h3 className={`${dosisFont.className} text-4xl lg:text-5xl font-bold text-darkGrey mb-6`}>
            Pourquoi faire confiance à CMD ?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-custom-light hover:shadow-custom-medium transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className={`${dosisFont.className} font-bold text-xl text-darkGrey mb-4`}>
                {item.title}
              </h4>
              <p className={`${dosisFont.className} text-darkGrey leading-relaxed`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementsSection;