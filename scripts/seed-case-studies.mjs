import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Simple .env.local parser
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, "utf-8");
    envFile.split("\n").forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        let val = match[2] || "";
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        process.env[match[1]] = val;
      }
    });
  }
}

loadEnv();

let uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("❌ MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

if (uri.includes("<db_password>")) {
  const password = process.env.MONGODB_PASSWORD;
  if (password) {
    const encodedPassword = encodeURIComponent(password);
    uri = uri.replace("<db_password>", encodedPassword);
  } else {
    console.error("❌ MONGODB_PASSWORD not set in .env.local");
    process.exit(1);
  }
}

const seedCaseStudies = [
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
];

async function runSeed() {
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    const db = conn.connection.db;
    const collection = db.collection("case_studies");

    console.log("🔄 Seeding 3 case studies into MongoDB 'case_studies' collection...");

    for (const cs of seedCaseStudies) {
      const res = await collection.updateOne(
        { slug: cs.slug },
        { $set: { ...cs, updatedAt: new Date() } },
        { upsert: true }
      );
      console.log(`  ✓ ${cs.title} (${cs.slug}) -> matched: ${res.matchedCount}, upserted: ${res.upsertedCount}`);
    }

    console.log("✅ Case studies seeded successfully into MongoDB!");
    await mongoose.disconnect();
    console.log("🔒 Disconnected from MongoDB.");
  } catch (error) {
    console.error("❌ Error seeding case studies:", error);
    process.exit(1);
  }
}

runSeed();
