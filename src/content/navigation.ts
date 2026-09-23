export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface FeaturedCaseStudyConfig {
  tagLabel: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  href: string;
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
        { label: "AI Case Studies", href: "/case-studies" },
        { label: "Automation Case Studies", href: "/case-studies" },
        { label: "AI Commerce Case Studies", href: "/case-studies" },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "45% Revenue Growth with AI-Powered Commerce",
    description:
      "How we helped a fashion retailer transform their digital presence with headless commerce.",
    metrics: [
      { value: "45%", label: "Revenue" },
      { value: "3x", label: "Conversion" },
      { value: "60%", label: "Faster" },
    ],
    href: "/case-studies",
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
        { label: "eCommerce Case Studies", href: "/case-studies" },
        { label: "Marketplace Case Studies", href: "/case-studies" },
        { label: "Shopify Case Studies", href: "/case-studies" },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "98% Transaction Success for Global Marketplace",
    description:
      "A scalable Nordic design eCommerce platform engineered for multi-currency high-speed conversion.",
    metrics: [
      { value: "98%", label: "Success" },
      { value: "30%", label: "Abandonment Drop" },
      { value: "2.5x", label: "Faster" },
    ],
    href: "/case-studies",
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
        { label: "SaaS Product Case Studies", href: "/case-studies" },
        { label: "Enterprise Software Case Studies", href: "/case-studies" },
        { label: "Mobile App Case Studies", href: "/case-studies" },
      ],
    },
  ],
  featured: {
    tagLabel: "FEATURED CASE STUDY",
    title: "Interactive EdTech Platform for 100K+ Users",
    description:
      "Gamified learning SaaS with parent dashboard and real-time student analytics.",
    metrics: [
      { value: "100K+", label: "Active Users" },
      { value: "45%", label: "Engagement" },
      { value: "99.9%", label: "Uptime" },
    ],
    href: "/case-studies",
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
