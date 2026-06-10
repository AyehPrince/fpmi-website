"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0f5c] rounded-3xl px-10 py-16 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #f5c518 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00b4d8 0%, transparent 40%)`
            }}
          />
          <div className="relative z-10">
            <span className="inline-block bg-[#f5c518]/20 text-[#f5c518] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-[#f5c518]/30">
              Start Your Journey Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Begin Your <br />
              <span className="text-[#f5c518]">Media Career?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Join hundreds of graduates who have turned their passion into a thriving career. Applications are open now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
                Apply Now
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/233577522323" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-xl transition-all hover:bg-white/10">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}