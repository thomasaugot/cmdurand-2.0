"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Template from "./template";
import Hero from "@/components/homepage/Hero";
import AboutSection from "@/components/homepage/AboutSection";
import StatsSection from "@/components/homepage/StatsSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import EngagementsSection from "@/components/homepage/EngagementsSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  }, []);

  return (
    <Template>
      <main className="flex flex-col">
        <Hero />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <EngagementsSection />
        <ContactSection />
      </main>
    </Template>
  );
}