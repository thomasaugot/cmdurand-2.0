"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gotham } from "@/lib/fonts";
import ContactDetailsService from "@/components/ContactDetailsService";

export default function ConditionsGeneralesUtilisation() {
  return (
    <div className="min-h-screen">
      <ContactDetailsService />
      
      {/* Hero Section */}
      <section className="relative pt-52 pb-24 px-6 lg:px-12 text-center overflow-hidden bg-darkGrey">
        {/* Zone blanche pour navbar */}
        <div className="absolute top-0 left-0 right-0 h-[90px] md:h-36 bg-white z-0"></div>

        {/* Effets visuels */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl z-5"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl z-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl z-5"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-roboto text-primary text-sm sm:text-base lg:text-lg font-bold mb-6 uppercase tracking-wider">
            Conditions Générales d'Utilisation
          </h2>

          <h1 className={`${gotham.className} text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight`}>
            <span className="font-roboto text-primary">C</span>
            onditions d'<span className="text-primary">Utilisation</span>
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-lightGrey text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Conditions d'utilisation de notre site web et de nos services
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Acceptation des conditions
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed">
                Bienvenue sur notre site web. En naviguant sur ce site, vous acceptez de vous conformer aux conditions générales d'utilisation suivantes. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
              </p>
            </motion.div>

            {/* Utilisation du site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Utilisation du site
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-6">
                Vous êtes autorisé à utiliser notre site web à des fins légales et de manière conforme aux présentes conditions générales. Vous acceptez de ne pas utiliser notre site à des fins illégales ou interdites par la loi.
              </p>
              <p className="text-darkGrey text-lg leading-relaxed">
                Il est notamment interdit de :
              </p>
              <ul className="text-darkGrey text-lg leading-relaxed space-y-2 ml-6 mt-4">
                <li>• Utiliser le site de manière à endommager, désactiver ou compromettre nos serveurs</li>
                <li>• Tenter d'accéder de manière non autorisée à nos systèmes</li>
                <li>• Utiliser le site pour transmettre des virus ou codes malveillants</li>
                <li>• Violer les droits de propriété intellectuelle</li>
              </ul>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Propriété intellectuelle
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-6">
                Tout le contenu présent sur notre site web, y compris mais sans s'y limiter, les textes, les images, les graphiques, les logos et les vidéos, est la propriété de Charpente Menuiserie Durand et est protégé par les lois sur la propriété intellectuelle.
              </p>
              <p className="text-darkGrey text-lg leading-relaxed">
                Toute reproduction, distribution, modification ou utilisation commerciale du contenu sans autorisation écrite préalable est strictement interdite.
              </p>
            </motion.div>

            {/* Limitation de responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Limitation de responsabilité
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-6">
                Nous nous efforçons de maintenir les informations présentes sur notre site web à jour et exactes. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations.
              </p>
              <p className="text-darkGrey text-lg leading-relaxed">
                En aucun cas, nous ne serons responsables des dommages directs, indirects, accessoires, spéciaux ou consécutifs découlant de l'utilisation ou de l'incapacité d'utiliser notre site.
              </p>
            </motion.div>

            {/* Disponibilité du service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Disponibilité du service
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed">
                Nous nous efforçons de maintenir notre site accessible 24h/24 et 7j/7. Cependant, nous nous réservons le droit d'interrompre temporairement l'accès au site pour des raisons de maintenance, de mise à jour ou de réparation, sans préavis.
              </p>
            </motion.div>

            {/* Modification des conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Modification des conditions générales
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-6">
                Nous nous réservons le droit de modifier ces conditions générales à tout moment et sans préavis. Il est de votre responsabilité de consulter régulièrement cette page pour prendre connaissance des modifications éventuelles.
              </p>
              <p className="text-darkGrey text-lg leading-relaxed">
                La date de dernière mise à jour sera indiquée en haut de cette page. L'utilisation continue du site après modification vaut acceptation des nouvelles conditions.
              </p>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Droit applicable et juridiction
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed">
                Les présentes conditions générales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
            >
              <h2 className="text-darkGrey font-bold text-2xl lg:text-3xl mb-6">
                Questions sur nos conditions ?
              </h2>
              <p className="text-darkGrey text-lg leading-relaxed mb-8">
                Merci d'avoir pris connaissance de nos conditions générales d'utilisation. Si vous avez des questions concernant ces conditions, n'hésitez pas à nous contacter via notre page de contact.
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