"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Eye, Sparkles } from "lucide-react";
import { Youtube } from "./BrandIcons";
import Image from "next/image";

const VIDEOS = [
  {
    id: 1,
    title: "Inside a 15,000 Sq.Ft. Jubilee Hills Villa | Full BKP Homes Walkthrough",
    description: "Take a cinematic tour of our latest residential masterpiece in Jubilee Hills, Hyderabad. Highlighting floating walnut ceiling rafters, curved bouclé sofas, and bespoke bedroom paneling.",
    thumbnail: "/images/transformation_living.png",
    duration: "12:45",
    views: "24K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Simulating video play in modal
  },
  {
    id: 2,
    title: "Kiln to Craft: How We Manufacture Premium Walnut Wood Furniture",
    description: "Witness the technical journey from raw log selection, kiln-drying seasoning cycles, to hand-sanded mortise-and-tenon wood joint assembly inside our Hyderabad workshop.",
    thumbnail: "/images/craftsman_detail.png",
    duration: "08:20",
    views: "18K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Designing the Aurelia: Custom Modular Sofa Crafting Process",
    description: "Explore the manufacturing blueprints behind our signature Aurelia sofa. See our master tailors stitch Italian bouclé fabrics and assemble satin-brass cap joints.",
    thumbnail: "/images/sofa_detail.png",
    duration: "06:15",
    views: "12K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function YouTubeShowcase() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);

  return (
    <section 
      id="video-showcase" 
      className="py-28 px-6 md:px-12 bg-luxury-black border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans flex items-center gap-2">
              <Youtube className="w-3.5 h-3.5" />
              Cinematic Tours
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Showroom Walkthroughs
            </h2>
          </div>
          <p className="max-w-md text-sm text-luxury-beige/70 font-light leading-relaxed">
            Watch our high-production villa home tours and behind-the-scenes woodcraft documentaries to witness the precision of BKP standards.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Feature Video (Left side, takes 8 cols) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between space-y-6">
            <div 
              onClick={() => setActiveVideo(VIDEOS[0])}
              className="relative h-[320px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden cursor-pointer group border border-white/10 shadow-2xl"
            >
              <Image
                src={VIDEOS[0].thumbnail}
                alt={VIDEOS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter brightness-[0.8] transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                <div className="w-18 h-18 rounded-full bg-luxury-cream text-luxury-black flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-luxury-black ml-1" />
                </div>
              </div>

              {/* Time stamp / Views tag */}
              <div className="absolute top-6 left-6 flex gap-3 text-[10px] uppercase font-semibold tracking-wider">
                <div className="px-3 py-1 rounded-full glassmorphism flex items-center gap-1.5 text-luxury-gold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{VIDEOS[0].duration} MIN</span>
                </div>
                <div className="px-3 py-1 rounded-full glassmorphism flex items-center gap-1.5 text-luxury-cream">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{VIDEOS[0].views} VIEWS</span>
                </div>
              </div>

              {/* Showroom Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-luxury-gold text-luxury-black font-semibold text-[9px] uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-luxury-black" />
                <span>Featured Tour</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-light text-luxury-cream hover:text-luxury-gold transition-colors duration-300 cursor-pointer" onClick={() => setActiveVideo(VIDEOS[0])}>
                {VIDEOS[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-luxury-beige/75 font-light leading-relaxed max-w-3xl">
                {VIDEOS[0].description}
              </p>
            </div>
          </div>

          {/* Sidebar Videos (Right side, takes 4 cols) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-start gap-8">
            {VIDEOS.slice(1).map((video) => (
              <div 
                key={video.id}
                className="flex flex-col sm:flex-row lg:flex-col gap-4 border-b border-white/5 pb-6 last:border-0"
              >
                {/* Small Thumbnail */}
                <div 
                  onClick={() => setActiveVideo(video)}
                  className="relative w-full sm:w-60 lg:w-full h-44 rounded-2xl overflow-hidden cursor-pointer group border border-white/5 shrink-0"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover object-center filter brightness-[0.8] transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-luxury-cream text-luxury-black flex items-center justify-center shadow-lg group-hover:scale-105 active:scale-95 transition-transform duration-300">
                      <Play className="w-4 h-4 fill-luxury-black ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono tracking-widest text-luxury-cream">
                    {video.duration}
                  </div>
                </div>

                {/* Small Info */}
                <div className="space-y-2">
                  <h4 className="font-serif text-base font-light text-luxury-cream hover:text-luxury-gold transition-colors duration-300 cursor-pointer" onClick={() => setActiveVideo(video)}>
                    {video.title}
                  </h4>
                  <p className="text-xs text-luxury-beige/70 font-light leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  <div className="text-[10px] text-luxury-gold font-mono uppercase tracking-wider">
                    {video.views} Views • Hyderabad Studio
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player lightbox Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6"
            >
              {/* Close background trigger */}
              <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-luxury-black rounded-3xl overflow-hidden border border-white/10 z-10 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 sm:top-4 right-0 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-luxury-cream transition-colors z-20"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Responsive Iframe Container */}
                <div className="relative aspect-video w-full bg-black">
                  {/* Since we are mockups, we'll render a beautiful video player mockup with custom overlay, or an iframe if you prefer */}
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                {/* Video Info under player */}
                <div className="p-8 space-y-3 bg-[#0B0B0B]">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-semibold font-sans">
                    BKP HOMES • LUXURY MOVIE
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-luxury-cream">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-luxury-beige/70 font-light leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
