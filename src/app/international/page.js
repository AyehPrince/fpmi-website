// src/app/international/page.js
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import InternationalPage from "@/components/sections/InternationalPage"

export const metadata = {
  title: "International Students | Flash Prime Media Institute",
  description: "Information for foreign and international students applying to Flash Prime Media Institute in Accra, Ghana — eligible programs and fee structure.",
}

export default function International() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <PageHeader title="International Students" breadcrumbLabel="International Students" />
        <InternationalPage />
      </div>
      <Footer />
    </main>
  )
}