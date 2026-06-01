"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles } from "lucide-react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section 
      id="before-after" 
      className="py-28 px-6 md:px-12 bg-luxury-black border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
              The Metamorphosis
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Design Transformations
            </h2>
          </div>
          <p className="max-w-md text-sm text-luxury-beige/70 font-light leading-relaxed">
            Drag the gold central slider to see how we remodel an empty architectural concrete shell into a fully customized, luxury living room environment.
          </p>
        </div>

        {/* Drag Comparison Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[550px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl"
        >
          {/* BACKGROUND: After furnished luxury room (stays underneath) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/after_furnished.png"
              alt="Transformed luxury living room by BKP Homes"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.85]"
              priority
            />
            {/* Label After */}
            <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-lg glassmorphism border border-white/10 text-xs font-semibold uppercase tracking-widest text-luxury-gold flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transformed Space</span>
            </div>
          </div>

          {/* FOREGROUND: Before raw shell room (clipped width by sliderPosition) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[100vw] h-full min-w-[320px] max-w-7xl">
              {/* Force image to fill container width by keeping it relative to parent container size */}
              <div className="absolute inset-0" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
                <Image
                  src="/images/before_shell.png"
                  alt="Raw concrete shell before furniture installation"
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter brightness-[0.7]"
                  priority
                />
              </div>
            </div>
            {/* Label Before */}
            <div className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded-lg bg-black/60 border border-white/5 text-xs font-semibold uppercase tracking-widest text-white/70 pointer-events-none">
              <span>Original Shell</span>
            </div>
          </div>

          {/* SLIDER BAR HANDLE (Vertical Divider Line) */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-[1px] bg-luxury-gold/60 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Round Drag Handle Button */}
            <div className="w-12 h-12 rounded-full glassmorphism border border-luxury-gold/50 flex items-center justify-center text-luxury-gold shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
