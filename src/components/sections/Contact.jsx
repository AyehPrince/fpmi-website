"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const whatsappMessage = `Hello FPMI! My name is ${form.name}. I'm interested in the ${form.program || "your programs"} program. My email is ${form.email} and my phone is ${form.phone}. ${form.message}`
    const whatsappUrl = `https://wa.me/233577522323?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f5c518] font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f5c] mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Reach out to our admissions team and we'll guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a0f5c] flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-[#f5c518]" />
              </div>
              <div>
                <h3 className="text-[#0a0f5c] font-bold mb-1">Our Location</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Accra-Ofankor Asofan, Abodwese Junction, opposite Asofan Police Station, Tantra Hill, Pokuase main road, Accra, Ghana.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a0f5c] flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-[#f5c518]" />
              </div>
              <div>
                <h3 className="text-[#0a0f5c] font-bold mb-1">Phone</h3>
                <p className="text-gray-500 text-sm">+233 24 452 9371</p>
                <p className="text-gray-500 text-sm">+233 57 752 2323</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a0f5c] flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-[#f5c518]" />
              </div>
              <div>
                <h3 className="text-[#0a0f5c] font-bold mb-1">Email</h3>
                <p className="text-gray-500 text-sm">info@flashprimemediainstitute.com</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a0f5c] flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-[#f5c518]" />
              </div>
              <div>
                <h3 className="text-[#0a0f5c] font-bold mb-1">Office Hours</h3>
                <p className="text-gray-500 text-sm">Monday — Friday: 8am — 3pm</p>
                <p className="text-gray-500 text-sm">Saturday: By Appointment</p>
              </div>
            </div>

            <a
              href="https://wa.me/233577522323"
              // target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl transition-all hover:scale-105"
            >
              <MessageCircle size={22} />
              Chat with us on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <MessageCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-[#0a0f5c] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">We've opened WhatsApp with your message. Our team will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#0a0f5c] font-semibold text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <h3 className="text-[#0a0f5c] font-bold text-xl mb-6">Send us an Enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label className="text-gray-500 text-sm mb-1 block">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-sm mb-1 block">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="024XXXXXXX"
                        className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm mb-1 block">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm mb-1 block">Program of Interest</label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                    >
                      <option value="">Select a program</option>
                      <option>Broadcast Journalism</option>
                      <option>Radio & TV Presenting</option>
                      <option>Camera Handling</option>
                      <option>Graphic Design</option>
                      <option>Film & Video Editing</option>
                      <option>Fashion Design</option>
                      <option>Cosmetology</option>
                      <option>Care Giving</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm mb-1 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about yourself or ask any questions..."
                      className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0a0f5c] hover:bg-[#0d1875] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Enquiry via WhatsApp
                  </button>
                </form>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}