import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../../assets/fonts/Dosis-Medium.ttf" });
const robotoFont = localFont({
  src: "../../../assets/fonts/RobotoMono-Regular.ttf",
});

const CarportGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
              <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
                Réalisation
              </h2>
              <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
                Exemple de carport réalisé
              </h3>
              <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
                Découvrez un exemple de notre savoir-faire en construction de carports. 
                D'autres projets viendront enrichir cette galerie très prochainement.
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
                onClick={() => openModal(images[0])}
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
                    <h4 className={`${dosisFont.className} font-bold text-xl mb-2`}>
                      Carport en bois
                    </h4>
                    <p className={`${dosisFont.className} text-sm`}>
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
              <h4 className={`${dosisFont.className} font-bold text-darkGrey text-xl mb-4`}>
                Plus de réalisations en cours
              </h4>
              <p className={`${dosisFont.className} text-darkGrey leading-relaxed max-w-2xl mx-auto`}>
                Nous construisons actuellement plusieurs carports et abris. 
                Ces nouvelles réalisations viendront compléter notre galerie dans les semaines à venir.
              </p>
            </motion.div>
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

              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="Carport réalisé"
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
            <h2 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
              Galerie
            </h2>
            <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-darkGrey mb-6`}>
              Nos carports et abris réalisés
            </h3>
            <p className={`${dosisFont.className} text-darkGrey text-lg max-w-3xl mx-auto leading-relaxed`}>
              Découvrez nos constructions d'abris pour véhicules, 
              alliant protection efficace et intégration esthétique.
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
                onClick={() => openModal(image)}
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

            <div className="relative">
              <Image
                src={selectedImage}
                alt="Carport réalisé"
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

export default CarportGallery;