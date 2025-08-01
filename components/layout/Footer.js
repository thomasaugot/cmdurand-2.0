"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLocationDot, FaPhone, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import localFont from "next/font/local";
import RecruitmentModal from "@/components/RecruitmentModal";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:charpente.menuiserie.durand@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33676508551";
  };

  return (
    <>
      <footer
        ref={ref}
        id="footer"
        className="relative bg-darkGrey text-white py-8 sm:py-12 lg:py-16"
      >
        {isVisible && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
              
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className={`${dosisFont.className} text-xl sm:text-2xl font-bold text-primary`}>
                  Charpente Menuiserie Durand
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <FaLocationDot size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className={`${dosisFont.className} text-base sm:text-lg`}>
                        Sarl Charpente Menuiserie Durand
                      </p>
                      <p className={`${dosisFont.className} text-base sm:text-lg`}>
                        Z.A. la Pommeraie, Rue des Indes
                      </p>
                      <p className={`${dosisFont.className} text-base sm:text-lg`}>
                        44780 Missillac
                      </p>
                    </div>
                  </div>

                  <div 
                    onClick={handlePhoneClick}
                    className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:text-primary transition-colors duration-300"
                  >
                    <FaPhone size={18} className="text-primary flex-shrink-0" />
                    <p className={`${dosisFont.className} text-base sm:text-lg`}>
                      +33 6 76 50 85 51
                    </p>
                  </div>

                  <div 
                    onClick={handleEmailClick}
                    className="flex items-start gap-3 sm:gap-4 cursor-pointer hover:text-primary transition-colors duration-300"
                  >
                    <MdEmail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className={`${dosisFont.className} text-base sm:text-lg break-all sm:break-normal`}>
                      charpente.menuiserie.durand@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation & Hours */}
              <div className="space-y-8">
                {/* Navigation */}
                <div>
                  <h3 className={`${dosisFont.className} text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white`}>
                    Navigation
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <Link
                      href="/"
                      className={`${dosisFont.className} text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300`}
                    >
                      Accueil
                    </Link>
                    <Link
                      href="/services"
                      className={`${dosisFont.className} text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300`}
                    >
                      Nos Services
                    </Link>
                    <Link
                      href="/realisations"
                      className={`${dosisFont.className} text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300`}
                    >
                      Nos Réalisations
                    </Link>
                    <Link
                      href="/contact"
                      className={`${dosisFont.className} text-sm sm:text-base lg:text-lg hover:text-primary transition-colors duration-300`}
                    >
                      Contactez-nous
                    </Link>
                    <button
                      onClick={() => setIsRecruitmentOpen(true)}
                      className={`${dosisFont.className} text-sm sm:text-base lg:text-lg text-primary hover:text-white transition-colors duration-300 text-left`}
                    >
                      Nous recrutons !
                    </button>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3 className={`${dosisFont.className} text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white`}>
                    Horaires d'ouverture
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={`${dosisFont.className} text-sm sm:text-base text-gray-300`}>
                        Lundi - Vendredi
                      </span>
                      <span className={`${dosisFont.className} text-sm sm:text-base text-white font-semibold`}>
                        8h00 - 18h00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`${dosisFont.className} text-sm sm:text-base text-gray-300`}>
                        Samedi - Dimanche
                      </span>
                      <span className={`${dosisFont.className} text-sm sm:text-base text-gray-400`}>
                        Fermé
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-600 pt-6 sm:pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
                
                <div className="text-center lg:text-left">
                  <p className={`${dosisFont.className} text-sm sm:text-base lg:text-lg mb-1 sm:mb-2`}>
                    &copy; 2020 - {currentYear} Sarl Charpente Menuiserie Durand
                  </p>
                  <p className={`${dosisFont.className} text-xs sm:text-sm text-gray-400`}>
                    Site Web développé par{" "}
                    <a
                      href="https://thomasaugot.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline transition-all duration-300"
                    >
                      Thomas Augot
                    </a>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-center">
                  <Link
                    href="/politique-de-confidentialite"
                    className={`${dosisFont.className} text-xs sm:text-sm lg:text-base hover:text-primary transition-colors duration-300`}
                  >
                    Politique de Confidentialité
                  </Link>
                  <Link
                    href="/conditions-generales-utilisation"
                    className={`${dosisFont.className} text-xs sm:text-sm lg:text-base hover:text-primary transition-colors duration-300`}
                  >
                    Conditions Générales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Facebook Button - Mobile First */}
        <a
          href="https://www.facebook.com/profile.php?id=100063695462775"
          target="_blank"
          rel="noreferrer"
          className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50"
        >
          <div className="bg-primary text-white px-3 sm:px-4 py-3 sm:py-4 rounded-l-lg sm:rounded-l-xl shadow-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2 sm:gap-3">
            <span className={`${dosisFont.className} font-bold text-xs sm:text-sm hidden sm:block lg:block`}>
              Suivez-nous
            </span>
            <FaFacebook size={20} className="sm:w-6 sm:h-6" />
          </div>
        </a>
      </footer>

      {/* Recruitment Modal */}
      <RecruitmentModal 
        isOpen={isRecruitmentOpen}
        closeModal={() => setIsRecruitmentOpen(false)}
      />
    </>
  );
};

export default Footer;