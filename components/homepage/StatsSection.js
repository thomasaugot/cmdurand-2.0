"use client";

import { motion } from "framer-motion";
import { FaAward, FaHome, FaUsers, FaClock } from "react-icons/fa";

const stats = [
  {
    icon: FaAward,
    number: "100%",
    label: "Projets réussis",
    color: "text-primary",
  },
  {
    icon: FaHome,
    number: "50+",
    label: "Clients satisfaits",
    color: "text-primary",
  },
  {
    icon: FaUsers,
    number: "5★",
    label: "Note moyenne",
    color: "text-primary",
  },
  {
    icon: FaClock,
    number: "48h",
    label: "Réponse garantie",
    color: "text-primary",
  },
];

function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Des chiffres qui parlent
          </h2>
          <p
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            Notre engagement et notre savoir-faire au service de votre
            satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon size={48} className="mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
