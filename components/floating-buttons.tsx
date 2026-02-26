"use client";

import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingButtons() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {/* Main Toggle Button */}
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="fixed bottom-5 left-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle contact options"
      >
        <PhoneCall size={28} />
      </button>

      {/* Animated Call & WhatsApp Buttons */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-28 left-8 flex flex-col gap-4 z-50"
          >
            {/* Call Button */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="tel:+447482795318"
              className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Call us"
            >
              <PhoneCall size={24} />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={28} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}