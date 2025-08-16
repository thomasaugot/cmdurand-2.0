"use client";

import { useInView } from "react-intersection-observer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GoogleWidget from "@/components/GoogleWidget";

function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      id="testimonials"
      className="py-20 px-6 lg:px-12 relative"
      ref={ref}
      style={{
        backgroundImage: `url(/assets/img/woodbg.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <TestimonialsCarousel />
        
        {/* Google Widget en dessous */}
        <div className="mt-16 flex justify-center">
          <GoogleWidget />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;