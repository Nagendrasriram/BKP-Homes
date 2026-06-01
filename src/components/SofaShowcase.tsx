"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sofa, Shield, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const HOTSPOTS = [
  {
    id: 1,
    top: "30%",
    left: "50%",
    title: "Premium Bouclé Fabric",
    description: "Ultra-soft texture woven from Belgian yarns. High rub count for long-lasting luxury, treated for stain resistance.",
  },
  {
    id: 2,
    top: "78%",
    left: "30%",
    title: "Kiln-Dried Walnut Frame",
    description: "Sourced from sustainable North American forests. Triple-sanded by hand and finished with solvent-free organic oils.",
  },
  {
    id: 3,
    top: "88%",
    left: "75%",
    title: "Satin Brass Joint Caps",
    description: "Solid brass hardware accents custom-machined with a brushed satin finish, resisting oxidation over generations.",
  },
];

export default function SofaShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section 
      id="sofa-showcase" 
      className="py-28 px-6 md:px-12 bg-[#0C0C0C] border-b border-white/5 relative overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-luxury-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Product Storytelling */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans flex items-center gap-2">
              <Sofa className="w-3.5 h-3.5" />
              Signature Spotlight
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-luxury-cream">
              The Aurelia Modular Sofa
            </h2>
          </div>

          <p className="text-sm md:text-base text-luxury-beige/85 font-light leading-relaxed">
            The centerpiece of modern luxury living. The Aurelia Modular Sofa is designed for absolute versatility, allowing you to configure the seating to adapt to any premium layout. Designed in collaboration with international interior architects.
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-luxury-gold">
                <Shield className="w-4 h-4 shrink-0" />
                <h4 className="text-xs uppercase tracking-wider font-semibold">Warranty</h4>
              </div>
              <p className="text-xs text-luxury-beige/65 font-light">10-Year structural frame guarantee on solid wood.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-luxury-gold">
                <Compass className="w-4 h-4 shrink-0" />
                <h4 className="text-xs uppercase tracking-wider font-semibold">Tailored Fit</h4>
              </div>
              <p className="text-xs text-luxury-beige/65 font-light">Available in 40+ custom premium fabric options.</p>
            </div>
          </div>

          {/* Interactive instruction alert */}
          <div className="p-4 rounded-xl glassmorphism-light flex items-start gap-3 border border-luxury-gold/20">
            <Sparkles className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-luxury-cream tracking-wide">Interactive Showroom Feature</p>
              <p className="text-[11px] text-luxury-beige/70 font-light mt-0.5">Click the pulsing rings on the sofa image to explore detailed craftsmanship specifications.</p>
            </div>
          </div>

          <div className="pt-2">
            <a 
              href="#contact"
              className="inline-block px-7 py-3 rounded-full text-xs uppercase tracking-widest border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black font-semibold transition-all duration-300"
            >
              Request Pricing & Configurator
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Image Showcase */}
        <div className="col-span-12 lg:col-span-7 relative h-[450px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/images/sofa_detail.png"
            alt="The Aurelia Modular Sofa close-up material detail"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center filter brightness-[0.9]"
            loading="lazy"
          />

          {/* Hotspots */}
          {HOTSPOTS.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{ top: spot.top, left: spot.left }}
            >
              {/* Pulsing ring */}
              <button
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-transform ${
                  activeHotspot === spot.id ? "scale-110" : "hover:scale-105"
                }`}
                aria-label={`Hotspot ${spot.id}`}
              >
                <span className="absolute inset-0 rounded-full bg-luxury-gold opacity-30 animate-ping" />
                <span className={`absolute w-4 h-4 rounded-full border border-luxury-gold/50 shadow-lg transition-colors ${
                  activeHotspot === spot.id ? "bg-luxury-cream" : "bg-luxury-gold"
                }`} />
              </button>

              {/* Detail Popup Card */}
              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-9 -left-28 sm:-left-36 w-60 sm:w-72 glassmorphism p-5 rounded-xl shadow-2xl z-30 border border-luxury-gold/30"
                  >
                    <div className="flex items-center gap-1.5 text-luxury-gold mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <h4 className="text-xs font-semibold uppercase tracking-wider">
                        {spot.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-luxury-beige leading-relaxed font-light">
                      {spot.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Close Popover Overlay when clicking elsewhere on image */}
          {activeHotspot !== null && (
            <div 
              className="absolute inset-0 z-10" 
              onClick={() => setActiveHotspot(null)} 
            />
          )}
        </div>
      </div>
    </section>
  );
}
