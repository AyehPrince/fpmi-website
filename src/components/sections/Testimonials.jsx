"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Akosua Mensah",
    program: "Broadcast Journalism, 2022",
    text: "FPMI completely transformed my life. The practical training in the TV studio gave me the confidence to walk into any newsroom and deliver. I got a job at a major TV station 2 months after graduating.",
    initials: "AM",
  },
  {
    name: "Kwabena Asare",
    program: "Film & Video Editing, 2021",
    text: "The facilities here are world class. I learned editing techniques I never thought I'd master this quickly. The lecturers are industry professionals who genuinely care about your growth.",
    initials: "KA",
  },
  {
    name: "Efua Boateng",
    program: "Fashion Design, 2023",
    text: "I came in with zero sewing experience and left with a full portfolio and my own mini clothing line. FPMI gave me the skills and the business mindset to start my own brand.",
    initials: "EB",
  },
  {
    name: "Yaw Darko",
    program: "Graphic Design, 2022",
    text: "Best decision I ever made. The curriculum is up to date with industry trends. I was freelancing before I even finished the program. FPMI is the real deal.",
    initials: "YD",
  },
  {
    name: "Abena Osei",
    program: "Cosmetology, 2023",
    text: "The make-up studio is incredible. We trained with professional products and real clients. I now run my own beauty studio in Accra and I owe it all to FPMI.",
    initials: "AO",
  },
  {
    name: "Kofi Amponsah",
    program: "Radio & TV Presenting, 2021",
    text: "The radio studio training was incredibly realistic. My presenting skills improved dramatically and I landed an internship at a top radio station before graduation.",
    initials: "KA",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't take our word for it — hear directly from our graduates who are now thriving in their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#0a0f5c] to-[#0d1875] rounded-3xl p-10 text-center"
        >
          <h3 className="text-white text-3xl font-bold mb-3">Ready to Write Your Own Success Story?</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Join hundreds of graduates who have transformed their passion into a thriving career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/apply" className="w-full sm:w-auto bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
              Apply Now
            </a>
            <a href="#programs" className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-xl transition-all hover:bg-white/10">
              View Programs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}