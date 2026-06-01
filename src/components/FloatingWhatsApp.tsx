"use client";

import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919866847847?text=Hello%20BKP%20Homes%2C%20I%20would%20like%20to%20schedule%20a%20showroom%20consultation.";

  return (
    <div className="fixed bottom-6 right-6 z-40 group pointer-events-auto">
      {/* Tooltip */}
      <div className="absolute right-16 bottom-3.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 flex items-center">
        <div className="glassmorphism px-4 py-2 rounded-lg text-nowrap shadow-xl">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
            BKP Consultation
          </p>
          <p className="text-xs text-luxury-cream/80">Speak to an Interior Designer</p>
        </div>
      </div>

      {/* Floating Button with custom pulse animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-luxury-black border border-luxury-gold/30 text-luxury-gold group-hover:text-luxury-black overflow-hidden shadow-2xl active:scale-95 transition-all duration-300"
      >
        {/* Animated Background Slide on Hover */}
        <span className="absolute inset-0 bg-gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />

        {/* Pulse Waves */}
        <span className="absolute inset-0 rounded-full border border-luxury-gold/50 animate-pulse-gold -z-10" />

        {/* WhatsApp Icon */}
        <MessageSquareCode className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
