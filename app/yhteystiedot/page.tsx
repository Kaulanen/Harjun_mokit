"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Map from "@/components/Map"
import VideoSection from "@/components/VideoSection"

export default function YhteystiedotPage() {
  const [seasonImage, setSeasonImage] = useState("/harjukesa.jpg")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  // Valitse kuva vuodenajan mukaan
  useEffect(() => {
    const month = new Date().getMonth() + 1
    if (month >= 5 && month <= 10) {
      setSeasonImage("/harjukesa.jpg") // Touko–Lokakuu
    } else {
      setSeasonImage("/harjutalvi.jpg") // Marras–Huhtikuu
    }
  }, [])

  // Lomakkeen lähetys
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xdaagryk", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-0 py-0 space-y-10">

      {/* Hero-kuva */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">

        {/* Taustakuva */}
        <Image
            src={seasonImage}
            alt="Yhteystiedot hero"
            fill
            className="object-cover object-top"
            priority
        />

  {/* Alaspäin häivyttävä gradientti */}
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/10 [var(--background)]/20 to-[var(--background)]"></div>

  {/* Tekstit (jos haluat) */}
  <div className="absolute left-1/2 top-[21%] -translate-x-1/2">
    <h1 className="text-6xl md:text-6xl font-bold text-gray-600 drop-shadow-lg">
      Yhteystiedot
    </h1>
  </div>

</div>


      {/* Otsikko */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight"></h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ota yhteyttä ja kysy lisää majoituksesta, varauksista tai alueen harrastusmahdollisuuksista.
          Autamme mielellämme.
        </p>
      </section>

      {/* Yhteystietokortit */}
      <section className="grid md:grid-cols-3 gap-10">

        <div className="bg-white shadow-md rounded-xl p-8 text-center space-y-4">
          <Phone className="w-10 h-10 mx-auto text-gray-700" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold">Puhelin</h2>
          <p className="text-gray-700 leading-relaxed">
            Vesa +358 400 290 582 <br />
            Virpi +358 50 494 5709 (klo 16 jälkeen)
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center space-y-4">
          <Mail className="w-10 h-10 mx-auto text-gray-700" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold">Sähköposti</h2>
          <p className="text-gray-700 leading-relaxed">
            harjun.mokit@gmail.com
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center space-y-4">
          <MapPin className="w-10 h-10 mx-auto text-gray-700" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold">Osoite</h2>
          <p className="text-gray-700 leading-relaxed">
            Harjun Mökit <br />
            Heinolantie 5 <br />
            95970 Äkäslompolo <br />
            Finland
          </p>
        </div>

      </section>

      {/* Yhteydenottolomake */}
      <section className="bg-white shadow-lg rounded-xl p-10 space-y-8">
        <h2 className="text-2xl font-bold text-center">Lähetä viesti</h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">

          <div className="space-y-2">
            <label className="font-medium">Nimi *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Puhelin *</label>
            <input
              type="text"
              name="phone"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Sähköposti</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Viesti</label>
            <textarea
              name="message"
              rows={5}
              className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full"
          >
            <Send className="w-5 h-5" />
            Lähetä viesti
          </button>

          {/* Ilmoitukset */}
          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              Viesti lähetetty onnistuneesti!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center font-medium">
              Lähetys epäonnistui. Voit myös lähettää sähköpostia: harjun.mokit@gmail.com
            </p>
          )}

        </form>
      </section>

      {/* Kartta */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Sijainti</h2>

        <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <section className="space-y-6">
        

        <Map />
        </section>

        </div>
      </section>
        <div className="h-16">
          <VideoSection />
        </div>
    </main>
  )
}
