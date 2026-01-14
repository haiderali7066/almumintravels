"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    packageType: "4-star",
    departureAirport: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 text-balance">Get Your Free Quote</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Tell us about your pilgrimage and we'll provide personalized options
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-amber-600 rounded-lg p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
              required
            />
            <input
              type="number"
              name="passengers"
              placeholder="Number of Passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
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
              className="px-4 py-3 text-sm border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 bg-amber-600"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Quote
            </Button>
            <a href="https://wa.me/447482795318" target="_blank" rel="noopener noreferrer" className="sm:w-auto">
              <Button
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
