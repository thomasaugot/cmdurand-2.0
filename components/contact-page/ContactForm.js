import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import StaticForm from "@/components/forms/StaticForm";

const robotoFont = localFont({
  src: "../../assets/fonts/RobotoMono-Regular.ttf",
});
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const ContactForm = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-12 brick-bg">
    <div className="max-w-7xl mx-auto">
      {/* Layout 50/50 avec hauteurs identiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form - 50% avec hauteur fixe */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="form-shadow p-10 bg-white rounded-2xl shadow-2xl border border-gray-100 min-h-[800px] flex flex-col"
        >
          <div className="mb-8">
            <h3
              className={`${dosisFont.className} text-darkGrey tracking-wider font-bold text-3xl mb-4`}
            >
              Parlez-nous de votre projet
            </h3>

            {/* Avantages */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className={`${dosisFont.className} text-darkGrey font-semibold text-sm`}
                >
                  Réponse rapide
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className={`${dosisFont.className} text-darkGrey font-semibold text-sm`}
                >
                  Devis gratuit
                </span>
              </div>
            </div>

            <p
              className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}
            >
              Nous étudions chaque demande avec attention pour vous proposer la
              solution la plus adaptée.
            </p>
          </div>

          <div className="flex-1">
            <StaticForm />
          </div>
        </motion.div>

        {/* Sidebar - 50% avec hauteur identique */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-[800px] flex flex-col gap-6"
        >
          {/* Coordonnées */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 flex-1">
            <h4
              className={`${dosisFont.className} font-bold text-2xl text-darkGrey mb-6`}
            >
              Nos coordonnées
            </h4>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p
                    className={`${dosisFont.className} text-lg font-medium text-darkGrey/70 mb-1`}
                  >
                    Téléphone
                  </p>
                  <p
                    className={`${dosisFont.className} text-darkGrey font-bold text-xl`}
                  >
                    +33 6 76 50 85 51
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p
                    className={`${dosisFont.className} text-lg font-medium text-darkGrey/70 mb-1`}
                  >
                    Email
                  </p>
                  <p
                    className={`${dosisFont.className} text-darkGrey font-bold text-lg break-words`}
                  >
                    charpente.menuiserie.durand@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`${dosisFont.className} text-lg font-medium text-darkGrey/70 mb-1`}
                  >
                    Adresse
                  </p>
                  <p
                    className={`${dosisFont.className} text-darkGrey font-bold text-lg leading-relaxed`}
                  >
                    Z.A. la Pommeraie, Rue des Indes, 44780 Missillac
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`${dosisFont.className} text-lg font-medium text-darkGrey/70 mb-1`}
                  >
                    Horaires
                  </p>
                  <p
                    className={`${dosisFont.className} text-darkGrey font-bold text-lg`}
                  >
                    Lun - Ven : 08h00 - 18h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 flex-1">
            <h5
              className={`${dosisFont.className} font-bold text-2xl text-darkGrey mb-6`}
            >
              Comment ça marche ?
            </h5>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h6
                    className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}
                  >
                    Contactez-nous
                  </h6>
                  <p
                    className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}
                  >
                    Par téléphone, email ou via le formulaire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h6
                    className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}
                  >
                    Étude personnalisée
                  </h6>
                  <p
                    className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}
                  >
                    Nous analysons vos besoins et contraintes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h6
                    className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}
                  >
                    Devis détaillé
                  </h6>
                  <p
                    className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}
                  >
                    Proposition adaptée à votre budget
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h6
                    className={`${dosisFont.className} text-darkGrey font-bold text-xl mb-2`}
                  >
                    Réalisation
                  </h6>
                  <p
                    className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed`}
                  >
                    Travaux de qualité dans les délais convenus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactForm;
