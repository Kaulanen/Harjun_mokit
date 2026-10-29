"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

const images = [
  "/panoramaE.jpg",
  "/panorama1.JPG",
  "/sami1.jpeg",
]

const fadeDuration = 2000
const imageHoldDuration = 5000

export default function HeroPanorama() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    if (fade) return

    const holdTimeout = setTimeout(() => {
      setFade(true)
    }, imageHoldDuration)

    return () => clearTimeout(holdTimeout)
  }, [fade])

  return (
    <section className="relative h-[55vh] md:h-[65vh] lg:h-[70vh]">
      {images.map((src, imageIndex) => {
        const isCurrent = imageIndex === index
        const isIncoming = imageIndex === (index + 1) % images.length
        const isVisible = isCurrent || (fade && isIncoming)

        return (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={imageIndex === 0}
            style={{
              transitionDuration: `${fadeDuration}ms`,
              zIndex: fade && isIncoming ? 2 : isCurrent ? 1 : 0,
            }}
            onTransitionEnd={(event) => {
              if (!fade || !isIncoming || event.propertyName !== "opacity") return

              setIndex((current) => (current + 1) % images.length)
              setFade(false)
            }}
            className={`absolute inset-0 object-cover object-top transition-opacity ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        )
      })}

      <p
        className={`absolute bottom-3 right-3 z-20 rounded bg-black/5 px-2 py-1 font-normal text-xl italic text-white [font-family:var(--font-caveat)] transition-opacity ease-in-out ${
          (index === 2 && !fade) || (fade && (index + 1) % images.length === 2)
            ? "opacity-100"
            : "opacity-0"
        }`}
        style={{ transitionDuration: `${fadeDuration}ms` }}
      >
        Sami Mällinen
      </p>

      <div className="sticky top-50 z-20">
        <div className="w-full bg-black/50 py-4 text-center backdrop-blur-xs">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            HARJUN MÖKIT
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Ylläksen rauhallisessa ympäristössä
          </p>
          <div className="mt-3 space-y-1 text-base leading-tight text-gray-200 md:text-lg">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5 text-gray-200" strokeWidth={1.75} />
              <span>+358 400 290 582 / +358 50 494 5709</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-gray-200" strokeWidth={1.75} />
              <span>harjun.mokit@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
