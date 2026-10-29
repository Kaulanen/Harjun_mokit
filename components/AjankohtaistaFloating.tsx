"use client"

import { useEffect, useState } from "react"
import { Info } from "lucide-react"

type Ilmoitus = {
  teksti: string
  voimassa: string
}

function parseCsv(csv: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ""
  let quoted = false

  for (let i = 0; i < csv.length; i++) {
    const character = csv[i]

    if (character === '"') {
      if (quoted && csv[i + 1] === '"') {
        field += '"'
        i++
      } else {
        quoted = !quoted
      }
    } else if (character === "," && !quoted) {
      row.push(field)
      field = ""
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && csv[i + 1] === "\n") i++
      row.push(field)
      if (row.some((cell) => cell.trim() !== "")) rows.push(row)
      row = []
      field = ""
    } else {
      field += character
    }
  }

  if (quoted) throw new Error("CSV sisältää päättämättömän lainausmerkin.")

  row.push(field)
  if (row.some((cell) => cell.trim() !== "")) rows.push(row)
  return rows
}

function localDateString(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export default function AjankohtaistaFloating() {
  const [ilmoitukset, setIlmoitukset] = useState<Ilmoitus[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function haeData() {
      try {
        // 🔥 Vaihda tähän oma Google Sheets CSV -osoitteesi
        const SHEETS_URL =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVBMLz4S8oddsBB8grF4PoPwWjIeveBvj3ebP70YCn47A_PDfEzjMwOOXUavN1Gl6UOUB5o7P14c0x/pub?output=csv"

        const res = await fetch(SHEETS_URL, { cache: "no-store" })
        if (!res.ok) {
          throw new Error(`Google Sheets palautti HTTP-virheen ${res.status}.`)
        }

        const csv = (await res.text()).replace(/^\uFEFF/, "")
        const rows = parseCsv(csv)
        const headers = rows[0]?.map((header) => header.trim().toLowerCase())
        const textIndex = headers?.indexOf("teksti") ?? -1
        const expiryIndex = headers?.indexOf("voimassa") ?? -1

        if (textIndex === -1 || expiryIndex === -1) {
          throw new Error("CSV-taulukosta puuttuu teksti- tai voimassa-sarake.")
        }

        const today = localDateString(new Date())
        const voimassaOlevat = rows.slice(1).flatMap((row) => {
          const teksti = row[textIndex]?.trim()
          const voimassa = row[expiryIndex]?.trim()

          if (!teksti || !voimassa || !/^\d{4}-\d{2}-\d{2}$/.test(voimassa)) {
            return []
          }

          const [year, month, day] = voimassa.split("-").map(Number)
          const date = new Date(year, month - 1, day)
          const validDate =
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day

          if (!validDate || voimassa < today) return []

          return {
            teksti,
            voimassa,
          }
        })

        setIlmoitukset(voimassaOlevat)
      } catch (err) {
        console.error("Google Sheets -haku epäonnistui:", err)
      }
    }

    haeData()
  }, [])

  // Ei ilmoituksia → ei nappia
  if (ilmoitukset.length === 0) return null

  return (
    <div
      className="fixed bottom-60 right-3 z-50 group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      {/* Kelluva nappi */}
      <div className="flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-3 text-white shadow-lg transition hover:bg-yellow-600">
  <Info className="h-5 w-5 shrink-0" />
  <span className="text-sm font-medium">Ajankohtaista</span>
</div>

      {/* Ilmoituslaatikko */}
      <div
        className={`
          bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg absolute fixed bottom-80 right-2 z-[9999] w-62 rounded-lg p-4
          transition-all duration-200
          ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}
        `}
      >
        <h3 className="font-semibold text-lg mb-2">Ajankohtaista</h3>

        <div className="space-y-2">
          {ilmoitukset.map((i, idx) => (
            <p key={idx} className="text-sm text-gray-800">
              • {i.teksti}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
