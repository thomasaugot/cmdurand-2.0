"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OpeningHours = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@cmdurand.fr";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <div className="bg-transparent w-[90vw] md:w-[20vw] mx-24 mb-24">
      <h2 className="text-lg font-semibold mb-8 text-black">Horaires</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between">
          <p className="text-darkGrey">Lundi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Mardi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Mercredi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Jeudi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Vendredi</p>
          <p className="text-darkGrey">08h00 - 18h30</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Samedi</p>
          <p className="text-darkGrey">Fermé</p>
        </div>
        <div className="flex justify-between">
          <p className="text-darkGrey">Dimanche</p>
          <p className="text-darkGrey">Fermé</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold mt-12 text-black">
          Nous sommes également joignables par téléphone au:
        </p>
        <div onClick={handlePhoneClick} className="flex mt-4" style={{ cursor: "pointer" }}>
          <FaPhoneAlt size={23} color="#f37139" className="mr-2" />
          <p>+33 6 76 50 85 51</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
