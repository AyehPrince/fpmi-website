"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transparent = isHome && !scrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent ? "bg-transparent py-5" : "bg-white shadow-md py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img src="/logo.png" alt="FPMI Logo" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <p className={`font-bold text-sm leading-tight transition-colors ${transparent ? "text-white" : "text-[#0a0f5c]"}`}>
              Flash Prime
            </p>
            <p className={`text-xs leading-tight transition-colors ${transparent ? "text-white/70" : "text-gray-500"}`}>
              Media Institute
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#f5c518] ${
                transparent ? "text-white" : "text-[#0a0f5c]"
              } ${pathname === link.href ? "text-[#f5c518]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
              href="https://flashprime-saas.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
    transparent
      ? "border-white text-white hover:bg-white hover:text-[#0a0f5c]"
      : "border-[#0a0f5c] text-[#0a0f5c] hover:bg-[#0a0f5c] hover:text-white"
  }`}
>
  Student Portal
          </Link>
          <Link
            href="/apply"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#f5c518] text-[#0a0f5c] hover:bg-yellow-400 transition-colors"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors ${transparent ? "text-white" : "text-[#0a0f5c]"}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium hover:text-[#f5c518] transition-colors py-2 ${
                pathname === link.href ? "text-[#f5c518]" : "text-[#0a0f5c]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="https://flashprime-saas.vercel.app/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium px-4 py-2.5 rounded-lg border border-[#0a0f5c] text-[#0a0f5c] text-center"
            >
              Student Portal
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#f5c518] text-[#0a0f5c] text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}