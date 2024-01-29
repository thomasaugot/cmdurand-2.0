"use client";

// here is all the code found on the homepage

import testimonialBgImg from "../assets/img/testimonial-bg.jpg";
import servicesBgImg from "../assets/img/wave-bg.svg";
import ServiceCards from "@/components/ServiceCards";
import Carousel from "@/components/Carousel";
import TestimonialItem from "@/components/TestimonialItem";
import GoogleWidget from "@/components/GoogleWidget";
import Navbar from "@/components/Navbar";
import OpeningHours from "@/components/OpeningHours";
import StaticForm from "@/components/StaticForm";

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
  return (
    <main className="flex flex-col">
      <section id="home" className="relative w-[100%] h-[100vh] flex items-center px-24 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${testimonialBgImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(50%)",
            zIndex: -1,
          }}
        />
        <Navbar />
        <div className="absolute top-[32%] left-[17%] ">
          <div className="relative">
            <svg width="150" height="330" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#f37139" />
            </svg>
            <h1 className="absolute top-[8%] left-[20%] w-[30vw] font-semibold text-5xl leading-normal text-white">
              <span className="text-black text-6xl">C</span>harpente
              <br />
              <span className="text-black text-6xl">M</span>enuiserie
              <br />
              <span className="text-black text-6xl">D</span>urand
            </h1>
            <p className="text-white absolute bottom-[10%] left-[22%] w-[60vw] overflow text-2xl font-semibold">
              <span className="text-black text-3xl">L&apos;</span>expertise Bois au Service de vos
              Projets
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex p-12 relative h-[130vh] "
        style={{
          backgroundImage: `url(${servicesBgImg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      >
        <div>
          <h1 className="text-white absolute top-[22.5%] left-[5%] w-[30vw] font-bold text-2xl">
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
      <section id="testimonials" className="relative flex items-center px-24 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${testimonialBgImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(60%)",
            zIndex: -1,
          }}
        />
        <h1 className="absolute top-[9%] left-[5%] w-[30vw] font-bold text-2xl text-white">
          <span className="text-primary text-5xl">I</span>ls nous ont fait confiance
        </h1>
        <div className="flex my-[150px]">
          <div className="flex flex-col relative">
            {avis.map((item, index) => (
              <TestimonialItem key={index} text={item.text} author={item.author} />
            ))}
          </div>
          <GoogleWidget />
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center justify-around bg-white h-full p-24"
      >
        <div className="flex">
          <OpeningHours />
          <div className="flex flex-col">
            <h1 className="text-black font-semibold mb-8 text-lg">
              Besoin d&apos;un renseignement? D&apos;un devis? Laissez-nous un message !
            </h1>
            <StaticForm />
          </div>
        </div>
      </section>
    </main>
  );
}
