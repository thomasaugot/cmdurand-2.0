"use client";

import { FaPhoneAlt } from "react-icons/fa";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const OpeningHours = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <div className="bg-transparent w-[90vw] lg:w-[20vw] mx-24 mb-24">
      <h2 className="tracking-wider font-semibold text-3xl mb-8 text-black">Horaires</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between">
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Lundi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            08h00 - 18h30
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Mardi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            08h00 - 18h30
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Mercredi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            08h00 - 18h30
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Jeudi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            08h00 - 18h30
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Vendredi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            08h00 - 18h30
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Samedi
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Fermé
          </p>
        </div>
        <div className={`flex justify-between`}>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Dimanche
          </p>
          <p
            className={`text-darkGrey tracking-wider font-semibold text-lg ${dosisFont.className}`}
          >
            Fermé
          </p>
        </div>
      </div>
      <div>
        <p className={`tracking-wider font-semibold text-2xl mt-12 text-black w-full`}>
          Nous sommes également joignables par téléphone au:
        </p>
        <div onClick={handlePhoneClick} className="flex mt-4" style={{ cursor: "pointer" }}>
          <FaPhoneAlt size={24} color="#f37139" className="mr-3 mt-1" />
          <p className={`tracking-wider font-semibold text-lg ${dosisFont.className}`}>
            +33 6 76 50 85 51
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
