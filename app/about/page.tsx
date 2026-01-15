"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "About Us - Al Mumin Travels UK",
//   description:
//     "Learn about Al Mumin Travels UK, our mission, values, and commitment to pilgrimage excellence.",
// };

export default function About() {
  const values = [
    {
      icon: Trophy,
      title: "Trust & Integrity",
      description:
        "We prioritize transparency and honesty in all our dealings with pilgrims and partners.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description:
        "Delivering premium pilgrimage experiences with meticulous attention to detail.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building lasting relationships with our pilgrims and the Islamic community.",
    },
    {
      icon: CheckCircle,
      title: "Innovation",
      description:
        "Continuously improving our services with modern technology and best practices.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Pilgrims Served" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-transparent to-background py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            About Al Mumin Travels UK
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Your trusted partner in spiritual pilgrimage for over 15 years. We
            are dedicated to creating transformative Umrah and Hajj experiences
            for UK pilgrims.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className=""
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Al Mumin Travels UK was established with a singular vision: to
              provide UK-based Muslim pilgrims with accessible, affordable, and
              exceptional Islamic travel experiences. Our founders brought
              together decades of combined expertise in pilgrimage management,
              hospitality, and customer service to create something truly
              special.
            </p>
            <p className="text-lg">
              We understand that undertaking Umrah or Hajj is more than just a
              journey—it is a transformative spiritual experience. This is why
              we've meticulously crafted every aspect of our service, from
              pre-departure consultations to post-pilgrimage support. Our
              commitment is to handle all logistical details with precision,
              allowing you to focus entirely on your spiritual devotion and
              connection with the Divine.
            </p>
            <p className="text-lg">
              With thousands of satisfied pilgrims and growing partnerships with
              premium accommodations and service providers in Makkah and
              Madinah, we continue to set new standards in UK Islamic travel
              services. Every pilgrim who travels with us becomes part of the Al
              Mumin family, and their satisfaction and spiritual growth are our
              greatest rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Why Choose Al Mumin?
          </h2>
          <div className="space-y-4">
            {[
              "Expert guides who are fluent in Arabic and English",
              "Carefully vetted accommodations with Islamic facilities",
              "24/7 emergency support throughout your pilgrimage",
              "Flexible packages tailored to your needs and budget",
              "Group discounts and family packages available",
              "Comprehensive pre-departure guidance and orientation",
            ].map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-background/50 p-4 rounded-lg hover:bg-muted/30 transition"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready for Your Spiritual Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your Umrah or Hajj plans and get
            personalized recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get in Touch
            </Button>
            <Button className="bg-secondary text-foreground px-8 py-3 rounded-full text-lg border border-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
