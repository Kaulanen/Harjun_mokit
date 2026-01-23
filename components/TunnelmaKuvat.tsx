import Image from "next/image"

export default function TunnelmaKuvat() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/mokki1-1.jpg" 
          alt="Mökki 2"
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/poro1.JPG"
          alt="Poro"
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/mokki1-2.jpg"
          alt="Mökki 1"
          fill
          className="object-cover hover:scale-105 transition duration-500"
        />
      </div>

    </div>
  )
}
