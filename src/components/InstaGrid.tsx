"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { Instagram } from "./BrandIcons";
import Image from "next/image";

const INSTA_POSTS = [
  {
    id: 1,
    image: "/images/sofa_detail.png",
    likes: "1,248",
    comments: "42",
    tag: "#AureliaSofa",
  },
  {
    id: 2,
    image: "/images/dining_luxury.png",
    likes: "982",
    comments: "19",
    tag: "#LuxuryDining",
  },
  {
    id: 3,
    image: "/images/bed_premium.png",
    likes: "1,490",
    comments: "56",
    tag: "#BespokeBed",
  },
  {
    id: 4,
    image: "/images/craftsman_detail.png",
    likes: "2,105",
    comments: "88",
    tag: "#ArtisanJoinery",
  },
  {
    id: 5,
    image: "/images/transformation_living.png",
    likes: "1,842",
    comments: "63",
    tag: "#JubileeHillsVilla",
  },
  {
    id: 6,
    image: "/images/hero_living_room.png",
    likes: "3,420",
    comments: "124",
    tag: "#BKPDesignPhilosophy",
  },
];

export default function InstaGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      ref={ref}
      className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-[#0C0C0C] border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3 md:space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" />
              Social Narrative
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Instagram Stories
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-luxury-beige/70 font-light leading-relaxed">
            Follow our digital showroom on Instagram for daily design updates, client walkthroughs, and custom furniture styling releases.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com" // Placeholder link
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative h-48 sm:h-56 rounded-xl overflow-hidden border border-white/5 bg-luxury-black block"
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={`BKP Homes Instagram Post ${post.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center filter brightness-[0.8] transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"
                loading="lazy"
              />

              {/* Hover overlay with social stats */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4 text-xs font-semibold tracking-wider text-luxury-cream">
                <span className="text-[9px] text-luxury-gold font-mono uppercase tracking-[0.2em]">{post.tag}</span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-luxury-cream" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to follow */}
        <div className="text-center">
          <a
            href="https://instagram.com" // Placeholder for client social page
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-luxury-gold hover:text-luxury-cream transition-colors duration-300 font-semibold border-b border-luxury-gold/30 hover:border-luxury-cream pb-1.5"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW @BKPHOMESFURNITURE</span>
          </a>
        </div>

      </div>
    </section>
  );
}
