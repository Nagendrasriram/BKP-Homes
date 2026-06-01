"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "We commissioned BKP Homes for our new villa in Jubilee Hills. The modular sofa and the bespoke master bed we received are true masterpieces. The wood finish and upholstery stitching rival elite Italian design brands.",
    author: "Dr. Ananya Reddy",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
  },
  {
    quote: "Their team customized every inch of our open-plan dining and living panels. Having a direct factory in Hyderabad allowed us to inspect the woodwork in progress. Their craftsmanship and service are top-tier.",
    author: "Vikram Goel",
    location: "Gachibowli, Hyderabad",
    rating: 5,
  },
  {
    quote: "Exceptional luxury brand experience! The custom bouclé sofa is the absolute anchor of our living room. It's beautiful, incredibly plush, and built with solid walnut frame joints that will last a lifetime.",
    author: "Shalini & Rohit",
    location: "Financial District, Hyderabad",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section 
      className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-[#0C0C0C] border-b border-white/5 relative overflow-hidden"
    >
      {/* Decorative light ambient ring */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-luxury-gold/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Header Icon */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-luxury-gold/5 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold">
            <Quote className="w-6 h-6 fill-luxury-gold/10" />
          </div>
        </div>

        {/* Text carousel (Framer Motion) */}
        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star rating */}
              <div className="flex justify-center gap-1">
                {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold shrink-0" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-luxury-cream leading-relaxed tracking-wide italic">
                &ldquo;{TESTIMONIALS[index].quote}&rdquo;
              </p>

              {/* Author info */}
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-luxury-gold">
                  {TESTIMONIALS[index].author}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-beige/50">
                  {TESTIMONIALS[index].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Elements */}
        <div className="flex justify-center items-center gap-8 pt-4 border-t border-white/5 max-w-xs mx-auto">
          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/10 hover:border-luxury-gold text-luxury-cream/80 hover:text-luxury-cream hover:bg-white/5 active:scale-90 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  index === i ? "w-6 bg-luxury-gold" : "w-2 bg-white/15"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/10 hover:border-luxury-gold text-luxury-cream/80 hover:text-luxury-cream hover:bg-white/5 active:scale-90 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
