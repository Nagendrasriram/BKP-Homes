"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowRight, LayoutGrid, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "The Grand Villa",
    location: "Jubilee Hills, Hyderabad",
    scope: "Full-Turnkey Interior Design & Custom Furniture",
    timeline: "6 Months",
    image: "/images/transformation_living.png",
    description: "A sweeping, double-height villa renovation highlighting warm walnut timber partitions, custom ambient gold LED integrations, bespoke cream bouclé lounges, and hand-finished details.",
  },
  {
    id: 2,
    title: "The Gachibowli Penthouse",
    location: "Gachibowli, Hyderabad",
    scope: "Dining Room & Lounge Styling",
    timeline: "3 Months",
    image: "/images/dining_luxury.png",
    description: "A luxury sky-home highlighting organic forms. Custom built-in walnut cabinetry framing an integrated marble dining table, complete with custom leather chairs and low-hanging minimalist brass pendants.",
  },
  {
    id: 3,
    title: "The Sky Residence",
    location: "Financial District, Hyderabad",
    scope: "Master Suite Makeover",
    timeline: "2 Months",
    image: "/images/bed_premium.png",
    description: "An oasis of quiet luxury. We integrated a custom floor-to-ceiling channel-tufted velvet headboard in cream, framed by warm walnut panels, floating nightstands, and integrated gold reading lights.",
  },
];

export default function Transformations() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <section 
      id="transformations" 
      className="py-28 px-6 md:px-12 bg-luxury-black border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
              Residential Transformations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Bespoke Spaces
            </h2>
          </div>
          <p className="max-w-md text-sm text-luxury-beige/70 font-light leading-relaxed">
            Discover how we turn empty spaces into sophisticated architectural statement homes. Take a look at our signature turnkey transformations in Hyderabad.
          </p>
        </div>

        {/* Project Section layout */}
        <div className="grid grid-cols-12 gap-10 items-stretch">
          
          {/* Project Switcher List */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold font-sans mb-2 pl-2">
              Select Project
            </p>
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeProject.id === project.id
                    ? "bg-white/5 border-luxury-gold/45 shadow-xl"
                    : "border-transparent hover:bg-white/2 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-light text-luxury-cream">
                    {project.title}
                  </h3>
                  {activeProject.id === project.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-luxury-beige/60">
                  <MapPin className="w-3 h-3 text-luxury-gold shrink-0" />
                  <span>{project.location}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Project Details Display Card */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between rounded-3xl overflow-hidden glassmorphism p-8 md:p-12 relative min-h-[500px]">
            
            {/* Background Image Panel (Framer Motion Animation) */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-cover bg-center filter saturate-0 blur-[3px]"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-luxury-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
              
              {/* Text Info */}
              <div className="space-y-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full border border-luxury-gold/20 inline-block">
                      {activeProject.scope}
                    </span>
                    <h3 className="font-serif text-3xl font-light text-luxury-cream">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-luxury-beige leading-relaxed font-light">
                      {activeProject.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                      <div className="space-y-1">
                        <span className="text-luxury-beige/40 block uppercase tracking-wider font-semibold">Location</span>
                        <span className="text-luxury-cream font-light">{activeProject.location}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-luxury-beige/40 block uppercase tracking-wider font-semibold">Timeline</span>
                        <span className="text-luxury-cream font-light">{activeProject.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Photo Display with Eye overlay */}
              <div className="relative h-64 md:h-[360px] rounded-2xl overflow-hidden border border-white/10 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center filter brightness-[0.85] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* View Project button on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-luxury-gold text-luxury-black transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex justify-between items-center border-t border-white/5 pt-6 mt-8">
              <span className="text-xs text-luxury-gold font-light">Custom configurations available for high-end residential suites.</span>
              <a 
                href="#contact" 
                className="flex items-center gap-1.5 text-xs text-luxury-cream hover:text-luxury-gold transition-colors font-medium tracking-wider group"
              >
                <span>BOOK ROOM ASSESSMENT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
