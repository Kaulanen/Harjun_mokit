"use client"

import HarrastusKortti from "@/components/HarrastusKortti"

export default function HarrastusmahdollisuudetPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20 space-y-24">

      {/* Hero */}
      <section className="text-center space-y-6 max-w-6xl mx-auto">
        <h1 className="break-words text-3xl font-bold sm:text-4xl">Harrastusmahdollisuudet</h1>
        <p className="text-lg text-gray-700">
          Ylläksen alue tarjoaa ympäri vuoden monipuolisia harrastusmahdollisuuksia aivan mökkien vieressä.
          Talvella hiihto, lumikenkäily ja laskettelu, kesällä pyöräily, melonta ja vaellus. Lajikokeiluja voi tehdä matalalla kynnyksellä mutta pelkkä rauhoittuminenkin hiljaisuudessa luonnon keskellä on elämys itsessään.
        </p>
      </section>

      {/* Hiihto */}
      <HarrastusKortti
        title="Hiihto"
        text="Valaistut ladut lähtevät vain 50 metrin päästä mökeiltä. Ylläksen laaja latuverkosto tarjoaa reittejä niin aloittelijoille kuin kokeneille hiihtäjille. Lenkiltä on helppo palata suoraan mökin lämpimään saunaan."
        image="/hiihto1.jpg"
        images={[
          "/hiihto2.jpg"
        ]}
      />

      {/* Laskettelu */}
      <HarrastusKortti
        title="Laskettelu"
        text="Ylläksen laskettelurinteille on matkaa vain 6 kilometriä. Ski-bussi kulkee sujuvasti, ja 63 rinnettä tarjoavat vaihtoehtoja kaikentasoisille laskijoille."
        image="/laskettelu.jpg"
        images={[
          "/laskettelu2.jpg"
        ]}
        reverse
      />

      {/* Lumikenkäily */}
      <HarrastusKortti
        title="Lumikenkäily"
        text="Lumikenkäily on helppo ja rauhallinen tapa nauttia Ylläksen talvisesta luonnosta. Reittejä löytyy mökkien läheltä, ja maisemat ovat henkeäsalpaavat."
        image="/lumikenka.jpg"
        imagePositions={["object-[center_60%]"]}
      />

      {/* Pyöräily */}
      <HarrastusKortti
        title="Pyöräily"
        text="Ylläs on tunnettu erinomaisista maastopyöräilyreiteistään. Talvella huolletut fatbike-reitit ja kesällä monipuoliset MTB-polut tarjoavat elämyksiä ympäri vuoden."
        image="/pyöräily.jpg"
        images={[
          "/pyöräily2.jpg",
          "/MTB1.jpg",
          "/MTB2.jpg"
        ]}
        reverse
      />

      {/* Kanootti */}
      <HarrastusKortti
        title="Kanoottien vuokraus"
        text="Kesäkaudella kylän yritykset vuokraavat kanootteja, joilla pääsee tutustumaan lähijärvien ja jokien rauhallisiin maisemiin. Erinomainen tapa viettää lämmin kesäpäivä."
        image="/melonta1.jpg"
        images={[
          "/melonta2.jpg",
          "/subl.jpg"
        ]}
      />

      {/* Ruska */}
      <HarrastusKortti
        title="Ruska ja kesä"
        text="Ylläs on yksi Suomen suosituimmista ruska-kohteista. Nauti vaellusreiteistä, pyöräilystä ja valokuvauksesta luonnon väriloistossa."
        image="/kesa4.jpg"
        images={[
          "/pyorakesa.jpg",
          "/kesa.jpg",
          "/kesa2.jpg",
          "/kesa3.jpg",
          "/kesa5.jpg"
        ]}
        reverse
      />
      {/* Frisbeegolf */}
      <HarrastusKortti
        title="Frisbeegolf"
        text="Frisbeegolf on hauskaa ja tavoitteellista ajanvietettä ulkona liikkuen ja se sopii myös aktiviteetiksi perheille loistavasti. 18-väyläiselle radalle on matkaa n. 3,5 km ja sitä kannattaa todella kokeilla, se on nimittäin yksi Suomen parhaista!"
        image="/FG.jpg"
        imageFits={["cover"]} // vain ensimmäinen kuva 
        imagePositions={["object-[center_60%]"]} // vain ensimmäinen kuva

      />

    </main>
  )
}
