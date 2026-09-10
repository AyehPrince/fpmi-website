// The real organizational structure — 5 departments. Course lists are
// exactly as given directly (the authoritative current curriculum).
// Descriptions, learning outcomes and career paths are drawn from the real
// per-program content in programs.js: Cosmetology, Fashion and Catering map
// 1:1 onto existing programs of the same name, so their content is reused
// unchanged. Journalism and Media Studies and Media Arts don't have a single
// matching program, so their content is a merge of the real programs that
// fall under each (Broadcast Journalism + Radio & TV Presenting; Media Arts
// Production + Graphic Design + Film & Video Editing) — nothing here is
// invented, everything traces back to real existing copy.
export const departments = [
  {
    slug: "journalism-and-media-studies",
    name: "Journalism and Media Studies",
    image: "/programs/broadcast-journalism.jpg",
    icon: "📺",
    accentColor: "#3b82f6",
    shortDescription: "Train in broadcast journalism, radio and TV presenting, and media law — preparing you for a career in news, radio and television.",
    fullDescription: "Our Journalism and Media Studies department trains well-rounded media professionals ready for today's fast-paced news environment. Students work in our professional TV studio from day one, learning to research, write, present and produce broadcast-standard news content — alongside dedicated voice training and on-air presenting skills for radio and television. Whether your goal is reporting from the field or hosting your own show, this department builds the full range of skills modern broadcasters need.",
    courses: ["Broadcast Journalism", "Radio and TV Presenting", "Media Law"],
    whatYouLearn: [
      "Journalism ethics and media law",
      "News writing and reporting for TV and radio",
      "On-camera presenting and anchoring techniques",
      "Voice training and diction",
      "Radio presenting and DJ techniques",
      "Interview techniques and source management",
      "Live broadcasting and studio operations",
      "Personal branding for media personalities",
    ],
    careerOpportunities: ["TV News Anchor", "Radio Presenter", "News Reporter", "TV Presenter", "Radio Host", "Media Producer", "Podcast Host", "Entertainment Reporter"],
  },
  {
    slug: "media-arts",
    name: "Media Arts",
    image: "/programs/media-arts-production.jpg",
    icon: "🎥",
    accentColor: "#f59e0b",
    shortDescription: "Hands-on training in camera handling, film and video editing, graphic design, MCR operating, and sound and light — the full technical skillset behind media production.",
    fullDescription: "Our Media Arts department is an intensive, hands-on program covering the full technical skillset behind media production — from camera mechanics and cinematography to post-production editing, graphic design and studio operations. Students train in our professional studios, working with industry-standard equipment and software, and graduate with a strong portfolio and the practical skills to work in any production environment.",
    courses: ["Camera Handling", "Film and Video Editing", "Graphic Design", "MCR Operating", "Sound and Light"],
    whatYouLearn: [
      "Camera mechanics and operation",
      "Lighting for video and film",
      "Adobe Premiere Pro and DaVinci Resolve",
      "Color grading and correction",
      "Adobe Photoshop and Illustrator",
      "Logo and brand identity design",
      "Studio and location shooting",
      "Portfolio development",
    ],
    careerOpportunities: ["Camera Operator", "Videographer", "Graphic Designer", "Video Editor", "Studio Technician", "Content Creator", "Motion Graphics Designer", "Cinematographer"],
  },
  {
    slug: "cosmetology",
    name: "Cosmetology",
    image: "/programs/cosmetology.jpg",
    icon: "💄",
    accentColor: "#14b8a6",
    shortDescription: "Master hair, skin and beauty techniques for a thriving career in the beauty industry.",
    fullDescription: "The Cosmetology program at FPMI trains students in the full spectrum of beauty and personal care services. From hairstyling and skincare to make-up artistry and nail technology, students develop the hands-on skills and client service abilities needed to build a successful career in the booming beauty industry. Our professional salon and beauty studio gives students real client experience before they graduate.",
    courses: ["Manicure", "Pedicure", "Bridal Makeup", "Hair Styling", "Massage", "Wig Cap Making", "Eye Lash Extension", "Facial Treatment"],
    whatYouLearn: [
      "Hair cutting, styling and coloring",
      "Skincare and facial treatments",
      "Professional make-up artistry",
      "Nail technology and nail art",
      "Beauty salon management",
      "Client consultation and communication",
      "Health and safety in beauty",
      "Building a beauty business",
    ],
    careerOpportunities: ["Make-up Artist", "Hairstylist", "Beauty Therapist", "Nail Technician", "Skincare Specialist", "Salon Owner", "Bridal Make-up Artist", "Film & TV Make-up Artist"],
  },
  {
    slug: "fashion",
    name: "Fashion",
    image: "/programs/fashion-design.jpg",
    icon: "👗",
    accentColor: "#22c55e",
    shortDescription: "Explore fashion illustration, garment construction and design for the modern industry.",
    fullDescription: "Our Fashion program is one of the most comprehensive fashion education offerings in Ghana. Students develop both the artistic vision and technical skills needed to succeed in the competitive fashion industry. From sketching your first design to producing a full collection, the program covers every aspect of fashion creation. Our graduates have gone on to launch their own labels, work with established fashion houses and dress some of Ghana's biggest names.",
    courses: ["Fashion Design", "Pattern Drafting", "Garment Construction", "Fashion Illustration", "Specimen Design", "Freehand Cutting"],
    whatYouLearn: [
      "Fashion illustration and sketching",
      "Pattern making and garment construction",
      "Fabric selection and textile knowledge",
      "Sewing techniques and tailoring",
      "Fashion history and trend forecasting",
      "Costume and costume design",
      "Fashion show production",
      "Business of fashion and entrepreneurship",
    ],
    careerOpportunities: ["Fashion Designer", "Costume Designer", "Clothing Manufacturer", "Fashion Stylist", "Pattern Maker", "Fashion Blogger", "Boutique Owner", "Fashion Entrepreneur"],
  },
  {
    slug: "catering",
    name: "Catering",
    image: "/programs/catering.jpg",
    icon: "🍽️",
    accentColor: "#f97316",
    shortDescription: "Gain essential skills in professional catering, kitchen and table etiquette, and hospitality management.",
    fullDescription: "Our Catering program prepares passionate individuals for rewarding careers in the culinary and hospitality industry. Students learn the essential skills needed to manage large-scale food production, master diverse cooking techniques, design menus, and deliver exceptional event service. With Ghana's hospitality and tourism sector growing rapidly, qualified catering professionals are in high demand for events, hotels, and corporate dining.",
    courses: ["Catering"],
    whatYouLearn: [
      "Fundamentals of professional food preparation",
      "Kitchen safety, hygiene, and food sanitation",
      "Menu planning and costing structures",
      "Table settings and fine dining etiquette",
      "Baking and pastry arts",
      "Large-scale event catering and buffet management",
      "Beverage service and mixology basics",
      "Customer service and hospitality management",
    ],
    careerOpportunities: ["Professional Caterer", "Head Chef / Sous Chef", "Event Food Coordinator", "Restaurant / Kitchen Manager", "Pastry Chef / Baker", "Buffet and Banquet Supervisor", "Independent Culinary Entrepreneur", "Institutional Food Service Provider"],
  },
]

// Identical across every existing program in programs.js — genuinely
// institute-wide, not program-specific, so safe to reuse at department level.
export const DEPARTMENT_ENTRY_REQUIREMENTS = "BECE certificate (18 years or above) or WASSCE/SSSCE. No grade limit."
export const DEPARTMENT_FEES = { registration: 200, admission: 800, tuition: 2500 }

// Which department each flagship program (the public-facing 8, from
// programs.js) falls under — the single source of truth for this mapping,
// used by both the programs page (to jump from the "at a glance" list to
// the right department card) and the Apply form (to know which department's
// specific courses to offer once a program is chosen).
export const PROGRAM_TO_DEPARTMENT = {
  "broadcast-journalism": "journalism-and-media-studies",
  "radio-tv-presenting": "journalism-and-media-studies",
  "media-arts-production": "media-arts",
  "graphic-design": "media-arts",
  "film-video-editing": "media-arts",
  "fashion-design": "fashion",
  "cosmetology": "cosmetology",
  "catering": "catering",
}