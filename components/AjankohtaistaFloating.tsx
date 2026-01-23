"use client"

import { useEffect, useState } from "react"
import { Info } from "lucide-react"

type Ilmoitus = {
  teksti: string
  voimassa: string
}

export default function AjankohtaistaFloating() {
  const [ilmoitukset, setIlmoitukset] = useState<Ilmoitus[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function haeData() {
      try {
        const res = await fetch("/data/ajankohtaista.json", {
          cache: "no-store"
        })
        const data = await res.json()

        const nyt = new Date()

        const voimassaOlevat = data.ilmoitukset.filter((i: Ilmoitus) => {
          const viimeinenPaiva = new Date(i.voimassa)
          return viimeinenPaiva >= nyt
        })

        setIlmoitukset(voimassaOlevat)
      } catch (err) {
        console.error("Ajankohtaista-tiedoston lataus epäonnistui:", err)
      }
    }

    haeData()
  }, [])

  if (ilmoitukset.length === 0) return null

  return (
    <div 
      className="fixed bottom-60 right-6 z-50 group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)} // mobiilia varten
    >
      {/* Kelluva nappi */}
      <div className="bg-yellow/20 backdrop-blur-md text-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition">
        <Info className="w-6 h-6" />
      </div>

      {/* Hoverilla avautuva laatikko */}
      <div
        className={`
          bg-white/40 backdrop-blur-md border border-gray-200 shadow-lg absolute fixed bottom-80 right-2 z-[9999] w-62 rounded-lg p-4
          transition-all duration-200 
          ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}
        `}
      >
        <h3 className="font-semibold text-lg mb-2">Ajankohtaista</h3>

        <div className="space-y-2">
          {ilmoitukset.map((i, idx) => (
            <p key={idx} className="text-sm text-gray-800">
              • {i.teksti}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
