import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MomoAdmissionForm from "@/components/sections/MomoAdmissionForm"

// Deliberately excluded from the site nav and from sitemap.js — this page is
// only ever reached via a direct link shared with applicants who've paid
// locally by Mobile Money. It's not password-protected (anyone with the
// link can open and submit it), just not advertised anywhere on the site.
export const metadata = {
  title: "Online Admission Form | Flash Prime Media Institute",
  robots: { index: false, follow: false },
}

export default function MomoAdmissionPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <MomoAdmissionForm />
      </div>
      <Footer />
    </main>
  )
}