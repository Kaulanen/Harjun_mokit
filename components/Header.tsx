"use client"

import Link from "next/link"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Flame } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Etusivu", href: "/" },
    { label: "Mökkien tiedot", href: "/mokkitiedot" },
    { label: "Harrastusmahdollisuudet", href: "/harrastusmahdollisuudet" },
    { label: "Historia", href: "/historia" },
    { label: "Linkkejä", href: "/yritykset" },
    { label: "Yhteystiedot", href: "/yhteystiedot" },
    { label: "Myydään polttopuita", href: "/polttopuut", special: true},

  ]

  return (
    <header className="top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-shrink-0">
          <img
            src="/harjutalvi.jpg"
            alt="Harjun Mökit logo"
            className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md"
          />
          <Link 
            href="/" 
            className="text-sm sm:text-xl font-bold tracking-tight whitespace-nowrap"
          >
            Harjun mökit
          </Link>
        </div>



        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.special
                  ? "hover-flame group px-3 py-1 rounded-lg bg-black/40 text-white hover:bg-black/60 transition font-medium flex items-center space-x-2"
                  : pathname === item.href
                    ? "text-green-800 font-semibold border-b-2 border-green-800 pb-1"
                    : "text-gray-700 hover:text-green-700 transition"
              }
            >
              <span>{item.label}</span>

              {item.special && (
                <Flame
                  className="flame-icon w-4 h-4 transition-all duration-300 opacity-80 group-hover:text-orange-400"
                  strokeWidth={2}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-navigation" className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-green-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
