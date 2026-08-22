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
  roleTitle: "Lead Generation · Web Builder · Virtual Assistant · Data Specialist",
  tagline: "Fahad Saleem",
  heroPitch: "Full-stack Virtual Assistant and Lead Generation Expert skilled in B2B/B2C prospect lists, LinkedIn Sales Navigator extraction, and multi-tool email verification. From Excel data cleaning to AI-driven web development, I manage operational tasks in-house so your business runs smoothly.",
  freeOffer: "Open for freelance projects, custom web builds & long-term data contracts — 100% quality guarantee.",

  location: "Bahawalpur, Pakistan",
  timezone: "GMT+5 (PKT)",
  status: "Available for freelance",
  availability: "30+ hrs / week",
  education: "BSCS — Islamia University of Bahawalpur (final semester)",
  experienceTenure: "2.7 yrs experience (UPSKILLERS)",
  email: "fahadsaleembwp@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01402e2d3e4f4322b7?p=1974100444575100928",
  instagram: "https://www.instagram.com/fahdbwp",
  linkedin: "https://www.linkedin.com/in/fahad-saleem",
  avatarUrl: "/fahad.jpg",
  resumeUrl: "/Fahad_Saleem_CV.pdf",
};

export const STATS = [
  { value: "2.7 yrs", label: "Lead gen & data entry experience" },
  { value: "30+ hrs", label: "Available per week" },
  { value: "10", label: "Free verified leads on first order" },
  { value: "5", label: "Verification tools run on every list" }
];

export const CORE_SERVICES = [
  {
    code: "R01",
    title: "B2B & B2C Lead Generation",
    description: "Targeted prospect lists of CEOs, founders, and decision-makers, built against your exact ICP."
  },
  {
    code: "R02",
    title: "LinkedIn Lead Generation",
    description: "Sales Navigator extraction for industry- and role-specific outreach lists."
  },
  {
    code: "R03",
    title: "Verified Email Collection",
    description: "Every address checked through Hunter.io, Apollo.io, RocketReach, Snov.io, and NeverBounce."
  },
  {
    code: "R04",
    title: "Data Entry & Cleaning",
    description: "Fast, accurate organization in Excel and Google Sheets — de-duplicated and formatted for use."
  },
  {
    code: "R05",
    title: "Web Research & Data Mining",
    description: "Market and competitor research pulled from reliable, citable sources."
  },
  {
    code: "R06",
    title: "CRM Data Management",
    description: "Cleaning and updating records in HubSpot, Zoho, Salesforce, and Pipedrive."
  },
  {
    code: "R07",
    title: "Virtual Assistance",
    description: "Calendar, inbox, reporting, and general admin support to free up your time."
  },
  {
    code: "R08",
    title: "AI-Assisted Web Development",
    description: "Full sites and dashboards built with modern AI development tools — landing pages, ordering systems, and admin panels, shipped fast."
  }
];

export const SHIPPED_PROJECTS: Project[] = [
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
    summary: "Collected 2,500+ verified leads of E-Commerce companies & Shopify brands across UK & USA with 100% email accuracy.",
    challenge: "Client needed high-intent verified decision-maker contacts (Founders, CMOs, and E-Commerce Managers) of Shopify and niche online stores without bounced or invalid emails.",
    solution: "Conducted brand research across Shopify, Amazon, and niche online stores. Verified every single email using Apollo.io, Hunter.io, and NeverBounce. Organized clean structured data in Excel and Google Sheets, removing 400+ invalid/duplicate entries.",
    result: "Improved client's outreach efficiency by 50% with validated contacts, delivering ready-to-use UK & USA datasets for marketing campaigns.",
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
    role: "Lead Generation & Outreach Strategist",
    duration: "Delivered",
    thumbnail: "/nursing_facility_leads_upwork.png",
    heroImage: "/nursing_facility_leads_upwork.png",
    summary: "Generated 1,500+ verified leads for nursing facilities, assisted living communities & home health centers.",
    challenge: "Client required customized, verified prospect lists of healthcare executives (CEOs, Directors & Administrators) across nursing facilities and assisted living organizations with validated direct emails and phone numbers.",
    solution: "Researched 300+ assisted living companies using LinkedIn Sales Navigator. Verified all decision-maker emails with Hunter.io, Apollo.io, and NeverBounce. Removed 250+ duplicate entries and delivered clean Excel sheets with company name, email, phone, and role.",
    result: "Improved client outreach success by 45% with verified contact details, providing a ready-to-use database for targeted email campaigns.",
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
    liveUrl: "https://haveli-village-restaurant.netlify.app/",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
    ],
    tools: ["AI-Assisted Development", "React", "Tailwind CSS", "Netlify", "WhatsApp API"]
  },
  {
    id: "smtas-ai",
    title: "SMTAS AI Dashboard",
    category: "Dashboard · Web App",
    year: "2025",
    client: "SMTAS AI Systems",
    role: "Lead Interface & Workflow Engineer",
    duration: "4 Weeks",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    summary: "A dashboard-driven web app project — built and deployed end to end with modern AI development tools.",
    challenge: "Complex telemetry metrics and model execution logs needed a clean, dark-mode real-time interface with low cognitive friction.",
    solution: "Designed and implemented a modular dashboard grid featuring interactive charts, quick filtering, and responsive performance across mobile and desktop.",
    result: "Deployed live on Netlify with 100/100 Lighthouse performance metrics.",
    liveUrl: "https://smtas-ai.netlify.app/",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop"
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Netlify", "AI Tooling"]
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
