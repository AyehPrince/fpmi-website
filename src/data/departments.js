// The real organizational structure — 5 departments. Course lists are
// exactly as given directly (the authoritative current curriculum).
// Descriptions and career paths are drawn from the real per-program content
// in programs.js: Cosmetology, Fashion and Catering map 1:1 onto existing
// programs of the same name, so their content is reused unchanged. Journalism
// and Media Studies and Media Arts don't have a single matching program, so
// their content is a merge of the real programs that fall under each
// (Broadcast Journalism + Radio & TV Presenting; Media Arts Production +
// Graphic Design + Film & Video Editing) — nothing here is invented.
export const departments = [
  {
    slug: "journalism-and-media-studies",
    name: "Journalism and Media Studies",
    image: "/programs/broadcast-journalism.jpg",
    accentColor: "#3b82f6",
    shortDescription: "Train in broadcast journalism, radio and TV presenting, and media law — preparing you for a career in news, radio and television.",
    courses: ["Broadcast Journalism", "Radio and TV Presenting", "Media Law"],
    careerOpportunities: ["TV News Anchor", "Radio Presenter", "News Reporter", "TV Presenter", "Radio Host", "Media Producer", "Podcast Host", "Entertainment Reporter"],
  },
  {
    slug: "media-arts",
    name: "Media Arts",
    image: "/programs/media-arts-production.jpg",
    accentColor: "#f59e0b",
    shortDescription: "Hands-on training in camera handling, film and video editing, graphic design, MCR operating, and sound and light — the full technical skillset behind media production.",
    courses: ["Camera Handling", "Film and Video Editing", "Graphic Design", "MCR Operating", "Sound and Light"],
    careerOpportunities: ["Camera Operator", "Videographer", "Graphic Designer", "Video Editor", "Studio Technician", "Content Creator", "Motion Graphics Designer", "Cinematographer"],
  },
  {
    slug: "cosmetology",
    name: "Cosmetology",
    image: "/programs/cosmetology.jpg",
    accentColor: "#14b8a6",
    shortDescription: "Master hair, skin and beauty techniques for a thriving career in the beauty industry.",
    courses: ["Manicure", "Pedicure", "Bridal Makeup", "Hair Styling", "Massage", "Wig Cap Making", "Eye Lash Extension", "Facial Treatment"],
    careerOpportunities: ["Make-up Artist", "Hairstylist", "Beauty Therapist", "Nail Technician", "Skincare Specialist", "Salon Owner", "Bridal Make-up Artist", "Film & TV Make-up Artist"],
  },
  {
    slug: "fashion",
    name: "Fashion",
    image: "/programs/fashion-design.jpg",
    accentColor: "#22c55e",
    shortDescription: "Explore fashion illustration, garment construction and design for the modern industry.",
    courses: ["Fashion Design", "Pattern Drafting", "Garment Construction", "Fashion Illustration", "Specimen Design", "Freehand Cutting"],
    careerOpportunities: ["Fashion Designer", "Costume Designer", "Clothing Manufacturer", "Fashion Stylist", "Pattern Maker", "Fashion Blogger", "Boutique Owner", "Fashion Entrepreneur"],
  },
  {
    slug: "catering",
    name: "Catering",
    image: "/programs/catering.jpg",
    accentColor: "#f97316",
    shortDescription: "Gain essential skills in professional catering, kitchen and table etiquette, and hospitality management.",
    courses: ["Catering"],
    careerOpportunities: ["Professional Caterer", "Head Chef / Sous Chef", "Event Food Coordinator", "Restaurant / Kitchen Manager", "Pastry Chef / Baker", "Buffet and Banquet Supervisor", "Independent Culinary Entrepreneur", "Institutional Food Service Provider"],
  },
]

// Identical across every existing program in programs.js — genuinely
// institute-wide, not program-specific, so safe to reuse at department level.
export const DEPARTMENT_ENTRY_REQUIREMENTS = "BECE certificate (18 years or above) or WASSCE/SSSCE. No grade limit."
export const DEPARTMENT_FEES = { registration: 200, admission: 800, tuition: 2500 }