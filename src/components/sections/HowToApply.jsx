"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { CreditCard, FileText, Send, Phone } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CreditCard,
    title: "Pay Registration Fee",
    description: "Pay the GH¢ 100 registration fee online via Mobile Money or visit the school in person to pay at the front desk.",
    color: "#f5c518",
  },
  {
    number: "02",
    icon: FileText,
    title: "Access Application Form",
    description: "Once payment is confirmed your application form is unlocked. Fill in your personal details, qualifications and program of choice.",
    color: "#00b4d8",
  },
  {
    number: "03",
    icon: Send,
    title: "Submit Your Application",
    description: "Review your details carefully and submit your completed application form. You'll receive a reference number immediately.",
    color: "#0a0f5c",
  },
  {
    number: "04",
    icon: Phone,
    title: "Await Confirmation",
    description: "Our admissions team will review your application and contact you within 2 working days to confirm your enrollment.",
    color: "#22c55e",
  },
]

export default function HowToApply() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            How to Apply
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Joining FPMI is straightforward. Follow these four simple steps to secure your spot in your chosen program.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {i < steps.length - 1 && (
  <div className="hidden xl:block absolute top-8 left-full h-0.5 bg-gray-100 z-0" style={{ width: "calc(100% - 3rem)" }} />
)}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative z-10 hover:border-[#f5c518] hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: step.color }}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-4xl font-black text-gray-100">{step.number}</span>
                  </div>
                  <h3 className="text-[#0a0f5c] font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-[#0a0f5c] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#f5c518] text-sm font-semibold uppercase tracking-widest">Online Application</span>
              <h3 className="text-white text-2xl font-bold mt-3 mb-2">Apply from Anywhere</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Complete your application entirely online. Pay via Mobile Money and submit your form from the comfort of your home.
              </p>
            </div>
            <Link href="/apply" className="mt-6 inline-block bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-6 py-3 rounded-xl transition-all text-center text-sm">
              Apply Online Now
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#0a0f5c] text-sm font-semibold uppercase tracking-widest">Walk-in Application</span>
              <h3 className="text-[#0a0f5c] text-2xl font-bold mt-3 mb-2">Visit Us In Person</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Prefer to apply in person? Visit our admissions office Monday to Friday between 8am and 3pm. Bring a valid ID and your academic certificates.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-500 text-sm">📍 Accra-Ofankor Asofan, Tantra Hill, Pokuase main road</p>
                <p className="text-gray-500 text-sm">🕐 Monday — Friday: 8am — 3pm</p>
                <p className="text-gray-500 text-sm">📋 Bring: Valid ID + Academic Certificates</p>
              </div>
            </div>
            <Link href="/contact" className="mt-6 inline-block border border-[#0a0f5c] text-[#0a0f5c] hover:bg-[#0a0f5c] hover:text-white font-bold px-6 py-3 rounded-xl transition-all text-center text-sm">
              Get Directions
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}