// src/components/sections/Hero.jsx
"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useCountUp } from "@/hooks/useCountUp"

// Real campus/studio photos, shuffled behind the same gradient overlay the
// hero has always had. hero-bg.jpg (the group photo) stays in the mix too.
const HERO_IMAGES = [
  "/hero-bg.jpg",
  "/hero-gallery/radio-studio-1.webp",
  "/hero-gallery/radio-studio-2.webp",
  "/hero-gallery/radio-equipment.webp",
  "/hero-gallery/classroom-1.webp",
  "/hero-gallery/classroom-2.webp",
  "/hero-gallery/classroom-3.webp",
  "/hero-gallery/campus-lobby.webp",
  "/hero-gallery/campus-entrance.webp",
]

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
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (HERO_IMAGES.length <= 1) return prev
        let next = Math.floor(Math.random() * HERO_IMAGES.length)
        while (next === prev) {
          next = Math.floor(Math.random() * HERO_IMAGES.length)
        }
        return next
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0" style={{ backgroundColor: "#1b3a4f" }}>

      {/* Background image — shuffles between real campus/studio photos every
          few seconds via opacity crossfade. Same left-to-right shading as
          before, strong navy on the left where the welcome card needs it for
          legibility, fading down to nearly clear by the right edge — that
          overlay sits above the photos and never changes, only the photo
          underneath it does. */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="FPMI campus"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === currentImage ? 1 : 0 }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(10,15,40,0.94) 0%, rgba(20,40,65,0.88) 20%, rgba(27,58,79,0.72) 40%, rgba(27,58,79,0.35) 65%, rgba(27,58,79,0.08) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center min-h-[70vh]">

          {/* LEFT — Welcome card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-white/8 border border-white/15 backdrop-blur-md rounded-3xl px-5 sm:px-8 py-6 sm:py-8"
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

            {/* Legacy seal badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring" }}
              className="absolute -bottom-5 -right-5 hidden sm:block"
            >
              <div
                className="w-[88px] h-[88px] rounded-full bg-[#f5c518] border-4 border-[#1b3a4f] shadow-xl flex flex-col items-center justify-center text-center"
                style={{ transform: "rotate(-8deg)" }}
              >
                <span className="text-[#0a0f5c] font-bold text-[9px] tracking-widest leading-none">ESTABLISHED</span>
                <span className="text-[#0a0f5c] font-black text-xl leading-none mt-1">2017</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Headline + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {["Easy", "Way", "To"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="inline-block mr-4 text-white"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.66 }}
                className="inline-block text-[#f5c518]"
              >
                Excellence
              </motion.span>
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center md:items-start justify-center md:justify-start gap-3"
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