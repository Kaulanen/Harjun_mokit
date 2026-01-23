"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

const images = [
  "/panoramaE.jpg",
  "/panorama1.JPG",
  "/sami1.jpeg",
]

export default function HeroPanorama() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length)
        setFade(false)
      }, 3000) // fade duration
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[55vh] md:h-[65vh] lg:h-[70vh]">

  {/* Taustakuvat */}
  <Image
    key={`bg-${index}`}
    src={images[index]}
    alt=""
    fill
    priority
    className="object-cover object-top"
  />

  <Image
    key={`fade-${index}`}
    src={images[(index + 1) % images.length]}
    alt=""
    fill
    priority
    className={`
      object-cover object-top absolute inset-0 z-10
      transition-opacity duration-3000 ease-in-out
      ${fade ? "opacity-100" : "opacity-0"}
    `}
  />

  {/* Sticky-palkki — HUOM: ei absolute-parentin sisällä */}
  <div className="sticky top-50 z-20">
    <div className="bg-black/50 backdrop-blur-xs w-full py-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        HARJUN MÖKIT
      </h1>
      <p className="text-lg md:text-xl text-gray-200">
        Ylläksen rauhallisessa ympäristössä
      </p>
      <div className="mt-3 space-y-1 text-gray-200 text-base md:text-lg leading-tight">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-gray-200" strokeWidth={1.75} />
              <span>+358 400 290 582 / +358 50 494 5709</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-gray-200" strokeWidth={1.75} />
              <span>harjun.mokit@gmail.com</span>
            </div>
          </div>
    </div>
  </div>

</section>

  )
}