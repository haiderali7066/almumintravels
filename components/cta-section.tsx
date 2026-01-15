"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#0f2f24]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Begin Your{" "}
          <span className="text-[#c9a24d]">Spiritual Journey?</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto"
        >
          Let Al Mumin Travels UK handle every detail while you focus fully on
          your pilgrimage.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Call */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            href="tel:+447482795318"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full bg-[#c9a24d] text-black font-semibold px-8
                         hover:bg-white transition shadow-lg"
            >
              <Phone size={20} />
              Call Now
            </Button>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            href="https://wa.me/447482795318"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full border border-[#c9a24d] text-[#c9a24d] px-8
                         hover:bg-[#c9a24d] hover:text-black transition shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </motion.a>

          {/* Quote */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full border border-white/50 text-white px-8
                         hover:bg-white/10 transition"
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
