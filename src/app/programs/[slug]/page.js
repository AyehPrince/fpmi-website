import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ProgramDetail from "@/components/sections/ProgramDetail"
import { programs } from "@/data/programs"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return programs.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const program = programs.find(p => p.slug === slug)
  if (!program) return {}
  return {
    title: `${program.name} | Flash Prime Media Institute`,
    description: program.shortDescription,
  }
}

export default async function ProgramPage({ params }) {
  const { slug } = await params
  const program = programs.find(p => p.slug === slug)
  if (!program) notFound()

  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ProgramDetail program={program} />
      </div>
      <Footer />
    </main>
  )
}