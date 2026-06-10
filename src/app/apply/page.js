import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ApplyPage from "@/components/sections/ApplyPage"

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