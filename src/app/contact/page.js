import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Contact from "@/components/sections/Contact"

export const metadata = {
  title: "Contact Us | Flash Prime Media Institute",
  description: "Get in touch with Flash Prime Media Institute. Located at Accra-Ofankor Asofan, Tantra Hill, Pokuase main road, Accra, Ghana.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}