import React from "react";
import { motion } from "framer-motion";
import { FaDoorOpen, FaWindowMaximize, FaShieldAlt, FaHome } from "react-icons/fa";

const MenuiserieExterieureProducts = () => {
  const products = [
    {
      title: "Portes d'entrée",
      description: "Première impression et sécurité de votre maison",
      features: [
        "Design personnalisé",
        "Isolation renforcée",
        "Serrures haute sécurité",
        "Finitions durables",
      ],
      icon: <FaDoorOpen className="text-primary" />,
    },
    {
      title: "Fenêtres sur mesure",
      description: "Lumière naturelle et performance énergétique",
      features: [
        "Double ou triple vitrage",
        "Ouvrants sur mesure",
        "Isolation thermique",
        "Entretien facilité",
      ],
      icon: <FaWindowMaximize className="text-primary" />,
    },
    {
      title: "Volets bois",
      description: "Charme traditionnel et protection optimale",
      features: [
        "Battants ou coulissants",
        "Essences nobles",
        "Traitement longue durée",
        "Quincaillerie de qualité",
      ],
      icon: <FaShieldAlt className="text-primary" />,
    },
    {
      title: "Terrasses & Aménagements",
      description: "Espaces de vie extérieure en harmonie",
      features: [
        "Lames de terrasse",
        "Garde-corps assortis",
        "Pergolas intégrées",
        "Mobilier fixe",
      ],
      icon: <FaHome className="text-primary" />,
    },
  ];

  const woodTypes = [
    {
      name: "Chêne",
      characteristics: "Noble et durable",
      usage: "Portes d'entrée haut de gamme",
    },
    {
      name: "Pin autoclave",
      characteristics: "Résistant et économique",
      usage: "Volets et aménagements",
    },
    {
      name: "Mélèze",
      characteristics: "Naturellement imputrescible",
      usage: "Terrasses et façades",
    },
    {
      name: "Iroko",
      characteristics: "Exotique et stable",
      usage: "Menuiseries haut de gamme",
    },
  ];

  const finishes = [
    {
      type: "Lasure",
      description:
        "Protection transparente qui laisse apparaître le veinage du bois",
      maintenance: "Entretien tous les 3-5 ans",
    },
    {
      type: "Peinture microporeuse",
      description: "Protection opaque en couleur, respirante pour le bois",
      maintenance: "Entretien tous les 8-10 ans",
    },
    {
      type: "Huile naturelle",
      description: "Finition écologique qui nourrit et protège le bois",
      maintenance: "Entretien annuel",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Produits */}
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
            Nos produits
          </h2>
          <h3
            className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
          >
            Gamme complète de menuiserie extérieure
          </h3>
          <p
            className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
          >
            De la porte d'entrée à la terrasse, nous concevons et réalisons tous
            vos équipements extérieurs en bois sur mesure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
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
              <div className="text-4xl mb-4 text-center flex justify-center">{product.icon}</div>

              <h4
                className="font-bold text-darkGrey text-lg mb-3 text-center"
              >
                {product.title}
              </h4>

              <p
                className="text-darkGrey text-base mb-4 text-center leading-relaxed"
              >
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
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

        {/* Essences de bois */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-lightGrey/20 rounded-xl p-8 mb-16"
        >
          <h4
            className="font-bold text-darkGrey text-2xl mb-8 text-center"
          >
            Essences de bois sélectionnées
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {woodTypes.map((wood, index) => (
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
                <h5
                  className="font-bold text-primary text-lg mb-2"
                >
                  {wood.name}
                </h5>
                <p
                  className="text-darkGrey text-base mb-3 italic"
                >
                  {wood.characteristics}
                </p>
                <p className="text-darkGrey text-base">
                  {wood.usage}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Finitions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h4
            className="font-bold text-darkGrey text-2xl mb-8"
          >
            Finitions et traitements
          </h4>

          <div className="grid md:grid-cols-3 gap-8">
            {finishes.map((finish, index) => (
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
                className="bg-white rounded-xl p-6 shadow-custom-light h-48"
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h5
                      className="font-bold text-primary text-lg mb-3"
                    >
                      {finish.type}
                    </h5>
                    <p
                      className="text-darkGrey text-base leading-relaxed"
                    >
                      {finish.description}
                    </p>
                  </div>
                  <div className="bg-lightGrey/30 rounded-lg p-3 mt-4">
                    <p
                      className="text-darkGrey text-base font-medium"
                    >
                      {finish.maintenance}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuiserieExterieureProducts;