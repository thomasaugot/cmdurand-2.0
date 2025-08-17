import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ImageModal = ({ selectedImage, closeImageModal, navigateImage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Reset loading state when image changes - AVANT le return
  useEffect(() => {
    if (selectedImage) {
      setIsLoading(true);
      setImageLoaded(false);
    }
  }, [selectedImage?.src]);

  if (!selectedImage) return null;

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 flex justify-center items-center z-[1000] p-4"
      onClick={closeImageModal}
    >
      <div
        className="relative w-[95vw] h-[95vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Boutons HORS du container de l'image */}
        <button
          onClick={closeImageModal}
          className="absolute top-4 right-4 z-50 text-white hover:text-lightGrey transition-colors bg-black/70 rounded-full p-3"
        >
          <IoMdClose size={24} />
        </button>

        <button
          onClick={() => navigateImage("previous")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-50 text-white hover:text-lightGrey transition-colors bg-black/70 rounded-full p-3"
        >
          <GrFormPrevious size={28} />
        </button>

        <button
          onClick={() => navigateImage("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50 text-white hover:text-lightGrey transition-colors bg-black/70 rounded-full p-3"
        >
          <GrFormNext size={28} />
        </button>

        <div className="z-50 absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-2">
            {selectedImage.title}
          </h3>
          <p className="text-sm opacity-90">
            {selectedImage.description}
          </p>
        </div>

        {/* Container NOIR qui reste TOUJOURS présent */}
        <div className="w-[85vw] h-[85vh] bg-black rounded-lg flex items-center justify-center relative">
          
          {/* Spinner TOUJOURS visible pendant le chargement */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
            </div>
          )}
          
          {/* Image qui FORCE la taille minimum */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '85vw',
              height: '85vh',
              objectFit: 'contain',
              backgroundColor: 'black'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;