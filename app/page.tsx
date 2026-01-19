import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EnquiryForm } from "@/components/enquiry-form"
import { StatsSection } from "@/components/stats-section"
import { WhoWeAre } from "@/components/who-we-are"
import { PackageGrid } from "@/components/package-grid"
import { ImageTextSection } from "@/components/image-text-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <EnquiryForm />
      <StatsSection />
      <WhoWeAre />
      <PackageGrid title="5-Star Umrah Packages" tier="5-star" />
      <PackageGrid title="4-Star Umrah Packages" tier="4-star" />
      <PackageGrid title="3-Star Umrah Packages" tier="3-star" />
      <ImageTextSection />
      <PackageGrid title="5-Star Hajj Packages" tier="hajj" />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      
    </main>
  )
}
