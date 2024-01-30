"use client";

// here is all the code found on the homepage

import testimonialBgImg from "../assets/img/testimonial-bg.jpg";
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
      <section id="home" className="relative w-[100%] h-[100vh] flex items-center px-24">
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
        <div>
          <div className="polygon-home bg-primary"></div>
          <div className="flex flex-col z-20 mt-8 ml-12 absolute top-[190px] left-[220px]">
            <h1 className="font-semibold text-5xl leading-normal text-white">
              <span className="text-black text-6xl">C</span>harpente
              <br />
              <span className="text-black text-6xl">M</span>enuiserie
              <br />
              <span className="text-black text-6xl">D</span>urand
              <br />
              <div className="text-white text-3xl mt-4 text-nowrap">
                <span className="text-black text-5xl">L&apos;</span>
                expertise Bois au Service de vos Projets
              </div>
            </h1>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col p-12 relative h-auto bg-darkGrey">
        <h1 className="text-white w-[30vw] font-bold text-2xl">
          <span className="text-primary text-5xl ml-3 mt-4">N</span>os Services
        </h1>
        <div className="flex mx-auto my-12 z-99">
          <ServiceCards />
        </div>
        <div className="polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20"></div>
      </section>

      <section id="gallery" className="h-auto relative flex items-center justify-around brick-bg">
        <h1 className="absolute top-[9%] left-[5%] w-full font-bold text-2xl text-darkGrey">
          <span className="text-primary text-5xl">N</span>os réalisations en quelques photos
        </h1>
        <Carousel />
        <div className="polygon w-[49vw] h-[55px] bg-darkGrey overflow-hidden absolute bottom-0 -right-[200px] z-20"></div>
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
        <div className="flex my-[150px] gap-8 mx-auto items-center">
          <div className="flex relative">
            {avis.map((item, index) => (
              <TestimonialItem key={index} text={item.text} author={item.author} />
            ))}
          </div>
          <GoogleWidget />
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center justify-around brick-bg  h-full p-24 relative"
      >
        <div className="polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute top-0 -left-[200px] z-20"></div>
        <div className="flex gap-12 items-center">
          <OpeningHours />
          <div className="flex flex-col form-shadow p-8">
            <h1 className="text-black font-semibold mb-8 text-lg">
              Besoin d&apos;un renseignement? Laissez-nous un message !
            </h1>
            <StaticForm />
          </div>
        </div>
      </section>
    </main>
  );
}
