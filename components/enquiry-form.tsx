"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    packageType: "4-star",
    departureAirport: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, String(value)),
    );

    try {
      const res = await fetch("https://usebasin.com/f/192cd6af5cdd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          passengers: "",
          packageType: "4-star",
          departureAirport: "",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch {
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-light tracking-tight text-slate-950 md:text-4xl">
            Get Your <span className="font-semibold text-[#c9a24d]">Free Quote</span>
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Tell us about your pilgrimage and we will send you a personalized package.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-[#0f2f24] p-6 shadow-xl md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Passengers</label>
              <input
                type="number"
                name="passengers"
                placeholder="Number of Passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Package Tier</label>
              <div className="relative">
                <select
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all appearance-none"
                >
                  <option value="5-star">5-Star Package</option>
                  <option value="4-star">4-Star Package</option>
                  <option value="3-star">3-Star Package</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-1">Departure Airport</label>
              <input
                type="text"
                name="departureAirport"
                placeholder="Departure Airport"
                value={formData.departureAirport}
                onChange={handleChange}
                className="w-full rounded-full border border-[#c9a24d]/30 bg-white/95 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#c9a24d] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a24d]/20 transition-all"
              />
            </div>
          </div>

          {/* Premium Grid Action System */}
          <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
            <Button
              type="submit"
              disabled={loading || sent}
              className={`w-full rounded-full h-11 text-sm font-bold tracking-wide shadow-md transition-all duration-200
                ${sent 
                  ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                  : "bg-[#c9a24d] text-[#0f2f24] hover:bg-white hover:text-black"
                }
              `}
            >
              {loading ? "Sending..." : sent ? "Sent" : "Submit"}
            </Button>

            <a
              href="https://wa.me/442033556230"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                type="button"
                className="w-full rounded-full h-11 border border-[#c9a24d]/60 bg-transparent text-[#c9a24d] hover:bg-[#c9a24d] hover:text-[#0f2f24] transition-all duration-200 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide"
              >
                <FaWhatsapp size={16} /> WhatsApp
              </Button>
            </a>

            <a href="tel:+442033556230" className="w-full">
              <Button
                type="button"
                className="w-full rounded-full h-11 border border-[#c9a24d]/60 bg-transparent text-[#c9a24d] hover:bg-[#c9a24d] hover:text-[#0f2f24] transition-all duration-200 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide"
              >
                <FaPhoneAlt size={13} /> Call Now
              </Button>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}