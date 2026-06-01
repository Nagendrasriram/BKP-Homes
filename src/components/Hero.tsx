"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToContent = () => {
    const nextSection = document.querySelector("#tagline");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-luxury-black flex items-center justify-center"
    >
      {/* Background Image with Parallax & Dark Overlays */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 bg-[url('/images/hero_living_room.png')] bg-cover bg-center bg-no-repeat scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/60 z-10" />
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(15,15,15,0.7) 100%) z-10" />

      {/* Hero Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 text-center max-w-5xl px-6 md:px-12 flex flex-col items-center mt-12"
      >
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/30 bg-luxury-black/60 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-luxury-beige font-semibold">
            Bespoke Showroom • Hyderabad
          </span>
        </motion.div>

        {/* Cinematic Title */}
        <h1 className="overflow-hidden leading-none select-none">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
            className="block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-luxury-cream"
          >
            Artistry in Wood
          </motion.span>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            className="block text-gold-gradient font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal italic tracking-wide mt-2"
          >
            Luxury Defined.
          </motion.span>
        </h1>

        {/* Minimal Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          className="mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-luxury-beige/80 font-light leading-relaxed tracking-wide"
        >
          Experience handcrafted perfection. We design premium modular sofas, solid walnut beds, and custom interior transformations tailored for Hyderabad&apos;s finest homes.
        </motion.p>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.0 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#collections"
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest bg-gold-gradient text-luxury-black font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-luxury-gold/15"
          >
            Explore Collections
          </a>
          <a
            href="#transformations"
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest border border-white/20 text-luxury-cream hover:bg-white/5 active:scale-95 transition-all duration-300 backdrop-blur-sm"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Address Bar (Apple style info strip) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
        className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 z-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6"
      >
        <div className="flex items-center gap-3 text-luxury-beige/65 text-xs tracking-wider">
          <MapPin className="w-4 h-4 text-luxury-gold shrink-0" />
          <span>Jubilee Hills, Road No. 36, Hyderabad</span>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="flex items-center gap-2 group text-luxury-gold hover:text-luxury-cream transition-colors duration-300 cursor-pointer text-xs uppercase tracking-[0.25em]"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2.5 rounded-full border border-luxury-gold/30 group-hover:border-luxury-gold transition-colors duration-300"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>

        <div className="hidden md:flex items-center gap-4 text-xs text-luxury-beige/40 font-mono tracking-widest">
          <span>CREATIVE LIVING INC.</span>
          <span>©2026</span>
        </div>
      </motion.div>
    </section>
  );
}
