"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowLeft, User, Tag } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

const categoryColors = {
  News: "bg-blue-50 text-blue-600 border-blue-100",
  Achievement: "bg-amber-50 text-amber-600 border-amber-100",
  Admissions: "bg-green-50 text-green-600 border-green-100",
  Events: "bg-purple-50 text-purple-600 border-purple-100",
}

export default function NewsDetail({ slug }) {
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [slug])

  async function fetchPost() {
    setLoading(true)
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()

    if (error) console.error(error)
    else {
      setPost(data)
      fetchRelated(data.category, data.id)
    }
    setLoading(false)
  }

  async function fetchRelated(category, currentId) {
    const { data } = await supabase
      .from("posts")
      .select("id, title, slug, excerpt, category, created_at")
      .eq("published", true)
      .eq("category", category)
      .neq("id", currentId)
      .limit(3)

    setRelated(data || [])
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  if (loading) return (
    <div className="text-center py-24 text-gray-400">Loading post...</div>
  )

  if (!post) return (
    <div className="text-center py-24">
      <p className="text-gray-400 mb-4">Post not found</p>
      <Link href="/news" className="text-[#0a0f5c] font-semibold hover:text-[#f5c518]">
        Back to News
      </Link>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <Link href="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0a0f5c] transition-colors mb-8 text-sm">
        <ArrowLeft size={16} />
        Back to News
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#0a0f5c] mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={14} />
            <span>{formatDate(post.created_at)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <User size={14} />
            <span>{post.author}</span>
          </div>
        </div>

        {post.cover_image_url && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {!post.cover_image_url && (
          <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-[#0a0f5c] to-[#0d1875] flex items-center justify-center">
            <img src="/logo.png" alt="FPMI" className="w-24 h-24 object-contain opacity-30" />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.content?.split("\n").map((paragraph, i) => (
            paragraph.trim() && (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base">
                {paragraph}
              </p>
            )
          ))}
        </div>

      </motion.div>

      {related.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-[#0a0f5c] mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(r => (
              <Link key={r.id} href={`/news/${r.slug}`} className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-[#f5c518] hover:shadow-md transition-all">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[r.category] || ""}`}>
                  {r.category}
                </span>
                <h3 className="text-[#0a0f5c] font-bold text-sm mt-3 mb-2 leading-tight group-hover:text-[#f5c518] transition-colors line-clamp-2">
                  {r.title}
                </h3>
                <p className="text-gray-400 text-xs">{formatDate(r.created_at)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 bg-[#1b3a4f] rounded-2xl p-8 text-center">
        <h3 className="text-white font-bold text-xl mb-2">Ready to Join FPMI?</h3>
        <p className="text-white/60 text-sm mb-6">Start your application today and secure your spot in our next intake.</p>
        <Link href="/apply" className="inline-block bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-3 rounded-xl transition-all">
          Apply Now
        </Link>
      </div>

    </div>
  )
}