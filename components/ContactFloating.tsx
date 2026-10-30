"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"

export default function ContactFloating() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-20 right-3 z-[9999]">

      {/* Mobiilin kelluva nappi */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-green-600/40 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        aria-label={open ? "Sulje yhteystiedot" : "Näytä yhteystiedot"}
        aria-expanded={open}
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Yhteystietolaatikko */}
      <div
        className={`
          bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl px-4 py-3 
          flex flex-col space-y-3 transition-all duration-300

          /* Mobiilin liuku-animaatio */
          absolute right-0 bottom-full mb-3 max-w-[calc(100vw-1.5rem)]
          ${open ? "visible translate-y-0 opacity-100 pointer-events-auto" : "invisible translate-y-2 opacity-0 pointer-events-none"}

          /* Desktopissa aina näkyvissä */
          md:static md:visible md:translate-y-0 md:opacity-100 md:pointer-events-auto md:mb-0 md:max-w-none
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
          <span className="font-medium break-all">harjun.mokit@gmail.com</span>
        </a>
      </div>
    </div>
  )
}
