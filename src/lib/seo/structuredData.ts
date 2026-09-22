import { siteConfig } from "@/content/siteConfig";

/**
 * Generates the Organization and WebSite schema graph for Narola Infotech.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo/narola-infotech-logo.svg`,
          caption: "Narola Infotech Logo",
        },
        foundingDate: "2005",
        description: siteConfig.description,
        sameAs: [
          "https://www.linkedin.com/company/narola-infotech",
          "https://twitter.com/narolainfotech",
          "https://www.facebook.com/narolainfotech",
          "https://www.instagram.com/narolainfotech",
          "https://clutch.co/profile/narola-infotech",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "info@narolainfotech.com",
            availableLanguage: ["English"],
            areaServed: ["US", "GB", "AU", "Worldwide"],
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1500",
          bestRating: "5",
          worstRating: "1",
        },
        knowsAbout: [
          "Custom Software Development",
          "Artificial Intelligence & Machine Learning",
          "AI Agents & Workflow Automation",
          "Shopify Plus & eCommerce Development",
          "SaaS Product Engineering",
          "Full Stack Web Development",
          "Mobile App Development",
          "Cloud Architecture & DevOps",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/blogs?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

/**
 * Generates Core Service schemas for Search & AI Answer Engines.
 */
export function getHomeServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Custom Software & SaaS Product Development",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          description:
            "Full-cycle custom software engineering and SaaS product development from discovery and MVP to scalable cloud architecture.",
          serviceType: "Software Engineering",
          areaServed: "Worldwide",
          url: `${siteConfig.url}/#product-engineering`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "AI & Workflow Automation Solutions",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          description:
            "Production-grade AI solutions including autonomous AI agents, conversational assistants, intelligent document processing (IDP), and CRM automation.",
          serviceType: "Artificial Intelligence & Automation",
          areaServed: "Worldwide",
          url: `${siteConfig.url}/#ai-automation`,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Enterprise eCommerce Solutions & Shopify Development",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          description:
            "Custom eCommerce platforms, Shopify Plus storefronts, WooCommerce migrations, and headless commerce solutions with AI recommendations.",
          serviceType: "eCommerce Development",
          areaServed: "Worldwide",
          url: `${siteConfig.url}/#ecommerce`,
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Dedicated Engineering Teams & Staff Augmentation",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
          description:
            "Top 1% vetted developers, solution architects, and designers to scale your in-house engineering capacity seamlessly.",
          serviceType: "Staff Augmentation",
          areaServed: "Worldwide",
          url: `${siteConfig.url}/#work`,
        },
      },
    ],
  };
}

/**
 * Generates FAQPage schema for Answer Engine Optimization (AEO - ChatGPT, Claude, Perplexity).
 */
export function getHomeFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Narola Infotech provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narola Infotech provides custom software development, SaaS product engineering, AI and workflow automation (including AI agents and intelligent document processing), mobile application development (iOS/Android/Flutter/React Native), and enterprise eCommerce solutions (Shopify Plus, WooCommerce, Headless).",
        },
      },
      {
        "@type": "Question",
        name: "How experienced is Narola Infotech in custom software development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Founded in 2005, Narola Infotech has over 20 years of experience delivering 1,500+ successful software projects for startups, SMEs, and global enterprises across 50+ countries with a 4.9/5 Clutch rating.",
        },
      },
      {
        "@type": "Question",
        name: "What technology stack does Narola Infotech specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narola Infotech specializes in modern full-stack technologies including Next.js, React, Node.js, TypeScript, Python (FastAPI/Django), Flutter, React Native, iOS (Swift), Android (Kotlin), PostgreSQL, MongoDB, LangChain, OpenAI APIs, AWS, GCP, and Shopify Plus.",
        },
      },
      {
        "@type": "Question",
        name: "How does Narola Infotech deliver AI and automation solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narola Infotech follows a 4-step delivery lifecycle for AI systems: 1) Process discovery and workflow mapping, 2) Model selection and dataset curation, 3) Secure integration with existing CRMs, ERPs, and databases, and 4) Automated continuous testing, latency optimization, and reliability monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "Which eCommerce platforms does Narola Infotech build on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narola Infotech is an official Shopify Expert Partner and certified WooCommerce development agency, building tailored storefronts, headless commerce architectures, AI shopping assistants, and enterprise integrations across Jewelry, Fashion, Grocery, Health, D2C, and B2B sectors.",
        },
      },
    ],
  };
}
