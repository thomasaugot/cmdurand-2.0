"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { FaArrowRight } from "react-icons/fa";
import Services from "@/components/Services";

const robotoFont = localFont({
  src: "../../assets/fonts/RobotoMono-Regular.ttf",
});
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

function ServicesSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-12 relative overflow-hidden bg-darkGrey"
    >
      <div className="lg:hidden polygon w-[110vw] h-[45px] bg-primary overflow-hidden absolute transform -scale-y-100 top-0 -right-[120px] md:right-[-320px] z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className={`${dosisFont.className} text-white max-w-[80vw] text-5xl lg:text-6xl mx-auto mb-6 tracking-wider font-bold`}
          >
            <span
              className={`${dosisFont.className} text-primary text-6xl lg:text-7xl`}
            >
              D
            </span>
            écouvrez nos services
          </h2>
          <p
            className={`${dosisFont.className} text-white/90 text-xl lg:text-2xl max-w-4xl mx-auto mb-8`}
          >
            De la charpente traditionnelle aux finitions sur mesure, nous
            maîtrisons tous les métiers du bois
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p
            className={`${dosisFont.className} text-white/80 text-lg max-w-3xl mx-auto`}
          >
            Artisans passionnés depuis 2020, nous transformons vos idées en
            réalisations durables et esthétiques
          </p>
        </motion.div>

        <Services />

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3
              className={`${dosisFont.className} text-2xl font-bold text-white mb-4`}
            >
              Un projet sur mesure ? Parlons-en ensemble
            </h3>
            <p
              className={`${dosisFont.className} text-white/90 mb-6 max-w-2xl mx-auto`}
            >
              Chaque projet est unique. Découvrez l'ensemble de nos services ou
              contactez-nous directement pour discuter de vos besoins
              spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className={`${dosisFont.className} bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3`}
              >
                Tous nos services
                <FaArrowRight />
              </Link>
              <Link
                href="#contact"
                className={`${dosisFont.className} border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-darkGrey transition-all`}
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block polygon w-[49vw] h-[55px] bg-primary overflow-hidden absolute bottom-0 -right-[200px] z-20 xl:right-[-245px]"></div>
    </section>
  );
}

export default ServicesSection;
