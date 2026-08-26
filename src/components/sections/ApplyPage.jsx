// src/components/sections/ApplyPage.jsx
"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CreditCard, FileText, Send, Phone, CheckCircle, ArrowRight, Lock, Globe } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

const steps = [
  { number: "01", icon: CreditCard, title: "Pay Registration Fee" },
  { number: "02", icon: FileText, title: "Fill Application Form" },
  { number: "03", icon: Send, title: "Submit Application" },
  { number: "04", icon: Phone, title: "Await Confirmation" },
]

// Paystack accounts registered in Ghana can only charge in GHS — USD isn't an
// option here (Paystack currently only allows USD-denominated charging for
// Nigeria- and Kenya-based accounts). International cards still work fine on
// a GHS charge; the cardholder's own bank converts from their card's currency
// automatically, the same way any foreign card works at a local shop.
// This rate is a manually-set approximation, not a live feed — GHS/USD moves,
// so it's worth checking and nudging this number every so often.
const USD_TO_GHS_RATE = 11.5
const INTERNATIONAL_REGISTRATION_USD = 50
const INTERNATIONAL_REGISTRATION_GHS_PESEWAS = Math.round(
  INTERNATIONAL_REGISTRATION_USD * USD_TO_GHS_RATE * 100
)
const INTERNATIONAL_REGISTRATION_GHS_DISPLAY = (
  INTERNATIONAL_REGISTRATION_GHS_PESEWAS / 100
).toFixed(0)

const COUNTRIES = [
  "Ghana",
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (DRC)", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe",
  "Other",
]

