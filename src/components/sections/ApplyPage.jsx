"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CreditCard, FileText, Send, Phone, CheckCircle, ArrowRight, Lock } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"



const steps = [
  { number: "01", icon: CreditCard, title: "Pay Registration Fee" },
  { number: "02", icon: FileText, title: "Fill Application Form" },
  { number: "03", icon: Send, title: "Submit Application" },
  { number: "04", icon: Phone, title: "Await Confirmation" },
]

export default function ApplyPage() {
  const [step, setStep] = useState("info")
  const [loading, setLoading] = useState(false)
  const [reference, setReference] = useState("")

  const [courses, setCourses] = useState([])

  useEffect(() => {
  fetchCourses()
}, [])

async function fetchCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("id,name")
    .order("name")

  if (error) {
    console.error(error)
    return
  }

  setCourses(data || [])
}

  const [basicInfo, setBasicInfo] = useState({
  full_name: "",
  email: "",
  phone: "",
  program: "",
  course_id: "",
})

 const [applicationForm, setApplicationForm] = useState({
  date_of_birth: "",
  gender: "",
  address: "",
  whatsapp_number: "",
  guardian_name: "",
  guardian_phone: "",
  passport_photo: null,
})

  function handleBasicChange(e) {
    const { name, value } = e.target
    setBasicInfo(prev => ({ ...prev, [name]: value }))
  }

  function handleFormChange(e) {
    const { name, value } = e.target
    setApplicationForm(prev => ({ ...prev, [name]: value }))
  }

  function handleFileChange(e) {
  const file = e.target.files?.[0]

  if (!file) return

  setApplicationForm(prev => ({
    ...prev,
    passport_photo: file,
  }))
}

  function handleProceedToPayment(e) {
    e.preventDefault()
    if (
  !basicInfo.full_name ||
  !basicInfo.phone ||
  !basicInfo.course_id
) {
      alert("Please fill in your name, phone and program of interest")
      return
    }
    setStep("payment")
  }

  function handlePayWithPaystack() {
    setLoading(true)
    const PaystackPop = window.PaystackPop
    if (!PaystackPop) {
      alert("Payment system not loaded. Please refresh and try again.")
      setLoading(false)
      return
    }

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: basicInfo.email || `${basicInfo.phone}@fpmi.edu.gh`,
      amount: 15300,
      currency: "GHS",
      ref: `FPMI-${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: "Applicant Name", variable_name: "applicant_name", value: basicInfo.full_name },
          { display_name: "Program", variable_name: "program", value: basicInfo.program },
          { display_name: "Phone", variable_name: "phone", value: basicInfo.phone },
        ]
      },
      callback: function(response) {
        setReference(response.reference)
        setStep("form")
        setLoading(false)
      },
      onClose: function() {
        setLoading(false)
      }
    })
    handler.openIframe()
  }

  async function handleSubmitApplication(e) {
  e.preventDefault()

  try {
    setLoading(true)

    let passportPhotoUrl = null

    if (applicationForm.passport_photo) {
      const fileExt = applicationForm.passport_photo.name.split(".").pop()

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from("passport-photos")
        .upload(fileName, applicationForm.passport_photo)

      if (uploadError) throw uploadError

      const { data } = supabase.storage
        .from("passport-photos")
        .getPublicUrl(fileName)

      passportPhotoUrl = data.publicUrl
    } 

    const { error } = await supabase
      .from("applications")
      .insert([
        {
          full_name: basicInfo.full_name,
          email: basicInfo.email,
          phone: basicInfo.phone,
          whatsapp_number: applicationForm.whatsapp_number,
          gender: applicationForm.gender,
          date_of_birth: applicationForm.date_of_birth,
          address: applicationForm.address,
          course_id: basicInfo.course_id,
          program_name: basicInfo.program,
          guardian_name: applicationForm.guardian_name,
          guardian_phone: applicationForm.guardian_phone,
          passport_photo_url: passportPhotoUrl,
          payment_reference: reference,
          payment_status: "paid",
          application_status: "new",
        },
      ])

    if (error) throw error

    setStep("success")
  } catch (error) {
  console.error(error)
  alert(error.message)
} finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0f2f5" }}>

      <div style={{ backgroundColor: "#0a0f5c" }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">Apply to FPMI</h1>
          <p className="text-white/60 text-center text-lg">Begin your journey to excellence today</p>

          <div className="flex items-center justify-center gap-2 mt-10">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = (step === "info" && i === 0) || (step === "payment" && i === 1) || (step === "form" && i === 2) || (step === "success" && i === 3)
              const isDone = (step === "payment" && i === 0) || (step === "form" && i <= 1) || (step === "success" && i <= 2)
              return (
                <div key={s.number} className="flex items-center gap-2">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-all ${isActive ? "bg-[#f5c518] text-[#0a0f5c]" : isDone ? "bg-green-500 text-white" : "bg-white/10 text-white/50"}`}>
                    {isDone ? <CheckCircle size={14} /> : <Icon size={14} />}
                    <span className="hidden sm:inline">{s.title}</span>
                    <span className="sm:hidden">{s.number}</span>
                  </div>
                  {i < steps.length - 1 && <ArrowRight size={14} className="text-white/30 flex-shrink-0" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {step === "info" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f5c518] flex items-center justify-center">
                  <CreditCard size={20} className="text-[#0a0f5c]" />
                </div>
                <div>
                  <h2 className="text-[#0a0f5c] font-bold text-xl">Basic Information</h2>
                  <p className="text-gray-400 text-sm">Fill in your details to proceed to payment</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-amber-700 text-sm font-semibold mb-1">💳 Payment Required</p>
                <p className="text-amber-600 text-sm">A non-refundable registration fee of <strong>GH¢ 153</strong> is required to access the application form. This prevents spam and ensures serious applicants only.</p>
              </div>

              <form onSubmit={handleProceedToPayment} className="space-y-4">
                <div>
                  <label className="text-gray-500 text-sm mb-1 block">Full Name *</label>
                  <input name="full_name" value={basicInfo.full_name} onChange={handleBasicChange} required placeholder="Your full name" className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-sm mb-1 block">Phone Number *</label>
                    <input name="phone" value={basicInfo.phone} onChange={handleBasicChange} required placeholder="024XXXXXXX" className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]" />
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm mb-1 block">Email Address</label>
                    <input name="email" value={basicInfo.email} onChange={handleBasicChange} placeholder="your@email.com" className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-sm mb-1 block">Program of Interest *</label>
               <select
  value={basicInfo.course_id}
  onChange={(e) => {
    const selectedCourse = courses.find(
      (course) => course.id === e.target.value
    )

    setBasicInfo((prev) => ({
      ...prev,
      course_id: selectedCourse?.id || "",
      program: selectedCourse?.name || "",
    }))
  }}
  required
  className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
