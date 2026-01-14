import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Begin Your Spiritual Journey?</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-slide-up">
          Let Al Mumin Travels UK handle all the details while you focus on your pilgrimage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a href="tel:+447482795318">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 hover:shadow-lg active:scale-95"
            >
              <Phone size={20} />
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/447482795318" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary px-8 hover:shadow-lg active:scale-95">
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </a>
          <Button
            size="lg"
            className="border-2 border-white hover:bg-white/10 text-primary-foreground px-8 hover:shadow-lg active:scale-95"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
