import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FAQ from "@/components/sections/FAQ"

export const metadata = {
  title: "FAQ | Flash Prime Media Institute",
  description: "Frequently asked questions about studying at Flash Prime Media Institute — entry requirements, fees, programs and more.",
}

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}