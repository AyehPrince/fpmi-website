"use client"
import { useState, useEffect } from "react"
import { CheckCircle, Send } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

const inputClass = "w-full bg-white border border-gray-200 text-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0f5c]"
const labelClass = "text-gray-500 text-sm mb-1 block"

function Field({ label, required, children }) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  )
}

function FileUpload({ file, onChange, accept, hint }) {
  return (
    <div>
      <label className="block cursor-pointer">
        <div className="border-2 border-dashed border-[#1b3a4f]/20 rounded-xl p-5 text-center hover:border-[#f5c518] transition-all">
          <div className="text-2xl mb-1">📎</div>
          <p className="text-sm font-semibold text-[#0a0f5c]">Click to Upload</p>
          {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
        </div>
        <input type="file" accept={accept} onChange={onChange} className="hidden" />
      </label>
      {file && (
        <div className="mt-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          <p className="text-green-700 text-xs">✓ {file.name}</p>
        </div>
      )}
    </div>
  )
}

const initialState = {
  course_of_study: "",
  section: "",
  first_name: "",
  last_name: "",
  gender: "",
  date_of_birth: "",
  mobile_number: "",
  email: "",
  nationality: "",
  language_spoken: "",
  current_residence: "",
  academic_qualification: "",
  will_be_in_hostel: "",
  how_heard_about_us: "",
  previous_school: "",
  medical_conditions: "",
  special_disability: "",
  parents_name: "",
  parents_phone: "",
  parents_occupation: "",
  sponsor_is: "",
  sponsor_name: "",
  sponsor_relation: "",
  sponsor_email: "",
  sponsor_phone: "",
  sponsor_occupation: "",
  sponsor_address: "",
  current_address: "",
  permanent_address: "",
}

export default function MomoAdmissionForm() {
  const [form, setForm] = useState(initialState)
  const [courseId, setCourseId] = useState("")
  const [studentPhoto, setStudentPhoto] = useState(null)
  const [document, setDocument] = useState(null)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    fetchCourses()
  }, [])

  async function fetchCourses() {
    const { data, error } = await supabase.from("courses").select("id,name").order("name")
    if (error) {
      console.error(error)
      return
    }
    setCourses(data || [])
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")

    if (!form.first_name || !form.gender || !form.date_of_birth || !form.mobile_number || !form.email || !courseId) {
      setError("Please fill in all required fields marked with *.")
      return
    }
    if (form.sponsor_is && (!form.sponsor_name || !form.sponsor_relation)) {
      setError("Sponsor Name and Sponsor Relation are required once you've selected who the sponsor is.")
      return
    }

    setLoading(true)
    try {
      let studentPhotoUrl = null
      if (studentPhoto) {
        const ext = studentPhoto.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
        // Same bucket the Paystack flow's passport photo already uses.
        const { error: uploadError } = await supabase.storage
          .from("passport-photos")
          .upload(fileName, studentPhoto)
        if (uploadError) throw uploadError
        studentPhotoUrl = supabase.storage.from("passport-photos").getPublicUrl(fileName).data.publicUrl
      }

      let documentUrl = null
      if (document) {
        const ext = document.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
        const { error: uploadError } = await supabase.storage
          .from("admission-documents")
          .upload(fileName, document)
        if (uploadError) throw uploadError
        documentUrl = supabase.storage.from("admission-documents").getPublicUrl(fileName).data.publicUrl
      }

      const ref = `MOMO-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

      const { error: insertError } = await supabase.from("applications").insert([
        {
          full_name: `${form.first_name} ${form.last_name}`.trim(),
          email: form.email,
          phone: form.mobile_number,
          nationality: form.nationality,
          gender: form.gender,
          date_of_birth: form.date_of_birth,
          address: form.current_address,
          course_id: courseId,
          program_name: form.course_of_study,
          guardian_name: form.parents_name,
          guardian_phone: form.parents_phone,
          guardian_occupation: form.parents_occupation,
          passport_photo_url: studentPhotoUrl,
          payment_reference: ref,
          // Clearly distinct from "paid" — this applicant claims to have
          // paid locally via Mobile Money, unverified until someone checks
          // it against the real transaction records.
          payment_status: "pending_momo_verification",
          application_status: "new",
          section: form.section,
          current_residence: form.current_residence,
          language_spoken: form.language_spoken,
          academic_qualification: form.academic_qualification,
          will_be_in_hostel: form.will_be_in_hostel,
          how_heard_about_us: form.how_heard_about_us,
          previous_school: form.previous_school,
          medical_conditions: form.medical_conditions,
          special_disability: form.special_disability,
          sponsor_is: form.sponsor_is,
          sponsor_name: form.sponsor_name,
          sponsor_relation: form.sponsor_relation,
          sponsor_email: form.sponsor_email,
          sponsor_phone: form.sponsor_phone,
          sponsor_occupation: form.sponsor_occupation,
          sponsor_address: form.sponsor_address,
          permanent_address: form.permanent_address,
          document_url: documentUrl,
        },
      ])
      if (insertError) throw insertError

      setReference(ref)
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Something went wrong submitting the form. Please try again, or contact admissions directly.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#f0f2f5" }}>
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center max-w-lg w-full">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h2 className="text-[#0a0f5c] font-bold text-2xl mb-2">Form Submitted</h2>
          <p className="text-gray-500 mb-2">Thank you — please keep your reference number safe.</p>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 my-6">
            <p className="text-gray-500 text-sm">Reference Number</p>
            <p className="text-[#0a0f5c] font-mono font-bold text-lg">{reference}</p>
          </div>
          <p className="text-gray-400 text-sm mb-8">Our admissions team will verify your payment and be in touch on the number you provided.</p>
          <Link href="/" className="inline-block bg-[#f5c518] hover:bg-yellow-400 text-[#0a0f5c] font-bold px-8 py-3 rounded-xl transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0f2f5" }}>
      <div style={{ backgroundColor: "#1b3a4f" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Online Admission Form</h1>
          <p className="text-white/60">For applicants who have already paid their registration fee locally via Mobile Money</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-700 text-sm">
            This form is only for applicants who have already paid their registration fee directly to FPMI's Mobile Money number. Please fill it in correctly and take note of your reference number after submitting.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#0a0f5c] font-bold text-lg mb-6">Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Course of Study" required>
                <select
                  value={courseId}
                  onChange={(e) => {
                    const selected = courses.find((c) => c.id === e.target.value)
                    setCourseId(selected?.id || "")
                    setForm((prev) => ({ ...prev, course_of_study: selected?.name || "" }))
                  }}
                  required
                  className={inputClass}
                >
                  <option value="">Select</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Section">
                <select name="section" value={form.section} onChange={handleChange} className={inputClass}>
                  <option value="">Select</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </Field>
              <Field label="First Name" required>
                <input name="first_name" value={form.first_name} onChange={handleChange} required className={inputClass} />
              </Field>
              <Field label="Last Name">
                <input name="last_name" value={form.last_name} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Gender" required>
                <select name="gender" value={form.gender} onChange={handleChange} required className={inputClass}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Field>
              <Field label="Date of Birth" required>
                <input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} required className={inputClass} />
              </Field>
              <Field label="Mobile Number" required>
                <input name="mobile_number" value={form.mobile_number} onChange={handleChange} required placeholder="024XXXXXXX" className={inputClass} />
              </Field>
              <Field label="Email" required>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
              </Field>
              <Field label="Nationality">
                <input name="nationality" value={form.nationality} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Language Spoken">
                <input name="language_spoken" value={form.language_spoken} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Current Residence">
                <input name="current_residence" value={form.current_residence} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Academic Qualification">
                <input name="academic_qualification" value={form.academic_qualification} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Will You Be In The Hostel?">
                <select name="will_be_in_hostel" value={form.will_be_in_hostel} onChange={handleChange} className={inputClass}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Field>
              <Field label="How Did You Hear About Us?">
                <input name="how_heard_about_us" value={form.how_heard_about_us} onChange={handleChange} placeholder="TV, Online, Friend, etc." className={inputClass} />
              </Field>
              <Field label="Previous School (Name / Year Completed)">
                <input name="previous_school" value={form.previous_school} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Student Photo">
                <FileUpload
                  file={studentPhoto}
                  accept="image/*"
                  hint="JPG or PNG, optional"
                  onChange={(e) => setStudentPhoto(e.target.files?.[0] || null)}
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <Field label="Medical Conditions (State If Any)">
                <textarea name="medical_conditions" value={form.medical_conditions} onChange={handleChange} rows={2} className={inputClass} />
              </Field>
              <Field label="Special Disability (Describe If Any)">
                <textarea name="special_disability" value={form.special_disability} onChange={handleChange} rows={2} className={inputClass} />
              </Field>
            </div>
          </div>

          {/* Parent Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#0a0f5c] font-bold text-lg mb-6">Parent Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Parents Name">
                <input name="parents_name" value={form.parents_name} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Parents Phone">
                <input name="parents_phone" value={form.parents_phone} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Parents Occupation">
                <input name="parents_occupation" value={form.parents_occupation} onChange={handleChange} className={inputClass} />
              </Field>
            </div>
          </div>

          {/* Sponsor Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#0a0f5c] font-bold text-lg mb-6">Sponsor Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="If Sponsor Is">
                <select name="sponsor_is" value={form.sponsor_is} onChange={handleChange} className={inputClass}>
                  <option value="">Select</option>
                  <option value="Parents">Parents</option>
                  <option value="Other">Other</option>
                </select>
              </Field>
              <div />
              <Field label="Sponsor Name" required={!!form.sponsor_is}>
                <input name="sponsor_name" value={form.sponsor_name} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Sponsor Relation" required={!!form.sponsor_is}>
                <input name="sponsor_relation" value={form.sponsor_relation} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Sponsor Email">
                <input type="email" name="sponsor_email" value={form.sponsor_email} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Sponsor Phone">
                <input name="sponsor_phone" value={form.sponsor_phone} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Sponsor Occupation">
                <input name="sponsor_occupation" value={form.sponsor_occupation} onChange={handleChange} className={inputClass} />
              </Field>
              <Field label="Sponsor Address">
                <input name="sponsor_address" value={form.sponsor_address} onChange={handleChange} className={inputClass} />
              </Field>
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#0a0f5c] font-bold text-lg mb-6">Student Address Details</h2>
            <div className="grid grid-cols-1 gap-4">
              <Field label="Current Address">
                <textarea name="current_address" value={form.current_address} onChange={handleChange} rows={2} className={inputClass} />
              </Field>
              <Field label="Permanent Address">
                <textarea name="permanent_address" value={form.permanent_address} onChange={handleChange} rows={2} className={inputClass} />
              </Field>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-[#0a0f5c] font-bold text-lg mb-6">Documents</h2>
            <Field label="Attach File If Any">
              <FileUpload
                file={document}
                hint="Optional — any file type"
                onChange={(e) => setDocument(e.target.files?.[0] || null)}
              />
            </Field>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1b3a4f] hover:bg-[#1d4a63] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}