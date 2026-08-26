// src/app/gallery/page.js
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import Gallery from "@/components/sections/Gallery"

export const metadata = {
  title: "Gallery | Flash Prime Media Institute",
  description: "Photos from life at Flash Prime Media Institute — studios, classrooms, graduations and student activities.",
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <PageHeader title="Gallery" image="/interactive-media.jpg" />
        <Gallery />
      </div>
      <Footer />
    </main>
  )
}