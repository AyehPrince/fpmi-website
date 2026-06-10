"use client"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

const galleryItems = [
  { label: "TV Studio Session", size: "large" },
  { label: "Radio Broadcasting", size: "small" },
  { label: "Fashion Show", size: "small" },
  { label: "Graduation Ceremony", size: "small" },
  { label: "Camera Training", size: "small" },
  { label: "Makeup & Cosmetology", size: "large" },
  { label: "Graphic Design Lab", size: "small" },
  { label: "Film Production", size: "small" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Life at FPMI</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A glimpse into the vibrant learning environment at Flash Prime Media Institute.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden bg-[#0a0f5c]/10 border border-gray-200 hover:border-[#f5c518] transition-all cursor-pointer ${
                item.size === "large" ? "md:col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f5c]/20 to-[#0a0f5c]/40 group-hover:from-[#0a0f5c]/40 group-hover:to-[#0a0f5c]/60 transition-all">
                <ImageIcon size={32} className="text-[#f5c518] mb-3 opacity-60" />
                <p className="text-white font-medium text-sm text-center px-4">{item.label}</p>
                <p className="text-white/50 text-xs mt-1">Photo coming soon</p>
              </div>
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
          <p className="text-gray-400 text-sm">
            📸 Real photos coming soon — follow us for updates
          </p>
        </motion.div>

      </div>
    </section>
  )
}