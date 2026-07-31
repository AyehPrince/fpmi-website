"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Award, CheckCircle, ChevronRight } from "lucide-react"
import { programs } from "@/data/programs"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.07 } },
}

const NAV_LINKS = [
  { label: "All Programs", href: "#programs" },
  { label: "Admission", href: "#admission" },
  { label: "Fee Structure", href: "#fees" },
  { label: "Apply Now", href: "/apply" },
]

const FEES = [
  {
    title: "6 Months Certificate",
    duration: "6 Months",
    tag: "Strictly Practical",
    items: [
      { label: "Registration Form", value: "GH¢ 150" },
      { label: "Admission Fee", value: "GH¢ 700" },
      { label: "Tuition Fee", value: "GH¢ 2,400" },
    ],
    note: "70% Practical · 30% Theory",
    accent: "#00b4d8",
  },
  {
    title: "1 Year Professional Certificate",
    duration: "1 Year",
    tag: "Most Popular",
    items: [
      { label: "Registration Form", value: "GH¢ 150" },
      { label: "Admission Fee", value: "GH¢ 700" },
      { label: "Tuition (per semester)", value: "GH¢ 2,400" },
    ],
    note: "70% Practical · 30% Theory",
    accent: "#f5c518",
  },
  {
    title: "2 Year Diploma",
    duration: "2 Years",
    tag: "Advanced",
    items: [
      { label: "Registration Form", value: "GH¢ 150" },
      { label: "Admission Fee", value: "GH¢ 700" },
      { label: "Tuition (per semester)", value: "GH¢ 2,400" },
    ],
    note: "ICM Advanced Diploma · Qualifies for University Level 200",
    accent: "#22c55e",
  },
]

const ADMISSION = [
  "BECE certificate holders (18 years and above)",
  "WASSCE / SSSCE holders — any grade accepted",
  "Mature students (25 years and above)",
  "Informal Education: applicants between ages 20–40",
]

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <span className="w-5 h-px bg-[#f5c518]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0a0f5c]/50">{children}</span>
    </div>
  )
}

