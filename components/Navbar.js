"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import PopupForm from "./PopupForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleRedirect = () => {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: Math.max(0, 1 - scrollY) });
  }, [scrollY, controls]);

  const handleMouseEnter = () => {
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: Math.max(0, 1 - scrollY) });
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Accueil", target: "home" },
    { id: 2, text: "Services", target: "about" },
    { id: 3, text: "Galerie", target: "gallery" },
    { id: 4, text: "Témoignages", target: "testimonials" },
    { id: 5, text: "Contact", target: "contact" },
  ];

  return (
    <div
      className="z-10 bg-transparent flex justify-between items-center h-[20vh] w-[100vw] px-4 md:px-20 text-black fixed top-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <Link href={"/"}>
          <h1 onClick={scrollToTop} className="w-full text-3xl font-bold text-black">
            CMD
          </h1>
        </Link>
      </motion.div>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        animate={controls}
        exit={{ opacity: 0 }}
        className="hidden md:flex bg-white justify-between mx-auto rounded-xl w-[70vw] border-2 border-amber-500"
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        {/* Logo */}
        <div className="hidden md:flex justify-between">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-amber-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-white"
            >
              <ScrollLink to={item.target} spy={true} smooth={true} duration={500} offset={-50}>
                {item.text}
              </ScrollLink>
            </div>
          ))}
        </div>
        <button
          onClick={handleRedirect}
          className="bg-amber-500 m-1 rounded-lg text-center	align-middle transition duration-200	 hover:scale-90 "
        >
          <span className="p-4 text-white" onClick={handleToggleForm}>
            Demander un Devis
          </span>
        </button>
      </motion.div>
      {/* Mobile Navigation Icon */}
      <div onClick={handleClick} className="flex flex-col justify-center items-center md:hidden">
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-1 w-8 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
          }`}
        ></span>
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          isOpen
            ? "fixed mt-32 md:hidden left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
            : "mt-24 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer"
          >
            <ScrollLink
              to={item.target}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={handleClick}
            >
              {item.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Navbar;
