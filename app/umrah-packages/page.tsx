"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PackageGrid } from "@/components/package-grid";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Zap } from "lucide-react";

// export const metadata = {
//   title: "Umrah Packages - Al Mumin Travels UK",
//   description:
//     "Explore our premium Umrah packages. 5-star, 4-star, and 3-star options tailored to your needs and budget.",
// };

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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#c9a24d]/10 via-transparent to-white py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-[#0f2f24] text-balance"
          >
            Umrah Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#0f2f24]/80 text-balance"
          >
            Choose from carefully curated Umrah packages designed to provide
            spiritual fulfillment, comfort, and unforgettable experiences.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
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
                  className="flex items-center justify-center gap-2 bg-white border border-[#c9a24d]/20 rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon size={16} className="text-[#c9a24d] flex-shrink-0" />
                  <span className="text-xs md:text-sm text-[#0f2f24]/80 text-center">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Umrah Section */}
      <section className="py-12 md:py-16 px-4 bg-[#f5f5f5]">
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

      {/* Packages */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <PackageGrid title="💎 5-Star Luxury Umrah Packages" tier="5-star" />
          <PackageGrid title="⭐ 4-Star Comfort Umrah Packages" tier="4-star" />
          <PackageGrid title="🏨 3-Star Value Umrah Packages" tier="3-star" />
        </div>
      </section>

      {/* Inclusions */}
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

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2f24]">
            Ready to Book Your Umrah?
          </h2>
          <p className="text-lg text-[#0f2f24]/80">
            Contact our team to customize a package that suits your spiritual
            goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button className="bg-[#c9a24d] hover:bg-[#ffd95b] text-black px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get a Custom Quote
            </Button>
            <a
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
