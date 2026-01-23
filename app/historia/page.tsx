import Image from "next/image";
import MokkiHistoria from "@/components/MokkiHistoria";

export default function HistoriaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">


      {/* Tekstit komponentista */}
      <MokkiHistoria />

      {/* Kuvat: Raija ja Samuli */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        
        {/* Raija */}
        <div className="text-center space-y-4">
          <div className="w-64 h-64 mx-auto relative rounded-full overflow-hidden shadow-lg 
          transition-transform duration-500 hover:scale-[1.6] cursor-pointer">
            <Image
              src="/raija1.jpg"
              alt="Raija Palomaa"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold">Raija</h3>
          <p className="text-gray-600"></p>
        </div>

        {/* Samuli */}
        <div className="text-center space-y-8">
          <div className="w-64 h-64 mx-auto relative rounded-full overflow-hidden shadow-lg
          transition-transform duration-500 hover:scale-[1.6] cursor-pointer ">
            <Image
              src="/samuli1.jpg"
              alt="Samuli Palomaa"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold">Samuli</h3>
          <p className="text-gray-600"></p>
        </div>

      </section>

            {/* --- KAPPALE 3 --- */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Harjun Mökit on siis paikallinen perheyritys, jolla on kolme erillistä
        mökkiä Äkäslompolossa. Nyt toimintaa jatkaa Samulin ja Raijan tytär
        Virpi yhdessä miehensä Vesan kanssa. Sukupolvenvaihdos tehtiin
        vuodenvaihteessa 2010, jolloin Samuli jäi eläkkeelle.
      </p>

              {/* perhe */}
        <div className="text-center space-y-4">
          <div className="min-h-150 mx-auto relative rounded-xs overflow-hidden shadow-lg
          transition-transform duration-500 hover:scale-[1.1] cursor-pointer ">
            <Image
              src="/PantsarPieni.jpg"
              alt="Pantsarit"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold">Pantsarit</h3>
          <p className="text-gray-600"></p>
        </div>
    </main>
  );
}
