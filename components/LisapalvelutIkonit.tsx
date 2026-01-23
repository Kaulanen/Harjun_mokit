"use client"

import { Flame, Wrench, PawPrint } from "lucide-react"

type Props = {
  onOpen: (data: { title: string; body: React.ReactNode }) => void
}

export default function LisapalvelutIkonit({ onOpen }: Props) {
  const items = [
    {
      icon: Flame,
      label: "Polttopuut: koivuklapi (25 cm, 30 cm, 60 L)",
      modal: {
        title: "Polttopuut",
        body: (
          <>
            <p>Myytävänä kuivaa koivuklapia heittokuutioittain.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>25 cm ja 30 cm pituudet</li>
              <li>60 L säkki: 15 €</li>
              <li>Tiedustelut: 0400 290 582</li>
            </ul>
          </>
        ),
      },
    },
    {
      icon: Wrench,
      label: "Suksihuoltotila (voitelutelineet, rauta, harjat)",
      modal: {
        title: "Suksihuoltotila",
        body: (
          <>
            <p>Lämmin suksienhuoltotila osäntäväen omakotitalon päädyssä 
              käytettävissä klo 07–21.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Voitelutelineet</li>
              <li>Voitelurauta</li>
              <li>Kuumailmapuhallin</li>
              <li>Akkuporakone + suksiharjat</li>
              <li>Tiedustelut: 0400 290 582</li>
            </ul>
          </>
        ),
      },
    },
    {
      icon: PawPrint,
      label: "Lemmikit sallittu erikseen sovittaessa",
      modal: null, // tämä on jo vuokraus-osiossa
    },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Lisäpalvelut</h2>

      <div className="space-y-4 font-semibold text-lg">
        {items.map((i) => {
          const isActive = Boolean(i.modal)

          return (
            <div
              key={i.label}
              onClick={() => isActive && onOpen(i.modal!)}
              className={
                "flex items-center space-x-3 transition " +
                (isActive
                  ? "cursor-pointer group"
                  : "cursor-default opacity-99")
              }
            >
              <i.icon
                className={
                  "w-6 h-6 transition " +
                  (isActive ? "text-gray-800 group-hover:text-green-600" : "text-gray-600")
                }
                strokeWidth={1.75}
              />
              <span
                className={
                  "transition " +
                  (isActive ? "text-gray-800 group-hover:text-green-600" : "text-gray-600")
                }
              >
                {i.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
