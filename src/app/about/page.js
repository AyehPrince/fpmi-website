// src/app/about/page.js
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import About from "@/components/sections/About"
import Facilities from "@/components/sections/Facilities"

export const metadata = {
  title: "About Us | Flash Prime Media Institute",
  description: "Founded in 2017 by Clement Amankwah, FPMI is Ghana's premier media and creative arts institute in Accra with professional TV studios, radio studios and more.",
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <PageHeader title="About Us" image="/campus-life.jpg" />
        <About />
        <Facilities />
      </div>
      <Footer />
    </main>
  )
}