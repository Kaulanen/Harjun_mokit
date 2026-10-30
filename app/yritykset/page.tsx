import Image from "next/image";

export default function YrityksetPage() {
    const yritykset = [
        {
            nimi: "Pallas-Yllästunturin kansallispuisto",
            kuvaus: "Pallas-Yllästunturin kansallispuisto",
            linkki: "https://www.luontoon.fi/fi/kohteet/pallas-yllastunturin-kansallispuisto",
            logo: "/logot/p_y.webp",
        },
        {
            nimi: "Ylläksen alueen palvelut",
            kuvaus: "Tutustu tästä linkistä Ylläksen alueen palveluihin.",
            linkki: "http://www.yllas.fi",
            logo: "/logot/yllas_.svg",
        },
                {
            nimi: "Ylläs Ski Bus",
            kuvaus: "Ski bus Ylläkselle",
            linkki: "https://yllas.fi/skibus/",
            logo: "/logot/yllas_.svg",
        },
        {
            nimi: "Jouninkauppa ja kauppakeskus",
            kuvaus: "K-Market ja Kauppakeskus",
            linkki: "https://jouninkauppa.com/",
            logo: "/logot/JouninKauppa.webp",
        },
        {
            nimi: "Apteekki",
            kuvaus: "Äkäslompolon apteekki",
            linkki: "https://www.kolarinapteekki.fi/",
            logo: "/logot/apteekki.webp",
        },
                {
            nimi: "Kahvila Karilan Navettagalleria",
            kuvaus: "Kahvila ja galleria vanhassa navetassa",
            linkki: "https://karilantila.fi/",
            logo: "/logot/navetta.png",
        },
        {
            nimi: "Tunturilapin Hinauspalvelu",
            kuvaus: "Hinaus ja käynnistysapu 24 / 7",
            linkki: "https://tunturilapinhinaus.fi/",
            logo: "/logot/TLH-logo.png",
        },
        {
            nimi: "Poro Puolitaival",
            kuvaus: "Poroelämyksiä Ylläksellä",
            linkki: "https://poropuolitaival.fi/",
            logo: "/logot/Puolitaival_sh.png",
            tausta: "bg-black"
        },
        {
            nimi: "Ravintola - YlläsHumina",
            kuvaus: "Ravintola Humina - Noutopöytä - Teemapäivät  - Menu - Viinit",
            linkki: "https://www.yllashumina.com/ravintola.html",
            logo: "/logot/YH-logo.png",
            tausta: "bg-[#2e274e]"
        },
                {
            nimi: "Ravintola Seitapirtti",
            kuvaus: "Aitoa ja meillä tehtyä ruokaa",
            linkki: "https://seitahotelli.fi/palvelut/#palvelut-ravintola",
            logo: "/logot/seita.png",
            tausta: "bg-[#7a2224]"
        },
        {
            nimi: "Ylläksen taksit",
            kuvaus: "Taksi Ylläksellä ja muualla Kolarissa – Ympärivuorokautinen palvelu",
            linkki: "https://www.yllaksentaksit.fi/",
            logo: "/logot/taksit.webp",
        },
                {
            nimi: "Äkäslompolon suvut",
            kuvaus: "Kuvia ja tarinoita Äkäslompolon suvuilta",
            linkki: "https://www.xn--kslompolo-u2ab.fi/etusivu.html",
            logo: "/logot/akaslompolo.jpg",
        },

    ];

    return (
        <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
            <h1 className="text-4xl font-bold text-center">Paikalliset yritykset</h1>

            <p className="text-lg text-gray-700 text-center">
                äkäslompololaiset yritykset ja yhteistyökumppanit
            </p>

            <div className="space-y-6">
            {yritykset.map((y, i) => (
                <a
                key={i}
                href={y.linkki}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 rounded-lg border border-gray-300 p-4 text-center shadow-sm transition-shadow duration-300 hover:bg-gray-50 hover:shadow-md sm:flex-row sm:gap-6 sm:p-6 sm:text-left"
                >
                {/* Logo */}
                {y.logo && (
                <div
                    className={
                        `relative h-30 w-30 flex-shrink-0 py-3 rounded-lg overflow-hidden
                        group-hover:shadow-lg transition-shadow duration-300 hover:bg-gray-300 hover:scale-105 
                        ${y.tausta ?? "bg-gray-100"}
                        `}
                    >
                    <Image
                        src={y.logo}
                        alt={`${y.nimi} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    </div>

                )}

                {/* Tekstit */}
                <div>
                    <h2 className="text-xl font-semibold sm:text-2xl">{y.nimi}</h2>
                    <p className="mt-1 break-words text-gray-600">{y.kuvaus}</p>
                </div>
                </a>
            ))}
            </div>

        </main>
    );
}