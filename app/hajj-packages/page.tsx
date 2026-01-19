"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PackageGrid } from "@/components/package-grid";
import { Heart, BookOpen, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HajjPackages() {
  const features = [
    {
      icon: Heart,
      title: "Spiritual Guidance",
      desc: "Expert scholars to support your journey",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      desc: "Pre-Hajj preparation and rituals guide",
    },
    {
      icon: Shield,
      title: "Full Protection",
      desc: "Travel insurance and 24/7 medical support",
    },
    {
      icon: Award,
      title: "Premium Experience",
      desc: "Luxury accommodations and premium meals",
    },
  ];

  const inclusions = [
    {
      title: "Flights",
      desc: "Return flights from major UK airports with experienced group management",
    },
    {
      title: "Accommodation",
      desc: "Premium 5-star hotels in Makkah and Madinah, near Haram",
    },
    {
      title: "Meals",
      desc: "Full meal plan with options for dietary requirements",
    },
    {
      title: "Transportation",
      desc: "Airport transfers, local transport, and bus services for Hajj rituals",
    },
    {
      title: "Expert Guidance",
      desc: "Hajj scholars and experienced guides fluent in English and Arabic",
    },
    {
      title: "Medical Support",
      desc: "Travel insurance, on-site medical staff, and 24/7 emergency services",
    },
    {
      title: "Training",
      desc: "Pre-Hajj orientation, ritual preparation, and comprehensive guidebooks",
    },
    {
      title: "Ziyarat",
      desc: "Guided visits to Islamic historical sites in Makkah and Madinah",
    },
  ];

  return (
    <main className="w-full">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#0f2f24]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f24] via-[#0f2f24] to-black/90" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-t from-[#c9a24d]/20 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-balance"
          >
            Hajj <span className="text-[#c9a24d]">Packages</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Experience the sacred pilgrimage of Hajj with carefully planned
            packages, expert guidance, and dedicated support at every step.
          </motion.p>
        </div>
      </section>

      {/* ================= ABOUT Hajj ================= */}
      <section className="py-12 md:py-16 px-4 bg-[#eaf5f0]">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-[#0f2f24]/90 text-lg leading-relaxed">
            Hajj is one of the Five Pillars of Islam and is obligatory for all
            able-bodied Muslims who can afford it. Performed during Dhu
            al-Hijjah, it brings together millions of pilgrims worldwide.
          </p>
          <p className="text-[#0f2f24]/80 text-lg leading-relaxed">
            Our packages ensure your pilgrimage is spiritually enriching and
            physically comfortable. From start to finish, we handle logistics,
            guides, accommodations, and support so you can focus on worship.
          </p>
          <p className="text-[#0f2f24]/80 text-lg leading-relaxed">
            With experienced scholars, guides, and staff, your Hajj journey will
            be seamless and unforgettable.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-12 md:py-16 px-4 bg-[#eaf5f0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2f24] mb-10 text-center">
            Why Choose Our Hajj Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-12 md:py-20 px-4 bg-[#f0f8ff]">
        <div className="max-w-7xl mx-auto">
          <PackageGrid title="👑 Premium Hajj Packages" tier="hajj" />
        </div>
      </section>

      {/* ================= INCLUSIONS ================= */}
      <section className="py-12 md:py-16 px-4 bg-[#eaf5f0]">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2f24] mb-6 text-center">
            Complete Package Inclusions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/50 transition-all"
              >
                <h4 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-20 px-4 bg-[#0f2f24]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Begin Your Hajj Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Our experienced team is ready to guide you through every step of
            your pilgrimage.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="mailto:Info@almumintravels.co.uk?subject=Inquiry"
              className="rounded-full px-8 py-3 text-lg bg-[#c9a24d] text-[#0f2f24] hover:bg-[#b8923f] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Get in Touch
            </a>

            {/* Call Now */}
            <a
              href="tel:+447482795318"
              className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Call Us Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
