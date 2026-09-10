"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { departments } from "@/data/departments"

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
              Our Departments
            </h2>
          </div>
          <Link href="/programs" className="flex items-center gap-2 text-[#0a0f5c] font-semibold hover:text-[#f5c518] transition-colors">
            View all departments
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/programs#${dept.slug}`} className="border border-gray-100 bg-white rounded-2xl p-6 transition-all hover:-translate-y-2 cursor-pointer group block relative overflow-hidden hover:shadow-xl hover:shadow-black/10">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 0.8s ease forwards",
                  }}
                />
                <div className="text-4xl mb-4">{dept.icon}</div>
                <span
                  className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: dept.accentColor }}
                >
                  {dept.courses.length} Course{dept.courses.length > 1 ? "s" : ""}
                </span>
                <h3 className="text-[#0a0f5c] font-bold text-lg mt-3 mb-2 leading-tight">{dept.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{dept.shortDescription}</p>
                <div className="flex items-center justify-end">
                  <div className="w-8 h-8 rounded-full bg-[#1b3a4f]/10 group-hover:bg-[#f5c518] flex items-center justify-center transition-colors">
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
          <Link href="/programs" className="inline-flex items-center gap-2 bg-[#1b3a4f] hover:bg-[#1d4a63] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            Explore All Departments
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}