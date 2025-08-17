import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageModal from "@/components/ImageModal";

const CharpenteIndustrielleGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    
    setSelectedImage({
      src: images[imageIndex],
      alt: `Charpente industrielle - Photo ${imageIndex + 1}`,
      title: "Charpente industrielle",
      description: `Réalisation industrielle ${imageIndex + 1}/${images.length}`
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
      alt: `Charpente industrielle - Photo ${newIndex + 1}`,
      title: "Charpente industrielle",
      description: `Réalisation industrielle ${newIndex + 1}/${images.length}`
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
                Exemple de charpente industrielle
              </h3>
              <p
                className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Découvrez un exemple de notre savoir-faire en charpente
                industrielle. D'autres réalisations sont en cours et seront
                bientôt ajoutées à notre galerie.
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
                    alt="Charpente industrielle"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4
                      className="font-bold text-xl mb-2"
                    >
                      Charpente industrielle
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
                Plus de réalisations à venir
              </h4>
              <p
                className="text-darkGrey text-base leading-relaxed max-w-2xl mx-auto"
              >
                Nous travaillons actuellement sur plusieurs projets de charpente
                industrielle. Ces nouvelles réalisations viendront enrichir
                notre galerie très prochainement.
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
              Nos réalisations en charpente industrielle
            </h3>
            <p
              className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez nos projets industriels, témoignages de notre expertise
              dans les structures de grande envergure.
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
                    alt={`Charpente industrielle ${index + 1}`}
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

export default CharpenteIndustrielleGallery;