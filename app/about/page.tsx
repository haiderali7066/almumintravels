"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  Users,
  Zap,
  Trophy,
  Globe,
  Hotel,
  Truck,
  Airplay,
} from "lucide-react";
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

  const whyChoose = [
    {
      title: "Expert Bilingual Religious Guides",
      description:
        "Our guides are fully trained in both English and Arabic, providing clear instructions and spiritual guidance throughout your journey.",
    },
    {
      title: "Hand-Picked Hotels Near Haram",
      description:
        "We select hotels that are comfortable, well-rated, and conveniently located near the Holy Mosques in Makkah and Madinah.",
    },
    {
      title: "24/7 UK & On-Ground Support",
      description:
        "From departure to return, our team is available around the clock to address any queries, emergencies, or assistance requests.",
    },
    {
      title: "Flexible Family & Group Packages",
      description:
        "We offer tailored packages for individuals, families, and groups with options to customize duration, hotel, and transport.",
    },
    {
      title: "Atol Protected Packages",
      description:
        "Pilgrims receive comprehensive instructions, checklists, and tips to ensure a smooth and spiritually fulfilling journey.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
      <Header />

      {/* HERO */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#0f2f24]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f24] via-[#0f2f24] to-black/90" />
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
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 md:py-16 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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

      {/* STORY */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p>
            Al Mumin Travels UK was established with a singular vision: to
            provide UK-based Muslim pilgrims with accessible, affordable, and
            exceptional Islamic travel experiences.
          </p>
          <p>
            Umrah and Hajj are not just journeys — they are spiritual
            transformations. We manage every detail so you can focus entirely on
            worship and devotion.
          </p>
          <p>
            Thousands of satisfied pilgrims later, our mission remains
            unchanged: sincerity, excellence, and care.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 md:py-20 px-4 bg-[#0f2f24]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
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

      {/* WHY CHOOSE */}
      <section className="py-12 md:py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Al Mumin?
          </h2>
          <div className="space-y-6">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start p-6 rounded-lg bg-black/10 border border-primary/30"
              >
                <CheckCircle className="w-6 h-6 text-[#c9a24d] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS - AIRLINES */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Trusted Airline Partners
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            We Work with the World’s Leading Airlines to Ensure Safe and
            Comfortable Journeys.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            {[
              {
                name: "Qatar Airways",
                logo: "https://images.pexels.com/photos/32877113/pexels-photo-32877113.jpeg",
              },
              {
                name: "Saudi Airlines",
                logo: "https://images.pexels.com/photos/11984256/pexels-photo-11984256.jpeg",
              },
              {
                name: "Emirates",
                logo: "https://images.pexels.com/photos/13034092/pexels-photo-13034092.jpeg",
              },
              {
                name: "International Airlines",
                logo: "https://images.pexels.com/photos/33902217/pexels-photo-33902217.jpeg",
              },
            ].map((airline, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="h-16 w-auto object-contain mb-2"
                />
                <span className="text-center font-medium text-sm">
                  {airline.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS - HOTELS */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Hotel Partners
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Partnered with the World’s Leading Hospitality Brands in Makkah.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            {[
              {
                name: "Hilton Makkah",
                logo: "https://images.pexels.com/photos/5659779/pexels-photo-5659779.jpeg",
              },
              {
                name: "Makkah Marriott",
                logo: "https://images.pexels.com/photos/35299524/pexels-photo-35299524.jpeg",
              },
              {
                name: "Pullman ZamZam",
                logo: "https://images.pexels.com/photos/28558770/pexels-photo-28558770.jpeg",
              },
              {
                name: "Swissôtel Makkah",
                logo: "https://images.pexels.com/photos/7942132/pexels-photo-7942132.jpeg",
              },
            ].map((hotel, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={hotel.logo}
                  alt={hotel.name}
                  className="h-16 w-auto object-contain mb-2"
                />
                <span className="text-center font-medium text-sm">
                  {hotel.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="py-12 md:py-20 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Transport & Ground Services
          </h2>
          <p className="text-center text-muted-foreground">
            Comfortable, Modern & Reliable Travel Solutions in Saudi Arabia.
            From airport transfers to Ziyarat tours, our professional fleet and
            drivers ensure safety and comfort.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 max-w-2xl mx-auto">
            <li>Private & Group Airport Transfers</li>
            <li>Modern VIP Coaches for Ziyarat Tours</li>
            <li>Luxury Cars & Family Vans</li>
            <li>Chauffeur Services with English/Urdu-speaking Drivers</li>
            <li>24/7 On-Ground Coordination with Our Saudi Team</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
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
            <a
              href="mailto:Info@almumintravels.co.uk?subject=Inquiry"
              className="rounded-full px-8 py-3 text-lg bg-[#c9a24d] text-[#0f2f24] hover:bg-[#b8923f] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Get in Touch
            </a>
            <a
              href="tel:+447482795318"
              className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Call Us Now
            </a>
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
