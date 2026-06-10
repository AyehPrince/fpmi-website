"use client"
import { motion } from "framer-motion"
import { Clock, CheckCircle, Briefcase, ArrowLeft, GraduationCap, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function ProgramDetail({ program }) {
  return (
    <div>

      <div className="py-16 px-6" style={{ backgroundColor: "#0a0f5c" }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/programs" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft size={16} />
            Back to Programs
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-6xl">{program.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#f5c518] text-[#0a0f5c] text-xs font-bold px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{program.name}</h1>
                <p className="text-white/60 mt-2 text-lg">{program.shortDescription}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:text-right">
              <div className="flex items-center gap-2 text-white/60 md:justify-end">
                <Clock size={16} />
                <span className="text-white font-semibold">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 md:justify-end">
                <GraduationCap size={16} />
                <span className="text-white font-semibold">{program.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#0a0f5c] mb-4">About This Program</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{program.fullDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#0a0f5c] mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.whatYouLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" style={{ color: program.accentColor }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#0a0f5c] mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {program.careerOpportunities.map((career, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <Briefcase size={15} className="flex-shrink-0" style={{ color: program.accentColor }} />
                    <span className="text-gray-700 text-sm font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#0a0f5c] mb-6">Program Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-[#f5c518] transition-colors">
                    <ImageIcon size={28} className="text-gray-300" />
                    <p className="text-gray-400 text-xs">Photo coming soon</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          <div className="space-y-6">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-28"
            >
              <h3 className="text-[#0a0f5c] font-bold text-lg mb-5">Program Details</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Duration</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{program.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Award</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{program.level}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Registration</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">GH¢ {program.fees.registration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Admission</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">GH¢ {program.fees.admission}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Tuition/Semester</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">GH¢ {program.fees.tuition.toLocaleString()}</span>
                </div>
                <div className="py-3">
                  <span className="text-gray-500 text-sm block mb-1">Entry Requirements</span>
                  <span className="text-[#0a0f5c] text-sm">{program.entryRequirements}</span>
                </div>
              </div>

              <Link href="/apply" className="block w-full bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-6 py-4 rounded-xl transition-all text-center text-sm">
                Apply for this Program
              </Link>
              <Link href="/contact" className="block w-full border border-[#0a0f5c] text-[#0a0f5c] hover:bg-[#0a0f5c] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all text-center text-sm mt-3">
                Enquire Now
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

    </div>
  )
}