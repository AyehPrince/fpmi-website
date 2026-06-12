import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ApplyPage from "@/components/sections/ApplyPage"

export const metadata = {
  title: "Apply Now | Flash Prime Media Institute",
  description: "Apply to Flash Prime Media Institute online. Pay your registration fee and submit your application form in minutes.",
}

export default function Apply() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ApplyPage />
      </div>
      <Footer />
    </main>
  )
}