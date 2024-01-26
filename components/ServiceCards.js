"use client";

import Image from "next/image";
import React from "react";
import charpenteTrad from "/assets/img/charp-trad.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import ossature from "/assets/img/ossature.jpg";
import preau from "/assets/img/préau.jpg";
import carport from "/assets/img/carport.jpg";
import terrasse from "/assets/img/terrasse.jpg";
// import combles from "/assets/img/";
import menuiserieExt from "/assets/img/menuiserie-ext.jpg";
import bardage from "/assets/img/bardage.jpg";
import solivage from "/assets/img/solivage.jpg";
import menuiserieG from "/assets/img/menuiserie-g.jpg";

const services = [
  { id: 1, title: "Charpente traditionnelle", imageUrl: charpenteTrad },
  { id: 1, title: "Charpente industrielle", imageUrl: charpenteIndus },
  { id: 1, title: "extension ou maison ossature", imageUrl: ossature },
  { id: 1, title: "Préau", imageUrl: preau },
  { id: 1, title: "Carport", imageUrl: carport },
  { id: 1, title: "Terrasse", imageUrl: terrasse },
  { id: 1, title: "Aménagement des combles", imageUrl: charpenteTrad },
  { id: 1, title: "Menuiserie extérieure", imageUrl: menuiserieExt },
  { id: 1, title: "Bardage (différents types de revêtements extérieurs )", imageUrl: bardage },
  { id: 1, title: "Solivage porteur (plancher)", imageUrl: solivage },
  { id: 1, title: "Menuiserie Générale", imageUrl: menuiserieG },
];

const ServiceCard = ({ title, imageUrl }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-[220px] h-48 overflow-hidden m-2 transition-transform transform hover:scale-105 text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-filter duration-500 rounded-lg ${
            isHovered ? "filter-none" : "bg-darkGrey z-11"
          }`}
        />
      </div>
      {isHovered ? null : (
        <h1
          className="filter-none z-10 text-2xl justify-center text-center font-bold capitalize"
          style={{ WebkitTextStroke: "1px black" }}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

const ServiceCards = () => {
  return (
    <div className="absolute top-[22.5%] right-0 mt-10">
      <div className="flex flex-wrap w-[85vw]">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
