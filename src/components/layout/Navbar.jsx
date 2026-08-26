"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/programs" },
  { label: "International", href: "/international" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

const SOCIAL = [
  {
    href: "https://www.facebook.com/Flashmediainstitute",
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/flashmediainstitute",
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@flashprimemediainstitute5617",
    label: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    href: "https://wa.me/233577522323",
    label: "WhatsApp",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.543 4.073 1.494 5.789L.058 23.054a.75.75 0 0 0 .916.919l5.375-1.41A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.668-.523-5.186-1.432l-.372-.223-3.849 1.01 1.03-3.748-.244-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // The see-through-hero treatment is a desktop-only flourish, and only ever
  // applies on the home page before scrolling.
  const transparent = isHome && !scrolled

  // Mobile (below lg) is ALWAYS a solid, opaque white bar, regardless of route
  // or scroll position — no transitions on its background or text color at all.
  const navClasses = transparent
    ? "bg-white shadow-md py-3 lg:bg-transparent lg:shadow-none lg:py-5"
    : "bg-white shadow-md py-3 lg:bg-white/95 lg:backdrop-blur-md"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img src="/logo.png" alt="FPMI Logo" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <p className={`font-bold text-sm leading-tight transition-colors ${transparent ? "text-[#1b3a4f] lg:text-white" : "text-[#1b3a4f]"}`}>
              Flash Prime
            </p>
            <p className={`text-xs leading-tight transition-colors ${transparent ? "text-gray-500 lg:text-white/70" : "text-gray-500"}`}>
              Media Institute
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#f5c518] relative ${
                transparent ? "text-white" : "text-[#1b3a4f]"
              } ${pathname === link.href ? "text-[#f5c518]" : ""}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#f5c518] transition-all duration-300 ${
                pathname === link.href ? "w-full" : "w-0"
              }`} />
            </Link>
          ))}
        </div>

        {/* Desktop right — social + buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Social icons */}
          <div className="flex items-center gap-1 mr-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  transparent
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-[#1b3a4f]/50 hover:text-[#1b3a4f] hover:bg-gray-100"
                }`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <Link
            href="https://admin.flashmediainstitute.com/student-login"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
              transparent
                ? "border-white text-white hover:bg-white hover:text-[#1b3a4f]"
                : "border-[#1b3a4f] text-[#1b3a4f] hover:bg-[#1b3a4f] hover:text-white"
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

        {/* Mobile burger — always navy-on-white, never conditional on transparent/scrolled */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex-shrink-0 p-2 rounded-lg text-[#1b3a4f] hover:bg-gray-100 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium hover:text-[#f5c518] transition-colors py-2.5 border-b border-gray-50 ${
                pathname === link.href ? "text-[#f5c518]" : "text-[#1b3a4f]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Social icons in mobile menu */}
          <div className="flex items-center gap-3 py-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-[#1b3a4f]/60 hover:text-[#1b3a4f] hover:border-[#1b3a4f] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <Link
              href="https://admin.flashmediainstitute.com/student-login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium px-4 py-2.5 rounded-lg border border-[#1b3a4f] text-[#1b3a4f] text-center"
            >
              Student Portal
            </Link>
            <Link
              href="/apply"
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