"use client";

import { motion } from "framer-motion";

export function WhoWeAre() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-black mb-8"
        >
          Who <span className="text-[#c9a24d]">We Are</span>
        </motion.h2>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-lg text-black/80 leading-relaxed"
          >
            Al Mumin Travels UK is a fully licensed and regulated Islamic travel
            agency dedicated to delivering exceptional pilgrimage experiences.
            With over 15 years of experience arranging Umrah and Hajj packages,
            we combine spiritual reverence with meticulous planning.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-lg text-black/80 leading-relaxed"
          >
            Based in the UK with offices in London and Manchester, we pride
            ourselves on transparent pricing, experienced guides, and 24/7
            customer support. Your spiritual journey is our responsibility—we
            handle every detail so you can focus on faith.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
