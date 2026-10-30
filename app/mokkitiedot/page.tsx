"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"

import SijaintiIkonit from "@/components/SijaintiIkonit"
import VarusteluIkonit from "@/components/Varustus"
import VuokrausIkonit from "@/components/VuokrausIkonit"
import LisapalvelutIkonit from "@/components/LisapalvelutIkonit"
import Modal from "@/components/Modal"
import AjankohtaistaFloating from "@/components/AjankohtaistaFloating"

const images = [
  "/joulu1.jpg",
  "/tupa_ja_TV.jpg",
  "/tupa_ovelta.jpg",  
  "/keittio2.jpg",
  "/makuuhuone1.jpg",
  "/makuuhuone_o.jpg",
  "/makuuhuone.jpg",
  "/sauna.jpg",
  "/wc.jpg",
  "/pohja.jpg",
  "/uimaranta.jpg",
]

export default function MokkitiedotPage() {
  // Lightbox
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openGallery = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  // Modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState<{
    title: string
    body: React.ReactNode
  }>({ title: "", body: null })

  const openModal = (data: { title: string; body: React.ReactNode }) => {
    setModalData(data)
    setModalOpen(true)
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">

      {/* Hero-otsikko */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Mökkien tiedot</h1> 
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Kolme samanlaista, hyvin varusteltua höylähirsimökkiä Ylläksen rauhallisessa ympäristössä.
          Sopii perheille, pariskunnille ja etätyöhön. Viikkohinta vko 3–4 alkaen 770 € / 2 hlö / mökki.
          Hinnat sisältävät majoituksen, liinavaatteet, pyyhkeet ja loppusiivouksen.
        </p>
      </section>

      {/* Airbnb-tyylinen kuvarytmi */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* Iso kuva vasemmalla */}
        <div className="md:col-span-2 relative">
          <Image
            src={images[0]}
            alt="Mökki ulkoa"
            width={1200}
            height={800}
            className="rounded-xl object-cover w-full h-[45vh] md:h-[60vh] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* Neljä pientä kuvaa oikealla */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          {images.slice(1, 5).map((src, i) => (
            <div key={src} className="relative group">
              <Image
                src={src}
                alt="Mökkikuva"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-40 md:h-[29vh] cursor-pointer transition-transform duration-300 group-hover:scale-[1.05]"
                onClick={() => openGallery(i + 1)}
              />

              {/* Hover-overlay */}
              <div className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/10 transition pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox-galleria */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
      />
      {/* Sijainti */}
      <SijaintiIkonit />

      {/* Varustelu */}
      <VarusteluIkonit />

      <AjankohtaistaFloating />

      {/* Täysleveä tausta: Vuokraus + Lisäpalvelut */}
      <section className="-mx-4 bg-white/40 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">

          <VuokrausIkonit onOpen={openModal} />
          <LisapalvelutIkonit onOpen={openModal} />

        </div>
      </section>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
      >
        {modalData.body}
      </Modal>

    </main>
  )
}
