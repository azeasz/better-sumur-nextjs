"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, X } from "lucide-react"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 items-end mb-2">
          <Link
            href="tel:+6281234567890"
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Telepon</span>
            <Phone className="h-5 w-5" />
          </Link>

          <Link
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <span className="text-sm font-medium">WhatsApp</span>
            <MessageCircle className="h-5 w-5" />
          </Link>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-yellow-500 hover:bg-yellow-600"
        } text-black h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-colors`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
