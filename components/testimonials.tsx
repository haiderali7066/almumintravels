"use client"

import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Muhammad Ahmad",
    location: "London",
    rating: 5,
    text: "Al Mumin made my first Umrah an unforgettable experience. The attention to detail and spiritual guidance were exceptional.",
  },
  {
    name: "Fatima Hassan",
    location: "Manchester",
    rating: 5,
    text: "Professional, trustworthy, and genuinely caring. They treated my family like their own. Highly recommended!",
  },
  {
    name: "Ahmed Khan",
    location: "Birmingham",
    rating: 5,
    text: "Transparent pricing, amazing guides, and hassle-free arrangements. Will definitely book with them again for Hajj.",
  },
  {
    name: "Aisha Malik",
    location: "Leeds",
    rating: 5,
    text: "The best pilgrimage experience I could ask for. Every moment was special thanks to Al Mumin's dedication.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
          What Our Pilgrims Say
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="animate-scale-in h-full bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover-lift">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={18} className="fill-secondary text-secondary" />
                      ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic text-balance">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" />
          <CarouselNext className="hidden md:flex -right-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" />
        </Carousel>
      </div>
    </section>
  )
}
