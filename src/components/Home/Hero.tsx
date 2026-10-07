"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Settings } from "lucide-react";

const heroImages = [
  "/images/hero_paint_roller.png",
  "/images/wall_putty_usage.jpg",
  "/images/tile_adhesive_usage.jpg",
  "/images/white_cement_usage.jpg",
  "/images/lime_wash_usage.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-db-snow via-white to-[#F9F6F0] overflow-hidden">
      {/* Decorative background shapes mimicking the image */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 rounded-l-[100px] transform translate-x-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-db-charcoal leading-[1.1] mb-6 tracking-tight">
              BUILDING SPACES WITH QUALITY & STRENGTH
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Leading Manufacturer of Decorative White Cement, Wall Putty, Tile Adhesives & Grout.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-db-gold rounded-sm hover:bg-db-gold-light transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-db-charcoal border border-db-charcoal rounded-sm hover:bg-db-snow transition-colors"
              >
                Explore Products
              </Link>
            </div>

          </motion.div>

          {/* Right Column - Composite Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] w-full flex justify-center lg:justify-end items-center"
          >
            {/* Background Blob/Circle */}
            <div className="absolute w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
            
            {/* Main Hero Image Slideshow */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-white bg-gray-100 group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <button 
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-db-charcoal shadow-lg backdrop-blur-sm transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-db-charcoal shadow-lg backdrop-blur-sm transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx 
                        ? "bg-db-gold w-6" 
                        : "bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
