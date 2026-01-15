"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    packageType: "4-star",
    departureAirport: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Get Your <span className="text-[#c9a24d]">Free Quote</span>
          </h2>
          <p className="text-sm md:text-base text-black/70">
            Tell us about your pilgrimage and we’ll send you a personalized
            package
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f2f24] rounded-2xl p-6 md:p-8 space-y-4 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black placeholder:text-black/50
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black placeholder:text-black/50
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black placeholder:text-black/50
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            />

            <input
              type="number"
              name="passengers"
              placeholder="Number of Passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black placeholder:text-black/50
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            >
              <option value="5-star">5-Star Package</option>
              <option value="4-star">4-Star Package</option>
              <option value="3-star">3-Star Package</option>
            </select>

            <input
              type="text"
              name="departureAirport"
              placeholder="Departure Airport"
              value={formData.departureAirport}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-full bg-white text-black placeholder:text-black/50
                         border border-[#c9a24d]/40 focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 rounded-full bg-[#c9a24d] text-black font-semibold
                         hover:bg-white transition"
            >
              Get Quote
            </Button>

            <a
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-auto"
            >
              <Button
                type="button"
                className="w-full rounded-full border border-[#c9a24d] text-[#c9a24d]
                           hover:bg-[#c9a24d] hover:text-black transition
                           flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
