"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function TestimonialsStrip() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("featured", true)
        .limit(3)
        .order("created_at", { ascending: false })
      setTestimonials(data || [])
    }
    fetch()
  }, [])

  if (testimonials.length === 0) return null

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
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#f5c518] hover:shadow-md transition-all"
            >
              <Quote size={32} className="text-[#f5c518] mb-4 opacity-60" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.testimonial}"</p>
              <div className="flex items-center gap-3">
                {t.photo_url ? (
                  <img src={t.photo_url} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#0a0f5c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                )}
                <div>
                  <p className="text-[#0a0f5c] font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.program}{t.graduation_year ? `, ${t.graduation_year}` : ""}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}