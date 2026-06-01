"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Hammer, Ruler, CheckCircle, Eye } from "lucide-react";
import Image from "next/image";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Timber Selection & Inspection",
    desc: "We source authentic North American Walnut and teak wood. Only logs with the finest grain patters and minimal knots are cleared for selection.",
  },
  {
    step: "02",
    title: "Precision Seasoning",
    desc: "Timber undergoes computer-controlled kiln drying to a strictly monitored 8-12% moisture level, preventing any cracking or warping under India's climate.",
  },
  {
    step: "03",
    title: "Traditional Wood Joinery",
    desc: "We utilize robust mortise-and-tenon joints for core structural framing, combining heavy-duty stability with timeless artistic value.",
  },
  {
    step: "04",
    title: "Fabric Tailoring & Quilting",
    desc: "Every upholstery layer is hand-cut and double-stitched by senior master tailors, ensuring uniform tension and flawless seams.",
  },
];

export default function Manufacturing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      id="craft" 
      ref={ref}
      className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-luxury-black border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Title */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
            Manufacturing Excellence
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-luxury-cream">
            The Art of Handcrafting
          </h2>
          <p className="text-xs sm:text-sm text-luxury-beige/70 font-light leading-relaxed">
            Take a look behind the showroom curtain. Our state-of-the-art Hyderabad facility houses both cutting-edge Italian machines and generational woodcarvers.
          </p>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Image with craftsmanship feel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-6 relative h-[240px] sm:h-[360px] md:h-[480px] lg:h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src="/images/craftsman_detail.png"
              alt="Artisan sanding walnut wood joint in BKP showroom workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.85]"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
            
            {/* Info Badge */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 rounded-xl glassmorphism border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">Live Factory Tour</p>
                <p className="text-[10px] sm:text-[11px] text-luxury-beige/80 font-light mt-0.5">Visit our factory in Hyderabad to witness your furniture being built.</p>
              </div>
              <a 
                href="#contact" 
                className="p-3 rounded-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black transition-colors shrink-0"
              >
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Process Narrative */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-luxury-gold border-b border-white/5 pb-4 mb-4">
              <Hammer className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">4-Step Artistry Process</span>
            </div>

            <div className="space-y-6">
              {PROCESS_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="flex gap-6 group"
                >
                  <span className="font-serif text-3xl font-light text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-300 select-none">
                    {item.step}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-luxury-beige/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-xs text-luxury-cream font-light">
                <CheckCircle className="w-4 h-4 text-luxury-gold" />
                <span>100% Solid Timber Frames</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-luxury-cream font-light">
                <CheckCircle className="w-4 h-4 text-luxury-gold" />
                <span>Premium Italian Joinery Machines</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
