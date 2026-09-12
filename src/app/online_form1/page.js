import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import OnlineAdmissionForm from "@/components/sections/OnlineAdmissionForm"

// Deliberately excluded from the site nav and from sitemap.js — this page is
// only ever reached via a direct link shared with applicants who've paid
// locally by another arranged method. It's not password-protected (anyone
// with the link can open and submit it), just not advertised anywhere on
// the site, and the URL and page content are both intentionally generic.
export const metadata = {
  title: "Online Admission Form | Flash Prime Media Institute",
  robots: { index: false, follow: false },
}

export default function OnlineFormPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <OnlineAdmissionForm />
      </div>
      <Footer />
    </main>
  )
}