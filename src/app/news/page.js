// src/app/news/page.js
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import NewsList from "@/components/sections/NewsList"

export const metadata = {
  title: "News & Updates | Flash Prime Media Institute",
  description: "Latest news, achievements and announcements from Flash Prime Media Institute.",
}

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <PageHeader title="News & Updates" breadcrumbLabel="News" />
        <NewsList />
      </div>
      <Footer />
    </main>
  )
}