export default function ApplyPage() {
  const [step, setStep] = useState("info")
  const [loading, setLoading] = useState(false)
  const [reference, setReference] = useState("")

  const [resumeReference, setResumeReference] = useState("")
  const [resumePhone, setResumePhone] = useState("")
  const [resumeLoading, setResumeLoading] = useState(false)
  const [resumeError, setResumeError] = useState("")

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
  nationality: "Ghana",
})

  // International track kicks in the moment nationality isn't Ghana. Drives the
  // fee shown/charged and the payment channels. Every program is open to
  // international applicants — it's the international track itself that runs
  // a flat 2 years, not a restriction on which program they can pick.
  const isInternational = basicInfo.nationality !== "" && basicInfo.nationality !== "Ghana"

  const eligibleCourses = courses

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

  function handleNationalityChange(e) {
    const value = e.target.value
    // Reset the program choice on nationality change — switching in or out of
    // the international track changes which programs are even valid options,
    // so a stale selection could otherwise linger.
    setBasicInfo(prev => ({ ...prev, nationality: value, course_id: "", program: "" }))
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

    // Random suffix so references can't be guessed by trying nearby timestamps —
    // this matters once a reference alone can unlock someone's application form.
    const randomSuffix = Math.random().toString(36).slice(2, 10)
    const refPrefix = isInternational ? "FPMI-INTL" : "FPMI"
    const paystackRef = `${refPrefix}-${Date.now().toString(36)}-${randomSuffix}`

    const payAmount = isInternational ? INTERNATIONAL_REGISTRATION_GHS_PESEWAS : 15300

    const setupConfig = {
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: basicInfo.email || `${basicInfo.phone}@fpmi.edu.gh`,
      amount: payAmount,
      currency: "GHS",
      ref: paystackRef,
      metadata: {
        custom_fields: [
          { display_name: "Applicant Name", variable_name: "applicant_name", value: basicInfo.full_name },
          { display_name: "Program", variable_name: "program", value: basicInfo.program },
          { display_name: "Phone", variable_name: "phone", value: basicInfo.phone },
          { display_name: "Nationality", variable_name: "nationality", value: basicInfo.nationality },
        ]
      },
      callback: async function(response) {
        // Record the payment the instant Paystack confirms it — before the
        // applicant has to fill in a single field of the actual form. If their
        // connection drops right now, this row is already saved, and they can
        // come back later and resume with their reference instead of paying again.
        try {
          await supabase.from("payment_references").insert([
            {
              reference: response.reference,
              full_name: basicInfo.full_name,
              email: basicInfo.email,
              phone: basicInfo.phone,
              course_id: basicInfo.course_id,
              program_name: basicInfo.program,
              amount: payAmount,
              nationality: basicInfo.nationality,
            },
          ])
        } catch (err) {
          // Don't block them from continuing just because this log-write failed —
          // they've already paid. Just note it so it can be checked manually.
          console.error("Could not record payment_references row:", err)
        }

        setReference(response.reference)
        setStep("form")
        setLoading(false)
      },
      onClose: function() {
        setLoading(false)
      }
    }

    // International cards work fine on a GHS charge, but Mobile Money doesn't
    // make sense for a foreign cardholder — restrict to card only.
    if (isInternational) {
      setupConfig.channels = ["card"]
    }

    const handler = PaystackPop.setup(setupConfig)
    handler.openIframe()
  }

  async function handleResumeLookup(e) {
    e.preventDefault()
    setResumeError("")

    if (!resumeReference.trim() || !resumePhone.trim()) {
      setResumeError("Enter both your payment reference and the phone number you paid with.")
      return
    }

    setResumeLoading(true)
    try {
      const { data, error } = await supabase.rpc("lookup_payment_reference", {
        p_reference: resumeReference.trim(),
        p_phone: resumePhone.trim(),
      })

      if (error) throw error

      if (!data || data.length === 0) {
        setResumeError("We couldn't find an unused payment matching that reference and phone number. Double-check both, or reach us on WhatsApp if you're stuck.")
        return
      }

      const record = data[0]
      setBasicInfo({
        full_name: record.full_name || "",
        email: record.email || "",
        phone: record.phone || "",
        program: record.program_name || "",
        course_id: record.course_id || "",
        nationality: record.nationality || "Ghana",
      })
      setReference(record.reference)
      setStep("form")
    } catch (err) {
      console.error(err)
      setResumeError("Something went wrong looking that up. Please try again in a moment.")
    } finally {
      setResumeLoading(false)
    }
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
          nationality: basicInfo.nationality,
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

    // Close out the reference so it can't be resumed again for a second application.
    try {
      await supabase.rpc("mark_payment_reference_used", { p_reference: reference })
    } catch (err) {
      console.error("Could not mark payment_references as used:", err)
    }

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

      <div style={{ backgroundColor: "#1b3a4f" }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">Apply to FPMI</h1>
          <p className="text-white/60 text-center text-lg">Begin your journey to excellence today</p>

          <div className="flex items-center justify-center gap-2 mt-10">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = (step === "info" && i === 0) || ((step === "payment" || step === "resume") && i === 1) || (step === "form" && i === 2) || (step === "success" && i === 3)
              const isDone = ((step === "payment" || step === "resume") && i === 0) || (step === "form" && i <= 1) || (step === "success" && i <= 2)
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

              <div className="bg-[#00b4d8]/5 border border-[#00b4d8]/25 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <p className="text-[#0a0f5c] font-semibold text-sm">Already paid the registration fee?</p>
                  <p className="text-gray-500 text-xs mt-0.5">If your form didn't open after paying, you don't need to pay again.</p>
                </div>
                <button
                  type="button"
                  onClick={() => { setResumeError(""); setStep("resume") }}
                  className="w-full sm:w-auto flex-shrink-0 bg-white border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm whitespace-nowrap"
                >
                  Continue to Form →
                </button>
              </div>

              {isInternational ? (
                <div className="bg-[#00b4d8]/5 border border-[#00b4d8]/25 rounded-xl p-4 mb-6">
                  <p className="text-[#0a0f5c] text-sm font-semibold mb-1 flex items-center gap-1.5">
                    <Globe size={15} /> International Student Track
                  </p>
                  <p className="text-gray-600 text-sm">
                    Because you selected a nationality outside Ghana, you're on our international track: choose any of our programs below — as an international student your program runs <strong>2 years</strong> regardless of which one you pick. Registration fee is <strong>${INTERNATIONAL_REGISTRATION_USD}</strong> (charged as GH¢ {INTERNATIONAL_REGISTRATION_GHS_DISPLAY} by card — international cards are converted automatically by your bank). See the <Link href="/international" className="underline font-semibold">International Students page</Link> for the full fee schedule.
                  </p>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-amber-700 text-sm font-semibold mb-1">💳 Payment Required</p>
                  <p className="text-amber-600 text-sm">A non-refundable registration fee of <strong>GH¢ 153</strong> is required to access the application form. This prevents spam and ensures serious applicants only.</p>
                </div>
              )}

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
                  <label className="text-gray-500 text-sm mb-1 block">Nationality *</label>
                  <select
                    name="nationality"
                    value={basicInfo.nationality}
                    onChange={handleNationalityChange}
                    required
                    className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                  >
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-gray-500 text-sm mb-1 block">Program of Interest *</label>
               <select
  value={basicInfo.course_id}
  onChange={(e) => {
    const selectedCourse = eligibleCourses.find(
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

  {eligibleCourses.map((course) => (
    <option
      key={course.id}
      value={course.id}
    >
      {course.name}
    </option>
  ))}
</select>
                </div>
                <button type="submit" className="w-full bg-[#1b3a4f] hover:bg-[#1d4a63] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
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

        {step === "resume" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8] flex items-center justify-center">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[#0a0f5c] font-bold text-xl">Resume Your Application</h2>
                  <p className="text-gray-400 text-sm">Already paid the registration fee? Pick up where you left off</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <p className="text-blue-700 text-sm">Enter the payment reference and phone number you used when you paid. We'll take you straight to the form — no need to pay again.</p>
              </div>

              <form onSubmit={handleResumeLookup} className="space-y-4">
                <div>
                  <label className="text-gray-500 text-sm mb-1 block">Payment Reference *</label>
                  <input
                    value={resumeReference}
                    onChange={(e) => setResumeReference(e.target.value)}
                    required
                    placeholder="e.g. FPMI-mep3k9-a1b2c3"
                    className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-sm mb-1 block">Phone Number Used to Pay *</label>
                  <input
                    value={resumePhone}
                    onChange={(e) => setResumePhone(e.target.value)}
                    required
                    placeholder="024XXXXXXX"
                    className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
                  />
                </div>

                {resumeError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-red-600 text-sm">{resumeError}</p>
                  </div>
                )}

                <button type="submit" disabled={resumeLoading} className="w-full bg-[#1b3a4f] hover:bg-[#1d4a63] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {resumeLoading ? "Checking..." : "Continue to Form"}
                  <ArrowRight size={18} />
                </button>

                <button type="button" onClick={() => setStep("info")} className="w-full border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium px-6 py-3 rounded-xl transition-all text-sm">
                  Go Back
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {step === "payment" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1b3a4f] flex items-center justify-center">
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
                  <span className="text-[#0a0f5c] font-bold text-lg">
                    {isInternational ? `$${INTERNATIONAL_REGISTRATION_USD}` : "GH¢ 153"}
                  </span>
                </div>
                {isInternational && (
                  <p className="text-gray-400 text-xs mt-2 text-right">Charged as GH¢ {INTERNATIONAL_REGISTRATION_GHS_DISPLAY} — your bank converts this from your card's currency.</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <p className="text-blue-700 text-sm">
                  {isInternational
                    ? "🔒 Your payment is secured by Paystack. Card payment only for international applicants."
                    : "🔒 Your payment is secured by Paystack. We accept Mobile Money (MTN, Vodafone, AirtelTigo) and bank cards."}
                </p>
              </div>

              <button onClick={handlePayWithPaystack} disabled={loading} className="w-full bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                <CreditCard size={20} />
                {loading ? "Processing..." : isInternational ? `Pay $${INTERNATIONAL_REGISTRATION_USD} Now` : "Pay GH¢ 153 Now"}
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
  <div className="bg-[#1b3a4f]/5 border border-[#1b3a4f]/10 rounded-2xl p-6">
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
          Nationality
        </label>
        <input
          value={basicInfo.nationality}
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
      <div className="border-2 border-dashed border-[#1b3a4f]/20 rounded-2xl p-10 text-center cursor-pointer hover:border-[#f5c518] transition-all">
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
    className="w-full bg-[#1b3a4f] hover:bg-[#1d4a63] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
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