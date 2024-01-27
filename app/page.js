"use client";

// here is all the code found on the homepage

import Image from "next/image";
import yourImg from "../assets/img/placeholder-img.jpg";
import backgroundImg from "../assets/img/bg-homepage.jpg";
import ServiceCards from "@/components/ServiceCards";
import Carousel from "@/components/Carousel";
import TestimonialItem from "@/components/TestimonialItem";
import GoogleWidget from "@/components/GoogleWidget";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../app/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

const avis = [
  {
    text: "La SARL Charpente Menuiserie Durand est intervenue chez nous en février 2023 pour un renforcement de charpente. Le devis a été réalisé rapidement après une visite pour estimer les travaux. Le tarif proposé était compétitif. L'intervention s'est ensuite faite quelques jours après. M. Durand et ses employés sont sympathiques, souriants, rassurants et inspirent confiance. En une journée ils ont effectué un gros travail pour un résultat très propre et satisfaisant. Je suis pleinement satisfait.",
    author: "Arno Lesaint",
  },
  {
    text: "Je suis pleinement satisfaite de la société CMD . La prestation rendue (changement d'une poutre et création d'un jambage de rendort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel. Je recommande les service de Monsieur Durand.",
    author: "Sylvie Nouvellon",
  },
];

export default function Home() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <main className="flex flex-col">
      <section
        id="home"
        className="relative w-[100%] h-[100vh] items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[100px] relative">
          <div className="absolute z-0 h-full w-[100vw] bg-white backdrop-blur-4xl opacity-40 px-10 py-4"></div>
          <Link href={"/"}>
            <Image
              src={logo}
              width={"auto"}
              height={"auto"}
              alt="logo"
              className="w-[230px] h-auto z-10 relative py-3 px-8"
            />
          </Link>
          <div className="absolute top-6 right-12">
            <div className="flex gap-16">
              <div className="flex gap-2" onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
                <FaPhoneAlt size={25} color="#f37139" />
                <p className="text-black text-base font-medium	">+33 6 76 50 85 51</p>
              </div>
              <div className="flex gap-2">
                <FaLocationDot size={25} color="#f37139" />
                <p className="text-black text-base font-medium	">
                  Z.A. la Pommeraie, Rue des Indes 44780 Missillac
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[25%] left-[17%] ">
          <div className="relative">
            <svg width="150" height="400" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#f37139" />
            </svg>
            <h1 className="absolute top-[8%] left-[20%] w-[30vw] font-bold text-6xl leading-normal">
              <span className="text-black text-7xl">C</span>harpente
              <br />
              <span className="text-black text-7xl">M</span>enuiserie
              <br />
              <span className="text-black text-7xl">D</span>urand
            </h1>
            <p className="absolute bottom-[10%] left-[22%] w-[60vw] overflow text-2xl">
              Vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="flex p-12 relative bg-lightGrey h-[130vh] ">
        <div>
          <svg
            width="100vw"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-[17%]"
          >
            <rect width="100%" height="100%" fill="#3b3b3b" />
          </svg>
          <h1 className="absolute top-[22.5%] left-[5%] w-[30vw] font-bold text-2xl">
            <span className="text-primary text-5xl">N</span>os Services
          </h1>
          <div className="absolute top-0 -right-24 mt-10">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section id="gallery" className="h-auto relative flex items-center justify-around bg-white">
        <h1 className="absolute top-[9%] left-[5%] w-[30vw] font-bold text-2xl text-darkGrey">
          <span className="text-primary text-5xl">G</span>alerie
        </h1>
        <Carousel />
      </section>
      <section id="testimonials" className="relative flex items-center bg-lightGrey px-24">
        <h1 className="absolute top-[9%] left-[5%] w-[30vw] font-bold text-2xl text-darkGrey">
          <span className="text-primary text-5xl">I</span>ls nous ont fait confiance
        </h1>
        <div className="flex mt-[150px]">
          <div className="flex flex-col relative">
            {avis.map((item, index) => (
              <TestimonialItem key={index} text={item.text} author={item.author} />
            ))}
          </div>
          <GoogleWidget />
        </div>
      </section>
      <section id="contact" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <span>Contact</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
      </section>
    </main>
  );
}
