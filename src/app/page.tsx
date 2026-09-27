"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorizedPartners from "@/components/AuthorizedPartners";
import ServicesSection from "@/components/ServicesSection";
import AutomationShowcase from "@/components/AutomationShowcase";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import TrustGuarantees from "@/components/TrustGuarantees";
import WhyChooseUs from "@/components/WhyChooseUs";
import BusinessSystems from "@/components/BusinessSystems";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";

import ContactModal from "@/components/ContactModal";
import VideoModal from "@/components/VideoModal";
import ServiceModal from "@/components/ServiceModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [defaultServiceContact, setDefaultServiceContact] = useState<string | undefined>(undefined);

  const handleOpenContact = (service?: string) => {
    setDefaultServiceContact(service);
    setContactOpen(true);
  };

  const handleOpenService = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedProject(projectId);
    setProjectModalOpen(true);
  };

  const handleViewAllProjects = () => {
    setSelectedProject("aura-masale");
    setProjectModalOpen(true);
  };

  // Shared scroll animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSection
            onOpenContact={() => handleOpenContact()}
            onOpenVideo={() => setVideoOpen(true)}
          />
        </motion.div>

        {/* 2. Authorized Partner with Leading Platforms */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <AuthorizedPartners />
        </motion.div>

        {/* 3. Trust Guarantees – German Quality Standards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <TrustGuarantees />
        </motion.div>

        {/* 4. Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <ServicesSection onSelectService={handleOpenService} />
        </motion.div>

        {/* 5. Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <WhyChooseUs onOpenContact={() => handleOpenContact()} />
        </motion.div>

        {/* 6. Turn Manual Work Into Smart Automation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <AutomationShowcase onExploreAutomation={() => handleOpenContact("AI Automation & n8n Workflows")} />
        </motion.div>

        {/* 7. Custom Business Systems */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <BusinessSystems onOpenContact={() => handleOpenContact()} />
        </motion.div>

        {/* 8. A Simple Process for Successful Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <ProcessSection />
        </motion.div>

        {/* 9. Some of Our Latest Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <FeaturedProjects
            onSelectProject={handleOpenProject}
            onViewAllProjects={handleViewAllProjects}
          />
        </motion.div>

        {/* 10. What Our Clients Say (Testimonials) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <TestimonialsSection />
        </motion.div>

        {/* 11. FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <FaqSection />
        </motion.div>

        {/* 12. Book a Free Consultation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <BookingSection onOpenContact={() => handleOpenContact()} />
        </motion.div>

        {/* 13. Have a Project in Mind? (CTA Banner) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <CtaBanner onOpenContact={() => handleOpenContact()} />
        </motion.div>
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={defaultServiceContact}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <ServiceModal
        serviceId={selectedService}
        onClose={() => setSelectedService(null)}
        onGetQuote={(serviceName) => {
          setSelectedService(null);
          handleOpenContact(serviceName);
        }}
      />

      <ProjectModal
        initialProjectId={selectedProject}
        isOpen={projectModalOpen}
        onClose={() => {
          setProjectModalOpen(false);
          setSelectedProject(null);
        }}
        onRequestSimilar={() => {
          setProjectModalOpen(false);
          handleOpenContact();
        }}
      />
    </div>
  );
}