function ProgramCard({ program, index }) {
  return (
    <motion.div variants={fadeUp} id={program.slug}>
      {/* Outer shell — double bezel */}
      <div
        className="group relative rounded-[1.5rem] p-[1.5px] transition-all duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(10,15,92,0.08) 0%, rgba(10,15,92,0.02) 100%)",
        }}
      >
        {/* Hover glow ring */}
        <div
          className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(135deg, ${program.accentColor}30 0%, transparent 60%)`,
          }}
        />

        {/* Inner core */}
        <div
          className="relative bg-white rounded-[calc(1.5rem-1.5px)] overflow-hidden transition-all duration-700"
          style={{
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Large background index number */}
          <div
            className="absolute top-0 right-6 text-[10rem] font-black leading-none select-none pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
            style={{
              color: `${program.accentColor}08`,
              transform: "translateY(-10%)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Top accent line — only appears on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: program.accentColor }}
          />

          {/* Image banner */}
          {program.image && (
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={program.image}
                alt={program.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Gradient overlay so text is readable if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Level badge over image */}
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: `${program.accentColor}cc`, color: "#fff" }}
                >
                  {program.level}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/90 font-medium backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                  <Clock size={10} />
                  {program.duration}
                </span>
              </div>
            </div>
          )}

          <div className="relative p-7 md:p-9">
            {/* Header row — hide badges if image is present since they're on the image */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                {!program.image && (
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${program.accentColor}12`, color: program.accentColor }}
                    >
                      {program.level}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                      <Clock size={10} />
                      {program.duration}
                    </span>
                  </div>
                )}
                <h3
                  className="text-2xl md:text-3xl font-black tracking-tight leading-tight"
                  style={{ color: "#0a0f5c", letterSpacing: "-0.02em" }}
                >
                  {program.name}
                </h3>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl">{program.shortDescription}</p>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* What you learn */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                  What You'll Learn
                </p>
                <ul className="space-y-2.5">
                  {program.whatYouLearn.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: program.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                  {program.whatYouLearn.length > 5 && (
                    <li className="text-xs text-gray-400 pl-4">
                      +{program.whatYouLearn.length - 5} more topics
                    </li>
                  )}
                </ul>
              </div>

              {/* Career paths */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                  Career Paths
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.careerOpportunities.map((career, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{
                        backgroundColor: "#f8f9fc",
                        color: "#0a0f5c",
                        border: "1px solid rgba(10,15,92,0.06)",
                      }}
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer row */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
              style={{ borderTop: "1px solid rgba(10,15,92,0.06)" }}
            >
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-[#0a0f5c]">Entry: </span>
                {program.entryRequirements}
              </p>

              {/* Button-in-button pattern */}
              <Link
                href={`/programs/${program.slug}`}
                className="group/btn flex items-center gap-3 text-sm font-bold px-5 py-3 rounded-full transition-all duration-300 flex-shrink-0"
                style={{ backgroundColor: "#1b3a4f", color: "#fff" }}
              >
                Full Details
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  style={{ backgroundColor: program.accentColor }}
                >
                  <ArrowRight size={11} color="#fff" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProgramsLongScroll() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f9fc" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#1b3a4f" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #f5c518 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <SectionEyebrow>Flash Prime Media Institute</SectionEyebrow>
            <h1
              className="text-4xl md:text-6xl font-black text-white mb-4 leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Our <span style={{ color: "#f5c518" }}>Programs</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Ghana's leading media and creative arts institute. 8 professionally structured programs — from 6-month certificates to 2-year diplomas. All 70% practical.
            </p>
            <div className="flex flex-wrap gap-3">
              {NAV_LINKS.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold border text-white transition-all duration-300 hover:border-[#f5c518] hover:text-[#f5c518]"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 active:scale-[0.98]"
                    style={{ backgroundColor: "#f5c518", color: "#0a0f5c" }}
                  >
                    {link.label}
                    <span className="w-5 h-5 rounded-full bg-[#1b3a4f]/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                      <ArrowRight size={10} />
                    </span>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "8", label: "Programs" },
              { value: "70%", label: "Practical Training" },
              { value: "3", label: "Qualification Levels" },
              { value: "6mo–2yr", label: "Duration Options" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black" style={{ color: "#f5c518", letterSpacing: "-0.02em" }}>{stat.value}</p>
                <p className="text-white/40 text-xs mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="mb-10">
          <SectionEyebrow>All Programs</SectionEyebrow>
          <h2 className="text-3xl font-black text-[#0a0f5c] mb-2" style={{ letterSpacing: "-0.02em" }}>
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-sm">Click any program for the full curriculum and career details</p>
        </div>

        {/* Quick jump pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border transition-all duration-300 hover:border-[#0a0f5c] hover:text-[#0a0f5c]"
              style={{ borderColor: "rgba(10,15,92,0.08)", color: "#888" }}
            >
              {p.name}
            </a>
          ))}
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-5"
        >
          {programs.map((program, index) => (
            <ProgramCard key={program.slug} program={program} index={index} />
          ))}
        </motion.div>
      </section>

      {/* ── ADMISSION ── */}
      <section id="admission" style={{ backgroundColor: "#1b3a4f" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <SectionEyebrow>Admission</SectionEyebrow>
              <h2 className="text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                Who Can Apply?
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                FPMI welcomes students from all educational backgrounds. No grade limit. If you have the passion, there is a path for you here.
              </p>
              <ul className="space-y-4">
                {ADMISSION.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#f5c518" }}
                    >
                      <CheckCircle size={12} color="#0a0f5c" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Double bezel card on dark */}
              <div
                className="rounded-[1.5rem] p-px"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))" }}
              >
                <div
                  className="rounded-[calc(1.5rem-1px)] p-7"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <Award size={28} className="mb-5" style={{ color: "#f5c518" }} />
                  <h3 className="text-white font-black text-lg mb-5" style={{ letterSpacing: "-0.01em" }}>
                    Why FPMI?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "UK & Ghana accredited programs",
                      "70% hands-on practical training",
                      "Professional TV studio & salon facilities",
                      "National Service placement after Diploma",
                      "ICM Advanced Diploma — qualifies for University Level 200",
                      "Internship & attachment after completion",
                      "Classes: Monday–Friday · 8:00am to 3:00pm",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#f5c518] flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEES ── */}
      <section id="fees" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <SectionEyebrow>Fee Structure</SectionEyebrow>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-3xl font-black text-[#0a0f5c]" style={{ letterSpacing: "-0.02em" }}>
            Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Payable in cash, cheque or mobile money before starting any course. All fees are non-refundable.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {FEES.map((fee, i) => {
            const isDark = i === 1
            return (
              <motion.div
                key={fee.title}
                variants={fadeUp}
                className="group relative rounded-[1.75rem] p-px transition-all duration-700"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(245,197,24,0.05))"
                    : "linear-gradient(135deg, rgba(10,15,92,0.08), rgba(10,15,92,0.01))"
                }}
              >
                <div
                  className="rounded-[calc(1.75rem-1px)] overflow-hidden"
                  style={{
                    backgroundColor: isDark ? "#0a0f5c" : "#fff",
                    boxShadow: isDark
                      ? "inset 0 1px 1px rgba(255,255,255,0.08)"
                      : "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 4px rgba(0,0,0,0.03)"
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 p-7 md:p-8">

                    {/* Left — duration + title */}
                    <div className="md:w-56 flex-shrink-0">
                      <span
                        className="text-[10px] font-black uppercase tracking-[0.22em] mb-2 block"
                        style={{ color: isDark ? "#f5c518" : fee.accent }}
                      >
                        {fee.duration}
                      </span>
                      <h3
                        className="text-xl font-black leading-tight"
                        style={{
                          color: isDark ? "#fff" : "#0a0f5c",
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {fee.title}
                      </h3>
                      <span
                        className="inline-block mt-2 text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: isDark ? "rgba(245,197,24,0.15)" : `${fee.accent}12`,
                          color: isDark ? "#f5c518" : fee.accent
                        }}
                      >
                        {fee.tag}
                      </span>
                    </div>

                    {/* Divider */}
                    <div
                      className="hidden md:block w-px self-stretch mx-8 flex-shrink-0"
                      style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,15,92,0.06)" }}
                    />

                    {/* Middle — fee breakdown */}
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      {fee.items.map((item) => (
                        <div key={item.label}>
                          <p className="text-[11px] mb-1" style={{ color: isDark ? "rgba(255,255,255,0.4)" : "#aaa" }}>
                            {item.label}
                          </p>
                          <p
                            className="text-lg font-black"
                            style={{
                              color: isDark ? "#f5c518" : "#0a0f5c",
                              letterSpacing: "-0.02em"
                            }}
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div
                      className="hidden md:block w-px self-stretch mx-8 flex-shrink-0"
                      style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(10,15,92,0.06)" }}
                    />

                    {/* Right — note pill */}
                    <div className="md:w-52 flex-shrink-0">
                      <div
                        className="rounded-2xl px-4 py-3 text-xs font-medium leading-relaxed text-center"
                        style={{
                          backgroundColor: isDark ? "rgba(245,197,24,0.1)" : `${fee.accent}10`,
                          color: isDark ? "#f5c518" : fee.accent
                        }}
                      >
                        {fee.note}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        <p className="text-xs text-gray-400 text-center mt-6">All fees subject to change. Contact admissions for the latest pricing.</p>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-14 text-center"
          style={{ backgroundColor: "#f5c518" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
          <div className="relative">
            <SectionEyebrow>Get Started</SectionEyebrow>
            <h2
              className="text-3xl md:text-4xl font-black text-[#0a0f5c] mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to Start?
            </h2>
            <p className="text-[#0a0f5c]/60 mb-8 max-w-md mx-auto text-sm">
              Applications are open. Begin your journey in media, fashion, beauty or the creative arts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/apply"
                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-[0.98]"
                style={{ backgroundColor: "#1b3a4f", color: "#fff" }}
              >
                Apply Now
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowRight size={11} />
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full font-bold text-sm border-2 border-[#1b3a4f]/20 text-[#0a0f5c] hover:border-[#0a0f5c] transition-all duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}