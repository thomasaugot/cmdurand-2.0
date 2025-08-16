"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gotham } from "@/lib/fonts";
import ContactDetailsService from "@/components/ContactDetailsService";

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey">
        {/* Zone blanche pour navbar */}
        <div className="absolute top-0 left-0 right-0 h-[90px] md:h-36 bg-white z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-roboto text-primary text-sm sm:text-base lg:text-lg font-bold mb-6 uppercase tracking-wider">
            Politique de Confidentialité
          </h2>

          <h1
            className={`${gotham.className} text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight`}
          >
            <span className="font-roboto text-primary">P</span>
            rotection de vos <span className="text-primary">Données</span>
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Nous attachons une grande importance à la protection de vos données
            personnelles et à la transparence de nos pratiques
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Collecte des informations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Collecte des informations personnelles
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed">
                Lorsque vous utilisez notre site web et que vous soumettez le
                formulaire de contact, nous collectons les informations
                suivantes : votre nom, votre adresse e-mail et votre numéro de
                téléphone. Nous utilisons ces informations uniquement dans le
                but de répondre à vos demandes et de vous fournir des
                informations sur nos services.
              </p>
            </motion.div>

            {/* Partage des informations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Partage des informations personnelles
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed">
                Nous ne partageons pas vos informations personnelles avec des
                tiers sans votre consentement explicite. Vos données ne seront
                pas vendues, échangées ou louées à des tiers à des fins
                commerciales.
              </p>
            </motion.div>

            {/* Protection des informations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Protection des informations personnelles
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-6">
                Nous prenons des mesures de sécurité appropriées pour protéger
                vos informations personnelles contre la perte, l'accès non
                autorisé, la divulgation, l'altération ou la destruction.
              </p>
              <p className="text-darkGrey text-lg leading-relaxed">
                Vous avez le droit de demander l'accès à vos données
                personnelles, de les rectifier, de les supprimer ou de
                restreindre leur traitement. Vous avez également le droit de
                vous opposer au traitement de vos données personnelles ou de
                demander leur portabilité.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Besoin d'informations supplémentaires ?
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-8">
                Si vous avez des questions concernant notre politique de
                confidentialité ou si vous souhaitez exercer vos droits en
                matière de protection des données, veuillez nous contacter à
                l'adresse suivante :{" "}
                <strong>charpente.menuiserie.durand@gmail.com</strong>, ou
                directement via notre page de contact.
              </p>

              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3 shadow-lg hover:scale-105"
              >
                Page de Contact
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
