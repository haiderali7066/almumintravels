"use client"

import { Mail, Phone, Instagram, Facebook, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Umrah", href: "/umrah-packages" },
    { label: "Hajj", href: "/hajj-packages" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full">
      <div className="bg-primary text-primary-foreground py-2 md:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-xs md:text-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <a
                href="tel:+447482795318"
                aria-label="Call Al Mumin Travels"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <Phone className="shrink-0" size={16} />
                <span>+44 7482 795318</span>
              </a>

              <a
                href="mailto:Info@alhmumintravel.com"
                aria-label="Email Al Mumin Travels"
                className="flex items-center gap-2 hover:opacity-80 transition max-w-[220px]"
              >
                <Mail className="shrink-0" size={16} />
                <span className="truncate">Info@alhmumintravel.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/almumintravelsuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.facebook.com/share/1KJXwzAdDr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80 transition"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold text-primary tracking-tight hover:opacity-80 transition"
          >
            Al Mumin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm h-9 rounded-full">
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted rounded transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm h-9 rounded-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
