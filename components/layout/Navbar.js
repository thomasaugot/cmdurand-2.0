"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot, FaChevronDown } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PopupForm from "@/components/forms/PopupForm";
import logo from "../../app/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: "Charpente Traditionnelle", href: "/services/charpente-traditionelle" },
    { name: "Charpente Industrielle", href: "/services/charpente-industrielle" },
    { name: "Extension Ossature Bois", href: "/services/extension-ou-maison-ossature" },
    { name: "Bardage & Façades", href: "/services/bardage" },
    { name: "Menuiserie Générale", href: "/services/menuiserie-generale" },
    { name: "Menuiserie Extérieure", href: "/services/menuiserie-exterieure" },
    { name: "Terrasses & Aménagements", href: "/services/terrasse" },
    { name: "Aménagement des Combles", href: "/services/amenagement-des-combles" },
    { name: "Préaux & Abris", href: "/services/preau" },
    { name: "Carports", href: "/services/carport" },
    { name: "Solivage Porteur", href: "/services/solivage-porteur" }
  ];

  const navItems = [
    { id: 1, text: "Accueil", href: "/", target: "home" },
    { id: 2, text: "Nos Services", href: "/services", target: "about", hasSubmenu: true },
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
          visible ? "translate-y-0" : "-translate-y-full"
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
                <span className="text-base">+33 6 76 50 85 51</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-primary" size={16} />
                <span className="text-base">Missillac, Loire-Atlantique</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-base">Lun-Ven: 8h-18h30</span>
              <div className="flex items-center gap-3">
                <span className="text-base">Suivez-nous</span>
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
              <div className="hidden lg:flex items-center gap-8 relative">
                {navItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`font-semibold transition-colors py-2 text-lg px-3 flex items-center gap-1 ${
                        pathname === item.href || (item.hasSubmenu && pathname.startsWith('/services'))
                          ? "text-primary border-b-2 border-primary"
                          : "text-darkGrey hover:text-primary"
                      }`}
                      style={
                        pathname === item.href || (item.hasSubmenu && pathname.startsWith('/services'))
                          ? { textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }
                          : {}
                      }
                    >
                      {item.text}
                      {item.hasSubmenu && (
                        <FaChevronDown 
                          className={`text-xs transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </Link>

                    {/* Services Submenu */}
                    {item.hasSubmenu && (
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full -left-24 transform -translate-x-1/2 mt-4 w-[500px] bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                          >
                            <div className="p-4">
                              <div className="grid grid-cols-2 gap-2">
                                {services.map((service, index) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block p-3 text-base text-darkGrey hover:text-primary hover:bg-gray-50 rounded transition-colors font-medium"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                              <div className="border-t border-gray-100 mt-3 pt-3">
                                <Link
                                  href="/services"
                                  className="block text-center text-primary text-base font-semibold hover:underline"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  Tous nos services
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="hidden lg:block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 text-lg shadow-lg"
              >
                Devis Gratuit →
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-1 p-2"
              >
                <span
                  className={`w-6 h-0.5 bg-darkGrey transition-all ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-darkGrey transition-all ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-darkGrey transition-all ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
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
            className="lg:hidden fixed inset-0 bg-white z-40"
            style={{ paddingTop: "72px" }}
          >
            <div className="h-full overflow-y-auto">
              {/* Navigation */}
              <div className="px-6 py-8 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-4"
                  >
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full text-darkGrey font-bold text-xl py-2 hover:text-primary transition-colors"
                        >
                          {item.text}
                          <FaChevronDown 
                            className={`text-sm transition-transform duration-200 ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3"
                            >
                              <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 gap-3">
                                {services.map((service, serviceIndex) => (
                                  <motion.div
                                    key={service.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: serviceIndex * 0.03 }}
                                  >
                                    <Link
                                      href={service.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsMobileServicesOpen(false);
                                      }}
                                      className="block text-darkGrey text-base py-2 px-3 rounded hover:bg-white hover:text-primary transition-all"
                                    >
                                      {service.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-bold text-xl py-2 transition-all ${
                          pathname === item.href
                            ? "text-primary"
                            : "text-darkGrey hover:text-primary"
                        }`}
                      >
                        {item.text}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Contact Cards */}
              <div className="px-6 space-y-4 mb-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-darkGrey rounded-xl p-6"
                >
                  <h3 className="text-white font-bold text-lg mb-4">Contact Direct</h3>
                  <div
                    className="flex items-center gap-4 mb-4 cursor-pointer group"
                    onClick={handlePhoneClick}
                  >
                    <div className="bg-primary p-3 rounded-full group-hover:scale-110 transition-transform">
                      <FaPhoneAlt className="text-white" size={18} />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-lg block">
                        +33 6 76 50 85 51
                      </span>
                      <span className="text-gray-300 text-sm">Appel direct</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full">
                      <FaLocationDot className="text-white" size={18} />
                    </div>
                    <div>
                      <span className="text-white font-semibold block">Z.A. la Pommeraie, Rue des Indes</span>
                      <span className="text-white font-semibold block">44780 Missillac</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-100 rounded-xl p-6"
                >
                  <h3 className="text-darkGrey font-bold text-lg mb-4">Horaires</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lun - Ven</span>
                      <span className="text-darkGrey font-semibold">8h - 18h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend</span>
                      <span className="text-gray-400">Fermé</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-8">
                <motion.button
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                  Devis Gratuit →
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PopupForm isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;