export interface StatItem {
  value: string;
  label: string;
}

export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
  response: {
    title: string;
    summary: string;
    recommendedStack: string[];
    timeline: string;
    teamStructure: string;
    serviceLink: string;
  };
}

export interface ClientInitialBadge {
  initials: string;
  name: string;
  country: string;
}

export interface GroupedClientCategory {
  groupName: string;
  clients: ClientInitialBadge[];
}

export interface FeaturedCaseStudyItem {
  id: string;
  industry: string;
  country: string;
  title: string;
  description: string;
  category: "ecommerce" | "ai" | "engineering";
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
}

export const heroContent = {
  headlinePrefix: "Your trusted partner in ",
  headlineHighlight: "software & AI",
  headlineSuffix: " since 2005.",
  subtitle:
    "Tell us what you’re building — our AI assistant will point you to the right solution and team in seconds.",
  askEyebrow: "ASK US ANYTHING",
  inputPlaceholder:
    "e.g. I need a Shopify store with AI product recommendation",
  quickPrompts: [
    {
      id: "shopify-store",
      label: "I need a Shopify store",
      query:
        "I need a high-converting Shopify store with custom integrations and AI recommendations",
      response: {
        title: "Shopify Store & AI Commerce Engineering",
        summary:
          "Full-stack Shopify Plus & custom storefront architecture with AI-powered search, recommendation engines, and high-speed checkout funnels.",
        recommendedStack: [
          "Shopify Plus",
          "Hydrogen",
          "Next.js",
          "GraphQL",
          "Tailwind CSS",
        ],
        timeline: "4 - 8 Weeks",
        teamStructure:
          "1 Tech Lead, 2 Frontend Devs, 1 Shopify Specialist, 1 QA",
        serviceLink: "#ecommerce",
      },
    },
    {
      id: "ai-chatbot",
      label: "Build me an AI chatbot",
      query:
        "Build an autonomous AI chatbot for 24/7 customer support and internal knowledge retrieval",
      response: {
        title: "Custom AI Agent & Conversational Assistant",
        summary:
          "Domain-tuned conversational agent integrated with your knowledge base, CRM, and ticketing platforms with guardrails and high accuracy.",
        recommendedStack: [
          "LangChain",
          "OpenAI / Claude API",
          "LlamaIndex",
          "FastAPI",
          "Pinecone",
        ],
        timeline: "3 - 6 Weeks",
        teamStructure:
          "1 AI Engineer, 1 Backend Dev, 1 Prompt Specialist, 1 QA",
        serviceLink: "#ai-automation",
      },
    },
    {
      id: "saas-idea",
      label: "I have a SaaS product idea",
      query:
        "I have a SaaS product idea and need MVP development through production scale",
      response: {
        title: "End-to-End SaaS Product Development",
        summary:
          "Full-cycle product engineering from discovery & scoping, MVP build, multi-tenant architecture, automated billing, to cloud scaling.",
        recommendedStack: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "AWS / GCP",
        ],
        timeline: "6 - 12 Weeks",
        teamStructure:
          "1 Solutions Architect, 2 Full-Stack Devs, 1 Product Designer, 1 QA",
        serviceLink: "#product-engineering",
      },
    },
    {
      id: "automate-workflows",
      label: "Automate my workflows",
      query:
        "Automate internal business workflows, document processing, and CRM sync",
      response: {
        title: "Intelligent Workflow Automation & IDP",
        summary:
          "End-to-end automation connecting CRMs, ERPs, billing, and document ingestion (IDP) to eliminate manual data entry & errors.",
        recommendedStack: [
          "n8n / Make",
          "Python RPA",
          "Document AI",
          "REST Webhooks",
        ],
        timeline: "2 - 5 Weeks",
        teamStructure: "1 Automation Architect, 1 Integration Engineer, 1 QA",
        serviceLink: "#ai-automation",
      },
    },
    {
      id: "mobile-app",
      label: "I need a mobile app",
      query: "I need a native or cross-platform mobile app for iOS and Android",
      response: {
        title: "Native & Cross-Platform Mobile App Engineering",
        summary:
          "App store quality mobile applications built for real users with smooth UI/UX, offline support, and cloud API integration.",
        recommendedStack: [
          "React Native",
          "Flutter",
          "iOS / Swift",
          "Android / Kotlin",
        ],
        timeline: "6 - 10 Weeks",
        teamStructure:
          "1 Mobile Tech Lead, 2 Mobile Devs, 1 UI/UX Designer, 1 QA",
        serviceLink: "#product-engineering",
      },
    },
  ] as QuickPrompt[],
  stats: [
    { value: "250+", label: "Professionals" },
    { value: "1,500+", label: "Clients served" },
    { value: "3,000+", label: "Projects delivered" },
    { value: "20 yrs", label: "In business" },
  ] as StatItem[],
  trustedBannerTitle: "TRUSTED BY 1,500+ CLIENTS INCLUDING",
  trustedClients: [
    "CGI",
    "L&T",
    "Infosys",
    "Biocon",
    "TVS Next",
    "+ 1,495 more",
  ],
};

