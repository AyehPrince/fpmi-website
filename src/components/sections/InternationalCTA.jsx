// src/components/sections/InternationalCTA.jsx
"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, ArrowRight } from "lucide-react"

export default function InternationalCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#1b3a4f] flex items-center justify-center mb-5">
              <Globe size={22} className="text-[#f5c518]" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a0f5c] mb-3">Applying From Outside Ghana?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              FPMI welcomes foreign and international students into our 2-year diploma programs. Eligibility, fees and how to get started — all in one place.
            </p>
            <Link href="/international" className="inline-flex items-center gap-2 w-fit bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-6 py-3 rounded-xl transition-all">
              International Students
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hidden md:flex flex-col justify-center gap-4 p-12" style={{ backgroundColor: "#1b3a4f" }}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white/60 text-sm">Registration Fee</span>
              <span className="text-[#f5c518] font-bold">$50</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-white/60 text-sm">Admission Fee</span>
              <span className="text-[#f5c518] font-bold">$150</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Tuition</span>
              <span className="text-[#f5c518] font-bold">$600</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}