export interface ServiceCapability {
  title: string;
  description: string;
  badge?: string;
  features: string[];
}

export interface TechCategory {
  name: string;
  skills: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface EngagementModel {
  id: "fixed-price" | "dedicated-hiring" | "time-material";
  title: string;
  subtitle: string;
  overview: string;
  bestFor: string;
  benefits: string[];
  ctaText: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const customSoftwareContent = {
  hero: {
    badge: "Enterprise Custom Software Solutions",
    title: "Custom Software Development Company",
    subtitle:
      "Utilize our two decades of expertise to tailor your software precisely to your unique requirements. Our exceptional team of custom software developers specializes in crafting bespoke solutions that align with your brand, business processes, and objectives.",
    primaryCta: {
      label: "Explore Software Services",
      href: "#overview",
    },
    secondaryCta: {
      label: "Schedule Consultation",
      href: "#consultation-cta",
    },
    metrics: [
      { label: "Clutch Rating", value: "4.9 / 5", sublabel: "Verified client reviews" },
      { label: "Google Rating", value: "4.2 / 5", sublabel: "Global reputation" },
      { label: "Projects Delivered", value: "1,500+", sublabel: "Worldwide clients" },
      { label: "Industry Experience", value: "20+ Years", sublabel: "Since 2005" },
    ],
  },

  trustedClients: [
    { name: "CGI", logoText: "CGI" },
    { name: "L&T", logoText: "L&T" },
    { name: "TVS Next", logoText: "TVS Next" },
    { name: "Biocon", logoText: "Biocon" },
    { name: "Infosys", logoText: "Infosys" },
  ],

  overview: {
    badge: "What We Do",
    title: "Custom Software Development Services",
    introParagraphs: [
      "Our custom software development services come with a set of unique features tailored to your precise business requirements.",
      "With a focus on full-stack architecture and modern engineering standards, our team delivers custom software development solutions that are flexible, scalable, and adaptable to dynamic market demands.",
      "We combine a structured agile approach with transparent client-friendly policies, making world-class custom software development accessible and cost-effective for startups, growing SMEs, and enterprise leaders.",
    ],
    capabilities: [
      {
        title: "Product Engineering",
        description:
          "We function as an end-to-end custom software product engineering partner handling ideation, design, prototyping, product-market fit, engineering, launch, and long-term scaling.",
        features: ["Roadmap & Strategy", "SaaS Architecture", "Scalable Microservices", "CI/CD Deployment"],
      },
      {
        title: "Digital Transformation",
        description:
          "Modernize workflows, elevate customer engagement, and improve operational efficiency with tailored CRM, ERP, and bespoke enterprise business intelligence tools.",
        features: ["Legacy Modernization", "ERP & CRM Integration", "Process Automation", "Cloud Migration"],
      },
      {
        title: "MVP Development",
        description:
          "Launch your product idea quickly with high-impact feature prioritization, rapid prototyping, and market-ready architecture to validate with real users.",
        features: ["Rapid Prototyping", "Lean Architecture", "User Feedback Loops", "Fast Time-to-Market"],
      },
      {
        title: "Enterprise Applications",
        description:
          "Enterprise-grade solutions built for high concurrency, rock-solid security, regulatory compliance, and seamless integration with existing internal software ecosystems.",
        features: ["Multi-Tenant SaaS", "Role-Based Access (RBAC)", "High Availability", "Strict Compliance"],
      },
      {
        title: "Full Stack Development",
        description:
          "Comprehensive frontend, backend, database, and API engineering designed for lightning-fast responsiveness, high throughput, and developer ergonomics.",
        features: ["Modern UI Frameworks", "High-Performance APIs", "Optimized DB Queries", "Cloud Native"],
      },
      {
        title: "Software Modernization",
        description:
          "Refactor, re-platform, and migrate legacy codebases to cloud-native microservices, slashing maintenance overhead and eliminating technical debt.",
        features: ["Monolith to Microservices", "Cloud Re-architecture", "Security Hardening", "Database Refactoring"],
      },
    ],
  },

  techStack: {
    badge: "Core Technologies",
    title: "Technologies & Frameworks We Excel At",
    description:
      "We choose the right technology stack tailored for your product's performance, scalability, and long-term maintainability.",
    categories: [
      {
        name: "Front End",
        skills: ["ReactJS", "Next.js", "AngularJS", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
      },
      {
        name: "Back End",
        skills: ["Node.js", "Python (Django/FastAPI)", "Java Spring Boot", ".NET Core", "PHP (Laravel)", "Ruby on Rails"],
      },
      {
        name: "Mobile Apps",
        skills: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)", "PWA"],
      },
      {
        name: "Database & Caching",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
      },
      {
        name: "Cloud & DevOps",
        skills: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      },
    ],
  },

  whyUs: {
    badge: "The Narola Advantage",
    title: "Why Partner with Narola Infotech?",
    description:
      "We combine 20 years of technological excellence with transparent, client-centric processes that deliver measurable business outcomes.",
    reasons: [
      {
        title: "20+ Years of Proven Trust",
        description:
          "Successfully delivered 1,500+ projects worldwide with high retention and stellar Clutch & Google ratings.",
      },
      {
        title: "Dedicated Tech Lead at Zero Cost",
        description:
          "Every project is guided by an experienced technical lead to manage milestones, code quality, and delivery schedules.",
      },
      {
        title: "100% Agile & Transparent Process",
        description:
          "Daily standups, bi-weekly sprint reviews, sprint demos, and direct access to your engineering team with no middlemen.",
      },
      {
        title: "Strict IP Protection & Confidentiality",
        description:
          "Comprehensive NDA signing before project commencement. Complete ownership of source code, IP, and assets transferred to you.",
      },
      {
        title: "Rapid Resource Onboarding in 3 Days",
        description:
          "Quickly scale your development capacity with pre-vetted senior software engineers ready to contribute immediately.",
      },
      {
        title: "Post-Launch SLA & Maintenance",
        description:
          "Continuous performance monitoring, security patches, regular backups, and feature enhancements after launch.",
      },
    ],
  },

  servicesMatrix: {
    badge: "Service Offerings",
    title: "Here's What Narola Infotech Can Do For You",
    tabs: [
      {
        id: "custom-dev",
        label: "Custom Development Services",
        headline: "Scalable and Top-notch Custom Solutions",
        items: [
          { title: "API Development & Integration", description: "REST & GraphQL APIs with third-party connectors" },
          { title: "MVP Development", description: "Fast-track minimum viable product for early market validation" },
          { title: "Full Stack Web Development", description: "Responsive web apps with modern React/Next.js and robust backends" },
          { title: "Custom Web Portals", description: "B2B client portals, vendor management, and employee intranets" },
          { title: "Custom Software Product Development", description: "Full-lifecycle SaaS and commercial software engineering" },
          { title: "CRM & ERP Software Development", description: "Custom business management and automated sales pipelines" },
          { title: "Enterprise Software Engineering", description: "High-concurrency systems built for multinational compliance" },
          { title: "Manufacturing & Logistics Software", description: "WMS, inventory tracking, IoT monitoring, and dispatch optimization" },
        ],
      },
      {
        id: "software-services",
        label: "Software Services",
        headline: "Partner with Us for End-to-End Software Success",
        items: [
          { title: "Implementation & Cloud Deployment", description: "Automated multi-region cloud infrastructure rollout" },
          { title: "Third-Party System Integration", description: "Payment gateways, ERPs, CRM connectors, and IoT data feeds" },
          { title: "Modernization & Cloud Migration", description: "Transform legacy monolithic systems into agile microservices" },
          { title: "Digital Transformation Consulting", description: "Strategic technology roadmaps to digitize business operations" },
          { title: "Workflow Automation Development", description: "Eliminate manual data entry and streamline approval workflows" },
          { title: "Continuous Maintenance & SLA Support", description: "Proactive bug fixes, performance monitoring, and server scaling" },
        ],
      },
      {
        id: "hiring-models",
        label: "Hiring Models",
        headline: "Choose the Right Fit for Your Project Budget & Scope",
        items: [
          { title: "Staff Augmentation", description: "Fill specific talent gaps with skilled engineers embedded in your team" },
          { title: "Software Development Outsourcing", description: "Delegate complete product engineering to our experienced teams" },
          { title: "Hire Dedicated Developers", description: "Full-time engineers working exclusively on your product under your direction" },
          { title: "Hire Dedicated Scrum Team", description: "Complete agile pod: Tech Lead, Full Stack Devs, UI/UX Designer, QA" },
        ],
      },
      {
        id: "hire-talent",
        label: "Hire Specialized Developers",
        headline: "Tap into Our Talent Pool of Dedicated Engineers",
        items: [
          { title: "Hire React & Next.js Developers", description: "Interactive frontend engineers for responsive modern web apps" },
          { title: "Hire Node.js & Python Developers", description: "High-performance backend engineers for APIs and microservices" },
          { title: "Hire Java & .NET Developers", description: "Enterprise engineers for mission-critical core systems" },
          { title: "Hire Flutter & React Native Developers", description: "Cross-platform mobile developers for iOS and Android" },
          { title: "Hire iOS (Swift) & Android (Kotlin) Devs", description: "Native mobile specialists for platform-specific capabilities" },
          { title: "Hire QA Automation Engineers", description: "Test automation engineers ensuring zero-defect deployments" },
        ],
      },
    ],
  },

  process: {
    badge: "How We Work",
    title: "Our Agile Custom Software Development Process",
    subtitle:
      "We follow a transparent, sprint-based Agile approach to ensure every deliverable meets the highest standards and launches on schedule.",
    stages: [
      {
        step: "01",
        title: "Discovery & Requirements Analysis",
        description:
          "We analyze your business objectives, target audience, technical feasibility, and prepare a comprehensive Software Requirements Specification (SRS) with architectural blueprints.",
        deliverables: ["Project Scope & SRS", "System Architecture Blueprint", "Milestone Roadmap & Timeline"],
      },
      {
        step: "02",
        title: "UI/UX Design & Prototyping",
        description:
          "Our design team creates intuitive user journeys, wireframes, and interactive Figma prototypes, testing usability before writing a single line of code.",
        deliverables: ["Information Architecture", "Interactive Figma Wireframes", "Design System & Component Library"],
      },
      {
        step: "03",
        title: "Iterative Sprint Development",
        description:
          "Development proceeds in 2-week agile sprints. We deliver incremental working features with continuous code reviews, automated tests, and bi-weekly sprint demos.",
        deliverables: ["Bi-weekly Sprint Demos", "Clean Modular Source Code", "CI/CD Deployment Pipelines"],
      },
      {
        step: "04",
        title: "Comprehensive QA & Security Testing",
        description:
          "Rigorous multi-layer testing across browsers, devices, and loads. We conduct unit tests, integration tests, vulnerability assessments, and performance benchmarks.",
        deliverables: ["Test Execution Reports", "Security & Vulnerability Audits", "Performance & Load Test Metrics"],
      },
      {
        step: "05",
        title: "Production Deployment & SLA Support",
        description:
          "Smooth cloud rollout, DNS switchover, and live monitoring. We provide ongoing maintenance, telemetry monitoring, and fast turnaround SLA support.",
        deliverables: ["Zero-Downtime Production Launch", "Complete IP & Source Code Transfer", "24/7 SLA Support Plan"],
      },
    ],
  },

  engagementModels: [
    {
      id: "fixed-price" as const,
      title: "Fixed Price Model",
      subtitle: "Best for projects with well-defined scope and specifications",
      overview:
        "All project requirements, deliverables, milestones, and costs are finalized upfront before kickoff. This model guarantees budget predictability and minimal risk.",
      bestFor: "MVPs, well-documented custom web apps, and standalone milestone-based software.",
      benefits: [
        "Pre-agreed budget and delivery timelines with zero surprise costs",
        "Milestone-based payment released upon client acceptance of deliverables",
        "Change requests handled cleanly with transparent impact estimates",
        "Dedicated Tech Lead assigned at no extra cost to manage delivery",
      ],
      ctaText: "Get a Fixed Price Quote",
    },
    {
      id: "dedicated-hiring" as const,
      title: "Dedicated Hiring Model",
      subtitle: "Best for long-term projects, rapid scaling, and dedicated teams",
      overview:
        "Hire vetted software developers who work exclusively for your company. You retain complete strategic control, direct communication, and daily task management.",
      bestFor: "Fast-growing startups, long-term SaaS products, and continuous feature expansion.",
      benefits: [
        "Developers work 100% exclusively on your product under your direction",
        "Onboard vetted senior developers in as little as 3 business days",
        "Direct communication via Slack, Teams, Jira, and daily standups",
        "Seamlessly scale team size up or down based on your roadmap",
      ],
      ctaText: "Hire Dedicated Developers",
    },
    {
      id: "time-material" as const,
      title: "Time & Material Model",
      subtitle: "Best for evolving scopes, exploratory development, and agile iteration",
      overview:
        "Pay only for the actual developer hours and resources utilized. Offers maximum flexibility to adjust requirements, pivot features, and iterate rapidly.",
      bestFor: "Complex enterprise projects with changing requirements, R&D, and ongoing maintenance.",
      benefits: [
        "Maximum flexibility to alter project requirements without formal change contracts",
        "Pay-as-you-go billing based on tracked hours and sprint output",
        "Switch developer skillsets as the product transitions from MVP to scaling",
        "Complete transparency with daily timesheets and work logs",
      ],
      ctaText: "Start with Time & Material",
    },
  ],

  faqs: [
    {
      question: "What are the different types of custom software development?",
      answer:
        "Common types of custom software include Content Management Systems (CMS), Customer Relationship Management (CRM) tools, Enterprise Resource Planning (ERP) systems, Operations & Logistics Management software, and tailored Ecommerce Platforms. Each solution is engineered with custom workflows and integrations specific to your business needs.",
    },
    {
      question: "What is custom software development and how does it benefit my business?",
      answer:
        "Custom software development is the process of designing, building, and maintaining bespoke applications engineered specifically for your company's distinct workflows, users, and goals. Unlike off-the-shelf software, custom software eliminates recurring license fees, provides complete ownership of intellectual property (IP), scales seamlessly, and offers competitive advantages tailored to your exact operations.",
    },
    {
      question: "How much does custom software development cost?",
      answer:
        "The cost of custom software development depends on project complexity, feature scope, technology stack, and integration requirements. Simple MVPs typically start in the lower thousands, while comprehensive enterprise platforms scale based on sprint velocity. We provide detailed, itemized cost estimates and fixed-price proposals after our initial discovery session.",
    },
    {
      question: "What is the typical duration required to build custom software?",
      answer:
        "A typical MVP or focused application takes between 2 to 4 months, whereas complex multi-tiered enterprise platforms take between 4 to 9 months. Following our Agile methodology, you receive working software demos every two weeks, allowing you to launch core features early and iterate progressively.",
    },
    {
      question: "Does Narola Infotech offer post-development support and maintenance?",
      answer:
        "Yes. We offer comprehensive post-launch SLA maintenance agreements that include continuous 24/7 uptime monitoring, critical security patches, bug fixes, database optimizations, and ongoing feature development.",
    },
    {
      question: "Can I hire a custom software developer on a full-time or hourly basis?",
      answer:
        "Yes. You can choose between our Fixed Price, Dedicated Developer (Full-Time/Monthly), or Time & Material (Hourly) models depending on your project needs. We can onboard developers within 3 business days.",
    },
    {
      question: "Who owns the Intellectual Property (IP) and source code?",
      answer:
        "You retain 100% ownership of all source code, design assets, and intellectual property. Upon project completion and milestone clearance, complete repository access and all IP rights are formally assigned to your company.",
    },
  ],
};