export const ecommerceContent = {
  sectionId: "ecommerce",
  title: "eCommerce",
  subtitle:
    "Commerce built for how people actually shop today — from AI-powered experiences to headless storefronts and multi-vendor marketplaces.",
  cards: [
    {
      id: "ai-commerce",
      title: "AI commerce",
      description:
        "Shopping assistants, recommendation engines, conversational commerce, and AI search that convert browsers into buyers.",
      tags: ["AI shopping assistant", "Conversational commerce", "AI chatbots"],
      icon: "robot",
    },
    {
      id: "commerce-solutions",
      title: "Commerce solutions",
      description:
        "Headless storefronts, B2B portals, marketplace platforms, and custom commerce builds — engineered for scale.",
      tags: ["Headless commerce", "Marketplace", "B2B eCommerce"],
      icon: "grid",
    },
  ],
  industryVerticals: {
    title: "Industry verticals",
    verticals: [
      { name: "Jewelry", icon: "diamond" },
      { name: "Fashion", icon: "shirt" },
      { name: "Grocery", icon: "cup" },
      { name: "Health", icon: "monitor" },
      { name: "D2C", icon: "box" },
      { name: "B2B", icon: "building" },
    ],
  },
  rightSidebar: {
    platformsTitle: "PLATFORMS WE BUILD ON",
    platforms: [
      { name: "Shopify", badge: "Expert partner" },
      { name: "WooCommerce", badge: "Certified", hasWpLogo: true },
      { name: "Headless stack", badge: "Custom builds", hasLayerIcon: true },
    ],
    caseStudiesTitle: "CASE STUDIES",
    caseStudies: [
      { title: "eCommerce case studies", href: "/case-studies" },
      { title: "Marketplace case studies", href: "/case-studies" },
      { title: "Shopify case studies", href: "/case-studies" },
    ],
  },
};

export const aiAutomationContent = {
  sectionId: "ai-automation",
  title: "AI & Automation",
  subtitle:
    "Production AI integrated with your systems, trained on your data, running 24/7 — not demos, not prototypes.",
  leftFlow: {
    header: "HOW WE DELIVER AN AI SOLUTION",
    steps: [
      {
        number: 1,
        title: "Discovery & workflow mapping",
        description:
          "Analyze business processes, identify high-impact automation opportunities, and scope data needs.",
      },
      {
        number: 2,
        title: "Model selection & data preparation",
        description:
          "Benchmark foundation models, build fine-tuning pipelines, and curate proprietary domain data.",
      },
      {
        number: 3,
        title: "Integration with existing systems",
        description:
          "Connect models into production CRMs, ERPs, APIs, and databases with reliable guardrails.",
      },
      {
        number: 4,
        title: "Testing, deployment & monitoring",
        description:
          "Continuous accuracy verification, latency optimization, and automated fallback monitoring.",
      },
    ],
    caseStudiesTitle: "CASE STUDIES",
    caseStudies: [
      { title: "AI agent case studies", href: "/case-studies" },
      { title: "Automation case studies", href: "/case-studies" },
      { title: "AI commerce case studies", href: "/case-studies" },
    ],
  },
  cards: [
    {
      id: "ai-services",
      title: "AI services",
      description:
        "Consulting, agents, chatbots, conversational AI, and generative AI — built for your use case, not a template.",
      tags: ["AI consulting", "AI agents", "Generative AI"],
      icon: "robot",
    },
    {
      id: "automation-services",
      title: "Automation services",
      description:
        "Workflow automation, document processing, CRM & sales automation, and AI-powered operations.",
      tags: ["Workflow automation", "IDP", "CRM automation"],
      icon: "refresh",
    },
    {
      id: "ai-commerce-solutions",
      title: "AI commerce solutions",
      description:
        "AI shopping assistants, recommendation engines, customer support automation, and AI search & discovery.",
      tags: ["AI recommendations", "AI support", "AI search"],
      icon: "cart",
    },
  ],
};

