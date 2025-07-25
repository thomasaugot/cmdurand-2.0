"use client";

import homeBg from "/assets/img/home.webp";
import localFont from "next/font/local";

const robotoFont = localFont({ src: "../assets/fonts/RobotoMono-Regular.ttf" });

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-4 lg:px-24"
    >
      <div className="filter-home bg-white h-[100vh] w-[200vw] absolute"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${homeBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      <div className="flex flex-col z-10 justify-start md:justify-center">
        <h1 className="max-w-[85vw] text-left md:text-center text-8xl md:text-9xl lg:text-8xl gradient-text">
          Charpente{" "}
          <span className={`${robotoFont.className} -ml-1`}>M</span>
          enuiserie Durand
        </h1>
        <div className="flex overlay flex-nowrap max-w-[90vw] mt-8"></div>
        <div className="flex text flex-nowrap max-w-[90vw] mt-8">
          <div className="wrapper block">
            <div className="letter">L</div>
            <div className="shadow">L</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&apos;</div>
            <div className="shadow">&apos;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">x</div>
            <div className="shadow">x</div>
          </div>
          <div className="wrapper block">
            <div className="letter">p</div>
            <div className="shadow">p</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">r</div>
            <div className="shadow">r</div>
          </div>
          <div className="wrapper block">
            <div className="letter">t</div>
            <div className="shadow">t</div>
          </div>
          <div className="wrapper block">
            <div className="letter">i</div>
            <div className="shadow">i</div>
          </div>
          <div className="wrapper block">
            <div className="letter">s</div>
            <div className="shadow">s</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">B</div>
            <div className="shadow">B</div>
          </div>
          <div className="wrapper block">
            <div className="letter">o</div>
            <div className="shadow">o</div>
          </div>
          <div className="wrapper block">
            <div className="letter">i</div>
            <div className="shadow">i</div>
          </div>
          <div className="wrapper block">
            <div className="letter">s</div>
            <div className="shadow">s</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">a</div>
            <div className="shadow">a</div>
          </div>
          <div className="wrapper block">
            <div className="letter">u</div>
            <div className="shadow">u</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">S</div>
            <div className="shadow">S</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">r</div>
            <div className="shadow">r</div>
          </div>
          <div className="wrapper block">
            <div className="letter">v</div>
            <div className="shadow">v</div>
          </div>
          <div className="wrapper block">
            <div className="letter">i</div>
            <div className="shadow">i</div>
          </div>
          <div className="wrapper block">
            <div className="letter">c</div>
            <div className="shadow">c</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">d</div>
            <div className="shadow">d</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">v</div>
            <div className="shadow">v</div>
          </div>
          <div className="wrapper block">
            <div className="letter">o</div>
            <div className="shadow">o</div>
          </div>
          <div className="wrapper block">
            <div className="letter">s</div>
            <div className="shadow">s</div>
          </div>
          <div className="wrapper block">
            <div className="letter">&nbsp;</div>
            <div className="shadow">&nbsp;</div>
          </div>
          <div className="wrapper block">
            <div className="letter">P</div>
            <div className="shadow">P</div>
          </div>
          <div className="wrapper block">
            <div className="letter">r</div>
            <div className="shadow">r</div>
          </div>
          <div className="wrapper block">
            <div className="letter">o</div>
            <div className="shadow">o</div>
          </div>
          <div className="wrapper block">
            <div className="letter">j</div>
            <div className="shadow">j</div>
          </div>
          <div className="wrapper block">
            <div className="letter">e</div>
            <div className="shadow">e</div>
          </div>
          <div className="wrapper block">
            <div className="letter">t</div>
            <div className="shadow">t</div>
          </div>
          <div className="wrapper block">
            <div className="letter">s</div>
            <div className="shadow">s</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;