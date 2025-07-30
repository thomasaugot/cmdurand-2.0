"use client";

import { FaPhoneAlt } from "react-icons/fa";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const OpeningHours = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  const schedule = [
    { day: "Lundi", hours: "08h00 - 18h30" },
    { day: "Mardi", hours: "08h00 - 18h30" },
    { day: "Mercredi", hours: "08h00 - 18h30" },
    { day: "Jeudi", hours: "08h00 - 18h30" },
    { day: "Vendredi", hours: "08h00 - 18h30" },
    { day: "Samedi", hours: "Fermé" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  return (
    <div className="bg-transparent w-full max-w-md mx-auto lg:max-w-none lg:w-80 xl:w-96 px-4 lg:px-0">
      <h2 className={`${dosisFont.className} tracking-wider font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-black text-center lg:text-left`}>
        Horaires
      </h2>
      
      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {schedule.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-1">
            <p className={`text-darkGrey tracking-wider font-semibold text-base sm:text-lg ${dosisFont.className}`}>
              {item.day}
            </p>
            <p className={`text-darkGrey tracking-wider font-semibold text-base sm:text-lg ${dosisFont.className} ${item.hours === 'Fermé' ? 'text-gray-500' : ''}`}>
              {item.hours}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center lg:text-left">
        <p className={`${dosisFont.className} tracking-wider font-semibold text-lg sm:text-xl lg:text-2xl mb-4 text-black leading-relaxed`}>
          Nous sommes également joignables par téléphone au:
        </p>
        <div 
          onClick={handlePhoneClick} 
          className="flex items-center justify-center lg:justify-start gap-3 cursor-pointer hover:text-primary transition-colors p-3 rounded-lg hover:bg-gray-50"
        >
          <FaPhoneAlt size={20} className="text-primary flex-shrink-0" />
          <p className={`${dosisFont.className} tracking-wider font-semibold text-lg sm:text-xl text-darkGrey`}>
            +33 6 76 50 85 51
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;