export const productEngineeringContent = {
  sectionId: "product-engineering",
  title: "Product Engineering",
  subtitle:
    "From idea to production-grade — SaaS products, enterprise platforms, web and mobile apps built by teams who own the outcome.",
  cards: [
    {
      id: "saas-web-applications",
      title: "SaaS & web applications",
      description:
        "Full-cycle SaaS product development and web app engineering — from MVP validation through production scale.",
      tags: ["SaaS development", "Web apps", "MVP"],
      icon: "monitor",
    },
    {
      id: "mobile-applications",
      title: "Mobile applications",
      description:
        "iOS, Android, and cross-platform mobile apps — designed for real users, built for app store quality.",
      tags: ["iOS", "Android", "Cross-platform"],
      icon: "phone",
    },
    {
      id: "enterprise-software",
      title: "Enterprise software",
      description:
        "Large-scale software for enterprise operations — integrations, security, compliance, and multi-tenant architecture.",
      tags: ["Enterprise", "Integrations", "Custom ERP"],
      icon: "building",
    },
  ],
  rightProcess: {
    header: "OUR ENGINEERING PROCESS",
    steps: [
      {
        title: "Discovery & scoping",
        description:
          "Requirements, architecture decisions, and a realistic roadmap — before a line of code.",
      },
      {
        title: "MVP build",
        description:
          "Focused sprint to a working product. Validate early, reduce risk before scale.",
      },
      {
        title: "Iterative development",
        description:
          "Agile cycles with regular demos. You see progress, not just updates.",
      },
      {
        title: "Launch & ongoing support",
        description:
          "Production deployment, monitoring, and engineering support post-launch.",
      },
    ],
    caseStudiesTitle: "CASE STUDIES",
    caseStudies: [
      { title: "SaaS product case studies", href: "/case-studies" },
      { title: "Enterprise software case studies", href: "/case-studies" },
      { title: "Mobile app case studies", href: "/case-studies" },
    ],
  },
};

