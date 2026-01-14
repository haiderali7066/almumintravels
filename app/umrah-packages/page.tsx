import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackageGrid } from "@/components/package-grid"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Zap } from "lucide-react"

export const metadata = {
  title: "Umrah Packages - Al Mumin Travels UK",
  description:
    "Explore our premium Umrah packages. 5-star, 4-star, and 3-star options tailored to your needs and budget.",
}

export default function UmrahPackages() {
  const features = [
    { icon: MapPin, text: "Expert-guided Ziyarat tours" },
    { icon: Clock, text: "Flexible package durations" },
    { icon: Users, text: "Group & individual packages" },
    { icon: Zap, text: "24/7 customer support" },
  ]

  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-transparent to-background py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Umrah Packages</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Choose from our carefully curated Umrah packages designed to provide spiritual fulfillment, comfort, and
            unforgettable experiences
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 bg-card border border-border rounded-full px-4 py-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground text-center">{feature.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Umrah Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What is Umrah?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Umrah, often called the "lesser pilgrimage," is a pilgrimage to Makkah that can be undertaken at any time of
            the year. Unlike Hajj, Umrah is not obligatory but is highly rewarded spiritually. It involves performing
            Tawaf (circumambulation) around the Kaaba, Sa'y (walking between Safa and Marwah), and other spiritual
            rituals.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our Umrah packages are designed to make your spiritual journey comfortable, safe, and deeply meaningful.
            From accommodation and transportation to expert guides and Ziyarat tours, we handle every detail so you can
            focus on your devotion.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <PackageGrid title="💎 5-Star Luxury Umrah Packages" tier="5-star" />
          <PackageGrid title="⭐ 4-Star Comfort Umrah Packages" tier="4-star" />
          <PackageGrid title="🏨 3-Star Value Umrah Packages" tier="3-star" />
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            What's Included in Every Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "🏨 Accommodation near Haram (varies by tier)",
              "✈️ Return flights from major UK airports",
              "🚗 Airport transfers and local transportation",
              "🧭 Expert English-speaking guide",
              "📍 Comprehensive Ziyarat tours of Islamic sites",
              "🍽️ Meal options tailored to your preference",
              "📱 24/7 emergency support",
              "📚 Pre-departure orientation and guidelines",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-4 bg-card rounded-lg hover:shadow-md transition-all">
                <span className="text-2xl flex-shrink-0">{item.split(" ")[0]}</span>
                <span className="text-muted-foreground text-lg">{item.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Book Your Umrah?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to customize a package that suits your spiritual goals and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get a Custom Quote
            </Button>
            <a
              href="https://wa.me/447482795318"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
