import re

def update_index():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Update Title and Meta
    html = re.sub(
        r'<meta name="description" content="[^"]*"\s*/>',
        '<meta name="description" content="Fahad Saleem is an AI-assisted web developer specializing in Next.js, React, Python, and rapid full-stack deployment. Explore live applications and get in touch." />',
        html,
        count=1
    )
    
    html = re.sub(
        r'<title>[^<]*</title>',
        '<title>AI-Assisted Web Developer | React &amp; Next.js | Fahad Saleem</title>',
        html,
        count=1
    )

    # OpenGraph & Twitter
    html = re.sub(
        r'<meta property="og:title" content="[^"]*"\s*/>',
        '<meta property="og:title" content="AI-Assisted Web Developer | React &amp; Next.js | Fahad Saleem" />',
        html,
        count=1
    )
    html = re.sub(
        r'<meta property="og:description" content="[^"]*"\s*/>',
        '<meta property="og:description" content="Fahad Saleem is an AI-assisted web developer specializing in Next.js, React, Python, and rapid full-stack deployment. Explore live applications and get in touch." />',
        html,
        count=1
    )
    html = re.sub(
        r'<meta property="og:image:alt" content="[^"]*"\s*/>',
        '<meta property="og:image:alt" content="Fahad Saleem - AI-Assisted Web Developer | React &amp; Next.js" />',
        html,
        count=1
    )
    html = re.sub(
        r'<meta name="twitter:title" content="[^"]*"\s*/>',
        '<meta name="twitter:title" content="AI-Assisted Web Developer | React &amp; Next.js | Fahad Saleem" />',
        html,
        count=1
    )
    html = re.sub(
        r'<meta name="twitter:description" content="[^"]*"\s*/>',
        '<meta name="twitter:description" content="Fahad Saleem is an AI-assisted web developer specializing in Next.js, React, Python, and rapid full-stack deployment. Explore live applications and get in touch." />',
        html,
        count=1
    )
    html = re.sub(
        r'<meta name="twitter:image:alt" content="[^"]*"\s*/>',
        '<meta name="twitter:image:alt" content="Fahad Saleem - AI-Assisted Web Developer | React &amp; Next.js" />',
        html,
        count=1
    )

    # 2. Update Structured Data (JSON-LD)
    new_json_ld = '''    <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://fahadsaleembwp.vercel.app/#person",
            "name": "Fahad Saleem",
            "givenName": "Fahad",
            "familyName": "Saleem",
            "url": "https://fahadsaleembwp.vercel.app/",
            "image": "https://fahadsaleembwp.vercel.app/fahad.jpg",
            "jobTitle": [
                "AI-Assisted Web Developer",
                "React & Next.js Developer",
                "Full-Stack Web Developer",
                "Data Operations Specialist"
            ],
            "description": "AI-Assisted Web Developer and Computer Science graduate specializing in rapid prototyping and full-stack deployment. Expert in leveraging AI coding assistants (Gemini, Codex, Antigravity) to automate boilerplate code, significantly reducing development cycles. Proven track record of architecting, building, and deploying functional web applications and AI utilities on Vercel using modern JavaScript and Python ecosystems.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bahawalpur",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
            },
            "affiliation": {
                "@type": "EducationalOrganization",
                "name": "The Islamia University of Bahawalpur"
            },
            "knowsAbout": [
                "AI-Assisted Web Development",
                "Rapid Prototyping",
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "HTML/CSS",
                "Python",
                "Flask",
                "RESTful APIs",
                "YouTube Data API",
                "Groq AI",
                "Gemini",
                "Codex",
                "Antigravity",
                "Prompt Engineering",
                "Vercel",
                "Git/GitHub",
                "AI Data Annotation",
                "Data Mining",
                "Web Scraping",
                "Data Management",
                "B2B Lead Generation"
            ],
            "sameAs": [
                "https://github.com/fahadbwp",
                "https://www.upwork.com/freelancers/~01402e2d3e4f4322b7?p=1974100444575100928",
                "https://www.instagram.com/fahdbwp"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://fahadsaleembwp.vercel.app/#website",
            "url": "https://fahadsaleembwp.vercel.app/",
            "name": "AI-Assisted Web Developer | React & Next.js | Fahad Saleem",
            "publisher": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "description": "Professional portfolio and web engineering showcase of Fahad Saleem, featuring AI-assisted web applications, developer utilities, and full-stack platforms built with Next.js, React, and Python.",
            "inLanguage": "en"
        },
        {
            "@type": "ProfilePage",
            "@id": "https://fahadsaleembwp.vercel.app/#profilepage",
            "url": "https://fahadsaleembwp.vercel.app/",
            "name": "AI-Assisted Web Developer | React & Next.js | Fahad Saleem",
            "isPartOf": {
                "@id": "https://fahadsaleembwp.vercel.app/#website"
            },
            "mainEntity": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "primaryImageOfPage": "https://fahadsaleembwp.vercel.app/fahad.jpg",
            "description": "Fahad Saleem is an AI-assisted web developer specializing in Next.js, React, Python, and rapid full-stack deployment. Explore live applications and get in touch.",
            "inLanguage": "en"
        },
        {
            "@type": "Service",
            "@id": "https://fahadsaleembwp.vercel.app/#service-web-development",
            "name": "AI-Assisted Web Development & Full-Stack Deployment",
            "url": "https://fahadsaleembwp.vercel.app/#projects",
            "serviceType": "Web Development",
            "provider": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "description": "Rapid prototyping, responsive frontend interfaces, and full-stack web platforms engineered with Next.js, React, TypeScript, Tailwind CSS, Python Flask, and modern AI coding assistants on Vercel.",
            "areaServed": "Worldwide"
        },
        {
            "@type": "Service",
            "@id": "https://fahadsaleembwp.vercel.app/#service-lead-generation",
            "name": "B2B Lead Generation & Prospect Research",
            "url": "https://fahadsaleembwp.vercel.app/b2b-lead-generation/",
            "serviceType": "B2B Lead Generation",
            "provider": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "description": "Structured prospect research identifying company decision-makers, verified business contact details, and custom spreadsheet datasets for outreach campaigns.",
            "areaServed": "Worldwide"
        },
        {
            "@type": "Service",
            "@id": "https://fahadsaleembwp.vercel.app/#service-data-research",
            "name": "Data Research & Spreadsheet Organization",
            "url": "https://fahadsaleembwp.vercel.app/data-research/",
            "serviceType": "Data Research & Formatting",
            "provider": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "description": "Systematic demographic data collection, market research, and audit-ready spreadsheet formatting in Google Sheets and Microsoft Excel.",
            "areaServed": "Worldwide"
        },
        {
            "@type": "FAQPage",
            "@id": "https://fahadsaleembwp.vercel.app/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is your core development focus and methodology?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I specialize in rapid prototyping and full-stack deployment using React, Next.js, TypeScript, and Python. I leverage AI coding assistants (Gemini, Codex, Antigravity) to automate boilerplate code, significantly reducing development cycles while ensuring senior-level code quality and manual verification."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What web development technologies and tools do you build with?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "My primary stack includes Next.js, React, TypeScript, JavaScript, Tailwind CSS, and HTML/CSS on the frontend, with Python Flask and RESTful APIs (such as YouTube Data API) on the backend. For AI integration, I work with Groq AI, Gemini, Codex, Antigravity, and prompt engineering, with deployments hosted on Vercel."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What specific experience do you have with freelance web development and client projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "As a Junior Web Developer on Upwork (Freelance, Mar 2026 – Sep 2026), I developed and maintained responsive web interfaces utilizing React and modern CSS frameworks, using AI tools to optimize workflows and rapidly iterate on client feedback."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What AI data collection and annotation work have you performed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "As a contributor for Claru.ai (Feb 2026 – Oct 2026), I collected, structured, and submitted high-quality real-world video and image data critical for training machine learning models, strictly following multi-tier quality protocols."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What B2B lead generation and data research services do you provide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Through UP-Skiller & Upwork (Mar 2021 – Mar 2025), I conducted advanced data mining and decision-maker discovery using LinkedIn Sales Navigator and Apollo.io, verified emails with Hunter.io and NeverBounce, and managed large-scale prospect databases in Excel and Google Sheets."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are your featured web projects live and verifiable?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. You can explore my live web applications: Plexudo (https://plexudo.vercel.app), AI Smart Text Utility (https://ai-text-utility.vercel.app/), and Haveli Village Restaurant (https://haveli-village-restaurant.vercel.app/). Project source code is also accessible on GitHub (https://github.com/fahadbwp)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is your education and current location?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I completed my BS in Computer Science from The Islamia University of Bahawalpur (2021–2025) and Intermediate (ICS) at Government S.E. College for Boys, Bahawalpur. I am based in Bahawalpur, Pakistan (GMT+5) and available for freelance and full-time remote contracts worldwide."
                    }
                }
            ]
        },
        {
            "@type": "WebApplication",
            "@id": "https://plexudo.vercel.app/#app",
            "name": "Plexudo — YouTube Creator Tools",
            "alternateName": "Plexudo",
            "url": "https://plexudo.vercel.app",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "description": "Creator platform and SEO analytics dashboard for YouTube creators engineered with Next.js, Python Flask, YouTube Data API v3, and a custom 50-point rating framework powered by Groq AI for automated video insights, trend analysis, and content strategy recommendations.",
            "contributor": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            }
        },
        {
            "@type": "WebApplication",
            "@id": "https://ai-text-utility.vercel.app/#app",
            "name": "AI Smart Text Utility",
            "url": "https://ai-text-utility.vercel.app/",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "All",
            "description": "Developer utility for AI-driven writing assistance, text cleanup, formatting, and JSON-to-CSV data conversion built with Next.js, React, TypeScript, and Tailwind CSS, accelerated using Gemini and Codex for complex state management and UI components.",
            "contributor": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            },
            "codeRepository": "https://github.com/fahadbwp/ai-text-utility",
            "browserRequirements": "Requires JavaScript. Requires HTML5."
        },
        {
            "@type": "WebApplication",
            "@id": "https://haveli-village-restaurant.vercel.app/#app",
            "name": "Haveli Village Restaurant Web Platform",
            "url": "https://haveli-village-restaurant.vercel.app/",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "description": "Restaurant web application with interactive digital menu browsing and direct WhatsApp ordering integration.",
            "contributor": {
                "@id": "https://fahadsaleembwp.vercel.app/#person"
            }
        }
    ]
}
    </script>'''

    html = re.sub(
        r'<script type="application/ld\+json">.*?</script>',
        new_json_ld,
        html,
        flags=re.DOTALL
    )

    # 3. Update Drawer Links
    drawer_target = '''      <li><a href="#services">Capabilities</a></li>
      <li><a href="#about">About</a></li>'''
    drawer_replacement = '''      <li><a href="#services">Capabilities</a></li>
      <li><a href="#skills">Skills <span class="count-pill">MATRIX</span></a></li>
      <li><a href="#about">About</a></li>'''
    html = html.replace(drawer_target, drawer_replacement, 1)

    # 4. Update Hero Section
    hero_pattern = r'<section class="hero-section" id="hero">.*?</section>'
    new_hero = '''<section class="hero-section" id="hero">
    <div class="container">
      <div class="hero-kicker">
        <span class="brand-pulse"></span>
        <span>AI-ASSISTED WEB DEVELOPER · REACT &amp; NEXT.JS</span>
      </div>
      <h1 class="hero-title">
        Engineering modern web applications &amp; <span class="serif-accent">AI utilities</span> with rapid deployment.
      </h1>
      <p class="hero-intro">
        AI-Assisted Web Developer and Computer Science graduate specializing in rapid prototyping and full-stack deployment on Vercel using modern JavaScript and Python ecosystems.
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn-hero-main">EXPLORE SELECTED WORK ↗</a>
        <a href="Fahad_Saleem_CV.pdf" download="Fahad_Saleem_CV.pdf" class="btn-hero-outline">DOWNLOAD CV (PDF) ↓</a>
      </div>

      <div class="hero-metrics-grid" aria-label="Professional Profile Highlights">
        <div class="metric-col">
          <div class="metric-val">Next<span>.js</span></div>
          <div class="metric-txt">REACT &amp; TYPESCRIPT ECOSYSTEM</div>
        </div>
        <div class="metric-col">
          <div class="metric-val">AI<span>-First</span></div>
          <div class="metric-txt">RAPID PROTOTYPING &amp; DEPLOYMENT</div>
        </div>
        <div class="metric-col">
          <div class="metric-val">3<span> apps</span></div>
          <div class="metric-txt">PRODUCTION WEB PLATFORMS</div>
        </div>
        <div class="metric-col">
          <div class="metric-val">BS CS<span></span></div>
          <div class="metric-txt">COMPUTER SCIENCE (IUB)</div>
        </div>
      </div>
    </div>
  </section>'''
    html = re.sub(hero_pattern, new_hero, html, flags=re.DOTALL, count=1)

    # 5. Update Creed Section
    creed_pattern = r'<section class="creed-section">.*?</section>'
    new_creed = '''<section class="creed-section">
    <div class="container">
      <div class="creed-grid">
        <div>
          <div class="creed-label">PROFESSIONAL FOCUS</div>
          <h2 class="creed-heading">
            Direct communication. <span class="serif-accent">Senior execution.</span> Zero guesswork.
          </h2>
        </div>
        <div class="creed-body">
          <p>
            Specializing in rapid prototyping and full-stack deployment, I leverage advanced AI coding assistants (Gemini, Codex, Antigravity) to automate boilerplate code, significantly shorten development cycles, and ship resilient web applications using modern JavaScript and Python ecosystems.
          </p>
        </div>
      </div>
    </div>
  </section>'''
    html = re.sub(creed_pattern, new_creed, html, flags=re.DOTALL, count=1)

    # 6. Update Project Cards (Plexudo & AI Smart Text)
    # Project 1: Plexudo
    plexudo_target = '''            <p class="carousel-card-desc" style="color: rgba(255, 255, 255, 0.88); margin-bottom: 4px;">
              Creator intelligence platform combining YouTube Data API v3 and Groq AI for real-time video diagnostics, title ideas, and competitor insights.
            </p>
            <div class="carousel-tags">
              <span class="tag">Python</span>
              <span class="tag">Flask</span>
              <span class="tag">JavaScript</span>
              <span class="tag">YouTube API</span>
              <span class="tag">Groq AI</span>
              <span class="tag">Vercel</span>
            </div>'''
    plexudo_replacement = '''            <p class="carousel-card-desc" style="color: rgba(255, 255, 255, 0.88); margin-bottom: 4px;">
              Architected and deployed an SEO suite and analytics dashboard for YouTube creators using AI-assisted rapid development. Integrated YouTube Data API to extract real-time video metrics and competitor data, and engineered a custom 50-point rating framework using Groq AI for automated video insights, trend analysis, and content strategy recommendations.
            </p>
            <div class="carousel-tags">
              <span class="tag">Next.js</span>
              <span class="tag">Python Flask</span>
              <span class="tag">YouTube Data API</span>
              <span class="tag">Groq AI</span>
              <span class="tag">Vercel</span>
            </div>'''
    html = html.replace(plexudo_target, plexudo_replacement, 1)

    # Project 2: AI Smart Text Utility
    ai_text_target = '''            <p class="carousel-card-desc" style="color: rgba(255, 255, 255, 0.88); margin-bottom: 4px;">
              In-browser developer transformation suite for text cleanup, regex processing, JSON/CSV conversion, and AI-assisted text transformation.
            </p>
            <div class="carousel-tags">
              <span class="tag">React</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Next.js</span>
              <span class="tag">Tailwind CSS</span>
            </div>
            <a href="https://ai-text-utility.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-visit-project" style="margin-top: 10px; align-self: flex-start;">
              LIVE SITE ↗
            </a>'''
    ai_text_replacement = '''            <p class="carousel-card-desc" style="color: rgba(255, 255, 255, 0.88); margin-bottom: 4px;">
              Built a comprehensive text manipulation utility featuring AI-driven writing assistance, formatting, and data conversion (JSON to CSV). Utilized Gemini and Codex to accelerate the development of complex state management and responsive UI components.
            </p>
            <div class="carousel-tags">
              <span class="tag">Next.js</span>
              <span class="tag">React</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Tailwind CSS</span>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; align-self: flex-start;">
              <a href="https://ai-text-utility.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-visit-project">
                LIVE SITE ↗
              </a>
              <a href="https://github.com/fahadbwp/ai-text-utility" target="_blank" rel="noopener noreferrer" class="btn-visit-project" style="background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.25);">
                GITHUB REPO ↗
              </a>
            </div>'''
    html = html.replace(ai_text_target, ai_text_replacement, 1)

    # 7. Update Services Section (Put Web Technologies as #01)
    services_pattern = r'<section class="services-section" id="services">.*?</section>'
    new_services = '''<section class="services-section" id="services">
    <div class="services-glow-bottom" aria-hidden="true"></div>
    <div class="container">
      <div class="kicker" style="color: var(--mint);">CORE CAPABILITIES</div>
      <h2 class="showcase-h2" style="color: var(--white); margin-bottom: 14px;">
        Engineering &amp; <span class="serif-accent">data intelligence</span> capabilities.
      </h2>
      <p class="services-intro-p">
        Full-stack web applications, AI-accelerated development, RESTful APIs, and precision data operations.
      </p>

      <div class="services-editorial-list">
        <!-- Row 1: Web Technologies (Primary Specialty) -->
        <article class="service-editorial-row featured" data-reveal>
          <div class="editorial-num">01</div>
          <div class="editorial-content">
            <div class="editorial-top-line">
              <h3 class="editorial-title">Web Technologies &amp; Rapid Prototyping</h3>
              <span class="editorial-pill">Primary Specialty</span>
            </div>
            <p class="editorial-desc">
              Responsive web applications, component architectures, and modern SPAs engineered with Next.js, React, TypeScript, and Tailwind CSS. Rapid prototyping leveraging AI coding tools to automate boilerplate and accelerate deployment cycles on Vercel.
            </p>
            <div class="editorial-badges-row">
              <span class="badge-outcome">✓ Rapid Vercel Deployment</span>
              <span class="badge-tool">Next.js</span>
              <span class="badge-tool">React</span>
              <span class="badge-tool">TypeScript</span>
              <span class="badge-tool">Tailwind CSS</span>
              <span class="badge-tool">HTML/CSS</span>
            </div>
          </div>
          <div class="editorial-action" style="display: flex; flex-direction: column; gap: 8px;">
            <a href="#projects" class="editorial-btn">Explore Live Apps ↗</a>
            <a href="#contact" class="editorial-btn secondary" style="font-size: 11px;">Start a Project ↓</a>
          </div>
        </article>

        <!-- Row 2: Backend Engineering & RESTful APIs -->
        <article class="service-editorial-row" data-reveal>
          <div class="editorial-num">02</div>
          <div class="editorial-content">
            <div class="editorial-top-line">
              <h3 class="editorial-title">Backend Engineering &amp; RESTful APIs</h3>
              <span class="editorial-pill">Backend Architecture</span>
            </div>
            <p class="editorial-desc">
              Python Flask backend services, YouTube Data API integrations, structured JSON/CSV data parsing, and custom serverless endpoints engineered for high performance and clean data flow.
            </p>
            <div class="editorial-badges-row">
              <span class="badge-outcome">✓ API Integration &amp; Parsing</span>
              <span class="badge-tool">Python</span>
              <span class="badge-tool">Flask</span>
              <span class="badge-tool">YouTube Data API</span>
              <span class="badge-tool">JSON / CSV</span>
              <span class="badge-tool">REST APIs</span>
            </div>
          </div>
          <div class="editorial-action">
            <a href="#projects" class="editorial-btn secondary">View Architecture ↗</a>
          </div>
        </article>

        <!-- Row 3: AI Coding & Deployment Workflows -->
        <article class="service-editorial-row" data-reveal>
          <div class="editorial-num">03</div>
          <div class="editorial-content">
            <div class="editorial-top-line">
              <h3 class="editorial-title">AI Coding &amp; Deployment Workflows</h3>
              <span class="editorial-pill">AI Acceleration</span>
            </div>
            <p class="editorial-desc">
              Leveraging advanced AI coding assistants (Gemini, Codex, Antigravity) and Groq AI inference to automate boilerplate, debug complex logic, and execute rapid feature turnarounds with prompt engineering.
            </p>
            <div class="editorial-badges-row">
              <span class="badge-outcome">✓ Automated Boilerplate</span>
              <span class="badge-tool">Gemini</span>
              <span class="badge-tool">Codex</span>
              <span class="badge-tool">Antigravity</span>
              <span class="badge-tool">Groq AI</span>
              <span class="badge-tool">Prompt Engineering</span>
            </div>
          </div>
          <div class="editorial-action">
            <a href="#contact" class="editorial-btn secondary">Discuss Workflow ↗</a>
          </div>
        </article>

        <!-- Row 4: Data Operations & B2B Research -->
        <article class="service-editorial-row" data-reveal>
          <div class="editorial-num">04</div>
          <div class="editorial-content">
            <div class="editorial-top-line">
              <h3 class="editorial-title">Data Operations &amp; B2B Research</h3>
              <span class="editorial-pill">Data Operations</span>
            </div>
            <p class="editorial-desc">
              High-quality real-world video and image data annotation for ML training (Claru.ai), automated web scraping, data mining, and verified B2B prospect list compilation in Excel and Google Sheets.
            </p>
            <div class="editorial-badges-row">
              <span class="badge-outcome">✓ Multi-Tier QA Audited</span>
              <span class="badge-tool">Claru.ai</span>
              <span class="badge-tool">AI Annotation</span>
              <span class="badge-tool">Data Mining</span>
              <span class="badge-tool">Web Scraping</span>
              <span class="badge-tool">Spreadsheets</span>
            </div>
          </div>
          <div class="editorial-action" style="display: flex; flex-direction: column; gap: 8px;">
            <a href="/b2b-lead-generation/" class="editorial-btn secondary" style="font-size: 11px;">B2B Service Page ↗</a>
            <a href="/data-research/" class="editorial-btn secondary" style="font-size: 11px;">Data Research Page ↗</a>
          </div>
        </article>
      </div>
    </div>
  </section>'''
    html = re.sub(services_pattern, new_services, html, flags=re.DOTALL, count=1)

    # 8. Add Technical Skills Matrix Section right after Services
    skills_matrix_section = '''
  <!-- 6B. SECTION: TECHNICAL SKILLS MATRIX (Dark Emerald Card Deck) -->
  <section class="skills-matrix-section" id="skills" aria-labelledby="skills-heading">
    <div class="container">
      <div class="kicker" style="color: var(--mint);">TECHNICAL EXPERTISE</div>
      <h2 class="showcase-h2" id="skills-heading" style="color: var(--white); margin-bottom: 12px;">
        Core engineering &amp; <span class="serif-accent">data technologies</span>.
      </h2>
      <p class="services-intro-p" style="margin-bottom: 0;">
        Specialized toolsets spanning modern frontend development, backend APIs, AI-assisted workflows, and structured data operations.
      </p>

      <div class="skills-cards-grid">
        <!-- Card 1: Web Technologies -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon-wrap">🌐</div>
            <div>
              <span class="skill-kicker">Frontend &amp; Frameworks</span>
              <h3 class="skill-title">Web Technologies</h3>
            </div>
          </div>
          <p class="skill-desc">Modern component architectures, typed applications, responsive styling, and fast interactive web interfaces.</p>
          <div class="skill-pills-list">
            <span class="skill-pill">Next.js</span>
            <span class="skill-pill">React</span>
            <span class="skill-pill">TypeScript</span>
            <span class="skill-pill">JavaScript</span>
            <span class="skill-pill">Tailwind CSS</span>
            <span class="skill-pill">HTML/CSS</span>
          </div>
        </div>

        <!-- Card 2: Backend & Data -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon-wrap">⚙️</div>
            <div>
              <span class="skill-kicker">APIs &amp; Processing</span>
              <h3 class="skill-title">Backend &amp; Data</h3>
            </div>
          </div>
          <p class="skill-desc">Server-side APIs, third-party data extraction, automated pipelines, and tabular dataset normalization.</p>
          <div class="skill-pills-list">
            <span class="skill-pill">Python</span>
            <span class="skill-pill">Flask</span>
            <span class="skill-pill">RESTful APIs</span>
            <span class="skill-pill">YouTube Data API</span>
            <span class="skill-pill">JSON Parsing</span>
            <span class="skill-pill">CSV Processing</span>
          </div>
        </div>

        <!-- Card 3: AI & Deployment -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon-wrap">🤖</div>
            <div>
              <span class="skill-kicker">Speed &amp; Automation</span>
              <h3 class="skill-title">AI &amp; Deployment</h3>
            </div>
          </div>
          <p class="skill-desc">AI-assisted development to reduce boilerplate cycles, rapid prototyping, and automated CI/CD on cloud platforms.</p>
          <div class="skill-pills-list">
            <span class="skill-pill">Gemini</span>
            <span class="skill-pill">Codex</span>
            <span class="skill-pill">Antigravity</span>
            <span class="skill-pill">Groq AI</span>
            <span class="skill-pill">Prompt Engineering</span>
            <span class="skill-pill">Vercel</span>
            <span class="skill-pill">Git / GitHub</span>
          </div>
        </div>

        <!-- Card 4: Data Operations -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon-wrap">📊</div>
            <div>
              <span class="skill-kicker">Annotation &amp; Mining</span>
              <h3 class="skill-title">Data Operations</h3>
            </div>
          </div>
          <p class="skill-desc">High-precision dataset curation for machine learning models, web scraping, and prospect database organization.</p>
          <div class="skill-pills-list">
            <span class="skill-pill">AI Data Annotation</span>
            <span class="skill-pill">Data Mining</span>
            <span class="skill-pill">Web Scraping</span>
            <span class="skill-pill">Data Management</span>
            <span class="skill-pill">Google Sheets</span>
            <span class="skill-pill">Microsoft Excel</span>
          </div>
        </div>
      </div>
    </div>
  </section>
'''
    html = html.replace('  <!-- 7. SECTION 5: ABOUT & PROFILE -->', skills_matrix_section + '\n  <!-- 7. SECTION 5: ABOUT & PROFILE -->', 1)

    # 9. Update About Section with Professional Experience & Education Timeline
    about_pattern = r'<section class="about-section" id="about">.*?</section>'
    new_about = '''<section class="about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="portrait-stage">
          <div class="portrait-stage-inner">
            <img width="827" height="827" src="assets/images/thumbs/fahad.webp" alt="Fahad Saleem wearing black formal dress" />
          </div>
        </div>
        <div>
          <div class="kicker" style="color: var(--mint-dark);">BACKGROUND &amp; EXPERIENCE</div>
          <h2 class="about-h3">
            Fahad Saleem — <span class="serif-accent">AI-Assisted Web Developer</span>
          </h2>
          <p class="about-p">
            I am an AI-assisted web developer and Computer Science graduate specializing in rapid prototyping and full-stack deployment. Expert in leveraging AI coding assistants (Gemini, Codex, Antigravity) to automate boilerplate code, significantly reducing development cycles.
          </p>
          <p class="about-p">
            Proven track record of architecting, building, and deploying functional web applications and AI utilities on Vercel using modern JavaScript and Python ecosystems, backed by hands-on experience in machine learning data annotation and prospect intelligence.
          </p>
          <div style="margin-top: 24px;">
            <a href="Fahad_Saleem_CV.pdf" download="Fahad_Saleem_CV.pdf" class="btn-hero-main">
              DOWNLOAD OFFICIAL CV (PDF) ↓
            </a>
          </div>
        </div>
      </div>

      <!-- Professional Experience & Education Timeline -->
      <div class="experience-timeline">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px;">
          <!-- Left Column: Professional Experience -->
          <div>
            <h3 class="timeline-section-title">
              <span>💼</span> Professional Experience
            </h3>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-header">
                <span class="timeline-role-title">Junior Web Developer</span>
                <span class="timeline-period-pill">Mar 2026 – Sep 2026</span>
              </div>
              <div class="timeline-company">Upwork (Freelance)</div>
              <ul class="timeline-bullets">
                <li>Developed and maintained responsive web interfaces utilizing React and modern CSS frameworks.</li>
                <li>Leveraged AI coding tools to optimize workflows, debug complex logic errors, and rapidly iterate on client feedback.</li>
              </ul>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-header">
                <span class="timeline-role-title">AI Data Collection &amp; Annotation Contributor</span>
                <span class="timeline-period-pill">Feb 2026 – Oct 2026</span>
              </div>
              <div class="timeline-company">Claru.ai (Project-based)</div>
              <ul class="timeline-bullets">
                <li>Collected, structured, and submitted high-quality real-world video and image data critical for training machine learning models.</li>
                <li>Executed precise data labeling protocols in strict adherence to complex project guidelines.</li>
              </ul>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-header">
                <span class="timeline-role-title">Data Management &amp; Lead Generation Specialist</span>
                <span class="timeline-period-pill">Mar 2021 – Mar 2025</span>
              </div>
              <div class="timeline-company">UP-Skiller &amp; Upwork</div>
              <ul class="timeline-bullets">
                <li>Conducted advanced data mining and contact discovery using online research tools and automated scraping methods.</li>
                <li>Managed large-scale prospect databases, ensuring data integrity for B2B outreach campaigns.</li>
              </ul>
            </div>
          </div>

          <!-- Right Column: Education -->
          <div>
            <h3 class="timeline-section-title">
              <span>🎓</span> Education &amp; Foundation
            </h3>

            <div class="timeline-item">
              <div class="timeline-dot dot-edu"></div>
              <div class="timeline-header">
                <span class="timeline-role-title">BS Computer Science</span>
                <span class="timeline-period-pill">2021 – 2025</span>
              </div>
              <div class="timeline-company">The Islamia University of Bahawalpur</div>
              <p class="timeline-note">Final semester examinations completed; coursework focused on software engineering, database design, algorithms, and web technologies.</p>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot dot-edu"></div>
              <div class="timeline-header">
                <span class="timeline-role-title">Intermediate (ICS)</span>
                <span class="timeline-period-pill">Completed 2021</span>
              </div>
              <div class="timeline-company">Government S.E. College for Boys, Bahawalpur</div>
              <p class="timeline-note">Pre-engineering computing foundation covering Computer Science, Mathematics, and Physics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>'''
    html = re.sub(about_pattern, new_about, html, flags=re.DOTALL, count=1)

    # 10. Update FAQ Section (Parity with JSON-LD)
    faq_pattern = r'<section class="faq-section" id="faq">.*?</section>'
    new_faq = '''<section class="faq-section" id="faq">
    <div class="container">
      <div class="faq-split">
        <div>
          <div class="kicker">FREQUENTLY ASKED QUESTIONS</div>
          <h2 class="faq-side-title">
            Questions often <span class="serif-accent">asked</span>.
          </h2>
          <p class="faq-side-desc">
            Answers regarding my verified experience, tools, and project workflows.
          </p>
          <a href="#contact" class="btn-action-pill" style="margin-top: 10px; display: inline-flex;">
            CONTACT DIRECTLY ↗
          </a>
        </div>

        <div class="faq-accordion">
          <!-- FAQ 1 -->
          <details class="faq-item" open>
            <summary class="faq-trigger">
              <span>What is your core development focus and methodology?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              I specialize in rapid prototyping and full-stack deployment using React, Next.js, TypeScript, and Python. I leverage AI coding assistants (Gemini, Codex, Antigravity) to automate boilerplate code, significantly reducing development cycles while ensuring senior-level code quality and manual verification.
            </div>
          </details>

          <!-- FAQ 2 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>What web development technologies and tools do you build with?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              My primary stack includes Next.js, React, TypeScript, JavaScript, Tailwind CSS, and HTML/CSS on the frontend, with Python Flask and RESTful APIs (such as YouTube Data API) on the backend. For AI integration, I work with Groq AI, Gemini, Codex, Antigravity, and prompt engineering, with deployments hosted on Vercel.
            </div>
          </details>

          <!-- FAQ 3 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>What specific experience do you have with freelance web development and client projects?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              As a Junior Web Developer on Upwork (Freelance, Mar 2026 – Sep 2026), I developed and maintained responsive web interfaces utilizing React and modern CSS frameworks, using AI tools to optimize workflows and rapidly iterate on client feedback.
            </div>
          </details>

          <!-- FAQ 4 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>What AI data collection and annotation work have you performed?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              As a contributor for Claru.ai (Feb 2026 – Oct 2026), I collected, structured, and submitted high-quality real-world video and image data critical for training machine learning models, strictly following multi-tier quality protocols.
            </div>
          </details>

          <!-- FAQ 5 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>What B2B lead generation and data research services do you provide?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              Through UP-Skiller &amp; Upwork (Mar 2021 – Mar 2025), I conducted advanced data mining and decision-maker discovery using LinkedIn Sales Navigator and Apollo.io, verified emails with Hunter.io and NeverBounce, and managed large-scale prospect databases in Excel and Google Sheets.
            </div>
          </details>

          <!-- FAQ 6 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>Are your featured web projects live and verifiable?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              <p style="margin-bottom: 8px;">
                Yes. You can explore my live web applications: Plexudo (<a href="https://plexudo.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--mint-dark); text-decoration: underline;">https://plexudo.vercel.app/</a>), AI Smart Text Utility (<a href="https://ai-text-utility.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--mint-dark); text-decoration: underline;">https://ai-text-utility.vercel.app/</a>), and Haveli Village Restaurant (<a href="https://haveli-village-restaurant.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--mint-dark); text-decoration: underline;">https://haveli-village-restaurant.vercel.app/</a>). Project source code is also accessible on GitHub (<a href="https://github.com/fahadbwp" target="_blank" rel="noopener noreferrer" style="color: var(--mint-dark); text-decoration: underline;">https://github.com/fahadbwp</a>).
              </p>
            </div>
          </details>

          <!-- FAQ 7 -->
          <details class="faq-item">
            <summary class="faq-trigger">
              <span>What is your education and current location?</span>
              <span class="faq-icon-pm">+</span>
            </summary>
            <div class="faq-content">
              I completed my BS in Computer Science from The Islamia University of Bahawalpur (2021–2025) and Intermediate (ICS) at Government S.E. College for Boys, Bahawalpur. I am based in Bahawalpur, Pakistan (GMT+5) and available for freelance and full-time remote contracts worldwide.
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>'''
    html = re.sub(faq_pattern, new_faq, html, flags=re.DOTALL, count=1)

    # 11. Update Footer Navigation & Branding
    footer_nav_target = '''              <li><a href="#services" class="footer-nav-v2-link">Services</a></li>
              <li><a href="#about" class="footer-nav-v2-link">About</a></li>'''
    footer_nav_replacement = '''              <li><a href="#services" class="footer-nav-v2-link">Capabilities</a></li>
              <li><a href="#skills" class="footer-nav-v2-link">Skills <span class="count-pill">MATRIX</span></a></li>
              <li><a href="#about" class="footer-nav-v2-link">About</a></li>'''
    html = html.replace(footer_nav_target, footer_nav_replacement, 1)

    footer_brand_target = '''            <div class="footer-brand-subtitle">Software &amp; Web Developer</div>
            <p class="footer-brand-statement">
              Building responsive, resilient web apps &amp; verified B2B intelligence datasets with clean engineering standards.
            </p>'''
    footer_brand_replacement = '''            <div class="footer-brand-subtitle">AI-Assisted Web Developer | React &amp; Next.js</div>
            <p class="footer-brand-statement">
              Architecting responsive web applications, custom AI utilities, and data pipelines with rapid deployment standards.
            </p>'''
    html = html.replace(footer_brand_target, footer_brand_replacement, 1)

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("index.html updated successfully!")

if __name__ == "__main__":
    update_index()
