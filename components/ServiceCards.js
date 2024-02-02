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
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Charpente traditionnelle",
    imageUrl: charpenteTrad,
    endPoint: "/charpente-traditionelle",
  },
  {
    id: 2,
    title: "Charpente industrielle",
    imageUrl: charpenteIndus,
    endPoint: "/charpente-industrielle",
  },
  {
    id: 3,
    title: "Extension ou maison ossature",
    imageUrl: ossature,
    endPoint: "/extension-ou-maison-ossature",
  },
  { id: 4, title: "Préau", imageUrl: preau, endPoint: "/preau" },
  { id: 5, title: "Carport", imageUrl: carport, endPoint: "/carport" },
  { id: 6, title: "Terrasse", imageUrl: terrasse, endPoint: "/terrasse" },
  {
    id: 7,
    title: "Aménagement des combles",
    imageUrl: charpenteTrad,
    endPoint: "/aménagement-des-combles",
  },
  {
    id: 8,
    title: "Menuiserie extérieure",
    imageUrl: menuiserieExt,
    endPoint: "/menuiserie-extérieure",
  },
  {
    id: 9,
    title: "Bardage (différents types de revêtements extérieurs )",
    imageUrl: bardage,
    endPoint: "/bardage",
  },
  {
    id: 10,
    title: "Solivage porteur (plancher)",
    imageUrl: solivage,
    endPoint: "/solivage-porteur",
  },
  {
    id: 11,
    title: "Menuiserie Générale",
    imageUrl: menuiserieG,
    endPoint: "/menuiserie-générale",
  },
];

const ServiceCard = ({ title, imageUrl, endPoint }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div
      className="image-shadow relative flex items-center justify-center w-[42vw] h-[150px] lg:w-[180px] lg:h-[180px] overflow-hidden m-2 transition-transform transform hover:scale-105 text-white z-30"
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
      {isHovered ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={endPoint}
            passHref
            className="backdrop-blur-md text-black text-lg lg:text-xl px-3 lg:px-5 py-3 rounded-lg shadow-md text-center"
          >
            En savoir plus
          </Link>
        </div>
      ) : (
        <h1
          className="filter-none z-10 text-xl lg:text-2xl justify-center text-center font-black capitalize"
          style={{
            WebkitTextStroke: "0.2px black",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

const ServiceCards = () => {
  return (
    <div className="flex flex-wrap justify-center w-[98vw] z-30 lg:mb-8">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
};

export default ServiceCards;
