"use client"

import { useState } from "react"
import Image from "next/image"

type Props = {
  images: string[]
  imageFits?: ("cover" | "contain" | string)[]
  imagePositions?: string[]
}

export default function AccordionGallery({ images, 
  imageFits = [], 
  imagePositions = [],

 }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex w-full max-w-[750px] h-64 md:h-96 rounded-2xl overflow-hidden gap-2">
      {images.map((src, i) => {
        const isActive = i === active

        const fit = imageFits[i] ?? "cover"
        const pos = imagePositions[i] ?? "object-center"


        return (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`
              relative cursor-pointer transition-all duration-500 ease-in-out
              ${isActive ? "flex-[6]" : "flex-[1]"}
            `}
          >
            <Image
              src={src}
              alt=""
              fill
              className={`
                object-${fit}
                ${pos}
                transition-transform duration-700 `}
            />

            {/* Hover overlay */}
            <div
              className={`
                absolute inset-0 bg-black/40 transition-opacity
                ${isActive ? "opacity-0" : "opacity-0 hover:opacity-100"}
              `}
            />
          </div>
        )
      })}
    </div>
  )
}
