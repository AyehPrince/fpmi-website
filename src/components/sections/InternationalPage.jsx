// src/components/sections/InternationalPage.jsx
"use client"
import Link from "next/link"
import { Globe, GraduationCap, ArrowRight } from "lucide-react"

const INTERNATIONAL_FEES = [
  { label: "Registration Fee", amount: "$50" },
  { label: "Admission Fee", amount: "$150" },
  { label: "Tuition (per semester)", amount: "$600" },
]

export default function InternationalPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0f2f5" }}>

      {/* Header band */}
      <div style={{ backgroundColor: "#1b3a4f" }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f5c518] flex items-center justify-center mx-auto mb-5">
            <Globe size={26} className="text-[#0a0f5c]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">International Students</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Flash Prime Media Institute welcomes students from outside Ghana to train alongside our local students in Accra.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Intro */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-[#0a0f5c] font-bold text-xl mb-3">Studying at FPMI as a Foreign Student</h2>
          <p className="text-gray-500 leading-relaxed">
            If you're applying from outside Ghana, you're welcome to join us on campus in Accra-Ofankor Asofan. Foreign and international applicants follow their own eligibility track and fee structure, outlined below.
          </p>
        </div>

        {/* Programs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#1b3a4f] flex items-center justify-center">
              <GraduationCap size={20} className="text-[#f5c518]" />
            </div>
            <h2 className="text-[#0a0f5c] font-bold text-xl">Choose Any Program</h2>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4">
            International students can apply to any of our programs. As an international student, your program runs <strong className="text-[#0a0f5c]">2 years</strong> regardless of which one you choose.
          </p>
          <Link href="/programs" className="inline-flex items-center gap-1 text-[#0a0f5c] font-semibold text-sm hover:text-[#f5c518] transition-colors">
            Browse all programs <ArrowRight size={14} />
          </Link>
        </div>

        {/* Fees */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-[#0a0f5c] font-bold text-xl mb-1">International Fee Structure</h2>
          <p className="text-gray-400 text-sm mb-6">Fees for foreign / international applicants are quoted in US Dollars and are separate from the domestic (GH¢) fee schedule shown elsewhere on this site. The registration fee is payable online by card — your bank converts the charge from your card's currency automatically.</p>

          <div className="bg-gray-50 border border-gray-100 rounded-xl divide-y divide-gray-200">
            {INTERNATIONAL_FEES.map((fee) => (
              <div key={fee.label} className="flex justify-between items-center px-5 py-4">
                <span className="text-gray-600 text-sm">{fee.label}</span>
                <span className="text-[#0a0f5c] font-bold">{fee.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to apply */}
        <div className="bg-[#1b3a4f] rounded-2xl p-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#f5c518] flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={22} className="text-[#0a0f5c]" />
          </div>
          <h2 className="text-white font-bold text-xl mb-2">Ready to Apply?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-6">
            Apply online — select your nationality on the application form and it automatically switches to the international fee schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/apply"
              className="w-full sm:w-auto bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              Start Application
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-medium px-8 py-3.5 rounded-xl transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}