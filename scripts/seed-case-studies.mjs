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
  {
    slug: "tournament-fantasy",
    title: "Tournament Fantasy: Reimagining Sports Event Management for the Mobile Era",
    tagline: "Empowering Sports Organizers with Real-Time Scheduling, Updates & Control",
    clientName: "Tournament Fantasy (MBBSMB LLC)",
    country: "United States",
    industry: "Sports & Entertainment",
    service: "Mobile App Development",
    region: "North America",
    thumbnailUrl: "/images/case-studies/tournament-fantasy-mockup.jpg",
    bannerUrl: "/images/case-studies/tournament-fantasy-mockup.jpg",
    galleryImages: [
      "/images/case-studies/tournament-fantasy-mockup.jpg",
      "/images/case-studies/tournament-fantasy-screen.jpg",
    ],
    metrics: [
      { value: "85%", label: "Reduction in Manual Coordination" },
      { value: "3X", label: "Faster Tournament Scheduling" },
      { value: "99.9%", label: "Crash-Free Sessions Post-Launch" },
      { value: "24/7", label: "Real-Time Tournament Visibility" },
      { value: "70%", label: "30-Day User Retention Rate" },
    ],
    summary:
      "A feature-rich, user-friendly mobile app engineered for seamless tournament scheduling and real-time event management. Narola Infotech transformed an ambitious startup concept into a high-performance cross-platform mobile application, empowering sports organizers and players with live match tracking, error recording, active table status boards, and instant score updates.",
    businessNeeds: [
      "Build a user-friendly mobile platform that enables seamless tournament scheduling across devices.",
      "Incorporate real-time match scoring, status updates, and push notifications for organizers and competitors.",
      "Design an intuitive interface suitable for both tournament directors and active players.",
      "Empower sports organizers with automated match bracket management, error tracking, and table coordination.",
    ],
    challenges: [
      "Managing chaotic sports tournament schedules, participants, and real-time communication across multiple active matches simultaneously.",
      "Translating an entertainment-focused tournament scheduling idea into a functioning, scalable product with no prior app development experience on the client side.",
      "Designing an intuitive scoring interface that handles match error selection and live table assignments without clutter.",
      "Navigating timeline delays caused by the COVID-19 pandemic while maintaining momentum toward a December 2020 launch.",
    ],
    proposedSolution: [
      "Dedicated Championship Team: Assembled an experienced four-person team comprising a Project Manager, Android Developer, iOS Developer, and QA Specialist.",
      "Concept Refinement & UX/UI Design: Translated rough startup ideas into clear wireframes and logical user flows delivering an intuitive, clean interface.",
      "Clickable Prototype Development: Built a functional interactive prototype to validate tournament workflows and player interactions before full engineering.",
      "Agile Cross-Platform Development: Engineered native-feel mobile applications for iOS and Android featuring live player stats, error tracking modals, and table status boards.",
      "Automated & Manual Quality Assurance: Executed rigorous testing to ensure cross-device compatibility, optimal performance, and 99.9% crash-free stability.",
      "Launch & Growth Strategy: Successfully deployed to Apple App Store and Google Play in December 2020 with rapid onboarding for sports leagues.",
    ],
    objectivesAchieved: [
      "Gained 600–700 active users within months following launch, with daily engagement rapidly expanding.",
      "Achieved an 85% reduction in manual coordination for tournament organizers by automating schedules and notifications.",
      "Delivered 3X faster scheduling compared to traditional spreadsheets and offline manual methods.",
      "Maintained 99.9% crash-free sessions across devices throughout peak tournament seasons.",
      "Sustained a 70% 30-day user retention rate reflecting high satisfaction and recurring league play.",
    ],
    technologies: ["React Native", "iOS", "Android", "Firebase", "Cloud Firestore", "Push Notifications", "REST APIs"],
    relatedSlugs: ["e-star", "shipping-adaptor", "predictive-ecommerce"],
  },
  {
    slug: "rayco-group",
    title: "Beyond the Workshop: Rayco’s Digital Transformation",
    tagline: "Helping customers move confidently from warning signs to the right repair or replacement service.",
    clientName: "Rayco Group (Rayco Engines)",
    country: "Ireland",
    industry: "Automotive & Industrial",
    service: "Web Application Development",
    region: "Europe",
    thumbnailUrl: "/images/case-studies/rayco-mockup.jpg",
    bannerUrl: "/images/case-studies/rayco-mockup.jpg",
    galleryImages: [
      "/images/case-studies/rayco-mockup.jpg",
      "/images/case-studies/rayco-web-ui.jpg",
    ],
    metrics: [
      { value: "91%", label: "Faster Service Discovery" },
      { value: "88%", label: "Clearer Service Navigation" },
      { value: "86%", label: "Stronger Sustainability Messaging" },
      { value: "85%", label: "Improved Product Clarity" },
      { value: "84%", label: "Greater Maintenance Awareness" },
      { value: "82%", label: "Better Educational Support" },
    ],
    summary:
      "A customer-focused website simplifying diesel engine repairs, parts, maintenance, and fleet support. Narola transformed decades of hands-on mechanical expertise into an intuitive, problem-led digital platform that guides fleet operators, industrial businesses, and individual vehicle owners effortlessly from warning signs to the right repair, reconditioning, or replacement service.",
    businessNeeds: [
      "Organize a large portfolio of engine products, repairs, and support services into intuitive customer journeys.",
      "Translate complex mechanical processes and internal engineering terminology into customer-friendly information.",
      "Help visitors easily decide whether to repair, maintain, recondition, or replace a failing diesel engine.",
      "Build confidence in refurbished engines and reconditioned components as economical, sustainable alternatives.",
      "Provide high visibility for remote diagnostics, mobile field repairs, and emergency breakdown assistance.",
      "Establish a scalable digital foundation that expands with new products, machinery specifications, and industries.",
    ],
    challenges: [
      "Converting decades of hands-on workshop knowledge into an online experience that felt practical and dependable.",
      "Serving diverse target audiences (commercial fleet operators, industrial construction firms, and private vehicle owners) with distinct needs.",
      "Guiding visitors experiencing complex symptoms (unusual smoke, rising fuel consumption, overheating) directly to diagnostic solutions rather than generic contact forms.",
      "Positioning Rayco as a complete diesel engine partner rather than solely a local repair workshop.",
    ],
    proposedSolution: [
      "Problem-Led Customer Journey: Designed the platform around customer questions ('What is wrong with my engine?', 'Can it be repaired?', 'Is replacement safer?').",
      "Dedicated Service Pathways: Created targeted hubs separating routine maintenance, major engine repairs, complete reconditioning, and replacement engine sales.",
      "Searchable Component Catalog: Organized key diesel parts (fuel injectors, turbochargers, EGR valves, DPF, SCR systems, cylinder heads, camshafts) into clear categories.",
      "Workshop Capabilities Showcase: Highlighted machining services including flywheel resurfacing, cylinder head servicing, crankshaft grinding, pressure testing, and bearing installation.",
      "Educational Symptom Diagnostic Hub: Built educational content and FAQs covering warning signs such as overheating, excessive oil consumption, and power loss.",
      "Sustainability & Circular Economy Messaging: Articulated practical ROI and emissions benefits of remanufactured engines and component reuse.",
    ],
    objectivesAchieved: [
      "Achieved 91% faster service discovery, allowing fleet managers and equipment owners to locate specialized repair services in seconds.",
      "Delivered 88% clearer navigation, eliminating confusing technical jargon and guiding users toward the appropriate service tier.",
      "Generated 86% stronger engagement with sustainability messaging, driving adoption of remanufactured and reconditioned diesel engines.",
      "Improved product catalog clarity by 85%, accelerating replacement parts inquiries for fuel injectors, turbochargers, and cylinder heads.",
      "Elevated preventative maintenance awareness by 84%, helping fleet clients prevent costly on-site breakdowns.",
    ],
    technologies: ["WordPress", "MySQL", "PHP", "JavaScript (ES6+)", "HTML5 / CSS3", "REST APIs", "Responsive Web Design"],
    relatedSlugs: ["shipping-adaptor", "real-estate-application", "touchstone-essentials"],
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
