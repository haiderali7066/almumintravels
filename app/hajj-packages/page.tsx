"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PackageGrid } from "@/components/package-grid";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Hajj Packages - Al Mumin Travels UK",
//   description:
//     "Discover our exclusive Hajj packages. Premium accommodations and complete pilgrimage support for UK pilgrims.",
// };

export default function HajjPackages() {
  const features = [
    {
      icon: Heart,
      title: "Spiritual Guidance",
      desc: "Expert scholars to support your journey",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Training",
      desc: "Pre-Hajj preparation and rituals guide",
    },
    {
      icon: Shield,
      title: "Full Protection",
      desc: "Travel insurance and 24/7 medical support",
    },
    {
      icon: Award,
      title: "Premium Experience",
      desc: "Luxury accommodations and premium meals",
    },
  ];

  const inclusions = [
    {
      title: "Flights",
      desc: "Return flights from major UK airports with experienced group management",
    },
    {
      title: "Accommodation",
      desc: "Premium 5-star hotels in Makkah and Madinah, near Haram",
    },
    {
      title: "Meals",
      desc: "Full meal plan with options for dietary requirements",
    },
    {
      title: "Transportation",
      desc: "Airport transfers, local transport, and bus services for Hajj rituals",
    },
    {
      title: "Expert Guidance",
      desc: "Hajj scholars and experienced guides fluent in English and Arabic",
    },
    {
      title: "Medical Support",
      desc: "Travel insurance, on-site medical staff, and 24/7 emergency services",
    },
    {
      title: "Training",
      desc: "Pre-Hajj orientation, ritual preparation, and comprehensive guidebooks",
    },
    {
      title: "Ziyarat",
      desc: "Guided visits to Islamic historical sites in Makkah and Madinah",
    },
  ];

  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-transparent to-background py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Hajj Packages
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Experience the sacred pilgrimage of Hajj with our comprehensive
            packages, expert guidance, and dedicated support every step of the
            way
          </p>
        </div>
      </section>

      {/* About Hajj Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hajj is one of the Five Pillars of Islam and is obligatory for all
            able-bodied Muslims who can afford it. Performed during Dhu
            al-Hijjah, it brings together millions of pilgrims worldwide.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our packages ensure your pilgrimage is spiritually enriching and
            physically comfortable. From start to finish, we handle logistics,
            guides, accommodations, and support so you can focus on worship.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With experienced scholars, guides, and staff, your Hajj journey will
            be seamless and unforgettable.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Why Choose Our Hajj Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300`}
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <PackageGrid title="👑 Premium Hajj Packages" tier="hajj" />
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Complete Package Inclusions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/50 transition-all"
              >
                <h4 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Begin Your Hajj Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Our experienced team is ready to guide you through every step of
            your pilgrimage.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Inquire Now
            </Button>
            <a
              href="tel:+447482795318"
              className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-3 rounded-full text-lg font-semibold border border-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Call for Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
