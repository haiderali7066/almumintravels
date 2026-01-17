"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const title = "Halal Umrah Combo Tours";

const packages = [
  {
    nights: "Umrah + Dubai",
    hotel: "Hotels in Makkah, Madinah & Dubai",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5rduqoas5j2Bu2XyaOjna_p-wwzDoUsraw&s",
    price: "£799",
    amenities: [
      "All Flights Included",
      "Visas Included",
      "All Ground Transport",
      "Umrah Guidance",
    ],
  },
  {
    nights: "Umrah + Qatar",
    hotel: "Hotels in Makkah, Madinah & Qatar",
    image:
      "data:image/jpeg;base64,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",
    price: "£799",
    amenities: [
      "All Flights Included",
      "Visas Included",
      "All Ground Transport",
      "Umrah Guidance",
    ],
  },
  {
    nights: "Umrah + Turkey",
    hotel: "Hotels in Makkah, Madinah & Turkey",
    image:
      "data:image/jpeg;base64,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",
    price: "£799",
    amenities: [
      "All Flights Included",
      "Visas Included",
      "All Ground Transport",
      "Umrah Guidance",
    ],
  },
  {
    nights: "Umrah + Egypt",
    hotel: "Hotels in Makkah, Madinah & Egypt",
    image:
      "https://images.pexels.com/photos/11517391/pexels-photo-11517391.jpeg",
    price: "£799",
    amenities: [
      "All Flights Included",
      "Visas Included",
      "All Ground Transport",
      "Umrah Guidance",
    ],
  },
];

export default function HalalToursPage() {
  return (
    <>
          <Header />
    
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#0f2f24]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f24] via-[#0f2f24] to-black/90" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-gradient-to-t from-[#c9a24d]/20 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-balance"
          >
            Halal <span className="text-[#c9a24d]">Tours</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Experience Umrah combined with premium halal travel destinations.
            Carefully planned packages, expert guidance, and complete peace of
            mind at every step.
          </motion.p>
        </div>
      </section>

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
                <div className="h-44 md:h-48 overflow-hidden relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.hotel}
                    fill
                    className="object-cover scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {pkg.nights}
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
        <br /> <br />
        <CTASection/>
              <Footer />
        
      </section>
    </>
  );
}
