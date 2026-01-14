import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:min-h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/kaaba-pilgrims-holy-mosque.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Modern overlay with gradient */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white py-12 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 md:mb-6 text-balance leading-tight">
          Your Journey of Faith
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-gray-100 text-balance font-light">
          Trusted UK-based Islamic travel services for transformative Umrah and Hajj pilgrimages
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 group"
          >
            Explore Packages
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Button>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
