"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHammer,
  FaLeaf,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaHammer,
    title: "Savoir-faire Expert",
    description:
      "Passion du bois et maîtrise technique pour des ouvrages d'exception",
  },
  {
    icon: FaLeaf,
    title: "Matériaux Durables",
    description:
      "Sélection rigoureuse de bois locaux et matériaux éco-responsables",
  },
  {
    icon: FaShieldAlt,
    title: "Garantie Qualité",
    description: "Travaux garantis et assurés, respect des normes en vigueur",
  },
  {
    icon: FaClock,
    title: "Réactivité",
    description: "Devis sous 48h, intervention rapide selon vos disponibilités",
  },
];

function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`font-roboto text-primary text-lg font-bold mb-4 uppercase tracking-wide`}
            >
              Qui sommes-nous ?
            </h2>
            <h3
              className="text-4xl lg:text-5xl font-bold text-darkGrey mb-6"
            >
              L'expertise bois au service de vos projets depuis 2020
            </h3>
            <p
              className="text-lg text-darkGrey leading-relaxed mb-6"
            >
              Basée à Missillac en Loire-Atlantique, la SARL Charpente
              Menuiserie Durand met son savoir-faire artisanal au service de vos
              projets de construction, rénovation et aménagement.
            </p>
            <p
              className="text-lg text-darkGrey leading-relaxed mb-8"
            >
              De la charpente traditionnelle aux extensions ossature bois, en
              passant par l'aménagement de combles et la menuiserie sur mesure,
              nous accompagnons particuliers et professionnels dans la
              concrétisation de leurs projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3"
              >
                Découvrir nos services
                <FaArrowRight />
              </Link>
              <Link
                href="/nos-realisations"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all text-center"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-custom-medium hover:shadow-custom-dark transition-all duration-300 border border-lightGrey/30 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h4
                  className="font-bold text-lg text-darkGrey mb-4 leading-tight"
                >
                  {feature.title}
                </h4>
                <p
                  className="text-darkGrey/80 text-base leading-relaxed"
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
