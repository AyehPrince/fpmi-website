import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
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
        <NewsList />
      </div>
      <Footer />
    </main>
  )
}