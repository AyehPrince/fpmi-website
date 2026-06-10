"use client"
import { motion } from "framer-motion"
import { Tv, Radio, Camera, Scissors, Sparkles, Wifi, Home, Users } from "lucide-react"

const facilities = [
  {
    icon: Tv,
    title: "Television Studio",
    description: "Professional TV studio with broadcast-quality cameras, lighting rigs and green screen capabilities.",
  },
  {
    icon: Radio,
    title: "Radio Studio",
    description: "Fully equipped radio studio with professional mixing boards, microphones and live broadcasting setup.",
  },
  {
    icon: Camera,
    title: "Master Control Room",
    description: "State-of-the-art MCR with professional editing suites and post-production equipment.",
  },
  {
    icon: Scissors,
    title: "Fashion Design Room",
    description: "Spacious design studio with cutting tables, sewing machines and a dedicated fitting room.",
  },
  {
    icon: Sparkles,
    title: "Hair & Make-up Studio",
    description: "Professional beauty studio equipped for cosmetology training and special effects make-up.",
  },
  {
    icon: Wifi,
    title: "ICT Lab",
    description: "Modern computer lab with industry-standard software for graphic design, editing and web development.",
  },
  {
    icon: Home,
    title: "Student Hostel",
    description: "Ultramodern hostel facilities providing a comfortable and secure living environment for students.",
  },
  {
    icon: Users,
    title: "Lecture Halls",
    description: "Well-furnished lecture halls designed for both theoretical learning and group discussions.",
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">World Class</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            Our Facilities
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Train in professional-grade environments that mirror real industry settings — so you're ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-[#0a0f5c] hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a0f5c] group-hover:bg-[#f5c518] flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-white group-hover:text-[#0a0f5c] transition-colors" />
                </div>
                <h3 className="text-[#0a0f5c] font-bold text-base mb-2">{facility.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 bg-[#0a0f5c] rounded-3xl p-6 md:p-10 flex flex-col justify-between min-h-48">
            <div>
              <span className="text-[#f5c518] text-sm font-semibold uppercase tracking-widest">Our Location</span>
              <h3 className="text-white text-2xl font-bold mt-3 mb-2">Find Us in Accra</h3>
              <p className="text-white/60 leading-relaxed">
                Accra-Ofankor Asofan, Abodwese Junction, opposite Asofan Police Station, Tantra Hill, Pokuase main road, Accra, Ghana.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">GPS: GW-0541-0170</span>
              <span className="bg-[#f5c518]/20 text-[#f5c518] text-sm px-4 py-2 rounded-full">Rainbow Street, Accra</span>
            </div>
          </div>
          <div className="bg-[#f5c518] rounded-3xl p-6 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[#0a0f5c] text-sm font-semibold uppercase tracking-widest">School Hours</span>
              <h3 className="text-[#0a0f5c] text-2xl font-bold mt-3 mb-4">When We're Open</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#0a0f5c]/70 text-sm">Monday — Friday</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">8am — 3pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0a0f5c]/70 text-sm">Saturday</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0a0f5c]/70 text-sm">Sunday</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}