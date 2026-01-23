"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function Map() {
  return (
    <MapContainer
      center={[67.6165064, 24.154899]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-[350px] md:h-[450px] w-full rounded-xl shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[67.6165064, 24.154899]} icon={markerIcon}>
        <Popup>Heinolantie 5, Äkäslompolo</Popup>
      </Marker>
    </MapContainer>
  )
}