export const ourWorkContent = {
  sectionId: "work",
  title: "Our work",
  subtitle:
    "1,500+ clients globally — who we've worked with, and what we achieved for them.",
  filterTabs: [
    { id: "ecommerce", label: "eCommerce" },
    { id: "ai", label: "AI & Automation" },
    { id: "engineering", label: "Product Engineering" },
  ],
  groupedClientsByTab: {
    ecommerce: [
      {
        groupName: "JEWELRY & FASHION",
        clients: [
          { initials: "JW", name: "JewelHub", country: "USA" },
          { initials: "FV", name: "FashionVault", country: "UK" },
          { initials: "SG", name: "StyleGrid", country: "Australia" },
        ],
      },
      {
        groupName: "GROCERY & FOOD",
        clients: [
          { initials: "EW", name: "Easy Way Tea", country: "Australia" },
          { initials: "FD", name: "FreshDrop", country: "USA" },
        ],
      },
      {
        groupName: "MARKETPLACE & D2C",
        clients: [
          { initials: "EP", name: "Epal", country: "Iceland" },
          { initials: "GF", name: "Gofer", country: "Australia" },
          { initials: "YB", name: "Yobod", country: "USA" },
        ],
      },
    ] as GroupedClientCategory[],
    ai: [
      {
        groupName: "FINTECH & BANKING",
        clients: [
          { initials: "RB", name: "RazorBank", country: "UK" },
          { initials: "QG", name: "QuantGrid", country: "USA" },
          { initials: "FT", name: "FinTrax", country: "Germany" },
        ],
      },
      {
        groupName: "HEALTHCARE & PHARMA",
        clients: [
          { initials: "BC", name: "Biocon", country: "India" },
          { initials: "MD", name: "MediData", country: "USA" },
        ],
      },
      {
        groupName: "ENTERPRISE AUTOMATION",
        clients: [
          { initials: "NX", name: "NextLogic", country: "USA" },
          { initials: "AS", name: "AutoScale", country: "Australia" },
          { initials: "OP", name: "OptiFlow", country: "UK" },
        ],
      },
    ] as GroupedClientCategory[],
    engineering: [
      {
        groupName: "SAAS PLATFORMS",
        clients: [
          { initials: "TS", name: "TagSom", country: "Sweden" },
          { initials: "CL", name: "CloudLayer", country: "USA" },
          { initials: "DS", name: "DataStack", country: "Germany" },
        ],
      },
      {
        groupName: "LOGISTICS & SUPPLY",
        clients: [
          { initials: "FL", name: "FastLogistics", country: "USA" },
          { initials: "OT", name: "OmniTrack", country: "UK" },
        ],
      },
      {
        groupName: "EDTECH & HRTECH",
        clients: [
          { initials: "SK", name: "SkillHub", country: "Canada" },
          { initials: "TP", name: "TalentPulse", country: "Singapore" },
          { initials: "NV", name: "NovaLearn", country: "USA" },
        ],
      },
    ] as GroupedClientCategory[],
  },
  groupedClients: [
    {
      groupName: "JEWELRY & FASHION",
      clients: [
        { initials: "JW", name: "JewelHub", country: "USA" },
        { initials: "FV", name: "FashionVault", country: "UK" },
        { initials: "SG", name: "StyleGrid", country: "Australia" },
      ],
    },
    {
      groupName: "GROCERY & FOOD",
      clients: [
        { initials: "EW", name: "Easy Way Tea", country: "Australia" },
        { initials: "FD", name: "FreshDrop", country: "USA" },
      ],
    },
    {
      groupName: "MARKETPLACE & D2C",
      clients: [
        { initials: "EP", name: "Epal", country: "Iceland" },
        { initials: "GF", name: "Gofer", country: "Australia" },
        { initials: "YB", name: "Yobod", country: "USA" },
      ],
    },
  ] as GroupedClientCategory[],
  featuredCaseStudies: [
    {
      id: "tagsom",
      industry: "Education",
      country: "Sweden",
      title: "TagSom",
      description:
        "An interactive EdTech platform helping children learn to read, with gamified exercises and parent dashboards.",
      category: "engineering",
      metrics: [
        { value: "100K+", label: "App downloads" },
        { value: "45%", label: "Higher engagement" },
      ],
      href: "/case-studies",
    },
    {
      id: "biocon",
      industry: "Healthcare",
      country: "India",
      title: "Biocon",
      description:
        "Supply chain and forecasting platform for one of India's leading biotech companies, improving operational efficiency.",
      category: "ai",
      metrics: [
        { value: "20%", label: "Cost savings" },
        { value: "40%", label: "Forecast accuracy" },
      ],
      href: "/case-studies",
    },
    {
      id: "epal",
      industry: "eCommerce",
      country: "Iceland",
      title: "Epal",
      description:
        "A Nordic online marketplace for Icelandic design products — lifestyle, furniture, and homeware, built for scale.",
      category: "ecommerce",
      metrics: [
        { value: "98%", label: "Transaction success" },
        { value: "30%", label: "Cart abandonment drop" },
      ],
      href: "/case-studies",
    },
  ] as FeaturedCaseStudyItem[],
  footerBanner: {
    leftText: "Showing a sample of 1,500+ clients across 50+ countries.",
    linkText: "View all case studies",
    href: "/case-studies",
  },
};
