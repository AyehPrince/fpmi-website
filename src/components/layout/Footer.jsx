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
  <a href="https://www.facebook.com/Flashmediainstitute" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <span className="text-white group-hover:text-[#0a0f5c] text-xs font-bold">f</span>
  </a>
  <a href="https://www.instagram.com/flashmediainstitute?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <span className="text-white group-hover:text-[#0a0f5c] text-xs font-bold">in</span>
  </a>
  <a href="https://www.youtube.com/@flashprimemediainstitute5617" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f5c518] flex items-center justify-center transition-colors group">
    <span className="text-white group-hover:text-[#0a0f5c] text-xs font-bold">yt</span>
  </a>
  <a href="https://wa.me/233577522323" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-green-500/20 hover:bg-green-500 flex items-center justify-center transition-colors group">
    <MessageCircle size={16} className="text-green-400 group-hover:text-white" />
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