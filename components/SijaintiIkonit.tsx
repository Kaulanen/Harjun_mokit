import { MapPin, Route, Waves, ShoppingCart, Mountain, Trees, Bus, UtensilsCrossed } from "lucide-react"

export default function SijaintiIkonit() {
  
  const items = [
    { icon: MapPin, label: "Rauhallinen sijainti Äkäslompolossa" },
    { icon: Route, label: "Valaistu latu ja kansallispuisto lähellä" },
    { icon: Waves, label: "Uimaranta 800 m" },
    { icon: ShoppingCart, label: "Kaupat 2,3 km" },
    { icon: Bus, label: "Bussipysäkki 300 m" },
    { icon: Mountain, label: "Rinteisiin 6 km" },
    { icon: UtensilsCrossed, label: "Ravintola 300 m" },
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 text-center py-6">
      <h2 className="text-3xl font-semibold">Sijainti ja etäisyydet</h2>
      <div className="grid-cols-1 sm:grid-cols-3 gap-6 mt-6 justify-items-center grid">
        {items.map((i) => (
          <div key={i.label} className="flex items-center space-x-3 mt-6">
            <i.icon className="w-6 h-6 text-gray-800" strokeWidth={1.75} />
            <span className="text-gray-800">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
