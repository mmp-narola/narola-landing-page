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
  viewAllHref?: string;
  viewAllLabel?: string;
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
  href: "/ai-automation",
  columns: [
    {
      heading: "AI Services",
      links: [
        { label: "AI Consulting", href: "/ai-consulting" },
        { label: "AI Agents Development", href: "/ai-agents" },
        { label: "AI Chatbot Development", href: "/ai-chatbots" },
        {
          label: "Conversational AI Solutions",
          href: "/conversational-ai-solutions",
        },
        {
          label: "Generative AI Development",
          href: "/generative-ai-development",
        },
      ],
    },
    {
      heading: "Automation Services",
      links: [
        { label: "Workflow Automation", href: "/workflow-automation" },
        {
          label: "Business Process Automation",
          href: "/business-process-automation",
        },
        {
          label: "Intelligent Document Processing",
          href: "/intelligent-document-processing",
        },
        { label: "CRM & Sales Automation", href: "/crm-sales-automation" },
        {
          label: "AI-Powered Operations Automation",
          href: "/ai-powered-operations-automation",
        },
      ],
    },
    {
      heading: "AI Commerce Solutions",
      links: [
        { label: "AI Shopping Assistant", href: "/ai-shopping-assistant" },
        {
          label: "AI Product Recommendation Engine",
          href: "/ai-product-recommendation-engine",
        },
        {
          label: "AI Customer Support Automation",
          href: "/ai-customer-support-automation",
        },
        { label: "AI Search & Discovery", href: "/ai-search-discovery" },
      ],
    },
    {
      heading: "Case Studies",
      links: [
        {
          label: "AI Case Studies",
          href: "/case-studies?practice=ai-automation",
        },
        {
          label: "Automation Case Studies",
          href: "/case-studies?practice=ai-automation&service=workflow",
        },
        {
          label: "AI Commerce Case Studies",
          href: "/case-studies?practice=ecommerce&service=ai-commerce",
        },
      ],
    },
  ],
  showConsultationCta: true,
};

export const ecommerceMegaMenu: MegaMenuConfig = {
  id: "ecommerce",
  label: "e Commerce",
  href: "/ecommerce",
  columns: [
    {
      heading: "AI Commerce",
      links: [
        { label: "AI Shopping Assistant", href: "/ai-shopping-assistant" },
        {
          label: "AI Search & Recommendations",
          href: "/ai-search-recommendations",
        },
        { label: "AI Customer Support", href: "/ai-customer-support" },
        { label: "eCommerce Automation", href: "/ecommerce-automation" },
        { label: "AI Analytics", href: "/ai-analytics" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        {
          label: "Custom eCommerce Development",
          href: "/custom-ecommerce-development",
        },
        { label: "Marketplace Development", href: "/marketplace-development" },
        { label: "B2B eCommerce", href: "/b2b-ecommerce" },
        { label: "D2C eCommerce", href: "/d2c-ecommerce" },
        {
          label: "Migration & Replatforming",
          href: "/migration-replatforming",
        },
        { label: "Support & Maintenance", href: "/support-maintenance" },
      ],
    },

    {
      groups: [
        {
          heading: "Platforms",
          links: [
            { label: "Shopify", href: "/shopify" },
            { label: "WooCommerce", href: "/woocommerce" },
            { label: "Headless Commerce", href: "/headless-commerce" },
          ],
        },
        // {
        //   heading: "Case Studies",
        //   links: [
        //     {
        //       label: "eCommerce Case Studies",
        //       href: "/case-studies?practice=ecommerce",
        //     },
        //     {
        //       label: "Marketplace Case Studies",
        //       href: "/case-studies?practice=ecommerce&service=marketplace",
        //     },
        //     {
        //       label: "Shopify Case Studies",
        //       href: "/case-studies?practice=ecommerce&service=shopify",
        //     },
        //   ],
        // },
      ],
    },
    {
      heading: "Industry",
      links: [
        { label: "Jewelry", href: "/jewelry" },
        { label: "Fashion", href: "/fashion" },
        { label: "Grocery", href: "/grocery" },
        { label: "Health & Wellness", href: "/health-wellness" },
      ],
    },
  ],
  showConsultationCta: true,
};

export const productEngineeringMegaMenu: MegaMenuConfig = {
  id: "product-engineering",
  label: "Product Engineering",
  href: "/product-engineering",
  columns: [
    {
      heading: "Engineering Services",
      links: [
        {
          label: "SaaS Product Development",
          href: "/saas-product-development",
        },
        {
          label: "Web Application Development",
          href: "/web-application-development",
        },
        { label: "Mobile App Development", href: "/mobile-app-development" },
        {
          label: "Enterprise Software Development",
          href: "/product-engineering",
        },
        { label: "MVP Development", href: "/mvp-development" },
      ],
    },
    {
      heading: "Case Studies",
      links: [
        {
          label: "SaaS Product Case Studies",
          href: "/case-studies?practice=product-engineering&service=saas",
        },
        {
          label: "Enterprise Software Case Studies",
          href: "/case-studies?practice=product-engineering&service=enterprise",
        },
        {
          label: "Mobile App Case Studies",
          href: "/case-studies?practice=product-engineering&service=mobile",
        },
      ],
    },
  ],
  showConsultationCta: true,
};

export const navItems: NavItem[] = [
  {
    id: "ai-automation",
    label: "AI & Automation",
    href: "#",
    megaMenu: aiAutomationMegaMenu,
  },
  {
    id: "ecommerce",
    label: "e Commerce",
    href: "#",
    megaMenu: ecommerceMegaMenu,
  },
  {
    id: "product-engineering",
    label: "Product Engineering",
    href: "#",
    megaMenu: productEngineeringMegaMenu,
  },
  {
    id: "company",
    label: "Company",
    href: "#",
    children: [
      {
        label: "About us / Our Story",
        href: "/work",
        description: "20+ years of engineering excellence & global reach",
      },
      {
        label: "Career",
        href: "/footer",
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
