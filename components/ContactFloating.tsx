"use client"

import { Phone, Mail } from "lucide-react"

export default function ContactFloating() {
  return (
    <div className="fixed bottom-20 right-2 z-[9999]">
      <div className="bg-white/20 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl px-4 py-3 flex flex-col space-y-3">

        {/* Numero 1 */}
        <a
          href="tel:+358 400 2905 82"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-700 transition"
        >
          <Phone className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-medium">+358 400 290 582</span>
        </a>

        {/* Numero 2 */}
        <a
          href="tel:+358 50 494 5709"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-700 transition"
        >
          <Phone className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-medium">+358 50 494 5709</span>
        </a>

        {/* Sähköposti */}
        <a
          href="mailto:harjun.mokit@gmail.com"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-700 transition"
        >
          <Mail className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-medium">harjun.mokit@gmail.com</span>
        </a>

      </div>
    </div>
  )
}
