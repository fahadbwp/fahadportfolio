export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  thumbnail: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  gallery: string[];
  tools: string[];
  liveUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Fahad Saleem",
  roleTitle: "AI Data Annotation · Lead Generation · Data Entry · Web Developer",
  tagline: "Fahad Saleem",
  heroPitch: "Virtual Assistant and Lead Generation Specialist experienced in B2B/B2C prospect lists, LinkedIn Sales Navigator extraction, and multi-tool email verification. From structured data management to AI-assisted web development, I manage operational tasks to support business workflows.",
  freeOffer: "Open for freelance projects, custom web builds & long-term data contracts — 100% quality guarantee.",

  location: "Bahawalpur, Pakistan",
  timezone: "GMT+5 (PKT)",
  status: "Available for freelance",
  availability: "30+ hrs / week",
  education: "BS Computer Science — The Islamia University of Bahawalpur (2021–2025, exams completed, result awaited)",
  experienceTenure: "Claru.ai (Feb–Oct 2026) · UP-Skiller (2023–2025)",
  email: "fahadsaleembwp@gmail.com",
  phone: "+92 317 2821353",
  website: "https://fahadsaleembwp.vercel.app/",
  github: "https://github.com/fahadbwp",
  upwork: "https://www.upwork.com/freelancers/~01402e2d3e4f4322b7?p=1974100444575100928",
  instagram: "https://www.instagram.com/fahdbwp",
  avatarUrl: "/fahad.jpg",
  resumeUrl: "/Fahad_Saleem_CV.pdf",
};

export const STATS = [
  { value: "3+ yrs", label: "Lead gen & data entry experience" },
  { value: "30+ hrs", label: "Available per week" },
  { value: "10", label: "Free sample leads on request" },
  { value: "100%", label: "Manual research & verification pass" }
];

export const CORE_SERVICES = [
  {
    code: "R01",
    title: "AI Data Annotation & Data Collection",
    description: "Real-world video data collection, image annotation, and AI training dataset labeling."
  },
  {
    code: "R02",
    title: "B2B Lead Generation & Data Entry",
    description: "Targeted prospect research, contact discovery, and structured data entry in Excel & Google Sheets."
  },
  {
    code: "R03",
    title: "LinkedIn Sales Navigator & Apollo",
    description: "Role- and industry-specific prospecting and outreach research."
  },
  {
    code: "R04",
    title: "AI-Assisted Web Development",
    description: "Modern web applications, creator tools, and developer utilities built with Next.js, React, and Python/Flask."
  }
];

