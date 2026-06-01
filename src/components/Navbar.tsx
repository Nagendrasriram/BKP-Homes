"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Sofa Showcase", href: "#sofa-showcase" },
  { label: "Transformations", href: "#transformations" },
  { label: "Our Craft", href: "#craft" },
  { label: "Before/After", href: "#before-after" },
  { label: "Showroom Video", href: "#video-showcase" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "py-3 px-4 sm:px-6 md:px-12" 
            : "py-4 px-4 sm:px-6 md:px-16"
        }`}
      >
        <div 
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
            isScrolled 
              ? "glassmorphism shadow-2xl px-4 py-2.5 sm:px-6 sm:py-3 border border-luxury-gold/15" 
              : "bg-transparent px-2 py-2 border border-transparent"
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <a href="#" className="flex flex-col items-start select-none">
            <span className="font-serif text-xl md:text-2xl font-light tracking-widest text-luxury-cream hover:text-luxury-gold transition-colors duration-300">
              BKP HOMES
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-luxury-gold -mt-1 pl-0.5">
              Furniture & Interiors
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-xs uppercase tracking-widest text-luxury-cream/80 hover:text-luxury-cream transition-colors duration-300 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest bg-gold-gradient text-luxury-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/25 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
            >
              Consult Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-luxury-cream/80 hover:text-luxury-cream hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-luxury-black/98 pt-28 px-8 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold border-b border-luxury-gold/10 pb-4">
                Navigation
              </p>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-serif text-3xl font-light text-luxury-cream hover:text-luxury-gold transition-colors py-2 block"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full py-4 rounded-full text-center text-sm uppercase tracking-widest bg-gold-gradient text-luxury-black font-semibold flex items-center justify-center gap-2"
                >
                  Book Showroom Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                
                <a
                  href="https://wa.me/919999999999" // We will make it dynamic or realistic
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full text-center text-sm uppercase tracking-widest border border-luxury-gold/30 hover:border-luxury-gold text-luxury-cream font-medium flex items-center justify-center gap-2 bg-white/5"
                >
                  <PhoneCall className="w-4 h-4 text-luxury-gold" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="text-center">
                <p className="text-xs text-luxury-beige/40">BKP Homes Showroom • Hyderabad</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
