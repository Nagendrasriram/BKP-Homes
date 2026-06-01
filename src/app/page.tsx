"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import Collections from "@/components/Collections";
import SofaShowcase from "@/components/SofaShowcase";
import Transformations from "@/components/Transformations";
import WhyBKPHomes from "@/components/WhyBKPHomes";
import Manufacturing from "@/components/Manufacturing";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import InstaGrid from "@/components/InstaGrid";
import YouTubeShowcase from "@/components/YouTubeShowcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-luxury-black text-luxury-cream">
          {/* Sticky luxury navigation */}
          <Navbar />

          <main className="flex-1 w-full">
            {/* 1. Fullscreen cinematic hero banner */}
            <Hero />

            {/* 2. Luxury tagline section */}
            <Tagline />

            {/* 3. Featured furniture collections */}
            <Collections />

            {/* 4. Premium sofa showcase with interactive hotspots */}
            <SofaShowcase />

            {/* 5. Interior transformation gallery */}
            <Transformations />

            {/* 6. Why BKP Homes section */}
            <WhyBKPHomes />

            {/* 7. Manufacturing excellence section */}
            <Manufacturing />

            {/* 8. Customer testimonials */}
            <Testimonials />

            {/* 9. Before/After interior transformations drag slider */}
            <BeforeAfter />

            {/* 10. Instagram-style gallery grid */}
            <InstaGrid />

            {/* 11. YouTube tour/video showcase section */}
            <YouTubeShowcase />

            {/* 12. Contact + WhatsApp CTA */}
            <ContactForm />
          </main>

          {/* 13. Luxury footer */}
          <Footer />

          {/* Floating WhatsApp Consultation Button */}
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

