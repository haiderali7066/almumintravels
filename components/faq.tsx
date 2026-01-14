"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What is included in your Umrah packages?",
    answer:
      "Our packages include flights from UK airports, visa assistance, accommodation, meals, airport transfers, guided Umrah rituals, and Ziyarat tours. Premium packages include additional amenities like personal assistants.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2-3 months in advance to secure the best rates and your preferred departure dates. Last-minute bookings are possible subject to availability.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes, we handle all visa documentation and processing. Our team will guide you through the entire process and submit your application to the Saudi embassy.",
  },
  {
    question: "What about travel insurance?",
    answer:
      "Travel insurance is recommended and can be arranged through us or your own provider. We ensure your chosen package is compatible with Islamic-compliant travel insurance.",
  },
  {
    question: "Is there a payment plan option?",
    answer:
      "Yes, we offer flexible payment plans. Typically, a deposit secures your booking with the balance due 6-8 weeks before departure.",
  },
  {
    question: "What if I need to cancel my booking?",
    answer:
      "Our cancellation policy is flexible. Please refer to our terms and conditions or contact us directly for specific details based on your booking date.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/30 transition"
      >
        <span className="font-semibold text-foreground text-left">{question}</span>
        <ChevronDown size={20} className={`text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="px-6 py-4 bg-accent/20 text-muted-foreground border-t border-border">{answer}</div>}
    </div>
  )
}

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
