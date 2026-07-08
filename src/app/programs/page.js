import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProgramsLongScroll from "@/components/sections/ProgramsLongScroll"

export const metadata = {
  title: "Programs | Flash Prime Media Institute",
  description: "Explore 8 professional programs at FPMI — Broadcast Journalism, Radio & TV Presenting, Graphic Design, Film Editing, Fashion Design, Cosmetology and more.",
}

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ProgramsLongScroll />
      </div>
      <Footer />
    </main>
  )
}