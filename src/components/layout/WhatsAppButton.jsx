"use client"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/233577522323"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-green-200 hover:shadow-xl"
      style={{ padding: hovered ? "12px 20px" : "14px" }}
    >
      <MessageCircle size={24} className="flex-shrink-0" />
      <span
        className="text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300"
        style={{ maxWidth: hovered ? "140px" : "0px", opacity: hovered ? 1 : 0 }}
      >
        Chat with us
      </span>
    </a>
  )
}