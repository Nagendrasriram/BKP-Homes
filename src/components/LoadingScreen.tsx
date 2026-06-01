"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow exit animation to complete
          }, 400);
          return 100;
        }
        // Increment progress randomly for realistic load feel
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-luxury-cream"
        >
          {/* Subtle gold decorative lines */}
          <div className="absolute top-12 left-12 w-16 h-[1px] bg-luxury-gold/30" />
          <div className="absolute top-12 left-12 w-[1px] h-16 bg-luxury-gold/30" />
          <div className="absolute bottom-12 right-12 w-16 h-[1px] bg-luxury-gold/30" />
          <div className="absolute bottom-12 right-12 w-[1px] h-16 bg-luxury-gold/30" />

          <div className="text-center space-y-6 max-w-md px-6">
            <motion.p
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-xs uppercase text-luxury-gold font-sans tracking-[0.4em]"
            >
              Est. 1998 • Hyderabad
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-luxury-cream"
              >
                BKP HOMES
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm font-light text-luxury-beige tracking-wide font-sans"
            >
              Bespoke Luxury Furniture & Showroom
            </motion.p>

            {/* Premium Loading Bar */}
            <div className="w-64 h-[1px] bg-luxury-cream/10 mx-auto relative overflow-hidden mt-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute top-0 left-0 h-full bg-gold-gradient"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] uppercase font-sans tracking-[0.2em] text-luxury-beige/60"
            >
              Loading Artistry {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
