"use client";
import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import { portfolioProjects } from "@/data/portfolio";
import RealisationsHero from "@/components/portfolio-page/RealisationsHero";
import ProjectsGallery from "@/components/portfolio-page/ProjectsGallery";
import RealisationsCTA from "@/components/portfolio-page/RealisationsCTA";
import ImageModal from "@/components/ImageModal";

function NosRealisationsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const openImageModal = (projectIndex, imageIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImageIndex(imageIndex);
        
    const project = filteredProjects[projectIndex];
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
    const currentProjectImages = filteredProjects[currentProject].images;
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
        
    const project = filteredProjects[currentProject];
    const imageUrl = project.images[newIndex];
        
    setSelectedImage({
      src: imageUrl,
      alt: `${project.title} - Photo ${newIndex + 1}`,
      title: project.title,
      description: `Projet ${project.categories[0]} réalisé en ${project.year}`
    });
  };

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(project =>
          project.categories.includes(activeFilter)
        );

  return (
    <div className="min-h-screen">
      <RealisationsHero 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectsGallery
        filteredProjects={filteredProjects}
        openImageModal={openImageModal}
      />

      <RealisationsCTA handleToggleForm={handleToggleForm} />

      <ImageModal
        selectedImage={selectedImage}
        closeImageModal={closeImageModal}
        navigateImage={navigateImage}
      />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default NosRealisationsPage;