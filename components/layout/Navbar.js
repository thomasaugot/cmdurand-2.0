"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PopupForm from "@/components/forms/PopupForm";
import localFont from "next/font/local";
import logo from "../../app/logo.png";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navItems = [
    { id: 1, text: "Accueil", href: "/", target: "home" },
    { id: 2, text: "Nos Services", href: "/services", target: "about" },
    { id: 3, text: "Nos Réalisations", href: "/nos-realisations", target: "gallery" },
    { id: 4, text: "Contactez-nous", href: "/contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <>
      {/* Navbar Container */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Top Bar - Hidden on mobile */}
        <div className="hidden md:block bg-darkGrey text-white py-3">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer"
                onClick={handlePhoneClick}
              >
                <FaPhoneAlt className="text-primary" size={16} />
                <span className={`${dosisFont.className} text-base`}>+33 6 76 50 85 51</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-primary" size={16} />
                <span className={`${dosisFont.className} text-base`}>Missillac, Loire-Atlantique</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className={`${dosisFont.className} text-base`}>Lun-Ven: 8h-18h30</span>
              <div className="flex items-center gap-3">
                <span className={`${dosisFont.className} text-base`}>Suivez-nous</span>
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                  <span className="text-white font-semibold">f</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white/15 backdrop-blur-md border-b border-white/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  width={280}
                  height={90}
                  alt="Charpente Menuiserie Durand"
                  className="h-14 w-auto"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <div key={item.id} className="relative">
                    <Link
                      href={item.href}
                      className={`${dosisFont.className} font-semibold transition-colors py-2 text-lg px-3 ${
                        pathname === item.href 
                          ? 'text-primary border-b-2 border-primary' 
                          : 'text-darkGrey hover:text-primary'
                      }`}
                      style={pathname === item.href ? {
                        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)'
                      } : {}}
                    >
                      {item.text}
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsFormOpen(true)}
                className={`hidden lg:block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 text-lg shadow-lg ${dosisFont.className}`}
              >
                Devis Gratuit →
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-1 p-2"
              >
                <span className={`w-6 h-0.5 bg-darkGrey transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-darkGrey transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-darkGrey transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-darkGrey z-40"
            style={{ paddingTop: '72px' }}
          >
            <div className="h-full flex flex-col justify-center px-6">
              {/* Navigation */}
              <div className="space-y-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${dosisFont.className} block font-bold text-3xl py-3 transition-all ${
                        pathname === item.href 
                          ? 'text-primary' 
                          : 'text-white hover:text-primary'
                      }`}
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Contact info */}
              <div className="space-y-6 mb-12">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 cursor-pointer hover:text-primary transition-colors"
                  onClick={handlePhoneClick}
                >
                  <FaPhoneAlt className="text-primary" size={24} />
                  <span className={`${dosisFont.className} text-white text-xl font-medium`}>+33 6 76 50 85 51</span>
                </motion.div>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <FaLocationDot className="text-primary" size={24} />
                  <span className={`${dosisFont.className} text-white text-xl font-medium`}>Missillac, Loire-Atlantique</span>
                </motion.div>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-4"
                >
                  <span className={`${dosisFont.className} text-white text-xl font-medium`}>Lun-Ven: 8h-18h30</span>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => {
                  setIsFormOpen(true);
                  setIsOpen(false);
                }}
                className={`w-full bg-primary text-white py-4 rounded-lg font-bold text-xl hover:bg-primary/90 transition-colors shadow-lg ${dosisFont.className}`}
              >
                Demander un Devis →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;