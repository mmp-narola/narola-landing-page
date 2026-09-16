export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  clientName: string;
  country: string;
  industry: string;
  service: string;
  region: string;
  thumbnailUrl: string;
  bannerUrl: string;
  logoUrl?: string;
  galleryImages: string[];
  metrics: CaseStudyMetric[];
  summary: string;
  businessNeeds: string[];
  challenges: string[];
  proposedSolution: string[];
  objectivesAchieved: string[];
  technologies: string[];
  relatedSlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "shipping-adaptor",
    title: "Shipping Adaptor",
    tagline: "Connects eCommerce merchants with worldwide shipping channels",
    clientName: "Shipping Adaptor Inc.",
    country: "Canada",
    industry: "Retail & Ecommerce",
    service: "Custom Software Development",
    region: "North America",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor_thumbnail.jpg",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor_banner.jpg",
    logoUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor-logo.jpg",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2023/10/Shipping-Adaptor4.jpg",
      "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor-0.jpg",
      "https://www.narolainfotech.com/wp-content/uploads/2023/10/Shipping-Adaptor3-1.jpg",
    ],
    metrics: [
      { value: "40%", label: "Increase in Operational Efficiency" },
      { value: "20%", label: "Reduction in Shipping Costs" },
    ],
    summary:
      "Narola Infotech developed Shipping Adaptor, an innovative application that seamlessly connects e-commerce merchants with various shipping channels worldwide. This platform efficiently manages shipping orders from multiple sources, bridging the gap between merchants and shipping providers. The system encompasses Merchant Store Connect, Shipping Channel Connect, Payment Gateway integration, Order Sync mechanisms, an intuitive Order Dashboard, Rating module, Shipping module, Tracking features, and Cancellation functionalities.",
    businessNeeds: [
      "Establish a robust connection between e-commerce merchants and diverse global shipping channels.",
      "Automate the order fulfillment process by integrating with various e-commerce platforms.",
      "Ensure flexibility in order synchronization, allowing manual uploads, API integrations, email, and SFTP-based methods.",
      "Provide a user-friendly dashboard for efficient order management and tracking.",
      "Implement a reliable rating system to help merchants choose suitable shipping options.",
      "Facilitate cancellations and order reversion processes based on shipping provider policies.",
    ],
    challenges: [
      "Integrating with diverse e-commerce platforms and their unique APIs.",
      "Handling different versions of shipping APIs, including XML and REST.",
      "Ensuring secure and accurate order data synchronization from multiple sources.",
      "Implementing a user-friendly interface for order management, rating, and shipping processes.",
      "Addressing cancellation complexities based on shipping provider policies.",
    ],
    proposedSolution: [
      "Merchant Store Connect: Implemented a secure authentication system for connecting with various e-commerce platforms using API keys and OAuth tokens.",
      "Shipping Channel Connect: Integrated with multiple shipping channels starting with eShipper, designed to scale with UPS, Canada Post, and USPS.",
      "Order Sync Mechanisms: Developed three sync methods - webhooks integration, manual file uploads with field mapping, and automated SFTP order ingestion.",
      "User-Friendly Dashboard: Created an intuitive Order Dashboard with advanced search, bulk actions, and multi-parameter filters.",
      "Rating Module: Built an automated rate comparison engine querying live shipping provider tariffs for transparent breakdown.",
      "Shipping & Label Generation: Developed an automated shipping workflow generating packing lists, customs invoices, and printable PDF labels.",
      "Tracking & Cancellation: Real-time webhook notifications for order tracking and automated policy-driven cancellation workflows.",
    ],
    objectivesAchieved: [
      "Streamlined the order management process through a responsive dashboard with sub-second search speeds.",
      "Automated custom documents and shipping label generation, slashing manual processing time by 40%.",
      "Integrated 5+ major e-commerce platforms and global carriers with unified error-resilient synchronization.",
      "Provided transparent rate comparisons leading to average 20% lower shipping expenses for merchants.",
    ],
    technologies: ["Java 11", "Spring Boot", "Spring Security", "JPA", "MySQL", "Maven", "REST API", "Docker"],
    relatedSlugs: ["predictive-ecommerce", "touchstone-essentials", "e-star"],
  },
  {
    slug: "safiri-salama",
    title: "Safiri Salama",
    tagline: "Kenya's first digital end-of-life notices, memorials, and funeral services platform",
    clientName: "Safiri Salama Media",
    country: "Kenya",
    industry: "Life Style",
    service: "Web Application Development",
    region: "Africa",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/04/Safiri-Salama-featured-image.jpg",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/04/Safiri-Salama-featured-image.jpg",
    logoUrl: "https://www.narolainfotech.com/wp-content/uploads/2023/04/Safiri-Salama-featured-image.jpg",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2023/04/Safiri-Salama-featured-image.jpg",
    ],
    metrics: [
      { value: "30,000+", label: "Active Users in First 6 Months" },
      { value: "500,000+", label: "Memorial Page Views" },
    ],
    summary:
      "Safiri Salama is Kenya's first End-of-Life services platform, transforming how people announce deaths, plan funerals, celebrate memories, and connect with verified funeral care providers. The platform delivers three primary digital experiences: digital death notices, perpetual digital memorials with tribute walls, and the Redbook directory connecting families with verified funeral service providers across the region.",
    businessNeeds: [
      "Create an accessible, dignified digital platform for publishing obituary notices across Kenya and the diaspora.",
      "Build interactive memorial pages where family members worldwide can post tributes, photos, and condolences.",
      "Develop a verified directory (The Redbook) of funeral homes, florist providers, transport, and grief counselors.",
      "Enable mobile-first payment integration using MPesa and international card processors.",
    ],
    challenges: [
      "Designing a culturally sensitive, user-friendly interface tailored to grieving families during high-stress times.",
      "Handling sudden traffic surges on viral memorial notices without performance degradation.",
      "Integrating local Kenyan mobile payment systems (MPesa STK Push) alongside international credit card gateways.",
    ],
    proposedSolution: [
      "Intuitive Memorial Builder: Step-by-step wizard allowing non-technical users to create personalized memorial pages in minutes.",
      "High-Performance Cloud Infrastructure: Deployed with CDN edge caching to ensure instant page load speeds under heavy global traffic.",
      "Redbook Directory Engine: Verified provider directory with geolocation search, reviews, and direct inquiry forms.",
      "Seamless Payment Processing: Integrated MPesa mobile money and Stripe for seamless domestic and diaspora payments.",
    ],
    objectivesAchieved: [
      "Surpassed 30,000 active monthly users and over 500,000 page views within the first half-year of rollout.",
      "Connected hundreds of grieving families with trusted service providers across 47 Kenyan counties.",
      "Achieved 99.9% uptime during high-profile national memorial events.",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "AWS S3", "MPesa API", "Stripe"],
    relatedSlugs: ["touchstone-essentials", "shipping-adaptor", "real-estate-application"],
  },
  {
    slug: "e-star",
    title: "E-Star",
    tagline: "Global esports recruitment and talent scouting ecosystem",
    clientName: "E-Stars Gaming Network",
    country: "Denmark",
    industry: "Sports & Gaming",
    service: "Custom Software Development",
    region: "Europe",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2024/01/E-Star-1.webp",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2024/01/E-Star-1.webp",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2024/01/E-Star-1.webp",
    ],
    metrics: [
      { value: "75%", label: "Faster Job & Team Matching" },
      { value: "50%", label: "Reduction in Spam Applications" },
    ],
    summary:
      "E-Stars is a dedicated platform built to bridge the gap between professional esports players, coaching staff, and gaming organizations worldwide. It streamlines the recruitment process with verified player statistics, role-based filters, anti-spam screening, and direct communication channels.",
    businessNeeds: [
      "Centralize talent acquisition for competitive gaming teams and esports clubs globally.",
      "Provide in-depth gamer profiles featuring game stats, competitive rankings, and tournament history.",
      "Eliminate irrelevant applicant spam through skill verification and automated matching criteria.",
      "Create direct contract negotiation and messaging tools between teams and esports professionals.",
    ],
    challenges: [
      "Structuring dynamic profile data across varied competitive titles (CS:GO, League of Legends, Valorant, Dota 2).",
      "Designing responsive, high-framerate dark-mode interfaces matching esports design aesthetics.",
      "Managing complex multi-timezone scheduling for trial sessions and interviews.",
    ],
    proposedSolution: [
      "Verified Gamer Resume: Custom profile builder linking verified in-game statistics, VOD highlights, and tournament achievements.",
      "Smart Talent Search: Advanced search matrix filtering candidates by game rank, primary role, region, and availability.",
      "Team Management Suite: Applicant tracking dashboard for esports managers to review, trial, and hire talent collaboratively.",
    ],
    objectivesAchieved: [
      "Accelerated recruitment cycles by 75% for Tier-1 and Tier-2 esports organizations.",
      "Reduced unqualified applicant submissions by 50% through automated skill gating.",
      "Onboarded thousands of competitive players and teams across Europe and North America.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Socket.io", "Redis", "Docker"],
    relatedSlugs: ["shipping-adaptor", "predictive-ecommerce", "safiri-salama"],
  },
  {
    slug: "real-estate-application",
    title: "Commercial Real Estate Analytics & Deal Management",
    tagline: "Transformative deal management, interactive mapping, and analytics platform",
    clientName: "Commercial PropTech Group",
    country: "United States",
    industry: "Real Estate",
    service: "Web Application Development",
    region: "North America",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2022/10/Real_Estate_Application.webp",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2022/10/Real_Estate_Application.webp",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2022/10/Real_Estate_Application.webp",
    ],
    metrics: [
      { value: "3x", label: "Faster Deal Pipeline Processing" },
      { value: "10,000+", label: "Commercial Properties Tracked" },
    ],
    summary:
      "A comprehensive commercial real estate solution engineered for brokers, investors, and property managers. The web app integrates dynamic map visualization, automated email deal ingestion, cash flow modeling, and multi-tenant pipeline management.",
    businessNeeds: [
      "Unify property data, deal stages, and investor contact history into a centralized web portal.",
      "Implement interactive mapping with zoning, demographic, and transport overlays.",
      "Automate data extraction from broker emails and PDF offering memorandums.",
    ],
    challenges: [
      "Rendering thousands of geospatial data points on interactive map layers smoothly.",
      "Parsing non-standard real estate PDF brochures into structured financial deal models.",
    ],
    proposedSolution: [
      "Geospatial Map Engine: Custom Mapbox integration with clustered property markers and spatial boundary filtering.",
      "Intelligent Email Parser: Automated parsing pipeline converting broker email attachments into structured deals.",
      "Financial Modeling Engine: Instant calculation of Cap Rates, IRR, NOI, and cash-on-cash returns.",
    ],
    objectivesAchieved: [
      "Streamlined commercial transaction lifecycles by 3x from initial lead to closing.",
      "Enabled real estate stakeholders to evaluate deals 60% faster with automated underwriting summaries.",
    ],
    technologies: ["React", "Next.js", "Mapbox GL", "Python", "FastAPI", "PostgreSQL / PostGIS", "AWS"],
    relatedSlugs: ["touchstone-essentials", "shipping-adaptor", "predictive-ecommerce"],
  },
  {
    slug: "predictive-ecommerce",
    title: "Predictive eCommerce Platform",
    tagline: "AI-driven chat discovery connecting shoppers with specialized merchants",
    clientName: "Predictive Commerce Labs",
    country: "United States",
    industry: "Retail & Ecommerce",
    service: "AI & Machine Learning",
    region: "North America",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2022/10/Predictive-eCommerce_-Connecting-Shoppers-and-Vendors_cs.webp",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2022/10/Predictive-eCommerce_-Connecting-Shoppers-and-Vendors_cs.webp",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2022/10/Predictive-eCommerce_-Connecting-Shoppers-and-Vendors_cs.webp",
    ],
    metrics: [
      { value: "35%", label: "Higher Order Conversion Rate" },
      { value: "60%", label: "Faster Product Discovery" },
    ],
    summary:
      "A conversational shopping platform utilizing natural language understanding and machine learning algorithms to connect non-technical buyers with niche product vendors. Shoppers describe their exact requirements through a guided chat interface, and the predictive engine matches them with curated merchants.",
    businessNeeds: [
      "Help boutique and local vendors increase sales without complex inventory cataloging.",
      "Make online buying effortless for less tech-savvy customers through natural language chat.",
      "Automate vendor fulfillment routing based on proximity, stock availability, and buyer preference.",
    ],
    challenges: [
      "Accurately classifying conversational requests into standardized product taxonomies.",
      "Real-time matching across multi-vendor inventories with sub-second response latency.",
    ],
    proposedSolution: [
      "Conversational Product Matcher: NLP-powered chat engine extracting buyer intent, budget, and sizing specifications.",
      "Vendor Portal: Lightweight dashboard for small merchants to claim orders and confirm fulfillment with one click.",
      "Smart Settlement: Multi-party payment processing with automated escrow and vendor payouts.",
    ],
    objectivesAchieved: [
      "Lifted checkout conversion rates by 35% compared to traditional faceted catalog search.",
      "Empowered over 500 independent merchants to participate in digital commerce seamlessly.",
    ],
    technologies: ["Node.js", "Python NLP", "React", "MongoDB", "Tailwind CSS", "Stripe Connect", "WebSockets"],
    relatedSlugs: ["shipping-adaptor", "touchstone-essentials", "e-star"],
  },
  {
    slug: "touchstone-essentials",
    title: "Touchstone Essentials",
    tagline: "Scalable digital nutrition storefront and affiliate distribution network",
    clientName: "Touchstone Essentials Inc.",
    country: "United States",
    industry: "Life Style & Health",
    service: "Custom Software Development",
    region: "North America",
    thumbnailUrl: "https://www.narolainfotech.com/wp-content/uploads/2024/01/Touchstone-Thegoodinside_CS.webp",
    bannerUrl: "https://www.narolainfotech.com/wp-content/uploads/2024/01/Touchstone-Thegoodinside_CS.webp",
    galleryImages: [
      "https://www.narolainfotech.com/wp-content/uploads/2024/01/Touchstone-Thegoodinside_CS.webp",
    ],
    metrics: [
      { value: "100k+", label: "Subscribers & Customers Served" },
      { value: "99.99%", label: "Platform Availability" },
    ],
    summary:
      "Touchstone Essentials was founded with a mission of making organic, plant-powered nutrition accessible globally. Narola Infotech engineered a modern subscription storefront, recurring replenishment engine, and multi-tier affiliate marketing platform to support their rapid global expansion.",
    businessNeeds: [
      "High-converting direct-to-consumer storefront with recurring subscription management.",
      "Affiliate and brand ambassador tracking portal with real-time commission calculation.",
      "Omnichannel ERP and 3PL warehouse fulfillment automation.",
    ],
    challenges: [
      "Handling complex recurring billing schedules with dunning management and card updates.",
      "Calculating multi-level affiliate commission tiers with instant payout reconciliations.",
    ],
    proposedSolution: [
      "Subscription Commerce Engine: Custom auto-ship module allowing customers to modify, skip, or pause delivery dates freely.",
      "Ambassador Backoffice: Dedicated analytics dashboard for affiliates to track referrals, payouts, and campaign URLs.",
      "Automated Logistics Sync: Bidirectional sync with third-party logistics (3PL) fulfillment centers.",
    ],
    objectivesAchieved: [
      "Successfully processed hundreds of thousands of recurring orders with zero billing interruptions.",
      "Supported exponential sales growth across North America, Europe, and Asia-Pacific markets.",
    ],
    technologies: ["Next.js", "React", "Node.js", "PHP / Laravel", "MySQL", "Redis", "Stripe Billing"],
    relatedSlugs: ["shipping-adaptor", "predictive-ecommerce", "safiri-salama"],
  },
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 3): CaseStudy[] {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) return caseStudies.slice(0, limit);

  const related = (current.relatedSlugs || [])
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is CaseStudy => Boolean(c));

  if (related.length < limit) {
    const others = caseStudies.filter(
      (c) => c.slug !== currentSlug && !related.some((r) => r.slug === c.slug)
    );
    related.push(...others.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
