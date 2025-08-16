"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactDetailsService from "@/components/ContactDetailsService";
import ContactHero from "@/components/contact-page/ContactHero";
import ContactForm from "@/components/contact-page/ContactForm";
import ContactInfo from "@/components/contact-page/ContactInfo";

import ContactCTA from "@/components/contact-page/ContactCTA";
import ServicesRecruitment from "@/components/services-page/ServicesRecruitment";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />

      {/* Form + Info Section */}
      <ContactForm />

      {/* Contact Info détaillée */}
      <ContactInfo />

      {/* Recruitment Section */}
      <ServicesRecruitment />

      {/* Section finale - Zone d'intervention */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className={`font-roboto text-primary text-sm font-bold mb-4 uppercase tracking-wider`}
            >
              Notre secteur
            </h3>
            <h4 className="text-2xl lg:text-3xl font-bold text-darkGrey mb-6">
              Nous intervenons dans toute la région Grand-Ouest
            </h4>
            <p className="text-darkGrey/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Basés à Missillac, nous réalisons vos projets de charpente et
              menuiserie dans un large périmètre autour de la Loire-Atlantique et de la Bretagne.
            </p>

            {/* Carte de France */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Image
                src="/assets/img/contact-page/carte-france.png"
                alt="Zone d'intervention - Loire-Atlantique et régions limitrophes"
                width={400}
                height={300}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom polygon */}
        <div className="polygon hidden lg:block w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 left-[-200px] xl:left-[-240px] z-20"></div>
      </section>
    </div>
  );
}

export default ContactPage;
