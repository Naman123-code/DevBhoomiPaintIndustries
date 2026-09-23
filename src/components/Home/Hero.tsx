"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
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

            <div className="flex flex-col sm:flex-row gap-4">
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
            
            {/* Main Hero Image */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-white"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero_paint_roller.png')" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
