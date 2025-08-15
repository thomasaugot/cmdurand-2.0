import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Medium.ttf" });

const ProjectsGallery = ({ filteredProjects, openImageModal }) => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {filteredProjects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: projectIndex * 0.1,
              ease: "easeOut",
            }}
            className="mb-24 last:mb-0"
          >
            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-custom-medium p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2
                    className={`${dosisFont.className} text-darkGrey font-bold text-2xl lg:text-3xl mb-4`}
                  >
                    {project.title}
                  </h2>
                  <p
                    className={`${dosisFont.className} text-darkGrey text-lg leading-relaxed mb-6`}
                  >
                    {project.description}
                  </p>
                  <div className="bg-lightGrey/30 rounded-lg p-4">
                    <h4
                      className={`${dosisFont.className} font-bold text-darkGrey mb-2`}
                    >
                      Défis techniques :
                    </h4>
                    <p
                      className={`${dosisFont.className} text-darkGrey text-sm`}
                    >
                      {project.challenges}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <span
                      className={`${dosisFont.className} text-primary font-bold text-sm uppercase tracking-wide`}
                    >
                      {project.serviceType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-darkGrey">
                    <FaCalendarAlt className="text-primary" />
                    <span className={`${dosisFont.className} text-sm`}>
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-darkGrey">
                    <FaClock className="text-primary" />
                    <span className={`${dosisFont.className} text-sm`}>
                      {project.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-darkGrey">
                    <FaUser className="text-primary" />
                    <span className={`${dosisFont.className} text-sm`}>
                      {project.client}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {project.images.slice(0, 3).map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: imageIndex * 0.1,
                    ease: "easeOut",
                  }}
                  className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-custom-light h-64"
                  onClick={() => openImageModal(projectIndex, imageIndex)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3
                        className={`${dosisFont.className} font-bold text-base mb-1`}
                      >
                        {image.title}
                      </h3>
                      <p
                        className={`${dosisFont.className} text-xs opacity-90 line-clamp-2`}
                      >
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;