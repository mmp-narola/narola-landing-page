export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuGroup {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuColumn {
  heading?: string;
  links?: MegaMenuLink[];
  groups?: MegaMenuGroup[];
}

export interface FeaturedCaseStudyConfig {
  tagLabel: string;
  title: string;
  description?: string;
  metrics: { value: string; label: string }[];
  href: string;
  image?: string;
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  href: string;
  columns: MegaMenuColumn[];
  featured?: FeaturedCaseStudyConfig;
  showConsultationCta?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  megaMenu?: MegaMenuConfig;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const aiAutomationMegaMenu: MegaMenuConfig = {
  id: "ai-automation",
  label: "AI & Automation",
  href: "/#ai-automation",
  columns: [
    {
      heading: "AI Services",
      links: [
        { label: "AI Consulting", href: "/#ai-automation" },
        { label: "AI Agents Development", href: "/#ai-automation" },
        { label: "AI Chatbot Development", href: "/#ai-automation" },
        { label: "Conversational AI Solutions", href: "/#ai-automation" },
        { label: "Generative AI Development", href: "/#ai-automation" },
      ],
    },
    {
      heading: "Automation Services",
      links: [
        { label: "Workflow Automation", href: "/#ai-automation" },
        { label: "Business Process Automation", href: "/#ai-automation" },
        { label: "Intelligent Document Processing", href: "/#ai-automation" },
        { label: "CRM & Sales Automation", href: "/#ai-automation" },
        { label: "AI-Powered Operations Automation", href: "/#ai-automation" },
      ],
    },
    {
      heading: "AI Commerce Solutions",
      links: [
        { label: "AI Shopping Assistant", href: "/#ai-automation" },
        { label: "AI Product Recommendation Engine", href: "/#ai-automation" },
        { label: "AI Customer Support Automation", href: "/#ai-automation" },
        { label: "AI Search & Discovery", href: "/#ai-automation" },
      ],
    },
    {
      heading: "Case Studies",
      links: [
        { label: "AI Case Studies", href: "/case-studies?practice=ai-automation" },
        { label: "Automation Case Studies", href: "/case-studies?practice=ai-automation&service=workflow" },
        { label: "AI Commerce Case Studies", href: "/case-studies?practice=ecommerce&service=ai-commerce" },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "Rayco: Digital Transformation & Workflow Automation",
    description:
      "Automated engine diagnostic workflows and problem-led service discovery for fleet operators.",
    metrics: [
      { value: "91%", label: "Faster Discovery" },
      { value: "88%", label: "Clearer Nav" },
      { value: "86%", label: "Sustainability" },
    ],
    href: "/case-studies/rayco-group",
    image: "/images/case-studies/rayco-mockup.jpg",
  },
  showConsultationCta: true,
};

export const ecommerceMegaMenu: MegaMenuConfig = {
  id: "ecommerce",
  label: "e Commerce",
  href: "/#ecommerce",
  columns: [
    {
      heading: "AI Commerce Services",
      links: [
        { label: "AI Shopping Assistant", href: "/#ecommerce" },
        { label: "AI Chatbots", href: "/#ecommerce" },
        { label: "AI Agents", href: "/#ecommerce" },
        { label: "Conversational Commerce", href: "/#ecommerce" },
        { label: "AI Automation", href: "/#ecommerce" },
      ],
    },
    {
      heading: "Industry",
      links: [
        { label: "Jewelry Commerce", href: "/#ecommerce" },
        { label: "Fashion Commerce", href: "/#ecommerce" },
        { label: "Grocery Commerce", href: "/#ecommerce" },
        { label: "Health & Wellness Commerce", href: "/#ecommerce" },
        { label: "D2C Commerce", href: "/#ecommerce" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "Headless Commerce", href: "/#ecommerce" },
        { label: "Marketplace Development", href: "/#ecommerce" },
        { label: "B2B eCommerce", href: "/#ecommerce" },
        { label: "eCommerce Automation", href: "/#ecommerce" },
        { label: "Custom eCommerce Development", href: "/#ecommerce" },
      ],
    },
    {
      groups: [
        {
          heading: "Platforms",
          links: [
            { label: "Shopify", href: "/#ecommerce" },
            { label: "WooCommerce", href: "/#ecommerce" },
            { label: "Headless Stack", href: "/#ecommerce" },
          ],
        },
        {
          heading: "Case Studies",
          links: [
            { label: "eCommerce Case Studies", href: "/case-studies?practice=ecommerce" },
            { label: "Marketplace Case Studies", href: "/case-studies?practice=ecommerce&service=marketplace" },
            { label: "Shopify Case Studies", href: "/case-studies?practice=ecommerce&service=shopify" },
          ],
        },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "Zocular: Dual B2B/B2C Scalable Ecommerce Platform",
    description:
      "A high-speed medical ecommerce platform with automated commissions, bulk orders, and real-time tracking.",
    metrics: [
      { value: "50%", label: "Faster Speed" },
      { value: "30%", label: "B2B Growth" },
      { value: "40%", label: "Cart Drop" },
    ],
    href: "/case-studies/zocular",
    image: "/images/case-studies/zocular-mockup.jpg",
  },
  showConsultationCta: true,
};

export const productEngineeringMegaMenu: MegaMenuConfig = {
  id: "product-engineering",
  label: "Product Engineering",
  href: "/#product-engineering",
  columns: [
    {
      heading: "Engineering Services",
      links: [
        { label: "SaaS Product Development", href: "/#product-engineering" },
        { label: "Web Application Development", href: "/#product-engineering" },
        { label: "Mobile App Development", href: "/#product-engineering" },
        {
          label: "Enterprise Software Development",
          href: "/#product-engineering",
        },
        { label: "MVP Development", href: "/#product-engineering" },
      ],
    },
    {
      heading: "Case Studies",
      links: [
        { label: "SaaS Product Case Studies", href: "/case-studies?practice=product-engineering&service=saas" },
        { label: "Enterprise Software Case Studies", href: "/case-studies?practice=product-engineering&service=enterprise" },
        { label: "Mobile App Case Studies", href: "/case-studies?practice=product-engineering&service=mobile" },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "Tournament Fantasy: Real-Time Event Management App",
    description:
      "Cross-platform mobile application engineered for instant tournament scheduling, live tracking, and error control.",
    metrics: [
      { value: "85%", label: "Coordination Drop" },
      { value: "3X", label: "Faster Scheduling" },
      { value: "99.9%", label: "Crash-Free" },
    ],
    href: "/case-studies/tournament-fantasy",
    image: "/images/case-studies/tournament-fantasy-mockup.jpg",
  },
  showConsultationCta: true,
};

export const navItems: NavItem[] = [
  {
    id: "ai-automation",
    label: "AI & Automation",
    href: "/#ai-automation",
    megaMenu: aiAutomationMegaMenu,
  },
  {
    id: "ecommerce",
    label: "e Commerce",
    href: "/#ecommerce",
    megaMenu: ecommerceMegaMenu,
  },
  {
    id: "product-engineering",
    label: "Product Engineering",
    href: "/#product-engineering",
    megaMenu: productEngineeringMegaMenu,
  },
  {
    id: "company",
    label: "Company",
    href: "#about",
    children: [
      {
        label: "About us / Our Story",
        href: "/#work",
        description: "20+ years of engineering excellence & global reach",
      },
      {
        label: "Career",
        href: "/#footer",
        description: "Join our team of top 1% engineers & architects",
      },
      {
        label: "Blog",
        href: "/blogs",
        description: "Insights, architecture guides & tech deep-dives",
      },
    ],
  },
];
