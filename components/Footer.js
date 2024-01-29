"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import facebook from "../assets/img/facebook.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@cmdurand.fr";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <footer className="bg-darkGrey text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>Sarl Charpente Menuiserie Durand</p>
          <p>Z.A. la Pommeraie, Rue des Indes</p>
          <p>44780 Missillac</p>
          <br />
          <p onClick={handleEmailClick} style={{ cursor: "pointer" }}>
            contact@cmdurand.fr
          </p>
          <p onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
            +33 6 76 50 85 51
          </p>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold mr-4">Suivez-nous</h2>
          <a
            href="https://www.facebook.com/profile.php?id=100063695462775"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={facebook}
              width={"auto"}
              height={"auto"}
              alt="facebook"
              className="w-[50px] transition hover:scale-90"
            />
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; 2020 - {currentYear} Sarl Charpente Menuiserie Durand. Développé par{" "}
          <a href="https://thomasaugot.com/" target="_blank" rel="noreferrer">
            Thomas Augot
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
