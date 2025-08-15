import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const TerrasseGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
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
            <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
              Galerie
            </h2>
            <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
              Nos terrasses réalisées
            </h3>
            <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
              Découvrez nos créations d'espaces extérieurs : terrasses bois, composite 
              et aménagements sur mesure pour tous les styles de vie.
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
                onClick={() => openModal(index)}
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
                    <p className={`${dosisFont.className} text-sm font-medium`}>
                      Cliquer pour agrandir
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <IoMdClose size={24} />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <GrFormPrevious size={32} />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
            >
              <GrFormNext size={32} />
            </button>

            <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
              <p className={`${dosisFont.className} text-sm`}>
                Terrasse {currentIndex + 1} sur {images.length}
              </p>
            </div>

            <div className="relative">
              <Image
                src={selectedImage}
                alt={`Terrasse ${currentIndex + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                priority
                quality={95}
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TerrasseGallery;