"use client";

import { Mail, Phone, Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Umrah", href: "/umrah-packages" },
    { label: "Hajj", href: "/hajj-packages" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-[#0f2f24] text-white/90 py-2 md:py-3 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a
              href="tel:+447482795318"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Phone size={16} /> +44 7482 795318
            </a>
            <a
              href="mailto:Info@alhmumintravel.com"
              className="flex items-center gap-2 hover:opacity-80 transition truncate max-w-[220px]"
            >
              <Mail size={16} />{" "}
              <span className="truncate">Info@alhmumintravel.co.uk</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-1 md:mt-0">
            <a
              href="https://www.instagram.com/almumintravelsuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a24d] transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/share/1KJXwzAdDr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a24d] transition"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-[#c9a24d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-[#0f2f24] tracking-tight hover:text-[#c9a24d] transition"
          >
            Al Mumin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-[#0f2f24] hover:text-[#c9a24d] hover:bg-[#c9a24d]/10 rounded transition"
              >
                {item.label}
              </Link>
            ))}
            <Button className="ml-4 bg-[#c9a24d] hover:bg-[#ffd95b] text-black text-sm h-9 rounded-full px-6 transition">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-[#c9a24d]/20 bg-white"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-[#0f2f24] hover:text-[#c9a24d] hover:bg-[#c9a24d]/10 rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="w-full mt-3 bg-[#c9a24d] hover:bg-[#ffd95b] text-black text-sm h-9 rounded-full transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
