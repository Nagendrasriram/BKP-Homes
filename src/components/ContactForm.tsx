"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Furniture Consultation",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Furniture Consultation",
        message: "",
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-28 px-4 sm:px-6 md:px-12 bg-luxury-black border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-luxury-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Left Side: Contact details */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-8 md:space-y-12">
          <div className="space-y-3 md:space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-semibold font-sans block">
              Schedule an Appointment
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-luxury-cream">
              Visit Our Showroom
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-luxury-beige/70 font-light leading-relaxed max-w-md">
              Experience the weight, the grain, and the stitching firsthand. Book a private consultation with our principal interior architect.
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0 bg-white/2">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-luxury-cream">Address</h4>
                <p className="text-xs text-luxury-beige/75 font-light leading-relaxed">
                  BKP Homes Building, Road No. 36,<br />
                  Jubilee Hills, Near Metro Station,<br />
                  Hyderabad, Telangana 500033
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0 bg-white/2">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-luxury-cream">Direct Consultation</h4>
                <p className="text-xs text-luxury-beige/75 font-light leading-relaxed">
                  +91 98668 47847<br />
                  +91 40 2355 4500
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0 bg-white/2">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-luxury-cream">Design Studio Email</h4>
                <p className="text-xs text-luxury-beige/75 font-light">
                  design@bkphomes.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold shrink-0 bg-white/2">
                <Clock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-luxury-cream">Hours</h4>
                <p className="text-xs text-luxury-beige/75 font-light">
                  Monday &ndash; Saturday: 10:30 AM &ndash; 8:30 PM<br />
                  Sunday: By Prior Appointment Only
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-luxury-beige/40">
            * Private valet parking is available at our Road 36 entrance.
          </div>
        </div>

        {/* Right Side: Consultation Form Card */}
        <div className="col-span-12 lg:col-span-7 rounded-3xl glassmorphism p-5 sm:p-8 md:p-12 border border-luxury-gold/20 shadow-2xl flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -25 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="border-b border-white/5 pb-4 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-luxury-cream">
                    Book Showroom Consultation
                  </h3>
                  <p className="text-xs text-luxury-beige/70 font-light mt-1">
                    Please provide your contact details, and a designer will call you back.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-semibold text-luxury-beige/60">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Reddy"
                      className="w-full bg-[#161616]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-luxury-cream placeholder-white/20 focus:border-luxury-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-wider font-semibold text-luxury-beige/60">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full bg-[#161616]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-luxury-cream placeholder-white/20 focus:border-luxury-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-semibold text-luxury-beige/60">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-[#161616]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-luxury-cream placeholder-white/20 focus:border-luxury-gold/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-[10px] uppercase tracking-wider font-semibold text-luxury-beige/60">Preferred Service</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#161616]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-luxury-cream focus:border-luxury-gold/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option className="bg-[#161616]">Bespoke Furniture Design</option>
                      <option className="bg-[#161616]">Turnkey Residential Interiors</option>
                      <option className="bg-[#161616]">Private Showroom Visit</option>
                      <option className="bg-[#161616]">Other Projects</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-semibold text-luxury-beige/60">Project Notes (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your space, timeline, or wood preference..."
                    className="w-full bg-[#161616]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-luxury-cream placeholder-white/20 focus:border-luxury-gold/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-center text-xs uppercase tracking-widest bg-gold-gradient text-luxury-black font-bold hover:scale-102 hover:shadow-lg hover:shadow-luxury-gold/20 active:scale-98 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Scheduling consultation...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 text-luxury-gold flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-light text-luxury-cream">
                    Appointment Requested
                  </h3>
                  <p className="text-sm text-luxury-beige/70 font-light max-w-sm mx-auto leading-relaxed">
                    Thank you. We have received your request. One of our design architects will contact you within 2 business hours to confirm your private showroom tour.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-xs text-luxury-gold hover:text-luxury-cream transition-colors duration-300 font-semibold uppercase tracking-wider"
                  >
                    Send Another Request
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
