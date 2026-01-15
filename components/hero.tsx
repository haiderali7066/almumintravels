"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[65vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image fallback */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/hero-bg.jpg")` }}
      />

      {/* Video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/6.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white py-12 md:py-0"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-6 text-balance leading-tight text-white">
          Your Journey of Faith
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-white/90 text-balance font-light">
          Trusted UK-based Islamic travel services for transformative Umrah and
          Hajj pilgrimages
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          {/* Gold button */}
          <Button
            size="lg"
            className="bg-[#c9a24d] hover:bg-[#ffd95b] text-black flex items-center justify-center gap-2 group px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Explore Packages
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Button>

          {/* Dark Green button */}
          <Button
            size="lg"
            className="bg-[#0f2f24] hover:bg-[#164234] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Free Quote
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
