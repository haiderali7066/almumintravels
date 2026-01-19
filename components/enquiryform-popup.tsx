"use client";

import { useEffect, useState } from "react";
import { EnquiryForm } from "@/components/enquiry-form";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // auto open
    }, 1200); // 1.2s after page load

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl animate-fade-in">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition"
        >
          ✕
        </button>

        <EnquiryForm />
      </div>
    </div>
  );
}
