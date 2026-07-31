"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useCountUp } from "@/hooks/useCountUp"

const stats = [
  { number: 15, suffix: "+", label: "Years of Excellence" },
  { number: 8, suffix: "", label: "Programs Offered" },
  { number: 1000, suffix: "+", label: "Graduates" },
]

function StatItem({ number, suffix, label }) {
  const { count, ref } = useCountUp(number)
  return (
    <div ref={ref} className="text-center">
      <p className="text-[#f5c518] text-3xl font-bold">
        {count}{suffix}
      </p>
      <p className="text-white/60 text-xs mt-1">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0" style={{ backgroundColor: "#1b3a4f" }}>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="FPMI students"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27,58,79,0.72)" }} />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(27,58,79,0.62) 0%, rgba(27,58,79,0.42) 50%, rgba(27,58,79,0.68) 100%)"
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #f5c518 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00b4d8 0%, transparent 40%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[70vh]">

          {/* LEFT — Welcome card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/8 border border-white/15 backdrop-blur-md rounded-3xl px-8 py-8"
          >
            <h2 className="text-white font-bold text-xl mb-4 leading-snug">
              Welcome to Flash Prime Media Institute
            </h2>
            <p className="text-white/75 text-sm leading-relaxed">
              I am pleased to welcome you to Flash Prime Media Institute where you will be endowed with the best knowledge in both practical and theoretical field in Media Art Education. FPMI is the best ever known practical media institute in Ghana. At Flash Prime Media Institute we have five (5) main departments; The Journalism Department, Media Art Department, Fashion Department, Cosmetology Department And Care Giving Department.
            </p>

            {/* Stats row inside card */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {stats.map(stat => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Headline + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {["Easy", "Way", "To", "Excellence"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="inline-block mr-4 text-[#f5c518]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Ghana's premier media and creative arts institute. Discover your passion, develop your skills and launch your career in media, fashion, film and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
              <Link href="/apply" className="w-full sm:w-auto bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105">
                Apply Now
              </Link>
              <Link href="/programs" className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-xl text-base transition-all hover:bg-white/10">
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}