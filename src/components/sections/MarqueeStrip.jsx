"use client"

const items = [
  "📺 Broadcast Journalism",
  "🎙️ Radio & TV Presenting",
  "🎥 Camera Handling",
  "🎨 Graphic Design",
  "🎬 Film & Video Editing",
  "👗 Fashion Design",
  "💄 Cosmetology",
  "🍽️ Catering",
  "🎓 100% Job Assurance",
  "⭐ 15+ Years of Excellence",
  "🏆 1000+ Graduates",
  "📍 Accra, Ghana",
]

export default function MarqueeStrip() {
  return (
    <div style={{ backgroundColor: "#f5c518" }} className="py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[#0a0f5c] font-semibold text-sm mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}