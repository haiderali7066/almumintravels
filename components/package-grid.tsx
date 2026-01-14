import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PackageCard {
  nights: number
  hotel: string
  amenities: string[]
  price?: string
}

const packageData: Record<string, PackageCard[]> = {
  "5-star": [
    {
      nights: 7,
      hotel: "5-Star Hilton Makkah",
      amenities: ["Umrah-specific meals", "Airport transfers", "Expert guide", "Ziyarat tours"],
      price: "From £2,499",
    },
    {
      nights: 10,
      hotel: "5-Star Fairmont Makkah & Madinah",
      amenities: ["Premium accommodation", "All meals included", "VIP guide", "Complete Ziyarat package"],
      price: "From £3,299",
    },
    {
      nights: 14,
      hotel: "5-Star Extended Package",
      amenities: ["Luxury hotels", "Premium meals", "Personal assistant", "Extended Ziyarat"],
      price: "From £4,299",
    },
  ],
  "4-star": [
    {
      nights: 7,
      hotel: "4-Star Al Marwah Makkah",
      amenities: ["Comfortable stay", "Airport transfers", "Trained guide", "Ziyarat tours"],
      price: "From £1,599",
    },
    {
      nights: 10,
      hotel: "4-Star Makkah & Madinah Combo",
      amenities: ["Good accommodation", "Breakfast included", "Knowledgeable guide", "Complete Ziyarat"],
      price: "From £2,199",
    },
    {
      nights: 14,
      hotel: "4-Star Extended Package",
      amenities: ["Quality hotels", "Meals included", "Expert guidance", "Full Ziyarat package"],
      price: "From £2,799",
    },
  ],
  "3-star": [
    {
      nights: 7,
      hotel: "3-Star Budget-Friendly Makkah",
      amenities: ["Clean accommodation", "Transfers included", "Guide support", "Essential Ziyarat"],
      price: "From £999",
    },
    {
      nights: 10,
      hotel: "3-Star Economy Package",
      amenities: ["Basic accommodation", "Some meals", "Local guide", "Key sites Ziyarat"],
      price: "From £1,299",
    },
    {
      nights: 14,
      hotel: "3-Star Value Package",
      amenities: ["Economical stay", "Breakfast included", "Guide assistance", "Ziyarat coverage"],
      price: "From £1,699",
    },
  ],
  hajj: [
    {
      nights: 21,
      hotel: "5-Star Hajj Premium",
      amenities: ["Top-tier hotels", "Full meal plan", "Expert Hajj guide", "Complete Ziyarat"],
      price: "From £4,999",
    },
    {
      nights: 21,
      hotel: "5-Star Hajj Deluxe",
      amenities: ["Premium accommodation", "Luxury meals", "Personal assistant", "Extended Ziyarat"],
      price: "From £6,299",
    },
    {
      nights: 21,
      hotel: "5-Star Hajj Ultimate",
      amenities: ["5-star luxury", "Gourmet meals", "Dedicated support team", "Comprehensive Ziyarat"],
      price: "From £7,999",
    },
  ],
}

export function PackageGrid({ title, tier }: { title: string; tier: string }) {
  const packages = packageData[tier] || []

  return (
    <section className="py-12 md:py-16 bg-background ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-8 md:mb-12 text-balance">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-yellow-600 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center overflow-hidden">
                <img
                  src={
                    "https://media.istockphoto.com/id/149121279/photo/muslim-pilgrims-circumambulate-the-kaaba-at-dawn.jpg?b=1&s=612x612&w=0&k=20&c=XxnYy6WU39VCezStM5OQURgoXvp13el5ocu3I7l0a1I="
                  }
                  alt={pkg.hotel}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  {pkg.nights} Nights
                </h3>
                <p className="text-xs md:text-sm font-medium text-primary mb-4">
                  {pkg.hotel}
                </p>

                {/* Amenities with icons */}
                <ul className="space-y-2 mb-6">
                  {pkg.amenities.map((amenity, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <Check
                        size={16}
                        className="text-black mt-0.5 flex-shrink-0"
                      />
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="mb-4 pb-4 border-t border-border">
                  <p className="text-xl md:text-2xl font-semibold text-black">
                    {pkg.price}
                  </p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm h-10">
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
