// here is all the code found on the homepage

import Image from "next/image";
import yourImg from "../assets/img/placeholder-img.jpg";
import backgroundImg from "../assets/img/bg-homepage.jpg";
import ServiceCards from "@/components/ServiceCards";
import Carousel from "@/components/Carousel";

export default function Home() {
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
      <section id="about" className="flex justify-between p-12 relative h-[120vh] bg-lightGrey">
        <div>
          <svg
            width="100vw"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-[14%]"
          >
            <rect width="100%" height="100%" fill="#3b3b3b" />
          </svg>
          <h1 className="absolute top-[22%] left-[5%] w-[30vw] font-bold text-2xl leading-normal">
            <span className="text-primary text-5xl">N</span>os Services
          </h1>
          <div className="absolute w-[75vw] right-0">
            <ServiceCards />
          </div>
        </div>
      </section>
      <section id="gallery" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <Carousel />
      </section>
      <section id="testimonials" className="flex items-center justify-around bg-slate-600 h-[60vh]">
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
        <span>Testimonials</span>
      </section>
      <section id="contact" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <span>Contact</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
      </section>
    </main>
  );
}
