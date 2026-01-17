"use client"

import { MessageCircle, MessageSquare, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function FloatingButtons() {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: "user" | "bot" }>>([
    { id: "1", text: "Hello! How can we help you today? 👋", sender: "bot" },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user" as const,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const botResponses: Record<string, string> = {
        umrah:
          "Our Umrah packages range from £999 to £4,299. Would you like to hear about our 5-star, 4-star, or 3-star options?",
        hajj: "We offer premium Hajj packages starting from £4,999. Each includes accommodation, meals, and expert guidance.",
        price:
          "Prices depend on the package tier and duration. Please visit our Umrah or Hajj packages page for details.",
        booking:
          "You can book directly through our website or call us at +44 7482 795318. Our team is available 9 AM - 6 PM, Monday to Friday.",
        contact:
          "You can reach us at +44 7482 795318 or email Info@almumintravels.co.uk. We also have a dedicated WhatsApp channel!",
        default:
          "Thank you for your interest! Would you like to know more about our Umrah, Hajj packages, or pricing? Feel free to call us at +44 7482 795318.",
      }

      const lowerInput = inputValue.toLowerCase()
      let response = botResponses.default

      if (lowerInput.includes("umrah")) response = botResponses.umrah
      else if (lowerInput.includes("hajj")) response = botResponses.hajj
      else if (lowerInput.includes("price") || lowerInput.includes("cost")) response = botResponses.price
      else if (lowerInput.includes("book")) response = botResponses.booking
      else if (lowerInput.includes("contact") || lowerInput.includes("number")) response = botResponses.contact

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot" as const,
      }

      setMessages((prev) => [...prev, botMessage])
    }, 800)
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447482795318"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={28} fill="currentColor" />
      </a>

      {/* Chat Floating Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-24 md:bottom-28 right-8 md:right-10 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Functional Chat Window */}
      {showChat && (
        <div className="fixed bottom-40 md:bottom-48 right-8 md:right-10 z-50 w-80 md:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-96">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Al Mumin Chat</h3>
                <p className="text-xs text-primary-foreground/80">Usually replies within minutes</p>
              </div>
              <button onClick={() => setShowChat(false)} className="hover:opacity-80 transition text-xl">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3 bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-muted-foreground rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-3 flex gap-2 bg-background">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-3 py-2 rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card transition-all"
            />
            <button
              onClick={handleSendMessage}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
