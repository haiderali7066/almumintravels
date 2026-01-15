"use client";

import { Award, Users, DollarSign, Phone } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Award,
    title: "Licensed & Regulated",
    description:
      "Fully compliant with UK travel regulations and ATOL protected",
  },
  {
    icon: Users,
    title: "Experienced Guides",
    description:
      "Expert guides with deep knowledge of Islamic practices and holy sites",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs. What you see is what you pay",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Available round-the-clock to support you throughout your journey",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
        >
          Why Choose <span className="text-[#c9a24d]">Al Mumin Travels UK</span>
          ?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const fromLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="bg-[#0f2f24] rounded-2xl p-6 md:p-8 border border-[#c9a24d]/30 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-full bg-[#c9a24d] text-black shrink-0">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
