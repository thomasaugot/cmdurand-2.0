"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight, FaImages } from "react-icons/fa";
import { getFeaturedProjects } from "@/data/portfolio";
import ImageModal from "@/components/ImageModal";

function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const openImageModal = (projectIndex, imageIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImageIndex(imageIndex);
    
    const project = featuredProjects[projectIndex];
    const imageUrl = project.images[imageIndex];
    
    setSelectedImage({
      src: imageUrl,
      alt: `${project.title} - Photo ${imageIndex + 1}`,
      title: project.title,
      description: `Projet ${project.categories[0]} réalisé en ${project.year}`
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentProjectImages = featuredProjects[currentProject].images;
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentImageIndex < currentProjectImages.length - 1
          ? currentImageIndex + 1
          : 0;
    } else {
      newIndex =
        currentImageIndex > 0
          ? currentImageIndex - 1
          : currentProjectImages.length - 1;
    }

    setCurrentImageIndex(newIndex);
    
    const project = featuredProjects[currentProject];
    const imageUrl = project.images[newIndex];
    
    setSelectedImage({
      src: imageUrl,
      alt: `${project.title} - Photo ${newIndex + 1}`,
      title: project.title,
      description: `Projet ${project.categories[0]} réalisé en ${project.year}`
    });
  };

  return (
    <>
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-roboto text-primary text-lg font-bold mb-4 uppercase tracking-wide">
              Nos dernières réalisations
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-darkGrey mb-6">
              Des projets qui témoignent de notre savoir-faire
            </h3>
            <p className="text-xl text-darkGrey max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations récentes qui illustrent
              la diversité et la qualité de nos interventions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Main Image */}
                <div 
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => openImageModal(index, 0)}
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Photo principale`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Categories overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="flex gap-2">
                      {project.categories.slice(0, 2).map((category, catIndex) => (
                        <span key={catIndex} className="text-xs bg-primary text-white px-2 py-1 rounded-full font-medium">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image count indicator */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <FaImages size={12} />
                    <span className="text-xs font-medium">{project.images.length}</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <FaImages size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Voir les photos</span>
                    </div>
                  </div>
                </div>

                {/* Image Gallery Preview */}
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.images.slice(1, 4).map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openImageModal(index, imgIndex + 1)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Photo ${imgIndex + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {/* Show +X more indicator on last image if there are more */}
                        {imgIndex === 2 && project.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              +{project.images.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h4 className="font-bold text-lg text-darkGrey mb-2">
                      {project.title}
                    </h4>
                    <p className="text-darkGrey flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-primary" size={14} />
                      <span className="text-sm">{project.year}</span>
                    </p>
                    
                    {/* View Project Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-darkGrey/60">
                        {project.images.length} photo{project.images.length > 1 ? "s" : ""}
                      </span>
                      <button 
                        onClick={() => openImageModal(index, 0)}
                        className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                      >
                        <span>Voir les photos</span>
                        <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/nos-realisations"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3 group"
            >
              Voir toutes nos réalisations
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
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

export default ProjectsSection;