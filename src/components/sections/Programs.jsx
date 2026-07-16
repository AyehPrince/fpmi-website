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
    color: "bg-blue-50 border-blue-100",
    icon: "📺",
  },
  {
    slug: "radio-tv-presenting",
    name: "Radio & TV Presenting",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Develop your on-screen and on-air presence with professional presenting techniques.",
    color: "bg-purple-50 border-purple-100",
    icon: "🎙️",
  },
  {
    slug: "media-arts-production",
    name: "Camera Handling",
    duration: "6 Months",
    level: "Certificate",
    description: "Learn professional camera operation, cinematography and video production techniques.",
    color: "bg-amber-50 border-amber-100",
    icon: "🎥",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Create stunning visuals using industry-standard tools for print and digital media.",
    color: "bg-pink-50 border-pink-100",
    icon: "🎨",
  },
  {
    slug: "film-video-editing",
    name: "Film & Video Editing",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Master post-production techniques including editing, color grading and effects.",
    color: "bg-red-50 border-red-100",
    icon: "🎬",
  },
  {
    slug: "fashion-design",
    name: "Fashion Design",
    duration: "2 Years",
    level: "Diploma",
    description: "Explore fashion illustration, garment construction and design for the modern industry.",
    color: "bg-green-50 border-green-100",
    icon: "👗",
  },
  {
    slug: "cosmetology",
    name: "Cosmetology",
    duration: "1 Year",
    level: "Professional Certificate",
    description: "Master hair, skin and beauty techniques for a thriving career in the beauty industry.",
    color: "bg-teal-50 border-teal-100",
    icon: "💄",
  },
  {
    slug: "catering",
    name: "Catering",
    duration: "1 year",
    level: "Professional Certificate",
    description: "Gain essential skills in catering services and kitchen management.",
    color: "bg-orange-50 border-orange-100",
    icon: "🏥",
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            Our Programs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose from 8 professionally designed programs ranging from 6 months to 2 years. All courses include practical training and job placement support.
          </p>
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
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#0a0f5c] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {program.level}
                </span>
              </div>
              <h3 className="text-[#0a0f5c] font-bold text-lg mb-2 leading-tight">{program.name}</h3>
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
          className="mt-16 bg-[#0a0f5c] rounded-3xl p-10 text-center"
        >
          <h3 className="text-white text-3xl font-bold mb-3">Not sure which program is right for you?</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Talk to our admissions team and we'll help you find the perfect fit for your goals and interests.</p>
          <Link href="/contact" className="inline-block bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            Talk to Admissions
          </Link>
        </motion.div>

      </div>
    </section>
  )
}