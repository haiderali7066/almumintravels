import { Award, Users, DollarSign, Phone } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Licensed & Regulated",
    description: "Fully compliant with UK travel regulations and ATOL protected",
  },
  {
    icon: Users,
    title: "Experienced Guides",
    description: "Expert guides with deep knowledge of Islamic practices and holy sites",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs. What you see is what you pay",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Available round-the-clock to support you throughout your journey",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Why Choose Al Mumin Travels UK?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-accent/20 rounded-lg p-8 border border-border hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
