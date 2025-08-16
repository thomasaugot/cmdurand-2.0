import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-2 gap-16 items-center"
  >
    {/* Image */}
    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
      <motion.div
        className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>

    {/* Content */}
    <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
      <motion.div
        className="text-4xl text-primary"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {service.icon}
      </motion.div>

      <div>
        <span
          className="text-primary font-bold text-sm uppercase tracking-wide"
        >
          {service.subtitle}
        </span>
        <h2
          className="text-darkGrey font-bold text-4xl lg:text-5xl mt-2"
        >
          {service.title}
        </h2>
      </div>

      <p
        className="text-darkGrey text-xl leading-relaxed"
      >
        {service.description}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {service.features.map((feature, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-darkGrey">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      <Link
        href={`/services/${service.endPoint}`}
        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-lg group"
      >
        En savoir plus
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

export default ServiceCard;
