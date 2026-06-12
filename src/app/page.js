import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import MarqueeStrip from "@/components/sections/MarqueeStrip"
import About from "@/components/sections/About"
import ProgramsPreview from "@/components/sections/ProgramsPreview"
import HowToApply from "@/components/sections/HowToApply"
import TestimonialsStrip from "@/components/sections/TestimonialsStrip"
import CTABanner from "@/components/sections/CTABanner"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <ProgramsPreview />
      <HowToApply />
      <TestimonialsStrip />
      <CTABanner />
      <Footer />
    </main>
  )
}