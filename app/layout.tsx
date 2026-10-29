import "./globals.css"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Header from "@/components/Header"
import ContactFloating from "@/components/ContactFloating"
import Footer from "@/components/Footer"
import { Caveat } from "next/font/google"

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
})

export const metadata = {
  title: "Harjun Mökit",
  description: "Kolme viihtyisää mökkiä Ylläksen rauhassa",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={`${caveat.variable} bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}>
        
        <Header />

        {/* Sivun sisältö kasvaa ja työntää footerin alas */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer aina alareunassa */}
        <Footer />

        {/* Leijuva yhteystietolaatikko footerin päällä */}
        <ContactFloating />

      </body>
    </html>
  )
}
