"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What are the entry requirements to join FPMI?",
    answer: "We accept students with a BECE certificate (18 years or above) or WASSCE/SSSCE certificate with no grade limit. We also offer informal classes for those without any educational background, aged 20-40 years."
  },
  {
    question: "How much does it cost to enroll?",
    answer: "Fees vary by program. Generally, registration is GH¢ 100, admission is GH¢ 600 and tuition is GH¢ 1,980 per semester. International students pay in USD. Contact us for the full fee schedule for your chosen program."
  },
  {
    question: "How long are the programs?",
    answer: "Programs range from 6 months (Certificate) to 1 year (Professional Certificate) to 2 years (Diploma) depending on the course you choose."
  },
  {
    question: "Do you offer job placement after graduation?",
    answer: "Yes! We provide 100% job assurance alongside attachment and internship placements. Our strong industry connections help graduates land roles quickly after completing their programs."
  },
  {
    question: "Is accommodation available for students?",
    answer: "Yes, we have ultramodern hostel facilities available for students who need accommodation. Contact our admissions team for availability and pricing."
  },
  {
    question: "What is the teaching style at FPMI?",
    answer: "We follow a 70% practical, 30% theoretical approach. Students spend most of their time in real studio environments — TV studios, radio studios, fashion design rooms and more — getting hands-on experience."
  },
  {
    question: "Can international students apply?",
    answer: "Absolutely! We welcome international students. Fees for international students are charged in USD. Contact us for more details on the application process for international applicants."
  },
  {
    question: "When does the next intake begin?",
    answer: "We run intakes throughout the year. Contact our admissions office or fill out the enquiry form on this page to find out when the next intake for your chosen program begins."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about studying at Flash Prime Media Institute.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                openIndex === i ? "border-[#0a0f5c] shadow-sm" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold text-base transition-colors ${
                  openIndex === i ? "text-[#0a0f5c]" : "text-gray-700"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${
                  openIndex === i ? "bg-[#f5c518] rotate-180" : "bg-gray-100"
                }`}>
                  <ChevronDown size={16} className={openIndex === i ? "text-[#0a0f5c]" : "text-gray-500"} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 border-t border-gray-50">
                      <p className="text-gray-500 leading-relaxed pt-4 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}