import HeroPanorama from "@/components/HeroPanorama"
import TunnelmaKuvat from "@/components/TunnelmaKuvat"
import MokkiKuvaus from "@/components/MokkiKuvaus"
import SijaintiIkonit from "@/components/SijaintiIkonit"
import VideoSection from "@/components/VideoSection"
import AjankohtaistaFloating from "@/components/AjankohtaistaFloating"


export default function Home() {
  return (
    <div className="space-y-16">
      <HeroPanorama />  
      <MokkiKuvaus />
      {/* <VideoSection /> */}
      <SijaintiIkonit />
      <TunnelmaKuvat />

      <AjankohtaistaFloating />
    </div>
  )
}

