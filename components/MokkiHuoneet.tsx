"use client"

import { Bed, DoorOpen, Bath, Sofa, Flame } from "lucide-react"

export default function MokkiHuoneet() {
  return (
    <div className="flex items-center gap-10 text-gray-700 mt-4">

      {/* Makuuhuoneet */}
      <div className="flex items-center gap-2">
        <Bed className="w-6 h-6" />
        <span>2 makuuhuonetta (2× yhden hengen sänky)</span>
      </div>

      {/* Olohuone / sohvasänky */}
      <div className="flex items-center gap-2">
        <Sofa className="w-6 h-6" />
        <span>Olohuone (2 hengen sohvasänky)</span>
      </div>

      {/* Pirtti */}
      <div className="flex items-center gap-2">
        <Flame className="w-6 h-6" />
        <span>Pirtti</span>
      </div>

      {/* Eteinen */}
      <div className="flex items-center gap-2">
        <DoorOpen className="w-6 h-6" />
        <span>Eteinen</span>
      </div>

      {/* Kylpyhuone */}
      <div className="flex items-center gap-2">
        <Bath className="w-6 h-6" />
        <span>Kylpyhuone</span>
      </div>

      {/* Sauna */}
      <div className="flex items-center gap-2">
        <Flame className="w-6 h-6" />
        <span>Sauna</span>
      </div>

    </div>
  )
}
