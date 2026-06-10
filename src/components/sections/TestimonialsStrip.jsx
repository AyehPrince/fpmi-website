"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Akosua Mensah",
    program: "Broadcast Journalism, 2022",
    text: "FPMI completely transformed my life. I got a job at a major TV station 2 months after graduating.",
    initials: "AM",
  },
  {
    name: "Kwabena Asare",
    program: "Film & Video Editing, 2021",
    text: "The facilities here are world class. The lecturers are industry professionals who genuinely care about your growth.",
    initials: "KA",
  },
  {
    name: "Efua Boateng",
    program: "Fashion Design, 2023",
    text: "I came in with zero sewing experience and left with a full portfolio and my own mini clothing line.",
    initials: "EB",
  },
]

export default function TestimonialsStrip() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#f5c518] hover:shadow-md transition-all"
            >
              <Quote size={32} className="text-[#f5c518] mb-4 opacity-60" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a0f5c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-[#0a0f5c] font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{testimonial.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}