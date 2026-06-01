"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const COLLECTIONS = [
  {
    title: "Luxury Sofas",
    description: "Modular designs upholstered in premium bouclé & leather with solid wood bases.",
    image: "/images/sofa_detail.png",
    link: "#sofa-showcase",
    size: "col-span-12 md:col-span-6 lg:col-span-7",
  },
  {
    title: "Premium Beds",
    description: "Plush velvet channel headboards integrated with customized walnut side panels.",
    image: "/images/bed_premium.png",
    link: "#contact",
    size: "col-span-12 md:col-span-6 lg:col-span-5",
  },
  {
    title: "Dining Tables",
    description: "Italian marble inlays set into raw organic walnut structures for dining centerpieces.",
    image: "/images/dining_luxury.png",
    link: "#contact",
    size: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    title: "Interior Projects",
    description: "Full turnkey transformations capturing the signature BKP modern luxury aesthetic.",
    image: "/images/transformation_living.png",
    link: "#transformations",
    size: "col-span-12 md:col-span-6 lg:col-span-8",
  },
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      id="collections" 
      className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-luxury-black border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 md:space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
              Bespoke Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Curated Collections
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-luxury-beige/70 font-light leading-relaxed">
            Every piece is designed with an emphasis on architectural shape, fine organic materials, and uncompromised comfort. Engineered in Hyderabad for exceptional living.
          </p>
        </div>

        {/* Collections Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          {COLLECTIONS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.size} group relative h-[260px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden border border-white/5`}
            >
              {/* Image Container with Zoom effect */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.8] contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent z-10 transition-all duration-300 group-hover:via-luxury-black/40" />

              {/* Border Highlights (Apple Style) */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-luxury-gold/30 rounded-2xl z-20 transition-colors duration-500 pointer-events-none" />

              {/* Content Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 flex flex-col justify-end h-full">
                <div className="translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-semibold font-sans block mb-1">
                    BKP SHOWROOM
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-luxury-cream mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Expandable description */}
                  <p className="text-xs text-luxury-beige/70 sm:text-luxury-beige/0 sm:group-hover:text-luxury-beige/80 transition-colors duration-300 font-light leading-relaxed max-w-sm mb-3 sm:mb-4">
                    {item.description}
                  </p>

                  <a 
                    href={item.link}
                    className="flex items-center gap-1.5 text-xs text-luxury-gold hover:text-luxury-cream transition-colors font-medium tracking-wider"
                  >
                    <span>EXPLORE NOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