>
  <option value="">Select a program</option>

  {courses.map((course) => (
    <option
      key={course.id}
      value={course.id}
    >
      {course.name}
    </option>
  ))}
</select>
                </div>
                <button type="submit" className="w-full bg-[#0a0f5c] hover:bg-[#0d1875] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  Proceed to Payment
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">Prefer to apply in person?{" "}
                <Link href="/contact" className="text-[#0a0f5c] font-semibold hover:text-[#f5c518] transition-colors">
                  Visit our campus
                </Link>
              </p>
            </div>
          </motion.div>
        )}

        {step === "payment" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0a0f5c] flex items-center justify-center">
                  <Lock size={20} className="text-[#f5c518]" />
                </div>
                <div>
                  <h2 className="text-[#0a0f5c] font-bold text-xl">Pay Registration Fee</h2>
                  <p className="text-gray-400 text-sm">Secure payment via Paystack</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-500 text-sm">Applicant</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{basicInfo.full_name}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-500 text-sm">Program</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{basicInfo.program}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-gray-700 font-bold">Registration Fee</span>
                  <span className="text-[#0a0f5c] font-bold text-lg">GH¢ 153</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <p className="text-blue-700 text-sm">🔒 Your payment is secured by Paystack. We accept Mobile Money (MTN, Vodafone, AirtelTigo) and bank cards.</p>
              </div>

              <button onClick={handlePayWithPaystack} disabled={loading} className="w-full bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                <CreditCard size={20} />
                {loading ? "Processing..." : "Pay GH¢ 153 Now"}
              </button>

              <button onClick={() => setStep("info")} className="w-full mt-3 border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium px-6 py-3 rounded-xl transition-all text-sm">
                Go Back
              </button>
            </div>
          </motion.div>
        )}

        {step === "form" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <div>
                <p className="text-green-700 font-semibold text-sm">Payment Successful!</p>
                <p className="text-green-600 text-xs">Reference: {reference}</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8] flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[#0a0f5c] font-bold text-xl">Application Form</h2>
                  <p className="text-gray-400 text-sm">Complete your application details</p>
                </div>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-6">

  {/* Applicant Details */}
  <div className="bg-[#0a0f5c]/5 border border-[#0a0f5c]/10 rounded-2xl p-6">
    <h3 className="text-[#0a0f5c] font-bold text-lg mb-4">
      Applicant Details
    </h3>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Full Name
        </label>
        <input
          value={basicInfo.full_name}
          readOnly
          className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Email Address
        </label>
        <input
          value={basicInfo.email}
          readOnly
          className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Phone Number
        </label>
        <input
          value={basicInfo.phone}
          readOnly
          className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Program Applied For
        </label>
        <input
          value={basicInfo.program}
          readOnly
          className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700"
        />
      </div>
    </div>
  </div>

  {/* Personal Information */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6">
    <h3 className="text-[#0a0f5c] font-bold text-lg mb-4">
      Personal Information
    </h3>

    <div className="grid md:grid-cols-2 gap-4">

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Gender *
        </label>
        <select
          required
          name="gender"
          value={applicationForm.gender}
          onChange={handleFormChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Date of Birth *
        </label>
        <input
          required
          type="date"
          name="date_of_birth"
          value={applicationForm.date_of_birth}
          onChange={handleFormChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          WhatsApp Number
        </label>
        <input
          name="whatsapp_number"
          value={applicationForm.whatsapp_number}
          onChange={handleFormChange}
          placeholder="024XXXXXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Residential Address *
        </label>
        <input
          required
          name="address"
          value={applicationForm.address}
          onChange={handleFormChange}
          placeholder="Your Address"
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        />
      </div>
    </div>
  </div>

  {/* Guardian Information */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6">
    <h3 className="text-[#0a0f5c] font-bold text-lg mb-4">
      Parent / Guardian Information
    </h3>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Parent / Guardian Name *
        </label>
        <input
          required
          name="guardian_name"
          value={applicationForm.guardian_name}
          onChange={handleFormChange}
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        />
      </div>

      <div>
        <label className="text-gray-500 text-sm block mb-1">
          Parent / Guardian Phone *
        </label>
        <input
          required
          name="guardian_phone"
          value={applicationForm.guardian_phone}
          onChange={handleFormChange}
          placeholder="024XXXXXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-3"
        />
      </div>
    </div>
  </div>

  {/* Passport Photo */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6">
    <h3 className="text-[#0a0f5c] font-bold text-lg mb-4">
      Passport Photograph
    </h3>

    <label className="block">
      <div className="border-2 border-dashed border-[#0a0f5c]/20 rounded-2xl p-10 text-center cursor-pointer hover:border-[#f5c518] transition-all">
        <div className="text-4xl mb-3">📷</div>

        <p className="font-semibold text-[#0a0f5c]">
          Upload Passport Photo
        </p>

        <p className="text-sm text-gray-500 mt-2">
          JPG, PNG or JPEG (Maximum 5MB)
        </p>
      </div>

      <input
        type="file"
        accept="image/*"
        required
        onChange={handleFileChange}
        className="hidden"
      />
    </label>

    {applicationForm.passport_photo && (
      <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3">
        <p className="text-green-700 text-sm">
          ✓ {applicationForm.passport_photo.name}
        </p>
      </div>
    )}
  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-[#0a0f5c] hover:bg-[#0d1875] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
  >
    <Send size={18} />
    {loading ? "Submitting..." : "Submit Application"}
  </button>

</form>
            </div>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h2 className="text-[#0a0f5c] font-bold text-2xl mb-2">Application Submitted!</h2>
              <p className="text-gray-500 mb-2">Thank you for applying to Flash Prime Media Institute.</p>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 my-6 text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Applicant</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{basicInfo.full_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Program</span>
                  <span className="text-[#0a0f5c] font-semibold text-sm">{basicInfo.program}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Payment Reference</span>
                  <span className="text-[#0a0f5c] font-mono text-sm">{reference}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-8">Our admissions team will contact you on <strong className="text-[#0a0f5c]">{basicInfo.phone}</strong> within 2 working days to confirm your enrollment.</p>
              <Link href="/" className="inline-block bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-3 rounded-xl transition-all">
                Back to Home
              </Link>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}