"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Trophy,
      title: "Trust & Integrity",
      description:
        "We prioritize transparency and honesty in all our dealings with pilgrims and partners.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description:
        "Delivering premium pilgrimage experiences with meticulous attention to detail.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with our pilgrims and the Islamic community.",
    },
    {
      icon: CheckCircle,
      title: "Innovation",
      description:
        "Continuously improving our services with modern technology and best practices.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Pilgrims Served" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
      <Header />

      {/* ================= HERO SECTION ================= */}
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
            About <span className="text-[#c9a24d]">Al Mumin Travels</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Your trusted UK-based partner for spiritually fulfilling Umrah and
            Hajj journeys for over 15 years.
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
            {[
              { icon: Trophy, text: "15+ Years Experience" },
              { icon: Users, text: "5,000+ Pilgrims Served" },
              { icon: CheckCircle, text: "Trusted & Certified" },
              { icon: Zap, text: "24/7 Support" },
            ].map((item, idx) => {
              const Icon = item.icon;
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
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-12 md:py-16 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Al Mumin Travels UK was established with a singular vision: to
              provide UK-based Muslim pilgrims with accessible, affordable, and
              exceptional Islamic travel experiences.
            </p>
            <p className="text-lg">
              Umrah and Hajj are not just journeys — they are spiritual
              transformations. We manage every detail so you can focus entirely
              on worship and devotion.
            </p>
            <p className="text-lg">
              Thousands of satisfied pilgrims later, our mission remains
              unchanged: sincerity, excellence, and care.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-primary/50 transition"
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Al Mumin?
          </h2>
          <div className="space-y-4">
            {[
              "Expert bilingual religious guides",
              "Hand-picked hotels near Haram",
              "24/7 UK & on-ground support",
              "Flexible family & group packages",
              "Complete pre-departure guidance",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-lg bg-muted/30"
              >
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#0f2f24]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready for Your{" "}
            <span className="text-[#c9a24d]">Spiritual Journey?</span>
          </h2>

          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Speak with our experienced advisors and receive personalized Umrah
            or Hajj guidance today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* Get in Touch (Email) */}
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
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
