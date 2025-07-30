"use client";

import React, { useState } from "react";
import ContactDetailsService from "@/components/ContactDetailsService";
import PopupForm from "@/components/forms/PopupForm";
import { servicesData, serviceCategories } from "@/data/services";

// Import des composants
import ServicesHero from "@/components/services-page/ServicesHero";
import ServiceFilters from "@/components/services-page/ServiceFilters";
import ServicesList from "@/components/services-page/ServicesList";
import ServicesStats from "@/components/services-page/ServicesStats";
import ServicesCTA from "@/components/services-page/ServicesCTA";

function ServicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen">
      <ContactDetailsService />
      
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Filters */}
      <ServiceFilters 
        serviceCategories={serviceCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Services List */}
      <ServicesList filteredServices={filteredServices} />

      {/* Stats */}
      <ServicesStats />

      {/* CTA */}
      <ServicesCTA setIsFormOpen={setIsFormOpen} />

      {/* Popup Form */}
      <PopupForm 
        isOpen={isFormOpen} 
        closeModal={() => setIsFormOpen(false)} 
      />
    </div>
  );
}

export default ServicesPage;