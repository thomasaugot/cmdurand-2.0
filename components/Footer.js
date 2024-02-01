"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@cmdurand.fr";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  const aboutRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    aboutRef.current = document.getElementById("footer");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check initial viewport width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer id="footer" className={`relative bg-darkGrey text-white py-12 md:pb-8 md:pt-2 `}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex mt-6">
            <FaLocationDot size={25} color="#f37139" className="mr-2" />
            <div className="flex flex-col text-center md:text-left">
              <p>Sarl Charpente Menuiserie Durand</p>
              <p>Z.A. la Pommeraie, Rue des Indes</p>
              <p>44780 Missillac</p>
            </div>
          </div>
          <br />
          <div onClick={handleEmailClick} className="flex" style={{ cursor: "pointer" }}>
            <MdEmail size={25} color="#f37139" className="mr-2" />
            <p>contact@cmdurand.fr</p>
          </div>
          <br />
          <div onClick={handlePhoneClick} className="flex" style={{ cursor: "pointer" }}>
            <FaPhoneAlt size={23} color="#f37139" className="mr-2" />
            <p>+33 6 76 50 85 51</p>
          </div>
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 5, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="flex items-center image-shadow justify-center bg-primary p-4 absolute -top-[50px] md:top-[30%] right-0"
        >
          <h2 className="text-xl font-medium mr-4 text-white">Suivez-nous !</h2>
          <a
            href="https://www.facebook.com/profile.php?id=100063695462775"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={40} className="w-[50px] transition hover:scale-90 text-white" />
          </a>
        </motion.div>
      </div>
      <div className="mt-8 text-center mx-auto max-w-[90vw]">
        <p>
          &copy; 2020 - {currentYear} Sarl Charpente Menuiserie Durand. Site Web développé par{" "}
          <a
            href="https://thomasaugot.com/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Thomas Augot
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
