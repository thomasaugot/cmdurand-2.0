// here is all the code found on the homepage

import Image from "next/image";
import yourImg from "../assets/img/placeholder-img.jpg";
import backgroundImg from "../assets/img/bg-homepage.jpg";
import BeehivePhotoFrame from "@/components/BeehivePhotoFrame";

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
              <span className="text-black text-7xl">C</span>harpente Menuiserie Durand
            </h1>
            <p className="absolute bottom-[10%] left-[22%] w-[60vw] overflow text-2xl">
              Vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="flex items-center justify-around bg-slate-600 h-[60vh]">
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
        <span>About</span>
      </section>
      <section id="gallery" className="flex items-center justify-around bg-gray-300 h-[60vh]">
        <span>Gallery</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
        <BeehivePhotoFrame />
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
