export default function sitemap() {
  const baseUrl = "https://flashmediainstitute.com"

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/programs`, priority: 0.9 },
    { url: `${baseUrl}/gallery`, priority: 0.6 },
    { url: `${baseUrl}/news`, priority: 0.7 },
    { url: `${baseUrl}/faq`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
    { url: `${baseUrl}/apply`, priority: 0.9 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }))

  const programSlugs = [
    "broadcast-journalism",
    "radio-tv-presenting",
    "media-arts-production",
    "graphic-design",
    "film-video-editing",
    "fashion-design",
    "cosmetology",
    "catering",
  ]

  const programPages = programSlugs.map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...programPages]
}