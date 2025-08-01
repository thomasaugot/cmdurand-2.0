"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import emailjs from "@emailjs/browser";
import ContactDetailsService from "@/components/ContactDetailsService";
import ContactHero from "@/components/contact-page/ContactHero";
import ContactForm from "@/components/contact-page/ContactForm";
import ContactInfo from "@/components/contact-page/ContactInfo";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });
import ContactCTA from "@/components/contact-page/ContactCTA";

function ContactPage() {
  return (
    <div className="min-h-screen">      
      <ContactHero />
      
      {/* Form + Info Section */}
      <ContactForm />
      
      {/* Contact Info détaillée */}
      <ContactInfo />
      
      {/* Section finale - Zone d'intervention */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-primary/5 to-primary/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`${robotoFont.className} text-primary text-sm font-bold mb-4 uppercase tracking-wider`}>
              Notre secteur
            </h3>
            <h4 className={`${dosisFont.className} text-2xl lg:text-3xl font-bold text-darkGrey mb-6`}>
              Nous intervenons dans toute la région
            </h4>
            <p className={`${dosisFont.className} text-darkGrey/70 text-lg leading-relaxed max-w-2xl mx-auto`}>
              Basés à Missillac, nous réalisons vos projets de charpente et menuiserie 
              dans un large périmètre autour de la Loire-Atlantique.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom polygon */}
        <div className="polygon hidden lg:block w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 left-[-200px] xl:left-[-240px] z-20"></div>
      </section>
    </div>
  );
}

export default ContactPage;