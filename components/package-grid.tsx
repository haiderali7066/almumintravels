"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PackageCard {
  nights: number;
  hotel: string;
  amenities: string[];
  price?: string;
}

/* CATEGORY IMAGES */
const categoryImages: Record<string, string> = {
  "5-star": "/4.jpg",
  "4-star": "/7.jpg",
  "3-star": "/1.jpg",
  hajj: "/2.jpg",
};

const packageData: Record<string, PackageCard[]> = {
  "5-star": [
    {
      nights: 7,
      hotel: "5 Star Hotels In Makkah & Madinah",
      amenities: ["Flights", "Visa", "Transport", "Ziarats & Umrah Guidance"],
      price: "£899",
    },
    {
      nights: 10,
      hotel: "5 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£999",
    },
    {
      nights: 14,
      hotel: "5 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£1,150",
    },
  ],

  "4-star": [
    {
      nights: 7,
      hotel: "4 Star Hotels In Makkah & Madinah",
      amenities: ["Flights", "Visa", "Transport", "Ziarats & Umrah Guidance"],
      price: "£750",
    },
    {
      nights: 10,
      hotel: "4 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£850",
    },
    {
      nights: 14,
      hotel: "4 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£990",
    },
  ],

  "3-star": [
    {
      nights: 7,
      hotel: "3 Star Hotels In Makkah & Madinah",
      amenities: ["Flights", "Visa", "Transport", "Ziarats & Umrah Guidance"],
      price: "£650",
    },
    {
      nights: 10,
      hotel: "3 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£750",
    },
    {
      nights: 14,
      hotel: "3 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Ziarats & Umrah Guidance",
      ],
      price: "£899",
    },
  ],
  hajj: [
    {
      nights: 14,
      hotel: "5 Star Hotels In Makkah & Madinah",
      amenities: [
        "Flights",
        "Visa Assistance",
        "All Ground Transport",
        "Guided Ziarats",
        "Hajj Guidance & Ritual Support",
      ],
      price: "£2,499",
    },
    {
      nights: 21,
      hotel: "4 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Guided Ziarats",
        "Hajj Guidance & Ritual Support",
      ],
      price: "£2,999",
    },
    {
      nights: 28,
      hotel: "3 Star Hotels In Makkah & Madinah",
      amenities: [
        "Return Flight Tickets",
        "Visa Assistance",
        "All Ground Transport",
        "Guided Ziarats",
        "Hajj Guidance & Ritual Support",
      ],
      price: "£3,499",
    },
  ],
};


export function PackageGrid({ title, tier }: { title: string; tier: string }) {
  const packages = packageData[tier] || [];
  const image = categoryImages[tier];

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-black text-center mb-10"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0f2f24] rounded-2xl overflow-hidden border border-[#c9a24d]/30 shadow-lg"
            >
              {/* Image */}
              <div className="h-44 md:h-48 overflow-hidden">
                <img
                  src={image}
                  alt={pkg.hotel}
                  className="w-full h-full object-cover scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {pkg.nights} Nights
                </h3>

                <p className="text-sm font-medium text-[#c9a24d] mb-4">
                  {pkg.hotel}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.amenities.map((amenity, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/80 flex items-start gap-2"
                    >
                      <Check size={16} className="text-[#c9a24d] mt-0.5" />
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/15 mb-4">
                  <p className="text-xl font-semibold text-white">
                    {pkg.price}
                  </p>
                </div>

                <Button className="w-full h-11 rounded-full bg-[#c9a24d] text-black font-semibold hover:bg-white transition">
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
