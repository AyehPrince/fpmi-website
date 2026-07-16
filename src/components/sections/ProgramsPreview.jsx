"use client"
import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    slug: "broadcast-journalism",
    name: "Broadcast Journalism",
    duration: "2 Years",
    level: "Diploma",
    description: "Master the art of news reporting, anchoring and media production for TV and radio.",
    icon: "📺",
    color: "bg-blue-50 border-blue-100",
  },
  {
    slug: "fashion-design",
    name: "Fashion Design",
    duration: "2 Years",
    level: "Diploma",
    description: "Explore fashion illustration, garment construction and design for the modern industry.",
    icon: "👗",
    color: "bg-pink-50 border-pink-100",
  },
  {
    slug: "media-arts-production",
    name: "Media Arts Production",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Hands-on training in film production, camera handling, cinematography and lighting.",
    icon: "🎬",
    color: "bg-green-50 border-green-100",
  },
  {
    slug: "cosmetology",
    name: "Cosmetology",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Professional training in hair, makeup, skincare, barbering and beauty therapy.",
    icon: "💄",
    color: "bg-red-50 border-red-100",
  },
]

export default function ProgramsPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3">
              Our Programs
            </h2>
          </div>
          <Link href="/programs" className="flex items-center gap-2 text-[#0a0f5c] font-semibold hover:text-[#f5c518] transition-colors">
            View all 8 programs
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/programs/${program.slug}`} className={`border rounded-2xl p-6 transition-all hover:-translate-y-2 cursor-pointer group ${program.color} block relative overflow-hidden hover:shadow-xl hover:shadow-black/10`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 0.8s ease forwards",
                  }}
                />
                <div className="text-4xl mb-4">{program.icon}</div>
                <span className="bg-[#0a0f5c] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {program.level}
                </span>
                <h3 className="text-[#0a0f5c] font-bold text-lg mt-3 mb-2 leading-tight">{program.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <Clock size={14} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0a0f5c]/10 group-hover:bg-[#f5c518] flex items-center justify-center transition-colors">
                    <ArrowRight size={14} className="text-[#0a0f5c]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <Link href="/programs" className="inline-flex items-center gap-2 bg-[#0a0f5c] hover:bg-[#0d1875] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            Explore All Programs
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}