"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star } from "lucide-react";

export default function Tagline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section 
      id="tagline" 
      ref={ref}
      className="relative min-h-[40vh] flex flex-col justify-center items-center py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0C0C0C] border-b border-white/5 overflow-hidden"
    >
      {/* Abstract Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-1.5 text-luxury-gold"
        >
          <Star className="w-3 h-3 fill-luxury-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase font-sans font-semibold">
            The Philosophy
          </span>
          <Star className="w-3 h-3 fill-luxury-gold" />
        </motion.div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight text-luxury-cream">
          {"Where Artistry Meets Architectural Grandeur".split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block mr-3 md:mr-4"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 0.75 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto text-xs sm:text-base md:text-lg font-light text-luxury-beige leading-relaxed tracking-wide"
        >
          For over two decades, BKP Homes has crafted bespoke statement furniture and luxury residential spaces in Hyderabad. We merge high-fashion architecture with raw, organic materials—solid walnut wood, Italian marble, and hand-finished brass accents—to create unique heirlooms for distinguished homes.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="h-[1px] bg-luxury-gold/50 mx-auto mt-12"
        />
      </div>
    </section>
  );
}
