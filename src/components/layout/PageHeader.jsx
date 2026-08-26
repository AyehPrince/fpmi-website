// src/components/layout/PageHeader.jsx
"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Shared "inner page" header: full-width photo, dark tint, page title with a
// gold accent bar, breadcrumb strip below. Used on every page except the
// homepage (which has its own dedicated Hero) — this is what replaces the
// old flat navy header blocks that several pages used before.
export default function PageHeader({ title, breadcrumbLabel, image = "/hero-bg.jpg" }) {
  return (
    <div>
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27,58,79,0.7)" }} />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(10,15,92,0.55) 0%, rgba(27,58,79,0.35) 60%, rgba(27,58,79,0.55) 100%)"
          }}
        />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-l-4 pl-4"
            style={{ borderColor: "#f5c518" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-400 hover:text-[#0a0f5c] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />
          <span className="text-[#0a0f5c] font-semibold">{breadcrumbLabel || title}</span>
        </div>
      </div>
    </div>
  )
}