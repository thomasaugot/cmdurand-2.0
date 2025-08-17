import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageModal from "@/components/ImageModal";

const CarportGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    
    setSelectedImage({
      src: images[imageIndex],
      alt: `Carport - Photo ${imageIndex + 1}`,
      title: "Carports et abris réalisés",
      description: `Exemple de carport ${imageIndex + 1}/${images.length}`
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;

    if (direction === "next") {
      newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
    } else {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
    }

    setCurrentImageIndex(newIndex);
    
    setSelectedImage({
      src: images[newIndex],
      alt: `Carport - Photo ${newIndex + 1}`,
      title: "Carports et abris réalisés",
      description: `Exemple de carport ${newIndex + 1}/${images.length}`
    });
  };

  // Si une seule image, affichage spécial
  if (images.length === 1) {
    return (
      <>
        <section className="py-20 px-6 lg:px-12 bg-lightGrey/30">
          <div className="max-w-6xl mx-auto">
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
                Réalisation
              </h2>
              <h3
                className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
              >
                Exemple de carport réalisé
              </h3>
              <p
                className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Découvrez un exemple de notre savoir-faire en construction de
                carports. D'autres projets viendront enrichir cette galerie très
                prochainement.
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div
                className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-custom-medium group"
                onClick={() => openImageModal(0)}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={images[0]}
                    alt="Carport réalisé"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4
                      className="font-bold text-xl mb-2"
                    >
                      Carport en bois
                    </h4>
                    <p className="text-base">
                      Cliquer pour agrandir et voir les détails
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message pour futures réalisations */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 text-center bg-white rounded-xl p-8 shadow-custom-light"
            >
              <h4
                className="font-bold text-darkGrey text-xl mb-4"
              >
                Plus de réalisations en cours
              </h4>
              <p
                className="text-darkGrey text-base leading-relaxed max-w-2xl mx-auto"
              >
                Nous construisons actuellement plusieurs carports et abris. Ces
                nouvelles réalisations viendront compléter notre galerie dans
                les semaines à venir.
              </p>
            </motion.div>
          </div>
        </section>

        <ImageModal
          selectedImage={selectedImage}
          closeImageModal={closeImageModal}
          navigateImage={navigateImage}
        />
      </>
    );
  }

  // Si plusieurs images, galerie normale
  return (
    <>
      <section className="py-20 px-6 lg:px-12 bg-lightGrey/30">
        <div className="max-w-7xl mx-auto">
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
              Galerie
            </h2>
            <h3
              className="text-3xl lg:text-4xl font-bold text-darkGrey mb-6"
            >
              Nos carports et abris réalisés
            </h3>
            <p
              className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez nos constructions d'abris pour véhicules, alliant
              protection efficace et intégration esthétique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.02,
                  ease: "easeOut",
                }}
                className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-custom-light group"
                onClick={() => openImageModal(index)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`Carport ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-base font-medium">
                      Cliquer pour agrandir
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ImageModal
          selectedImage={selectedImage}
          closeImageModal={closeImageModal}
          navigateImage={navigateImage}
        />
      </section>
    </>
  );
};

export default CarportGallery;