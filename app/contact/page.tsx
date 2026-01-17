"use client";
import { motion } from "framer-motion";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

// export const metadata = {
//   title: "Contact Us - Al Mumin Travels UK",
//   description:
//     "Get in touch with Al Mumin Travels UK. Find our contact details, office hours, and reach out to our team.",
// };

export default function Contact() {
  return (
    <main className="w-full">
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
            Contact <span className="text-[#c9a24d]">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/85 text-balance max-w-3xl mx-auto"
          >
            Experience the sacred pilgrimage of Hajj, Urah, Halal Tours with carefully planned
            packages, expert guidance, and dedicated support at every step.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+447482795318"
                    className="text-muted-foreground hover:text-primary transition text-lg"
                  >
                    +44 7482 795318
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available Monday-Friday, 9 AM - 6 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:Info@almumintravels.com"
                    className="text-muted-foreground hover:text-primary transition text-lg"
                  >
                    Info@almumintravels.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground text-lg">
                    United Kingdom
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Serving UK pilgrims nationwide
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Office Hours
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Mon - Fri: 9:00 AM - 6:00 PM GMT
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Sat - Sun: 10:00 AM - 4:00 PM GMT
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Quick Connect
              </h3>
              {/* <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/447482795318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+447482795318"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Call Now
                </a>
                <a
                  href="mailto:Info@almumintravels.com"
                  className="flex-1 bg-[#c9a24d] hover:bg-[#b8923f] text-[#0f2f24] px-4 py-3 rounded-full text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Email Us
                </a>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="+44..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Inquiry Type*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="umrah">Umrah Package</option>
                  <option value="hajj">Hajj Package</option>
                  <option value="custom">Custom Package</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message*
                </label>
                <textarea
                  placeholder="Tell us about your pilgrimage plans..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none transition-all"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div> */}
        </div>
      </section>


      {/* ================= CTA ================= */}
            <section className="py-12 md:py-20 px-4 bg-[#0f2f24]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Book Your Umrah?
                </h2>
                <p className="text-lg text-white/80">
                  Contact our team to customize a package that suits your spiritual
                  goals and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  {/* Call */}
                  <a
                    href="mailto:Info@almumintravels.com?subject=Inquiry"
                    className="rounded-full px-8 py-3 text-lg bg-[#c9a24d] text-[#0f2f24] hover:bg-[#b8923f] transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
                  >
                    Get in Touch
                  </a>
      
                  {/* Call Now */}
                  <a
                    href="tel:+447482795318"
                    className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
                  >
                    Call Us Now
                  </a>
      
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/447482795318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-8 py-3 text-lg border border-[#c9a24d] text-[#c9a24d] hover:bg-[#c9a24d]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </section>

      {/* CTA Section
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Prefer to Talk Directly?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team is ready to discuss your pilgrimage plans in detail. Call,
            WhatsApp, or Email us anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="tel:+447482795318"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:Info@almumintravels.com"
              className="inline-block bg-[#c9a24d] hover:bg-[#b8923f] text-[#0f2f24] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
