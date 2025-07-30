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
      className="py-20 flex flex-col items-center lg:justify-around brick-bg relative"
    >
      <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${robotoFont.className} text-primary text-lg font-bold mb-4 uppercase tracking-wide`}>
            Contactez-nous
          </h2>
          <h3 className={`${dosisFont.className} text-4xl lg:text-5xl font-bold text-darkGrey mb-6`}>
            Un projet en tête ? Parlons-en !
          </h3>
          <p className={`${dosisFont.className} text-xl text-darkGrey max-w-3xl mx-auto`}>
            Obtenez un devis gratuit et personnalisé pour votre projet
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row lg:gap-24 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <OpeningHours />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col form-shadow p-8 mx-4 -mt-16 lg:mt-0 bg-white rounded-2xl"
          >
            <h3 className={`${dosisFont.className} text-darkGrey tracking-wider font-bold text-2xl max-w-[90vw] mb-6`}>
              Besoin d'un renseignement ? Laissez-nous un message !
            </h3>
            <StaticForm />
          </motion.div>
        </div>
      </div>
      
      <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
    </section>
  );
}

export default ContactSection;