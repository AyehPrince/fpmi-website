import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Programs from "@/components/sections/Programs"

export const metadata = {
  title: "Programs | Flash Prime Media Institute",
  description: "Explore 8 professional programs at FPMI — Broadcast Journalism, Radio & TV Presenting, Graphic Design, Film Editing, Fashion Design, Cosmetology and more.",
}

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