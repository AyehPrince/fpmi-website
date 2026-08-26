// src/app/faq/page.js
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import FAQ from "@/components/sections/FAQ"

export const metadata = {
  title: "FAQ | Flash Prime Media Institute",
  description: "Frequently asked questions about studying at Flash Prime Media Institute — entry requirements, fees, programs and more.",
}

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <PageHeader title="FAQ" breadcrumbLabel="FAQ" />
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}