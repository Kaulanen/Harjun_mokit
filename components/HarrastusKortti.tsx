"use client"

import AccordionGallery from "@/components/AccordionGallery"

type Props = {
  title: string
  text: string
  image: string
  images?: string[]
  reverse?: boolean
  imageFits?: ("cover" | "contain")[]
  imagePositions?: ("top" | "center" | "bottom" | string )[]
}

export default function HarrastusKortti({ 
  title, 
  text, 
  image, 
  images = [], 
  reverse, 
  imageFits = [], 
  imagePositions = [] 
}: Props) {
  const allImages = [image, ...images]

  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-10 py-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Accordion-kuvagalleria */}
      <div className="w-full flex justify-center">
        <AccordionGallery 
        images={allImages}
        imageFits={imageFits}
        imagePositions={imagePositions} />
      </div>

      {/* Teksti */}
      <div className="space-y-8 max-w-sm">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
      </div>
    </section>
  )
}
