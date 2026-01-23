"use client"

import { Calendar, BedDouble, CheckCircle, PawPrint } from "lucide-react"

type Props = {
  onOpen: (data: { title: string; body: React.ReactNode }) => void
}

export default function VuokrausIkonit({ onOpen }: Props) {
  const items = [
    {
      icon: Calendar,
      label: "Kevätaikaan viikkovuokraus (la–la)",
      modal: null,
    },
    {
      icon: BedDouble,
      label: "Muina aikoina myös lyhyemmät varaukset mahdollisia",
      modal: null,
    },
    {
      icon: CheckCircle,
      label: "Hintaan sisältyy liinavaatteet, pyyhkeet ja loppusiivous",
      modal: null,
    },
    {
      icon: PawPrint,
      label: "Lemmikit sallittu erikseen sovittaessa",
      modal: {
        title: "Lemmikit sallittu",
        body: (
          <>
            <p>Lemmikit ovat tervetulleita ennakkosopimuksella. Lemmikeistä peritään siivousmaksu</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>1. lemmikki: 30 € / vrk tai 75 € / viikko</li>
              <li>2. lemmikki: 50 €</li>
              <li>3. lemmikki: 25 €</li>
            </ul>
          </>
        ),
      },
    },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Vuokraus</h2>

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
