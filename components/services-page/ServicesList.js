import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesList = ({ filteredServices }) => (
  <section className="px-6 lg:px-20 py-20 brick-bg">
    <div className="max-w-7xl mx-auto space-y-20">
      {filteredServices.map((service, index) => (
        <ServiceCard 
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default ServicesList;