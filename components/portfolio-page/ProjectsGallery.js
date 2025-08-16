import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const ProjectsGallery = ({ filteredProjects, openImageModal }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-16">
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className="p-8 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-2">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        {project.categories.map((category, index) => (
                          <span key={index} className="text-primary font-bold text-sm uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
                            {category}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-darkGrey">
                        <FaCalendarAlt className="text-primary text-sm" />
                        <span className="text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* {project.featured && (
                    <div className="bg-primary text-white px-4 py-2 rounded-full">
                      <span className="text-sm font-bold">
                        Projet phare
                      </span>
                    </div>
                  )} */}
                </div>
              </div>

              {/* Project Images Gallery */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.slice(0, 6).map((image, imageIndex) => (
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
                      className="cursor-pointer rounded-xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 group"
                      onClick={() => openImageModal(projectIndex, imageIndex)}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={image}
                          alt={`${project.title} - Photo ${imageIndex + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                        {/* Indicateur s'il y a plus d'images */}
                        {imageIndex === 5 && project.images.length > 6 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                              +{project.images.length - 6} photos
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;