import {
  BedDouble,
  Refrigerator,
  Utensils,
  CookingPot,
  Tv,
  Wifi,
  Baby,
  Heater,
  Toilet,
  ShowerHead,
  WashingMachine,
  DoorClosed,
  Radio,
  Sofa,
} from "lucide-react"

export default function Varustus() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-8">Varustus mökeissä</h2>

      {/* Kaksi makuuhuonetta */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Kaksi makuuhuonetta</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <BedDouble className="w-5 h-5 text-green-700" />
            <span>Kaksi erillistä sänkyä / huone</span>
          </li>
          <li className="flex items-center space-x-3">
            <DoorClosed className="w-5 h-5 text-green-700" />
            <span>Runsaasti kaappitilaa</span>
          </li>
        </ul>
      </div>

      {/* Tupakeittiö */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Tupakeittiö</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <Utensils className="w-5 h-5 text-green-700" />
            <span>Astiasto kuudelle</span>
          </li>

          <li className="flex items-center space-x-3">
            <Refrigerator className="w-5 h-5 text-green-700" />
            <span>Jenkkijääkaappi (184 L + 44 L pakastin)</span>
          </li>

          <li className="flex items-center space-x-3">
            <CookingPot className="w-5 h-5 text-green-700" />
            <span>Sähköliesi 60 cm, astianpesukone, mikro, kahvin- ja vedenkeitin</span>
          </li>

          <li className="flex items-center space-x-3">
            <Radio className="w-5 h-5 text-green-700" />
            <span>CD-radiosoitin</span>
          </li>

          <li className="flex items-center space-x-3">
            <Tv className="w-5 h-5 text-green-700" />
            <span>Samsung Smart TV (valokuitu)</span>
          </li>

          <li className="flex items-center space-x-3">
            <Wifi className="w-5 h-5 text-green-700" />
            <span>Valokuitu / Wi-Fi</span>
          </li>

          <li className="flex items-center space-x-3">
            <Sofa className="w-5 h-5 text-green-700" />
            <span>Divaanisohvasta lisävuode kahdelle</span>
          </li>

          <li className="flex items-center space-x-3">
            <Baby className="w-5 h-5 text-green-700" />
            <span>Pinnasänky, syöttötuoli ja vanna pyydettäessä</span>
          </li>
        </ul>
      </div>

      {/* WC / Sauna */}
      <div>
        <h3 className="text-xl font-semibold mb-4">WC / Saunatilat</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <Heater className="w-5 h-5 text-green-700" />
            <span>Sähkökiuas</span>
          </li>

          <li className="flex items-center space-x-3">
            <ShowerHead className="w-5 h-5 text-green-700" />
            <span>Suihkuovet</span>
          </li>

          <li className="flex items-center space-x-3">
            <WashingMachine className="w-5 h-5 text-green-700" />
            <span>Pyykinpesukone</span>
          </li>

          <li className="flex items-center space-x-3">
            <Toilet className="w-5 h-5 text-green-700" />
            <span>WC ja pesuallas</span>
          </li>

          <li className="flex items-center space-x-3">
            <DoorClosed className="w-5 h-5 text-green-700" />
            <span>Kuivauskaappi eteisessä</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
