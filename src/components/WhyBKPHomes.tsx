"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Settings, Award, Compass, HeartHandshake } from "lucide-react";

const BENEFITS = [
  {
    icon: Award,
    title: "Artisanal Wood Craft",
    description: "We work exclusively with premium imported American Walnut, teak, and oak. All structural woods are kiln-dried to perfection to avoid warping.",
  },
  {
    icon: Settings,
    title: "100% Bespoke Customization",
    description: "Every couch length, headboard height, cushion density, and polish sheen is tailored to your blueprint. Your design, hand-crafted.",
  },
  {
    icon: Compass,
    title: "Hyderabad Manufacturing",
    description: "Our state-of-the-art factory in Hyderabad merges Italian joinery machines with local woodcarving artisans to control 100% of final quality.",
  },
  {
    icon: HeartHandshake,
    title: "Enduring Showroom Trust",
    description: "For over 20 years, elite architects and homeowners in Hyderabad have trusted BKP. Visit our Jubilee Hills studio for tactile material tests.",
  },
];

export default function WhyBKPHomes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      ref={ref}
      className="py-28 px-6 md:px-12 bg-[#0C0C0C] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
            Our Standard
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-luxury-cream">
            The Pillars of BKP Quality
          </h2>
          <p className="text-sm text-luxury-beige/70 font-light leading-relaxed">
            From the raw timber log selection to the final hand-stitching of premium fabrics, we honor the traditional methods of furniture crafting.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-luxury-gold/30 hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between min-h-[280px]"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300">
                  <benefit.icon className="w-5 h-5" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-light text-luxury-cream tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-luxury-beige/70 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>

              <div className="w-8 h-[1px] bg-luxury-gold/30 group-hover:w-full transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
