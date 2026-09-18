"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Factory, Droplet, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-db-gold" />,
      title: "Extra Whiteness",
      description: "Our proprietary processing ensures a brilliant white finish that enhances any topcoat color.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-db-gold" />,
      title: "High Strength Adhesion",
      description: "Engineered with advanced polymers to provide superior bonding with the base plaster.",
    },
    {
      icon: <Droplet className="w-8 h-8 text-db-gold" />,
      title: "Water Resistant",
      description: "Formulated to protect walls from moisture, preventing flaking and dampness over time.",
    },
    {
      icon: <Factory className="w-8 h-8 text-db-gold" />,
      title: "ISO Certified Manufacturing",
      description: "Produced in state-of-the-art facilities adhering to stringent international quality standards.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section className="py-24 bg-db-snow relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-db-charcoal mb-4 tracking-tight">
            Uncompromising Quality
          </h2>
          <div className="w-24 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From raw material selection to the final packaged product, every step in our process is optimized for perfection.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-db-snow rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-db-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Image / Factory Banner */}
        <motion.div 
          className="mt-24 relative h-80 rounded-2xl overflow-hidden bg-db-charcoal-dark shadow-2xl flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-db-charcoal-dark to-transparent" />
          
          <div className="relative z-10 text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-db-white mb-4">
              Built on a Foundation of Trust
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trusted by contractors, builders, and architects across the nation for our consistent performance and durability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
