'use client';

import Image from 'next/image';
import { BanknotesIcon } from "@heroicons/react/24/solid";

export default function PolttopuutPage() {
  return (
    <>
{/* Hero-wrapperi, joka määrittää sticky-elementin liikealueen */}
<div className="relative z-60 h-[300px] md:h-[500px]">

  {/* Taustakuva */}
  <Image
    src="/VesaKlapi.png"
    alt="Polttopuut"
    fill
    className="object-cover object-top"
    priority
  />

  {/* Gradientti */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent rounded-b-xl"></div>

  {/* Sticky-palkki, joka liikkuu scrollatessa ja pysähtyy hero-kuvan alareunaan */}
  <div className="sticky top-0">
    <div className="bg-black/50 backdrop-blur-sm w-full py-6 shadow-xl flex justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
        Myydään polttopuita
      </h1>
    </div>
  </div>

</div>


      {/* Tekstisisältö */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg space-y-6 text-center">
          <p className="text-lg leading-relaxed">
            Klapisäkki / Firewood sack (Birch)
          </p>

          <p className="text-lg leading-relaxed">
            Tilaukset ja lisätiedot: <strong>+358 400 290 582</strong>
          </p>
        </div>
      </section>

      {/* Maksutavat */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Maksutavat</h2>

        {/* Maksutapaboksi */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow mb-6">

          {/* MobilePay */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/logot/mob.svg"
              alt="MobilePay"
              width={70}
              height={70}
            />
            <span className="text-xl font-medium">MobilePay</span>
          </div>

          {/* Käteinen */}
          <div className="flex flex-col items-center gap-3">
            <BanknotesIcon className="w-14 h-14 text-green-600" />
            <span className="text-xl font-medium">Käteinen</span>
          </div>
        </div>

        {/* Laskutus */}
        <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow flex justify-center">
          <span className="text-xl font-medium">
            Isommat erät tarvittaessa laskutuksella
          </span>
        </div>
      </section>
    </>
  );
}
