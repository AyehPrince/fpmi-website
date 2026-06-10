import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import About from "@/components/sections/About"
import Facilities from "@/components/sections/Facilities"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <About />
        <Facilities />
      </div>
      <Footer />
    </main>
  )
}