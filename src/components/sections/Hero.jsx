"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-[#0a0f5c]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f5c] via-[#0d1875] to-[#0a0f5c]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #f5c518 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00b4d8 0%, transparent 40%)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <span className="inline-block bg-[#f5c518]/20 text-[#f5c518] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-[#f5c518]/30 mt-20 md:mt-0">
            Welcome to Flash Prime Media Institute
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Easy Way To{" "}
            <span className="text-[#f5c518]">Excellence</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Ghana's premier media and creative arts institute. Discover your passion, develop your skills and launch your career in media, fashion, film and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="w-full sm:w-auto bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105">
              Apply Now
            </Link>
            <Link href="/programs" className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-xl text-base transition-all hover:bg-white/10">
              Explore Programs
            </Link>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto pb-16"
>
  {[
    { number: "15+", label: "Years of Excellence" },
    { number: "8", label: "Programs Offered" },
    { number: "1000+", label: "Graduates" },
  ].map((stat) => (
    <div key={stat.label} className="text-center">
      <p className="text-[#f5c518] text-3xl font-bold">{stat.number}</p>
      <p className="text-white/60 text-xs mt-1">{stat.label}</p>
    </div>
  ))}
</motion.div>
      </div>

    </section>
  )
}