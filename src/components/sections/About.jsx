"use client"
import { motion } from "framer-motion"
import { Award, Users, BookOpen, Tv } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering world-class media education that meets international standards."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build a family of creative professionals who support and inspire each other."
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "70% of our curriculum is hands-on practical training in real studio environments."
  },
  {
    icon: Tv,
    title: "Industry Ready",
    description: "Every graduate leaves with the skills, confidence and connections to thrive in the industry."
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-6 leading-tight">
              Shaping the Next Generation of Media Professionals
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in 2006 by Clement Amankwah, Flash Prime Media Institute has been at the forefront of creative arts and media education in Ghana. We provide a dynamic learning environment that nurtures creativity, research and scholarship.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Located in Accra, our state-of-the-art facilities include professional TV and Radio studios, a Master Control Room, Fashion Design rooms, Hair and Make-up studios and modern hostel facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-[#1b3a4f] rounded-2xl p-5 flex-1 text-center">
                <p className="text-[#f5c518] text-3xl font-bold">2006</p>
                <p className="text-white/70 text-sm mt-1">Year Founded</p>
              </div>
              <div className="bg-[#f5c518] rounded-2xl p-5 flex-1 text-center">
                <p className="text-[#0a0f5c] text-3xl font-bold">70%</p>
                <p className="text-[#0a0f5c]/70 text-sm mt-1">Practical Training</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex-1 text-center">
                <p className="text-[#0a0f5c] text-3xl font-bold">100%</p>
                <p className="text-gray-500 text-sm mt-1">Job Assurance</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="bg-[#1b3a4f] rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center px-8">
                <img src="/logo1.png" alt="FPMI" className="w-40 h-40 object-contain mx-auto mb-6" />
                <p className="text-white text-xl font-bold">Flash Prime Media Institute</p>
                <p className="text-[#f5c518] mt-2">Easy Way To Excellence</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#f5c518] rounded-2xl p-4 md:p-5 shadow-lg">
              <p className="text-[#0a0f5c] font-bold text-xl md:text-2xl">1000+</p>
              <p className="text-[#0a0f5c]/70 text-sm">Happy Graduates</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#f5c518] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1b3a4f]/10 group-hover:bg-[#f5c518] flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-[#0a0f5c] group-hover:text-[#0a0f5c]" />
                </div>
                <h3 className="text-[#0a0f5c] font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}