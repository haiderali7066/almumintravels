"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { useState } from "react";

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

      {/* Call & WhatsApp Buttons */}
      {showOptions && (
        <div className="fixed bottom-28 left-8 flex flex-col gap-4 z-50">
          {/* Call Button */}
          <a
            href="tel:+447482795318"
            className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Call us"
          >
            <PhoneCall size={24} />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/447482795318"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      )}
    </>
  );
}
