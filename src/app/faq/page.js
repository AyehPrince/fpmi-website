import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FAQ from "@/components/sections/FAQ"

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