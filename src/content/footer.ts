export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface OfficeLocation {
  country: "US" | "IN";
  city: string;
  address: string;
  mapUrl: string;
}

export interface RatingItem {
  platform: "Clutch" | "Google";
  label: string;
  score: string;
  stars: number;
}

export interface SocialLink {
  platform: "LinkedIn" | "Instagram";
  label: string;
  href: string;
}

export const footerContent = {
  cta: {
    heading: "Want to talk about your project ?",
    buttonText: "Schedule A Call",
    buttonHref: "/contact",
  },
  ratings: [
    {
      platform: "Clutch" as const,
      label: "Clutch rating",
      score: "4.9",
      stars: 5,
    },
    {
      platform: "Google" as const,
      label: "Google rating",
      score: "4.2",
      stars: 5,
    },
  ],
  aiAutomation: [
    { label: "AI Consulting", href: "/ai-consulting" },
    { label: "AI Agents Development", href: "/ai-agents-development" },
    { label: "AI Chatbot Development", href: "/ai-chatbot-development" },
    { label: "Conversational AI Solutions", href: "/conversational-ai-solutions" },
    { label: "Generative AI Development", href: "/generative-ai-development" },
  ],
  ecommerce: [
    { label: "AI Shopping Assistant", href: "/ai-shopping-assistant" },
    { label: "AI Chatbots", href: "/ai-chatbots" },
    { label: "AI Agents", href: "/ai-agents" },
    { label: "Conversational Commerce", href: "/conversational-commerce" },
    { label: "AI Automation", href: "/ai-automation" },
  ],
  productEngineering: [
    { label: "SaaS Product Development", href: "/saas-product-development" },
    { label: "Web Application Development", href: "/web-application-development" },
    { label: "Mobile App Development", href: "/mobile-app-development" },
    { label: "Enterprise Software Development", href: "/product-engineering" },
    { label: "MVP Development", href: "/mvp-development" },
  ],
  resources: [
    { label: "Our Story", href: "/company/our-story" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Agile Methodologies", href: "/company/agile-methodologies" },
    { label: "Engagement Models", href: "/company/engagement-models" },
  ],
  globalPresence: {
    title: "Global Presence",
    offices: [],
    devCentersTitle: "Development Hubs",
    devCenters: [
      {
        country: "IN" as const,
        city: "Surat",
        address: "5th Floor, Unity Corner, TP 10 Main Road, Pal, Surat 395009",
        mapUrl: "https://maps.app.goo.gl/P366KE28dTVJmEp1A",
      },
      {
        country: "US" as const,
        city: "Virginia",
        address: "43519 Wheadon Ter, Chantilly VA 20152",
        mapUrl: "https://maps.app.goo.gl/Bbd1jesGZuzqMbff7",
      },
    ],
  },
  socialLinks: [
    {
      platform: "LinkedIn" as const,
      label: "LinkedIn",
      href: "/",
    },
    {
      platform: "Instagram" as const,
      label: "Instagram",
      href: "/",
    },
  ],
};
