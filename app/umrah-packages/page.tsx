"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PackageGrid } from "@/components/package-grid";
import { MapPin, Clock, Users, Zap } from "lucide-react";

export default function UmrahPackages() {
  const features = [
    { icon: MapPin, text: "Expert-guided Ziyarat tours" },
    { icon: Clock, text: "Flexible package durations" },
    { icon: Users, text: "Group & individual packages" },
    { icon: Zap, text: "24/7 customer support" },
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
            Umrah <span className="text-[#c9a24d]">Packages</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Choose from carefully curated Umrah packages designed to deliver
            spiritual fulfillment, comfort, and unforgettable experiences.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center justify-center gap-2
                    bg-white/95 backdrop-blur
                    border border-[#c9a24d]/30
                    rounded-full px-4 py-2
                    shadow-md"
                >
                  <Icon size={16} className="text-[#c9a24d]" />
                  <span className="text-xs md:text-sm text-[#0f2f24] font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT UMRAH ================= */}
      <section className="py-12 md:py-16 px-4 bg-[#eaf5f0]">
        <div className="max-w-4xl mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#0f2f24] mb-2"
          >
            What is Umrah?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[#0f2f24]/80 text-lg leading-relaxed"
          >
            Umrah, often called the "lesser pilgrimage," is a pilgrimage to
            Makkah that can be undertaken any time of the year. Unlike Hajj,
            Umrah is not obligatory but is highly rewarded spiritually. It
            involves performing Tawaf, Sa'y, and other spiritual rituals.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#0f2f24]/80 text-lg leading-relaxed"
          >
            Our Umrah packages make your spiritual journey comfortable, safe,
            and meaningful. Accommodation, transport, expert guides, and Ziyarat
            tours are all handled for you.
          </motion.p>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-12 md:py-20 px-4 bg-[#fff8e1]">
        <div className="max-w-7xl mx-auto space-y-16">
          <PackageGrid title="💎 5-Star Luxury Umrah Packages" tier="5-star" />
          <PackageGrid title="⭐ 4-Star Comfort Umrah Packages" tier="4-star" />
          <PackageGrid title="🏨 3-Star Value Umrah Packages" tier="3-star" />
        </div>
      </section>

      {/* ================= INCLUSIONS ================= */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[#c9a24d]/5 to-[#0f2f24]/5">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#0f2f24] mb-8 text-center"
          >
            What's Included in Every Package
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "🏨 Accommodation near Haram (varies by tier)",
              "✈️ Return flights from major UK airports",
              "🚗 Airport transfers and local transportation",
              "🧭 Expert English-speaking guide",
              "📍 Comprehensive Ziyarat tours of Islamic sites",
              "🍽️ Meal options tailored to your preference",
              "📱 24/7 emergency support",
              "📚 Pre-departure orientation and guidelines",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-3 items-start p-4 bg-white rounded-lg hover:shadow-lg transition-all"
              >
                <span className="text-2xl flex-shrink-0">
                  {item.split(" ")[0]}
                </span>
                <span className="text-[#0f2f24]/80 text-lg">
                  {item.split(" ").slice(1).join(" ")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-20 px-4 bg-[#0f2f24]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Book Your Umrah?
          </h2>
          <p className="text-lg text-white/80">
            Contact our team to customize a package that suits your spiritual
            goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            {/* Call */}
            <a
              href="mailto:Info@almumintravels.com?subject=Inquiry"
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
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
