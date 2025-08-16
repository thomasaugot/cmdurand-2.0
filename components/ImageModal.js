import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ImageModal = ({ selectedImage, closeImageModal, navigateImage }) => {
  if (!selectedImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4"
      onClick={closeImageModal}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeImageModal}
          className="absolute top-4 right-4 z-10 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-2"
        >
          <IoMdClose size={24} />
        </button>

        <button
          onClick={() => navigateImage("previous")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-3 z-20"
        >
          <GrFormPrevious size={24} />
        </button>

        <button
          onClick={() => navigateImage("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-lightGrey transition-colors bg-black/50 rounded-full p-3 z-20"
        >
          <GrFormNext size={24} />
        </button>

        <div className="z-[999] absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-2">
            {selectedImage.title}
          </h3>
          <p className="text-sm opacity-90">
            {selectedImage.description}
          </p>
        </div>

        <div className="relative">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;