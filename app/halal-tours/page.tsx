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
      "https://images.pexels.com/photos/30063501/pexels-photo-30063501.jpeg",
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
      "https://images.pexels.com/photos/10967617/pexels-photo-10967617.png",
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
      "https://images.pexels.com/photos/6152151/pexels-photo-6152151.jpeg",
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
