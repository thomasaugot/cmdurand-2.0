"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCog,
  FaShieldAlt,
  FaChartLine,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptNecessary, saveConsent } =
    useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  if (!showBanner) return null;

  const handleSaveSettings = () => {
    saveConsent(preferences);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cookieTypes = [
    {
      key: "necessary",
      icon: <FaShieldAlt className="text-primary text-xl" />,
      title: "Cookies nécessaires",
      description: "Requis pour le fonctionnement du site",
      required: true,
    },
    {
      key: "analytics",
      icon: <FaChartLine className="text-primary text-xl" />,
      title: "Cookies analytiques",
      description: "Nous aident à améliorer le site",
      required: false,
    },
    {
      key: "marketing",
      icon: <FaBullhorn className="text-primary text-xl" />,
      title: "Cookies marketing",
      description: "Personnalisent la publicité",
      required: false,
    },
    {
      key: "functional",
      icon: <FaCogs className="text-primary text-xl" />,
      title: "Cookies fonctionnels",
      description: "Améliorent l'expérience utilisateur",
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-4 bottom-6 w-[90vw] mx-auto md:inset-x-auto md:bottom-6 md:right-6 md:w-auto md:max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
      >
        {/* Effets visuels */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 rounded-full blur-lg"></div>

        {showSettings ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCog className="text-primary text-2xl" />
              <h3
                className="text-darkGrey font-bold text-xl"
              >
                Paramètres des cookies
              </h3>
            </div>

            <div className="space-y-3">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="flex items-start gap-2 flex-1">
                    <div className="mt-0.5">{type.icon}</div>
                    <div>
                      <p
                        className="font-bold text-darkGrey mb-1 text-sm"
                      >
                        {type.title}
                      </p>
                      <p
                        className="text-xs text-gray-600"
                      >
                        {type.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative ml-2">
                    <input
                      type="checkbox"
                      checked={preferences[type.key]}
                      disabled={type.required}
                      onChange={() => togglePreference(type.key)}
                      className="sr-only"
                    />
                    <div
                      onClick={() =>
                        !type.required && togglePreference(type.key)
                      }
                      className={`w-10 h-5 rounded-full transition-all cursor-pointer flex items-center ${
                        preferences[type.key] ? "bg-primary" : "bg-gray-300"
                      } ${
                        type.required ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transition-all transform ${
                          preferences[type.key]
                            ? "translate-x-5"
                            : "translate-x-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <motion.button
                onClick={handleSaveSettings}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg flex-1 text-sm"
              >
                Sauvegarder
              </motion.button>
              <motion.button
                onClick={() => setShowSettings(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-100 text-darkGrey hover:bg-gray-200 font-bold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
              >
                Retour
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 relative z-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-primary text-2xl" />
              <h3
                className="text-darkGrey font-bold text-xl"
              >
                Nous utilisons des cookies
              </h3>
            </div>

            <p
              className="text-darkGrey text-sm mb-6 leading-relaxed"
            >
              Ce site utilise des cookies pour améliorer votre expérience de
              navigation. Vous pouvez accepter tous les cookies ou personnaliser
              vos préférences.
            </p>

            <div className="flex flex-col gap-3">
              <motion.button
                onClick={acceptAll}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Tout accepter
              </motion.button>
              <div className="flex gap-3">
                <motion.button
                  onClick={acceptNecessary}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-100 text-darkGrey hover:bg-gray-200 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex-1 text-sm"
                >
                  Nécessaires uniquement
                </motion.button>
                <motion.button
                  onClick={() => setShowSettings(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-100 text-darkGrey hover:bg-gray-200 font-bold py-3 px-4 rounded-xl transition-all duration-300 flex-1 text-sm flex items-center gap-2 justify-center"
                >
                  <FaCog className="text-sm" />
                  Personnaliser
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
