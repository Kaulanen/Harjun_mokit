"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function MokkiHistoria() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="max-w-3xl mx-auto text-center space-y-10">
      <h2 className="text-4xl font-bold">Historia</h2>

      {/* --- KAPPALE 1 --- */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Kuten useat äkäslompololaiset yritykset, myös Harjun Mökit on aloittanut
        toimintansa kotimajoituksesta...
      </p>

      {/* --- SAMULIN KUVA --- */}
      <div className="mx-auto flex justify-center">
        <a
          href="/samuli.jpg"
          onClick={(e) => {
            e.preventDefault();
            setLightboxImage("/samuli.jpg");
          }}
          className="group block"
        >
          <div className="relative mx-auto max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-lg 
          transition-transform duration-500 md:group-hover:scale-[1.8] cursor-pointer">
            <Image
              src="/samuli.jpg"
              alt="Samuli Palomaa"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 text-center text-gray-600">
            Samuli nuorena Kukaslompolossa
          </p>
        </a>
      </div>

      {/* --- KAPPALE 2 --- */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Kotimajoitusta jatkui aina vuoteen 1988...
      </p>

      {/* --- RAIJAN KUVA --- */}
      <div className="mx-auto flex justify-center">
        <a
          href="/raija.jpg"
          onClick={(e) => {
            e.preventDefault();
            setLightboxImage("/raija.jpg");
          }}
          className="group block"
        >
          <div className="relative mx-auto max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-lg 
          transition-transform duration-500 md:group-hover:scale-[1.8] cursor-pointer">
            <Image
              src="/raija.jpg"
              alt="Raija Palomaa"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 text-center text-gray-600">
            Raija (vasemmalla) lapsena siskojensa kanssa mäenlaskussa
          </p>
        </a>
      </div>

      {/* --- KAPPALE 4 --- */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Höylähirsiset 4–6 hengen mökit on alkujaan rakennettu vuonna 1988...
      </p>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <Lightbox
          open={true}
          close={() => setLightboxImage(null)}
          slides={[{ src: lightboxImage }]}
        />
      )}
    </section>
  );
}
