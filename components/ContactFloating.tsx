"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"

export default function ContactFloating() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 left-3 z-[9999]">

      {/* Mobiilin kelluva nappi */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Yhteystietolaatikko */}
      <div
        className={`
          bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl px-4 py-3 
          flex flex-col space-y-3 transition-all duration-300

          /* Mobiilin avautuminen */
          ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}

          /* Desktopissa aina näkyvissä */
          md:opacity-100 md:pointer-events-auto md:translate-y-0 md:block
        `}
      >
        <a
          href="tel:+358400290582"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-700 transition"
        >
          <Phone className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-medium">+358 400 290 582</span>
        </a>

        <a
          href="tel:+358504945709"
          className="flex items-center space-x-2 text-gray-800 hover:text-green-700 transition"
        >
          <Phone className="w-5 h-5" strokeWidth={1.75} />
          <span className="font-medium">+358 50 494 5709</span>
        </a>

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