export const SHIPPED_PROJECTS: Project[] = [
  {
    id: "plexudo-youtube-tools",
    title: "Plexudo — YouTube Creator Tools",
    category: "AI & Creator Analytics Platform",
    year: "2026",
    client: "Content Creators & Channel Managers",
    role: "Developer (Built with AI assistance)",
    duration: "Live",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    summary: "YouTube trend analysis, video insights, competitor research, and content strategy platform.",
    challenge: "Creators need instant video diagnostics, viral title ideas, and competitor channel audits using real metrics.",
    solution: "Developed an all-in-one web tool combining YouTube Data API v3 and Groq AI for fast creator analytics and content strategy insights.",
    result: "Live and active on Vercel with real-time video diagnostics and competitor audits.",
    liveUrl: "https://plexudo.vercel.app",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    ],
    tools: ["Python", "Flask", "JavaScript", "YouTube Data API", "Groq AI", "Vercel"]
  },
  {
    id: "ai-smart-text-utility",
    title: "AI Smart Text Utility",
    category: "Web Application · Developer Utility",
    year: "2026",
    client: "Open Source Utility",
    role: "Developer (Built with AI assistance)",
    duration: "Open Source",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    summary: "Text cleanup, formatting, JSON/CSV conversion, and AI writing features.",
    challenge: "Need for a fast, responsive utility to clean, format, convert, and prepare text and structured data.",
    solution: "Built a modern frontend utility with Next.js, React, TypeScript, and Tailwind CSS for instant in-browser text and data manipulation.",
    result: "Open-source codebase available on GitHub.",
    liveUrl: "https://github.com/fahadbwp/ai-text-utility",
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub"]
  },
  {
    id: "ecommerce-leads-upwork",
    title: "Ecommerce Leads — 2,500+ Verified Contacts",
    category: "B2B & B2C Lead Generation",
    year: "2024",
    client: "E-Commerce & Shopify Brand Clients",
    role: "Lead Generation & List Building Specialist",
    duration: "Delivered",
    thumbnail: "/ecommerce_leads_upwork.png",
    heroImage: "/ecommerce_leads_upwork.png",
    summary: "Collected 2,500+ leads of E-Commerce companies & Shopify brands across UK & USA with multi-pass email verification.",
    challenge: "Client needed verified decision-maker contacts (Founders, CMOs, and E-Commerce Managers) of Shopify and niche online stores with validated emails.",
    solution: "Conducted brand research across Shopify, Amazon, and niche online stores. Verified emails using Apollo.io, Hunter.io, and NeverBounce. Organized clean structured data in Excel and Google Sheets, removing invalid and duplicate entries.",
    result: "Supported client's outreach campaigns with validated contacts, delivering ready-to-use UK & USA datasets for marketing teams.",
    liveUrl: "https://www.upwork.com/freelancers/~01402e2d3e4f4322b7?p=1974100444575100928",
    gallery: [
      "/ecommerce_leads_upwork.png"
    ],
    tools: ["B2B Lead Generation", "Shopify Research", "Apollo.io", "Hunter.io", "NeverBounce", "Google Sheets", "List Building"]
  },
  {
    id: "nursing-facility-leads-upwork",
    title: "Nursing Facility & Assisted Living Lead Generation",
    category: "Healthcare & B2B Lead Gen",
    year: "2024",
    client: "Healthcare & Home Health Providers",
    role: "Lead Generation Specialist",
    duration: "Delivered",
    thumbnail: "/nursing_facility_leads_upwork.png",
    heroImage: "/nursing_facility_leads_upwork.png",
    summary: "Researched and generated verified leads for nursing facilities, assisted living communities & home health centers.",
    challenge: "Client required customized prospect lists of healthcare executives (CEOs, Directors & Administrators) across nursing facilities and assisted living organizations with verified direct emails and phone numbers.",
    solution: "Researched assisted living companies using LinkedIn Sales Navigator. Verified decision-maker emails with Hunter.io, Apollo.io, and NeverBounce. Removed duplicate entries and delivered clean Excel sheets with company name, email, phone, and role.",
    result: "Delivered structured, verified contact details for healthcare decision-makers, providing a reliable dataset for email outreach.",
    liveUrl: "https://www.upwork.com/freelancers/~01402e2d3e4f4322b7?p=1974099273644355584",
    gallery: [
      "/nursing_facility_leads_upwork.png"
    ],
    tools: ["Lead Generation", "Lead Generation Strategy", "LinkedIn Sales Navigator", "Apollo.io", "Hunter.io", "NeverBounce", "Excel"]
  },
  {
    id: "haveli-village-restaurant",
    title: "Haveli Village Restaurant",
    category: "Restaurant · Ordering System",
    year: "2025",
    client: "Haveli Village Management",
    role: "Full-Stack Web & AI Developer",
    duration: "3 Weeks",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    summary: "Full site with a live deals catalog, WhatsApp ordering, hall booking, customer reviews, and a connected admin dashboard for managing the menu.",
    challenge: "The restaurant needed an all-in-one digital presence to streamline customer direct WhatsApp orders, handle table/hall bookings without commission fees, and give managers instant menu update controls.",
    solution: "Engineered a high-performance modern web application with integrated deal catalogs, instant WhatsApp checkout generator, dynamic review carousel, and password-protected admin menu manager.",
    result: "Shipped live to production on Netlify with zero hosting overhead and automated daily direct customer orders.",
    liveUrl: "https://haveli-village-restaurant.vercel.app/",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
    ],
    tools: ["AI-Assisted Development", "React", "Tailwind CSS", "Netlify", "WhatsApp API"]
  }
];


export const TOOL_STACK = [
  {
    category: "Sourcing",
    tools: ["Sales Navigator", "Apollo.io", "Hunter.io", "RocketReach", "Snov.io"]
  },
  {
    category: "Verification",
    tools: ["NeverBounce", "ZeroBounce", "Debounce.io"]
  },
  {
    category: "Data & CRM",
    tools: ["Google Sheets", "Excel", "Airtable", "HubSpot", "Zoho", "Salesforce", "Pipedrive"]
  },
  {
    category: "Research",
    tools: ["Crunchbase", "Bloomberg", "Yelp", "ThomasNet"]
  },
  {
    category: "Web Development",
    tools: ["Antigravity (AI-assisted)", "Netlify", "HTML / CSS / JS", "React", "Tailwind CSS"]
  }
];

export const INDUSTRIES_COVERAGE = [
  { name: "IT & SaaS", note: "Technical decision-maker lists" },
  { name: "E-commerce & Retail", note: "Buyer & vendor prospecting" },
  { name: "Real Estate", note: "Owner & property manager contacts" },
  { name: "Finance & Accounting", note: "Compliance-aware sourcing" },
  { name: "Digital Marketing", note: "Agency & client-side leads" },
  { name: "Healthcare", note: "Practice & provider contacts" },
  { name: "Education", note: "Institutional decision-makers" },
  { name: "Legal Services", note: "Firm & partner-level lists" }
];

export const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Brief",
    desc: "You share your ICP, target roles, and any exclusions."
  },
  {
    num: "02",
    title: "Source",
    desc: "I pull contacts from Sales Navigator, Apollo, and relevant registries."
  },
  {
    num: "03",
    title: "Verify",
    desc: "Every email runs through a verification pass before it's included."
  },
  {
    num: "04",
    title: "Deliver",
    desc: "A clean, de-duplicated sheet, formatted and ready to load into your CRM."
  }
];
