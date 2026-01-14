import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackageGrid } from "@/components/package-grid"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Shield, Award } from "lucide-react"

export const metadata = {
  title: "Hajj Packages - Al Mumin Travels UK",
  description:
    "Discover our exclusive Hajj packages. Premium accommodations and complete pilgrimage support for UK pilgrims.",
}

export default function HajjPackages() {
  const features = [
    { icon: Heart, title: "Spiritual Guidance", desc: "Expert scholars to support your journey" },
    { icon: BookOpen, title: "Comprehensive Training", desc: "Pre-Hajj preparation and rituals guide" },
    { icon: Shield, title: "Full Protection", desc: "Travel insurance and 24/7 medical support" },
    { icon: Award, title: "Premium Experience", desc: "Luxury accommodations and premium meals" },
  ]

  return (
    <main className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-transparent to-background py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Hajj Packages</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Experience the sacred pilgrimage of Hajj with our comprehensive packages, expert guidance, and dedicated
            support every step of the way
          </p>
        </div>
      </section>

      {/* About Hajj Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Sacred Pilgrimage of Hajj</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Hajj is one of the Five Pillars of Islam and is obligatory for all able-bodied Muslims who can afford it. It
            is performed during the Islamic month of Dhu al-Hijjah and is the largest annual pilgrimage in the world,
            bringing together millions of Muslims from across the globe for this sacred journey.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our Hajj packages are meticulously designed to ensure that your pilgrimage is not only spiritually enriching
            but also physically comfortable and logistically seamless. We provide comprehensive support from the moment
            you decide to undertake Hajj until you return home, changed by this transformative experience.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With our team of experienced scholars, guides, and support staff, you can focus entirely on fulfilling this
            sacred obligation while we handle every logistical detail.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Why Choose Our Hajj Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <PackageGrid title="👑 Premium Hajj Packages" tier="hajj" />
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Complete Package Inclusions
          </h2>
          <div className="space-y-4">
            {[
              { title: "Flights", desc: "Return flights from major UK airports with experienced group management" },
              {
                title: "Accommodation",
                desc: "Premium 5-star hotels in Makkah and Madinah, strategically located near Haram",
              },
              { title: "Meals", desc: "Full meal plan with options for dietary requirements and preferences" },
              {
                title: "Transportation",
                desc: "Airport transfers, local transport, and bus services for Hajj rituals",
              },
              { title: "Expert Guidance", desc: "Hajj scholars and experienced guides fluent in English and Arabic" },
              {
                title: "Medical Support",
                desc: "Travel insurance, on-site medical staff, and 24/7 emergency services",
              },
              { title: "Training", desc: "Pre-Hajj orientation, ritual preparation, and comprehensive guidebooks" },
              { title: "Ziyarat", desc: "Guided visits to Islamic historical sites in Makkah and Madinah" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Begin Your Hajj Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our experienced team is ready to guide you through every step of your pilgrimage. Let us help fulfill this
            sacred obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Inquire Now
            </Button>
            <a
              href="tel:+447482795318"
              className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-3 rounded-full text-lg font-semibold border border-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
            >
              Call for Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
