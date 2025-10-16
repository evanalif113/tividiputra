"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Tividi Pariwisata logo" width={160} height={56} priority />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            Beranda
          </a>
          <a href="#tentang" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted">
            Tentang
          </a>
          <a href="#lokasi" className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted">
            Fasilitas & Lokasi
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md px-2 py-2 hover:bg-muted"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <div id="mobile-menu" className={`md:hidden border-t ${open ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            Beranda
          </a>
          <a href="#tentang" className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted">
            Tentang
          </a>
          <a href="#lokasi" className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted">
            Fasilitas & Lokasi
          </a>
        </div>
      </div>
    </header>
  )
}
