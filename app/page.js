"use client";

// here is all the code found on the homepage

import testimonialBgImg from "/assets/img/testimonial-bg.jpg";
import ServiceCards from "@/components/ServiceCards";
import Carousel from "@/components/Carousel";
import TestimonialItem from "@/components/TestimonialItem";
import GoogleWidget from "@/components/GoogleWidget";
import Navbar from "@/components/Navbar";
import OpeningHours from "@/components/OpeningHours";
import StaticForm from "@/components/StaticForm";
import charp2 from "/assets/img/charpente2.PNG";
import ContactDetails from "@/components/ContactDetails";
import woodBg from "/assets/img/woodbg.jpg";

const avis = [
  {
    text: "La SARL Charpente Menuiserie Durand est intervenue chez nous en février 2023 pour un renforcement de charpente. Le devis a été réalisé rapidement après une visite pour estimer les travaux. Le tarif proposé était compétitif. L'intervention s'est ensuite faite quelques jours après. M. Durand et ses employés sont sympathiques, souriants, rassurants et inspirent confiance. En une journée ils ont effectué un gros travail pour un résultat très propre et satisfaisant. Je suis pleinement satisfait.",
    author: "Arno Lesaint",
  },
  {
    text: "Je suis pleinement satisfaite de la société CMD. La prestation rendue (changement d'une poutre et création d'un jambage de rendort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel. Je recommande les service de Monsieur Durand.",
    author: "Sylvie Nouvellon",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <ContactDetails />
      <section id="home" className="relative w-[100%] h-[100vh] flex items-center px-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${testimonialBgImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
        <Navbar />
        <div className="relative flex items-center justify-center">
          <div className="polygon-home bg-primary"></div>
          <div className="flex flex-col items-left z-20 mt-8 text-left -ml-8 lg:ml-36 xl:ml-[12vw]">
            <h1 className="font-semibold text-5xl leading-normal text-black md:text-7xl lg:text-5xl font-poppins">
              <span className="text-white text-7xl md:text-9xl lg:text-7xl">C</span>harpente
              <br />
              <span className="text-white text-7xl md:text-9xl lg:text-7xl">M</span>enuiserie
              <br />
              <span className="text-white text-7xl md:text-9xl lg:text-7xl">D</span>urand
              <br />
              <div className="text-black text-left text-2xl md:text-3xl mt-4 lg:mt-8 max-w-[80vw] lg:text-nowrap">
                <span className="text-white text-5xl">L&apos;</span>
                expertise bois au service de vos projets
              </div>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col px-2 py-8 lg:px-12 lg:py-12 relative h-auto bg-darkGrey"
      >
        <div className="lg:hidden polygon w-[110vw] h-[45px] bg-primary overflow-hidden absolute transform -scale-y-100 top-0 -right-[120px] md:right-[-320px] z-20"></div>
        <h1 className="text-white max-w-[80vw] font-bold text-2xl ml-[5%] my-4 text-center">
          <span className="text-primary text-5xl">N</span>os Services
        </h1>
        <div className="flex w-full lg:my-12 z-30 mx-auto max-w-[1200px]">
          <ServiceCards />
        </div>
        <div className="hidden lg:block polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20 xl:right-[-245px]"></div>
      </section>

      <section
        id="gallery"
        className="h-auto relative flex items-center justify-around brick-bg px-2 py-8"
      >
        <h1 className="absolute top-[5%] lg:top-[9%] lg:left-[5%] max-w-[85vw] font-bold text-2xl text-darkGrey mx-auto text-center lg:text-left">
          <span className="text-primary text-5xl">N</span>os réalisations en quelques photos
        </h1>
        <Carousel />
        <div className="polygon w-[120vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-darkGrey overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
      </section>
      <section id="testimonials" className="relative flex flex-col lg:items-center lg:px-24 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${woodBg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
        <h1 className="absolute top-6 md:text-nowrap lg:top-[9%] text-center lg:text-left lg:left-[5%] w-full lg:w-[30vw] font-bold text-2xl text-white">
          <span className="text-primary text-5xl">I</span>ls nous ont fait confiance
        </h1>
        <div className="flex flex-col lg:flex-row mt-24 mb-12 lg:mt-[150px] lg:mb-[150px] gap-16 lg:gap-8 mx-auto items-center">
          <div className="flex flex-col md:flex-row relative gap-8">
            {avis.map((item, index) => (
              <TestimonialItem key={index} text={item.text} author={item.author} />
            ))}
          </div>
          <GoogleWidget />
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col items-center lg:justify-around brick-bg h-full p-24 relative"
      >
        <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20"></div>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 items-center">
          <OpeningHours />
          <div className="flex flex-col form-shadow p-8 mx-4 -mt-16 lg:mt-0">
            <h1 className="text-black font-semibold mb-8 text-lg max-w-[90vw]">
              Besoin d&apos;un renseignement? Laissez-nous un message !
            </h1>
            <StaticForm />
          </div>
        </div>
        <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
      </section>
    </main>
  );
}
