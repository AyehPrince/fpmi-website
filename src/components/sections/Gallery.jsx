"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { ImageIcon } from "lucide-react"

const categories = ["All", "General", "TV Studio", "Radio Studio", "Fashion", "Film Production", "Graphic Design", "Cosmetology", "Graduation", "Events"]

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetchPhotos()
  }, [])

  async function fetchPhotos() {
    setLoading(true)
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) console.error(error)
    else {
      setPhotos(data || [])
      setFiltered(data || [])
    }
    setLoading(false)
  }

  function handleCategory(category) {
    setActiveCategory(category)
    if (category === "All") {
      setFiltered(photos)
    } else {
      setFiltered(photos.filter(p => p.category === category))
    }
  }

  return (
  <section className="py-24" style={{ backgroundColor: "#1b3a4f" }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Life at FPMI</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
  Gallery
</h2>
<p className="text-white/60 text-lg max-w-2xl mx-auto">
  A glimpse into the vibrant learning environment at Flash Prime Media Institute.
</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
  activeCategory === cat
    ? "bg-[#f5c518] text-[#0a0f5c]"
    : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-400">Loading gallery...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <ImageIcon size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-white/50">No photos yet — check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(photo)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 ${
                  photo.featured ? "md:col-span-2 aspect-video" : "aspect-square"
                }`}
              >
                <img
                  src={photo.image_url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-sm truncate">{photo.title}</p>
                    <p className="text-white/70 text-xs mt-0.5">{photo.category}</p>
                  </div>
                </div>
                {photo.featured && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#f5c518] text-[#0a0f5c] text-xs font-bold px-2 py-0.5 rounded-full">Featured</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selected.image_url}
              alt={selected.title}
              className="w-full rounded-2xl object-cover max-h-[70vh]"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold text-lg">{selected.title}</p>
              {selected.description && (
                <p className="text-white/60 text-sm mt-1">{selected.description}</p>
              )}
              <button
                onClick={() => setSelected(null)}
                className="mt-4 text-white/50 hover:text-white text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  )
}