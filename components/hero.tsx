"use client";
import Link from "next/link";

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
          Your Journey of Faith Our Promise of Trust
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-white/90 text-balance font-light">
          Trusted UK-based Islamic travel services for transformative Umrah and
          Hajj pilgrimages
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          {/* Gold button */}
          <Link
            href="/umrah-packages"
            className="rounded-full px-8 py-3 text-lg text-black bg-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
          >
            Explore Packages
          </Link>

          {/* Call Now */}
          <a
            href="tel:+447482795318"
            className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
          >
            Book a Tour Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
