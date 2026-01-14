"use client"

import { useEffect, useState } from "react"

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: "5000+", label: "Pilgrims" },
  { value: "15+", label: "Years" },
  { value: "100%", label: "UK Based" },
  { value: "4.9★", label: "Rating" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div
                className={`text-3xl md:text-4xl font-semibold transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
              >
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-primary-foreground/75 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
