import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Programs from "@/components/sections/Programs"

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Programs />
      </div>
      <Footer />
    </main>
  )
}