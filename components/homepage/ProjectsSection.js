"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { getFeaturedProjects } from "@/data/portfolio";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`${robotoFont.className} text-primary text-lg font-bold mb-4 uppercase tracking-wide`}>
            Nos dernières réalisations
          </h2>
          <h3 className={`${dosisFont.className} text-4xl lg:text-5xl font-bold text-darkGrey mb-6`}>
            Des projets qui témoignent de notre savoir-faire
          </h3>
          <p className={`${dosisFont.className} text-xl text-darkGrey max-w-3xl mx-auto`}>
            Découvrez quelques-unes de nos réalisations récentes qui
            illustrent la diversité et la qualité de nos interventions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-custom-medium group-hover:shadow-custom-dark transition-all">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className={`${dosisFont.className} text-sm bg-primary px-3 py-1 rounded-full`}>
                    {project.serviceType}
                  </span>
                </div>
              </div>
              <h4 className={`${dosisFont.className} font-bold text-xl text-darkGrey mb-2`}>
                {project.title}
              </h4>
              <p className={`${dosisFont.className} text-darkGrey flex items-center gap-2 mb-2`}>
                <FaMapMarkerAlt className="text-primary" size={14} />
                {project.title.split(" - ")[1]}
              </p>
              <p className={`${dosisFont.className} text-darkGrey/80 text-sm`}>
                {project.description.substring(0, 100)}...
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/nos-realisations"
            className={`${dosisFont.className} bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all inline-flex items-center gap-3`}
          >
            Voir toutes nos réalisations
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;