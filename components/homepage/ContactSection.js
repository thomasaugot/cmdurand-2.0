"use client";

import { motion } from "framer-motion";
import OpeningHours from "@/components/OpeningHours";
import StaticForm from "@/components/forms/StaticForm";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-12 flex flex-col items-center brick-bg relative"
    >
      <div className="polygon w-[110vw] lg:w-[49vw] h-[45px] lg:h-[55px] bg-primary overflow-hidden absolute -scale-y-100 top-0 -right-[120px] md:right-[-240px] lg:right-[-200px] xl:right-[-240px] z-20"></div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`font-roboto text-primary text-lg font-bold mb-4 uppercase tracking-wide`}
          >
            Contactez-nous
          </h2>
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkGrey mb-6 px-4"
          >
            Un projet en tête ? Parlons-en !
          </h3>
          <p
            className="text-lg md:text-xl text-darkGrey max-w-3xl mx-auto px-4"
          >
            Obtenez un devis gratuit et personnalisé pour votre projet
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 items-start lg:items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto order-2 lg:order-1"
          >
            <OpeningHours />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 order-1 lg:order-2"
          >
            <div className="form-shadow p-6 md:p-8 bg-white rounded-2xl">
              <h3
                className="text-darkGrey tracking-wider font-bold text-xl md:text-2xl mb-6"
              >
                Besoin d'un renseignement ? Laissez-nous un message !
              </h3>
              <StaticForm />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="polygon hidden lg:block w-[120vw] lg:w-[49vw] h-[55px] bg-primary overflow-hidden absolute -scale-y-100 bottom-0 right-[105px] lg:left-[-200px] xl:left-[-240px] z-20"></div>
    </section>
  );
}

export default ContactSection;