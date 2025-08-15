"use client";

import React, { useState } from "react";
import PopupForm from "@/components/forms/PopupForm";
import { servicesData, serviceCategories } from "@/data/services";
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
      <ServicesHero />

      <ServiceFilters
        serviceCategories={serviceCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ServicesList filteredServices={filteredServices} />

      <ServicesStats />

      <ServicesCTA setIsFormOpen={setIsFormOpen} />

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
}

export default ServicesPage;
