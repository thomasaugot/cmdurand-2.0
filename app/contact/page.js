"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import OpeningHours from "@/components/OpeningHours";
import StaticForm from "@/components/forms/StaticForm";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 flex flex-col items-center brick-bg relative"
    >
      {/* Polygon decorations - responsive */}
      <div className="polygon w-[110vw] sm:w-[80vw] lg:w-[49vw] h-[35px] sm:h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[60px] sm:right-[-120px] md:right-[-200px] lg:right-[-200px] xl:right-[-240px] z-20"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className={`${robotoFont.className} text-primary text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 uppercase tracking-wide`}>
            Contactez-nous
          </h2>
          <h3 className={`${dosisFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-darkGrey mb-4 sm:mb-6 leading-tight`}>
            Un projet en tête ? Parlons-en !
          </h3>
          <p className={`${dosisFont.className} text-base sm:text-lg lg:text-xl text-darkGrey max-w-3xl mx-auto px-4`}>
            Obtenez un devis gratuit et personnalisé pour votre projet
          </p>
        </motion.div>

        {/* Content - Mobile first layout */}
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12 items-stretch">
          
          {/* Form - First on mobile */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col form-shadow p-6 sm:p-8 mx-auto lg:mx-0 mb-8 lg:mb-0 bg-white rounded-2xl w-full max-w-lg lg:max-w-none lg:flex-1"
          >
            <h3 className={`${dosisFont.className} text-darkGrey tracking-wider font-bold text-lg sm:text-xl lg:text-2xl mb-6 text-center lg:text-left`}>
              Besoin d'un renseignement ? Laissez-nous un message !
            </h3>
            <StaticForm />
          </motion.div>

          {/* Opening Hours - Second on mobile */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:flex-shrink-0"
          >
            <OpeningHours />
          </motion.div>
        </div>
      </div>

      {/* Bottom polygon */}
      <div className="polygon hidden lg:block w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 left-[-200px] xl:left-[-240px] z-20"></div>
    </section>
  );
}

export default ContactSection;