"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TestimonialCard from "./TestimonialCard";
import { getAllTestimonials } from "@/data/testimonials";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

function TestimonialsCarousel() {
  const testimonials = getAllTestimonials();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Configuration responsive stricte
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cartes
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 cartes  
      return 1; // Mobile: 1 carte
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Animation GSAP avec calcul précis
  const slideTo = (index) => {
    if (carouselRef.current) {
      // Calculer la largeur d'une carte + gap
      const containerWidth = carouselRef.current.parentElement.offsetWidth;
      const gap = 24; // 1.5rem
      const cardWidth = (containerWidth - (gap * (itemsPerView - 1))) / itemsPerView;
      const translateX = -(index * (cardWidth + gap));
      
      gsap.to(carouselRef.current, {
        x: translateX,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  };

  // Auto-slide
  const nextSlide = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slideTo(newIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    slideTo(currentIndex);
  }, [itemsPerView]);

  // Calculer la largeur des cartes dynamiquement
  const getCardStyle = () => {
    if (itemsPerView === 3) {
      return { width: 'calc(33.333% - 16px)' }; // 3 cartes avec gap
    } else if (itemsPerView === 2) {
      return { width: 'calc(50% - 12px)' }; // 2 cartes avec gap
    } else {
      return { width: '100%' }; // 1 carte pleine largeur
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className={`${dosisFont.className} text-3xl lg:text-4xl font-bold text-white mb-4`}>
          Ce que disent nos clients
        </h3>
        <p className={`${dosisFont.className} text-white/80 text-lg`}>
          {testimonials.length} avis clients vérifiés
        </p>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0"
              style={getCardStyle()}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                slideTo(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TestimonialsCarousel;