"use client"
import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

const programs = [
  "Broadcast Journalism",
  "Radio & TV Presenting",
  "Camera Handling",
  "Graphic Design",
  "Film & Video Editing",
  "Fashion Design",
  "Cosmetology",
  "Catering",
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Apply Now", href: "/apply" },
  { label: "News", href: "/news" },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0f5c" }}>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src="/logo.png" alt="FPMI" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Flash Prime</p>
                <p className="text-white/50 text-xs">Media Institute</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ghana's premier media and creative arts institute. Shaping the next generation of media professionals since 2006.
            </p>
            <div className="flex items-center gap-3">
  <a href="https://www.facebook.com/Flashmediainstitute" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0a0f5c]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>
  <a href="https://www.instagram.com/flashmediainstitute" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#0a0f5c]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  </a>
  <a href="https://www.youtube.com/@flashprimemediainstitute5617" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0a0f5c]">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" className="group-hover:fill-[#0a0f5c]"/>
    </svg>
  </a>
  <a href="https://wa.me/233577522323" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0a0f5c]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.543 4.073 1.494 5.789L.058 23.054a.75.75 0 0 0 .916.919l5.375-1.41A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.668-.523-5.186-1.432l-.372-.223-3.849 1.01 1.03-3.748-.244-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  </a>
</div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#f5c518] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map(program => (
                <li key={program}>
                  <Link href="/programs" className="text-white/60 hover:text-[#f5c518] text-sm transition-colors">
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#f5c518] flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Accra-Ofankor Asofan, Abodwese Junction, Tantra Hill, Pokuase main road, Accra, Ghana.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#f5c518] flex-shrink-0" />
                <p className="text-white/60 text-sm">+233 30 243 9342</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#f5c518] flex-shrink-0" />
                <p className="text-white/60 text-sm">info@flashmediainstitute.com</p>
              </div>
            </div>

            <div className="mt-6 bg-[#f5c518] rounded-xl p-4">
              <p className="text-[#0a0f5c] font-bold text-sm mb-1">Ready to Apply?</p>
              <p className="text-[#0a0f5c]/70 text-xs mb-3">Join our next intake today</p>
              <Link href="/apply" className="block text-center bg-[#0a0f5c] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#0d1875] transition-colors">
                Apply Now
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Flash Prime Media Institute. All rights reserved.
          </p>
         
        </div>
      </div>

    </footer>
  )
}