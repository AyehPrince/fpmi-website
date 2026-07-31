"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

const categories = ["All", "News", "Achievement", "Admissions", "Events"]

const categoryColors = {
  News: "bg-blue-50 text-blue-600 border-blue-100",
  Achievement: "bg-amber-50 text-amber-600 border-amber-100",
  Admissions: "bg-green-50 text-green-600 border-green-100",
  Events: "bg-purple-50 text-purple-600 border-purple-100",
}

export default function NewsList() {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const marqueeRef = useRef(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })

    if (error) console.error(error)
    else {
      setPosts(data || [])
      setFiltered(data || [])
    }
    setLoading(false)
  }

  function handleCategory(category) {
    setActiveCategory(category)
    if (category === "All") {
      setFiltered(posts)
    } else {
      setFiltered(posts.filter(p => p.category === category))
    }
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const marqueeItems = posts.map(p => p.title)

  return (
    <div>
      <div style={{ backgroundColor: "#1b3a4f" }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#f5c518]/20 text-[#f5c518] text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-[#f5c518]/30">
            Stay Updated
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            News & Updates
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The latest happenings, achievements and announcements from Flash Prime Media Institute.
          </p>
        </div>
      </div>

      {marqueeItems.length > 0 && (
        <div className="bg-[#f5c518] py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((title, i) => (
              <span key={i} className="text-[#0a0f5c] font-semibold text-sm mx-8">
                ✦ {title}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#1b3a4f] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-400">Loading posts...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">No posts found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/news/${post.slug}`} className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-[#0a0f5c] to-[#0d1875] flex items-center justify-center relative overflow-hidden">
                    {post.cover_image_url ? (
                      <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center px-6">
                        <img src="/logo.png" alt="FPMI" className="w-16 h-16 object-contain mx-auto mb-3 opacity-50" />
                        <p className="text-white/40 text-xs">Flash Prime Media Institute</p>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={13} className="text-gray-400" />
                      <span className="text-gray-400 text-xs">{formatDate(post.created_at)}</span>
                    </div>
                    <h3 className="text-[#0a0f5c] font-bold text-lg mb-2 leading-tight group-hover:text-[#f5c518] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-[#0a0f5c] font-semibold text-sm group-hover:text-[#f5c518] transition-colors">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}