import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import NewsDetail from "@/components/sections/NewsDetail"

export default async function NewsPostPage({ params }) {
  const { slug } = await params
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <NewsDetail slug={slug} />
      </div>
      <Footer />
    </main>
  )
}