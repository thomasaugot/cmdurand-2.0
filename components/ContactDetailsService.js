"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

function ContactDetailsService() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <div className="hidden lg:block absolute top-6 right-12 z-10">
      <div className="flex gap-16">
        <div className="flex gap-2" onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
          <FaPhoneAlt size={25} color="#f37139" />
          <p className={`${dosisFont.className} text-black text-base font-semibold`}>
            +33 6 76 50 85 51
          </p>
        </div>
        <div className="flex gap-2">
          <FaLocationDot size={25} color="#f37139" />
          <p className={`${dosisFont.className} text-black text-base font-semibold`}>
            Z.A. la Pommeraie, Rue des Indes 44780 Missillac
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsService;
