export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  content: string[];
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "youtube-seo-ai-app-case-study",
    slug: "building-youtube-seo-analyzer-claude-api",
    title: "How I Built a YouTube SEO Analyzer & AI Tag Generator with Node.js, Claude API & React",
    excerpt: "A deep dive into connecting YouTube Data API v3, Google OAuth 2.0, and Anthropic Claude to build an automated video optimization and tag scoring system.",
    date: "Aug 2026",
    readTime: "6 min read",
    category: "AI & Full-Stack Web",
    tags: ["YouTube SEO", "Claude API", "Node.js", "React Native", "AI Tooling"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Modern YouTube growth relies heavily on metadata optimization — specifically how video titles, keyword-dense descriptions, and semantic tags align with YouTube Search algorithms.",
      "### Architectural Overview\nThe YouTube SEO Analyzer is structured into three clean micro-layers:\n1. **Backend Engine:** Node.js + Express handling Google OAuth 2.0 session tokens and YouTube Data API v3 endpoints.\n2. **AI Tag Generator:** Anthropic Claude (Claude Haiku/Sonnet) generating context-aware semantic tags based on competitor keyword density.\n3. **Multi-Platform Client:** A responsive React + Vite web dashboard for fast desktop testing, paired with React Native + Expo for mobile APK delivery.",
      "### Step 1: Google OAuth 2.0 & YouTube Data Ingestion\nWhen the creator clicks 'Connect YouTube', the backend initiates a secure Google OAuth flow with read-only YouTube scopes. Once authenticated, the server fetches the user's uploaded videos, extracting titles, view counts, existing tag arrays, and engagement ratios.",
      "### Step 2: Rule-Based SEO Scoring Algorithm\nEach video is audited against algorithmic factors: keyword placement in the first 60 characters of the title, description length, search intent match, and tag utilization (character limits up to 500 characters).",
      "### Step 3: AI-Driven Tag Synthesis via Claude API\nUsing Anthropic's Claude API, the system parses the video transcript and title to generate high-volume, low-competition tags, allowing creators to boost their organic search impressions effortlessly.",
      "### Takeaway\nCombining modern LLM APIs with real-time third-party platforms creates high-leverage SaaS tools that solve creator pain points in seconds."
    ]
  },
  {
    id: "whatsapp-restaurant-ordering-system",
    slug: "zero-commission-whatsapp-restaurant-ordering-system",
    title: "Building Zero-Commission WhatsApp Ordering Systems & Admin Dashboards for Restaurants",
    excerpt: "Case study on engineering live digital menus, instant WhatsApp checkout generators, and password-protected admin managers for Haveli Village & Papa's Kitchen.",
    date: "Aug 2026",
    readTime: "5 min read",
    category: "Web Applications",
    tags: ["Restaurant Web App", "WhatsApp API", "React", "Admin Dashboard", "E-Commerce"],
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Third-party food delivery platforms charge restaurants 20% to 35% commission on every order. For local restaurants like Haveli Village Restaurant and Papa's Kitchen Bahawalpur, direct customer relationships are essential for profitability.",
      "### Key Requirements\n- A mobile-first interactive food catalog with categorized items (Fast Food, Deals, Traditional Karahi, Desserts).\n- Seamless WhatsApp checkout that formats item selections, quantities, customer address, and total bill into an instant WhatsApp message.\n- A password-protected admin dashboard allowing managers to toggle item availability, update prices, and edit special daily deals in real time.",
      "### Client-Side State & WhatsApp Order Generation\nInstead of requiring heavy backend databases for simple ordering, the cart state is calculated entirely on the client side. When the customer confirms their order, the system compiles a URL-encoded string: `https://wa.me/923XXXXXXXXX?text=New%20Order...` containing itemized breakdowns and delivery coordinates.",
      "### Real-Time Admin Menu Control\nThe connected admin dashboard (`admin.html` / `admin.js`) allows owners to update menu pricing, upload dish imagery, and disable out-of-stock items with persistent state storage.",
      "### Business Impact\nZero hosting overhead on Netlify, zero transaction commission fees, and instant customer order fulfillment via direct WhatsApp communication."
    ]
  },
  {
    id: "smtas-ai-metrics-dashboard",
    slug: "realtime-ai-telemetry-dashboard-architecture",
    title: "Engineering a Real-Time AI Metrics Dashboard with React, TypeScript & Netlify",
    excerpt: "How modular UI components, high-contrast dark aesthetics, and TypeScript interfaces power real-time AI model monitoring dashboards with 100/100 Lighthouse scores.",
    date: "Aug 2026",
    readTime: "4 min read",
    category: "AI & Full-Stack Web",
    tags: ["React", "TypeScript", "AI Dashboard", "Netlify", "UI/UX Pro Max"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    content: [
      "AI web applications demand clean data visualization to communicate model execution logs, latency metrics, and API token utilization without overwhelming user interfaces.",
      "### SMTAS AI Architecture Principles\n1. **Low Cognitive Load:** A dark minimal palette (`#0a0a0a` background with emerald accents) reduces visual fatigue during extended monitoring sessions.\n2. **Type-Safe Component Grid:** Utilizing TypeScript interfaces for telemetry data streams guarantees zero runtime rendering crashes.\n3. **Static Edge Deployment:** Deployed via Netlify CI/CD with asset hashing and gzip compression for sub-second page loads globally.",
      "### Results\nAchieved a perfect 100/100 Google Lighthouse performance score and an intuitive user interface for machine learning practitioners."
    ]
  },
  {
    id: "b2b-lead-generation-2026",
    slug: "how-to-generate-b2b-leads-2026",
    title: "How to Generate High-Converting B2B Leads in 2026: The Multi-Pass Verification Protocol",
    excerpt: "Why raw scraper lists destroy domain reputation and how a 5-step verification protocol guarantees under 1% bounce rates on outbound sequences.",
    date: "Aug 2026",
    readTime: "5 min read",
    category: "Lead Generation Strategy",
    tags: ["B2B Prospecting", "Sales Navigator", "NeverBounce", "Email Deliverability"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Outbound sales prospecting in 2026 has fundamentally shifted. Spam filters, strict DMARC/DKIM policies, and AI-powered inbox algorithms now penalize unverified cold lists within hours.",
      "### Step 1: Precision Boolean Search on LinkedIn Sales Navigator\nInstead of broad generic industry searches, use precise Boolean queries combined with headcount growth and seniority filters. Target specific titles: 'VP of Growth' OR 'Head of Acquisition' rather than generic 'Marketing'.",
      "### Step 2: Multi-Tool Extraction and Cross-Referencing\nNever rely on a single data vendor. Cross-verify email patterns between Apollo.io, Hunter.io, and RocketReach to resolve corporate email formats (e.g. {first}.{last} vs {f}{last}@company.com).",
      "### Step 3: Server-Level SMTP Ping (NeverBounce / ZeroBounce)\nBefore any contact touches your CRM, run automated SMTP handshake verification. Filter out all 'Catch-All' and 'Disposable' domains to protect your primary sending domain reputation.",
      "### Step 4: Formatting and CRM Hygiene\nStandardize all names (proper capitalization, removing emojis/degrees from names), clean company legal suffixes (Inc, LLC, Ltd), and map custom lifecycle stages into HubSpot or Salesforce.",
      "By applying this protocol, outreach campaigns consistently achieve 45%+ open rates, high reply rates, and zero domain blacklisting incidents."
    ]
  },
  {
    id: "shopify-ecommerce-lead-mining",
    slug: "ecommerce-shopify-brand-lead-mining-guide",
    title: "Shopify & E-Commerce Lead Mining: Sourcing 7-Figure DTC Founders & CMOs",
    excerpt: "A practical framework for finding verified contact details of high-growth Shopify store owners, CMOs, and e-commerce directors across UK and USA markets.",
    date: "Aug 2026",
    readTime: "4 min read",
    category: "E-Commerce Sourcing",
    tags: ["Shopify Brands", "DTC", "List Building", "E-Commerce"],
    coverImage: "https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=1200&auto=format&fit=crop",
    content: [
      "E-Commerce and DTC brands represent one of the fastest-moving sectors, but identifying the actual decision-maker behind a brand requires specialized research.",
      "### 1. Store Discovery via BuiltWith & Store Leads\nIdentify high-performing online stores utilizing Shopify Plus, Klaviyo, and specific tech stacks. Filter by estimated monthly sales volume and employee count.",
      "### 2. Matching Domain to LinkedIn Corporate Hierarchy\nMap the brand domain to company LinkedIn profiles to identify the actual Founder, Head of E-Commerce, or VP of Marketing rather than support emails.",
      "### 3. Verification & Phone Sourcing\nCollect direct business emails and corporate phone numbers, eliminating duplicate retail locations to give sales teams direct executive access.",
      "### The Result\nA structured dataset organized by niche, annual revenue band, and verified social touchpoints ready for personalized outreach."
    ]
  },
  {
    id: "crm-hygiene-database-cleaning",
    slug: "crm-data-hygiene-hubspot-salesforce",
    title: "CRM Hygiene 101: Eliminating Data Decay in HubSpot & Salesforce",
    excerpt: "How regular deduplication, field normalization, and lifecycle mapping protect sales efficiency and prevent pipeline contamination.",
    date: "Aug 2026",
    readTime: "4 min read",
    category: "CRM Data Management",
    tags: ["HubSpot", "Salesforce", "Data Cleaning", "Virtual Assistance"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    content: [
      "B2B databases decay at an average rate of 25-30% annually as employees switch companies, domains migrate, and phone numbers change.",
      "### The Core Pillars of CRM Maintenance:\n- **Automated Deduplication:** Merging duplicate contact and company records without losing activity logs or deal histories.\n- **Field Standardization:** Normalizing job titles, country codes, and phone number formatting (+1-XXX-XXX-XXXX).\n- **Lifecycle Stage Audits:** Cleaning outdated leads and re-engaging cold contacts through targeted re-verification.",
      "Consistent CRM maintenance ensures outreach teams spend their time closing deals rather than troubleshooting broken spreadsheets."
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = INITIAL_BLOG_POSTS;

const STORAGE_KEY = 'fahad_portfolio_blog_posts';
const GITHUB_CONFIG_KEY = 'fahad_github_cms_config';

export interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
}

export function getStoredPosts(): BlogPost[] {
  try {
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Merge any new initial posts that might not be in the stored cache yet
        const existingIds = new Set(parsed.map((p: BlogPost) => p.id));
        const missingInitial = INITIAL_BLOG_POSTS.filter((p) => !existingIds.has(p.id));
        if (missingInitial.length > 0) {
          const merged = [...missingInitial, ...parsed];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading stored blog posts:', e);
  }
  return INITIAL_BLOG_POSTS;
}


export function saveStoredPosts(posts: BlogPost[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error('Error saving blog posts to localStorage:', e);
  }
}

export function getGitHubConfig(): GitHubConfig | null {
  try {
    const cfg = localStorage.getItem(GITHUB_CONFIG_KEY);
    if (cfg) return JSON.parse(cfg);
  } catch (e) {
    console.error('Error loading GitHub config:', e);
  }
  return {
    token: 'REDACTED_EXPIRED_TOKEN',
    owner: 'advertisingbwp-cmyk',
    repo: 'fahad-portfolio',
    branch: 'main'
  };
}

export function saveGitHubConfig(config: GitHubConfig): void {
  try {
    localStorage.setItem(GITHUB_CONFIG_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving GitHub config:', e);
  }
}

export async function syncPostsToGitHub(
  posts: BlogPost[],
  config?: GitHubConfig | null
): Promise<{ success: boolean; message: string }> {
  const cfg = config || getGitHubConfig();
  if (!cfg || !cfg.token || !cfg.owner || !cfg.repo) {
    return {
      success: false,
      message: 'GitHub token or repository details not configured. Saved in local storage only.'
    };
  }

  const path = 'src/data/blogPosts.json';
  const url = `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`;
  const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(posts, null, 2))));

  try {
    let sha: string | undefined = undefined;
    const getRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    }

    const putRes = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `CMS Update: Synced ${posts.length} blog posts via Admin Panel`,
        content: contentBase64,
        sha: sha,
        branch: cfg.branch || 'main'
      })
    });

    if (putRes.ok) {
      return { success: true, message: 'Successfully committed to GitHub repository! Live site will rebuild automatically.' };
    } else {
      const err = await putRes.json();
      return { success: false, message: `GitHub API Error: ${err.message || putRes.statusText}` };
    }
  } catch (err: any) {
    return { success: false, message: `Network error connecting to GitHub: ${err.message}` };
  }
}