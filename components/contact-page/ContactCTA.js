import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const ContactCTA = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
    {/* Bottom polygon */}
    <div className="polygon hidden lg:block w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 left-[-200px] xl:left-[-240px] z-20"></div>
    
    {/* Effets visuels */}
    <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className={`${robotoFont.className} text-white text-sm font-bold mb-6 uppercase tracking-wider`}>
          Prêt à commencer ?
        </h3>
        
        <h4 className={`${dosisFont.className} text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight`}>
          Donnons vie à votre projet<br />
          <span className="text-white">dès aujourd'hui</span>
        </h4>
        
        <p className={`${dosisFont.className} text-white/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed`}>
          Une question ? Un projet en tête ? N'hésitez pas à nous contacter pour échanger autour de vos besoins. Nous sommes là pour vous accompagner.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.a 
            href="tel:+33676508551"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${dosisFont.className} bg-white hover:bg-white/90 text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +33 6 76 50 85 51
          </motion.a>
          
          <motion.a 
            href="mailto:charpente.menuiserie.durand@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${dosisFont.className} bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Écrivez-nous
          </motion.a>
        </div>
        
        {/* Horaires rappel */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
          <span className={`${dosisFont.className} text-white font-semibold text-base`}>
            Ouvert du lundi au vendredi : 08h00 - 18h30
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;