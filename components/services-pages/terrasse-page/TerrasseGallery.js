import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageModal from "@/components/ImageModal";

const TerrasseGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    
    setSelectedImage({
      src: images[imageIndex],
      alt: `Terrasse bois - Photo ${imageIndex + 1}`,
      title: "Terrasses bois",
      description: `Terrasse réalisée ${imageIndex + 1}/${images.length}`
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
      alt: `Terrasse bois - Photo ${newIndex + 1}`,
      title: "Terrasses bois",
      description: `Terrasse réalisée ${newIndex + 1}/${images.length}`
    });
  };

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
              Nos terrasses réalisées
            </h3>
            <p
              className="text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez nos créations d'espaces extérieurs : terrasses bois,
              composite et aménagements sur mesure pour tous les styles de vie.
            </p>
          </motion.div>

          {/* Galerie avec grid responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-custom-light group"
                onClick={() => openImageModal(index)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`Terrasse ${index + 1}`}
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
      </section>

      <ImageModal
        selectedImage={selectedImage}
        closeImageModal={closeImageModal}
        navigateImage={navigateImage}
      />
    </>
  );
};

export default TerrasseGallery;