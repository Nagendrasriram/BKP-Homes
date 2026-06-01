"use client";

import { useState } from "react";
import { ArrowUp, Send, Heart } from "lucide-react";
import { Instagram, Facebook, Youtube } from "./BrandIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl font-light tracking-widest text-luxury-cream">
                BKP HOMES
              </h3>
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">
                Furniture & Interiors
              </p>
            </div>
            <p className="text-xs text-luxury-beige/65 leading-relaxed font-light max-w-sm">
              We design and construct premium interior transformations and bespoke solid walnut furniture. Driven by a passion for structural longevity and architectural details, our pieces anchor Hyderabad&apos;s most distinguished residences.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-colors bg-white/2"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-colors bg-white/2"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 hover:border-luxury-gold flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-colors bg-white/2"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-gold">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-luxury-beige/70 font-light">
              <li>
                <a href="#collections" className="hover:text-luxury-cream transition-colors">Collections</a>
              </li>
              <li>
                <a href="#sofa-showcase" className="hover:text-luxury-cream transition-colors">Sofa Spotlight</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-luxury-cream transition-colors">Transformations</a>
              </li>
              <li>
                <a href="#craft" className="hover:text-luxury-cream transition-colors">Our Woodcraft</a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-luxury-cream transition-colors">Before/After</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-cream transition-colors">Showroom Visit</a>
              </li>
            </ul>
          </div>

          {/* Opening Details (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-gold">
              Showroom Location
            </h4>
            <div className="space-y-4 text-xs text-luxury-beige/70 font-light leading-relaxed">
              <p>
                Road No. 36, Near Jubilee Hills Metro,<br />
                Jubilee Hills, Hyderabad, 500033
              </p>
              <p>
                <strong>Tel:</strong> +91 98668 47847<br />
                <strong>Email:</strong> info@bkphomes.com
              </p>
              <p>
                <strong>Open Daily:</strong> 10:30 AM &ndash; 8:30 PM
              </p>
            </div>
          </div>

          {/* Catalog subscription (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest font-semibold text-luxury-gold">
              Design Catalogues
            </h4>
            <p className="text-xs text-luxury-beige/65 leading-relaxed font-light">
              Subscribe to receive private styling guides and new furniture line invitations in Hyderabad.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-luxury-cream placeholder-white/20 focus:border-luxury-gold/50 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-gold-gradient text-luxury-black hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <p className="text-xs text-luxury-gold font-light">
                Thank you! You are subscribed to our design updates.
              </p>
            )}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="text-[10px] text-luxury-beige/40 tracking-wider">
            &copy; 2026 BKP Homes Furniture & Interiors. All rights reserved.
          </div>

          {/* Designed by badge */}
          <div className="flex items-center gap-1 text-[10px] text-luxury-beige/40">
            <span>Designed with</span>
            <Heart className="w-3 h-3 text-luxury-gold fill-luxury-gold/10" />
            <span>by Antigravity</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-luxury-gold hover:text-luxury-cream transition-colors duration-300 group"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full border border-luxury-gold/30 group-hover:border-luxury-gold transition-colors duration-300">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
