/**
 * scripts/sync-case-studies.mjs
 *
 * One-time sync script: removes the retired case studies from MongoDB and
 * upserts the current 6 case studies (mirroring src/content/caseStudies.ts
 * as of this script's generation) into the 'case_studies' collection.
 *
 * Run once with:  node scripts/sync-case-studies.mjs
 *
 * After this has been run successfully, src/lib/caseStudies.ts fetches case
 * studies from MongoDB directly rather than merging in the static fallback,
 * so make sure this script completes before relying on that behavior.
 */
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Simple .env.local parser for standalone scripts (matches scripts/test-db.mjs)
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
    console.log("🔑 Injected and URL-encoded MONGODB_PASSWORD from .env.local.");
  } else {
    console.warn("⚠️  Warning: MONGODB_URI contains '<db_password>', but MONGODB_PASSWORD is not set in .env.local.");
  }
}

// Slugs that were pre-added and should be permanently removed from the DB.
const RETIRED_SLUGS = ["shipping-adaptor", "safiri-salama", "e-star"];

const CaseStudyMetricSchema = new mongoose.Schema(
  { value: String, label: String },
  { _id: false }
);

const CaseStudySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    title: { type: String, required: true, trim: true },
    tagline: { type: String, required: true },
    clientName: { type: String, required: true },
    country: { type: String, required: true },
    industry: { type: String, required: true, index: true },
    service: { type: String, required: true, index: true },
    region: { type: String, required: true, index: true },
    thumbnailUrl: { type: String, required: true },
    bannerUrl: { type: String, required: true },
    logoUrl: String,
    galleryImages: [String],
    metrics: [CaseStudyMetricSchema],
    summary: { type: String, required: true },
    businessNeeds: [String],
    challenges: [String],
    proposedSolution: [String],
    objectivesAchieved: [String],
    technologies: [String],
    relatedSlugs: [String],
    location: String,
    deliveryTime: String,
    tags: [String],
    sections: [mongoose.Schema.Types.Mixed],
    testimonial: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true, collection: "case_studies" }
);

const CaseStudy =
  mongoose.models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);

// The 6 current case studies (kept in the order they should logically appear).
const caseStudies =
[
  {
    slug: "tournament-fantasy",
    title: "Tournament Fantasy: Reimagining Sports Event Management for the Mobile Era",
    tagline: "Empowering Sports Organizers with Real-Time Scheduling, Updates & Control",
    clientName: "Tournament Fantasy (MBBSMB LLC)",
    country: "United States",
    industry: "Sports & Entertainment",
    service: "Mobile App Development",
    region: "North America",
    location: "United States",
    deliveryTime: "6 months",
    tags: ["Sports & Entertainment", "Mobile App Development", "Real-Time Event Management"],
    thumbnailUrl: "/images/case-studies/tournament-fantasy-mockup.jpg",
    bannerUrl: "/images/case-studies/tournament-fantasy-mockup.jpg",
    galleryImages: [
      "/images/case-studies/tournament-fantasy-mockup.jpg",
      "/images/case-studies/tournament-fantasy-screen.jpg",
    ],
    metrics: [
      {
        value: "85%",
        label: "Reduction in Manual Coordination",
      },
      {
        value: "3X",
        label: "Faster Tournament Scheduling",
      },
      {
        value: "99.9%",
        label: "Crash-Free Sessions Post-Launch",
      },
      {
        value: "24/7",
        label: "Real-Time Tournament Visibility",
      },
      {
        value: "70%",
        label: "30-Day User Retention Rate",
      },
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
    technologies: [
      "React Native",
      "iOS",
      "Android",
      "Firebase",
      "Cloud Firestore",
      "Push Notifications",
      "REST APIs",
    ],
    testimonial: {
      quote:
        "As this was our first mobile app, Narola Infotech demonstrated exceptional patience and guided us through every step of the development process. Their transparent communication and structured project management were instrumental in the app’s success. Through regular updates via Skype, Google Docs, and email, they kept us informed and actively involved throughout the journey.",
      author: "Bryon Burton",
      role: "Co-owner, MBBSMB LLC.",
    },
    sections: [
      {
        id: "the-challenge",
        title: "The Challenge: Bridging the Gap Between Idea and Execution",
        kind: "prose",
        content: [
          "In the dynamic world of sports tournaments, managing schedules, participants, and real-time communication is often chaotic. One startup, driven by the desire to solve this, envisioned a mobile app that could streamline the entire experience. Their idea was compelling—an entertainment-focused tournament scheduling platform—but turning it into a functioning product proved difficult.",
          "With no prior app development experience and limited technical expertise, the client lacked a clear implementation strategy. They needed a technical partner who could guide them from rough concept to a polished, cross-platform mobile application ready for live tournaments.",
        ],
      },
      {
        id: "business-needs",
        title: "Core Business Goals & Needs",
        kind: "features",
        content: [
          "Build a user-friendly platform that enables seamless tournament scheduling.",
          "Incorporate real-time updates and push notifications for players and directors.",
          "Design an intuitive interface suitable for both organizers and players.",
          "Enable live table monitoring, match scoring, and penalty/error tracking.",
          "Ensure robust cross-platform performance across iOS and Android devices.",
        ],
      },
      {
        id: "our-approach",
        title: "The Solution: Crafting a Seamless, Multi-Platform Sports App from the Ground Up",
        kind: "steps",
        content: [
          {
            title: "Championship Team Assembly",
            description:
              "Narola approached the project like assembling a championship team—a dedicated Project Manager ensured end-to-end coordination, an Android Developer built a smooth Android experience, an iOS Developer handled Apple device compatibility, and a QA Specialist conducted rigorous quality assurance.",
          },
          {
            title: "Concept Refinement & UX/UI Design",
            description:
              "Narola translated rough ideas into clear wireframes and logical user flows to deliver a clean, intuitive mobile interface designed for fast in-game scoring.",
          },
          {
            title: "Clickable Prototype Development",
            description:
              "A functional, clickable prototype was built to validate the design, navigation, and core tournament features before moving to full-scale development.",
          },
          {
            title: "Agile Cross-Platform Development",
            description:
              "Leveraging React Native and Firebase, Narola engineered the app for iOS and Android, incorporating tournament scheduling, real-time updates, and a streamlined match dashboard.",
          },
          {
            title: "Testing & Optimization",
            description:
              "Through automated and manual testing, the team ensured flawless cross-device performance, resulting in a 99.9% crash-free session rate.",
          },
          {
            title: "Launch & Growth Strategy",
            description:
              "Despite delays caused by the COVID-19 pandemic, the app successfully launched in December 2020, ready for instant user adoption.",
          },
        ],
      },
      {
        id: "the-outcomes",
        title: "Measurable Impact & Key Results",
        kind: "stats",
        content: [
          {
            value: "85%",
            label: "Reduction in manual coordination for organizers",
          },
          {
            value: "3X",
            label: "Faster tournament scheduling vs spreadsheets",
          },
          {
            value: "99.9%",
            label: "Crash-free session stability post-launch",
          },
          {
            value: "70%",
            label: "30-day user retention rate",
          },
        ],
      },
      {
        id: "objectives-achieved",
        title: "Key Objectives Achieved",
        kind: "features",
        content: [
          "Gained 600–700 active users within months of launch with continuous daily engagement growth.",
          "Automated scheduling, updates, and team communications, slashing manual organizer workload by 85%.",
          "Enabled tournament directors to generate and adapt tournament brackets 3X faster than offline tools.",
          "Provided 24/7 visibility with real-time match scores and error logs directly at players' fingertips.",
          "Achieved top-tier mobile stability with 99.9% crash-free sessions across both iOS and Android platforms.",
        ],
      },
      {
        id: "app-screens",
        title: "Mobile App Experience & User Flow",
        kind: "screenshots",
        content: {
          mobile: [
            "/images/case-studies/tournament-fantasy-mockup.jpg",
            "/images/case-studies/tournament-fantasy-screen.jpg",
          ],
        },
      },
      {
        id: "technologies-used",
        title: "Technologies & Frameworks",
        kind: "features",
        content: [
          "React Native (Cross-Platform Mobile Framework)",
          "iOS Native Tooling & Apple App Store Integration",
          "Android Native Tooling & Google Play Integration",
          "Firebase Realtime Database & Cloud Firestore",
          "Firebase Cloud Messaging (FCM Push Notifications)",
          "Node.js Backend Services & REST APIs",
        ],
      },
      {
        id: "client-testimonial",
        title: "A Vision Realized: What the Client Said",
        kind: "testimonial",
        content: {
          quote:
            "As this was our first mobile app, Narola Infotech demonstrated exceptional patience and guided us through every step of the development process. Their transparent communication and structured project management were instrumental in the app’s success. Through regular updates via Skype, Google Docs, and email, they kept us informed and actively involved throughout the journey.",
          author: "Bryon Burton",
          role: "Co-owner, MBBSMB LLC.",
        },
      },
    ],
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
    location: "Ireland",
    deliveryTime: "12 weeks",
    tags: ["Automotive & Industrial", "Web Application Development", "Digital Transformation"],
    thumbnailUrl: "/images/case-studies/rayco-mockup.jpg",
    bannerUrl: "/images/case-studies/rayco-mockup.jpg",
    galleryImages: [
      "/images/case-studies/rayco-mockup.jpg",
      "/images/case-studies/rayco-web-ui.jpg",
    ],
    metrics: [
      {
        value: "91%",
        label: "Faster Service Discovery",
      },
      {
        value: "88%",
        label: "Clearer Service Navigation",
      },
      {
        value: "86%",
        label: "Stronger Sustainability Messaging",
      },
      {
        value: "85%",
        label: "Improved Product Clarity",
      },
      {
        value: "84%",
        label: "Greater Maintenance Awareness",
      },
      {
        value: "82%",
        label: "Better Educational Support",
      },
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
    technologies: [
      "WordPress",
      "MySQL",
      "PHP",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "REST APIs",
      "Responsive Web Design",
    ],
    sections: [
      {
        id: "the-challenge",
        title: "The Challenge: Decoding a Complex Diesel Service World",
        kind: "prose",
        content: [
          "A diesel engine rarely fails at a convenient moment. For a fleet manager, one breakdown can disrupt deliveries, delay customers, and leave an expensive vehicle sitting idle. For a construction company, a failed machine can bring an entire worksite to a halt. For an individual owner, unusual smoke, rising fuel consumption, or an overheating engine creates an urgent question: repair it, rebuild it, or replace it?",
          "Rayco Engines already had the expertise to answer these questions across sales, diagnostics, repairs, reconditioning, preventative maintenance, emergency support, remote monitoring, and emissions reduction. The challenge was that this extensive knowledge did not yet exist within a clear and structured digital experience.",
          "Rayco needed more than a standard company website. It needed a platform capable of guiding fleet operators, industrial businesses, and individual owners toward the right service without expecting them to understand complicated mechanical terminology.",
        ],
      },
      {
        id: "business-needs",
        title: "Key Challenges & Strategic Requirements",
        kind: "features",
        content: [
          "Organizing a large portfolio of engine products, repairs, and support services.",
          "Translating complex mechanical processes into customer-friendly information.",
          "Helping visitors decide whether to repair, maintain, recondition, or replace an engine.",
          "Serving fleet operators, industrial customers, and individual vehicle owners seamlessly.",
          "Building confidence in refurbished engines and reconditioned components.",
          "Making remote diagnostics, field repairs, and emergency assistance easy to discover.",
          "Communicating fuel savings, emissions reduction, and longer engine life as business benefits.",
          "Creating direct pathways for service enquiries, appointments, and urgent support.",
          "Positioning Rayco as a complete diesel engine partner rather than only a repair workshop.",
        ],
      },
      {
        id: "our-approach",
        title: "The Solution: Engineering a Clearer Route to Every Service",
        kind: "steps",
        content: [
          {
            title: "Problem-Led Structure",
            description:
              "Instead of structuring the experience around internal business terminology, the solution was designed around questions customers were most likely to ask: 'What could be wrong with my engine?', 'Can the existing engine be repaired?', 'Would reconditioning be more cost-effective?', and 'Is replacement the safer long-term choice?'",
          },
          {
            title: "Dedicated Service & Product Pathways",
            description:
              "Created distinct journeys for engine sales, repairs, maintenance, and replacement parts, separating routine servicing from major overhauls and complete reconditioning.",
          },
          {
            title: "Searchable Component Catalog",
            description:
              "Organized key diesel components—including fuel injectors, turbochargers, EGR valves, DPF, SCR systems, camshafts, crankshafts, pistons, gaskets, and cylinder heads—into searchable categories.",
          },
          {
            title: "Workshop Machining & Precision Capabilities",
            description:
              "Clearly presented specialized capabilities: diagnostics, tune-ups, flywheel resurfacing, cylinder-head servicing, crankshaft work, pressure testing, bearing installation, and complete engine reconditioning.",
          },
          {
            title: "Educational Warning Signs & FAQ Hub",
            description:
              "Developed educational content explaining common engine symptoms (overheating, excessive oil consumption, coolant loss, reduced performance, abnormal wear) so visitors understand urgency before visiting the workshop.",
          },
          {
            title: "Sustainability & Circular Economy Integration",
            description:
              "Presented reconditioned engines, component reuse, and emissions-control services as practical commercial opportunities to extend equipment life and control operating costs.",
          },
        ],
      },
      {
        id: "the-outcomes",
        title: "Measurable Impact: Driving Engine Expertise Into Customer Action",
        kind: "stats",
        content: [
          {
            value: "91%",
            label: "Faster service discovery online",
          },
          {
            value: "88%",
            label: "Clearer navigation to maintenance or replacement",
          },
          {
            value: "86%",
            label: "Stronger sustainability and engine reuse messaging",
          },
          {
            value: "85%",
            label: "Improved component catalog clarity",
          },
        ],
      },
      {
        id: "objectives-achieved",
        title: "Key Results & Milestones",
        kind: "features",
        content: [
          "91% faster service discovery helped visitors find repairs, parts, and support with ease online.",
          "88% clearer navigation guided users toward maintenance, reconditioning, or replacement with ease.",
          "86% stronger sustainability messaging promoted reuse, lower emissions, and longer engine life.",
          "85% improved product clarity organized injectors, turbochargers, heads, and engine parts clearly.",
          "84% greater maintenance awareness helped customers spot risks before breakdowns escalated.",
          "82% better educational support explained overheating, oil loss, smoke, and performance issues.",
        ],
      },
      {
        id: "platform-screens",
        title: "Web Platform & Service Portal Interface",
        kind: "screenshots",
        content: {
          web: [
            "/images/case-studies/rayco-mockup.jpg",
            "/images/case-studies/rayco-web-ui.jpg",
          ],
        },
      },
      {
        id: "technologies-used",
        title: "Technologies & Infrastructure",
        kind: "features",
        content: [
          "WordPress CMS & Custom Theme Architecture",
          "MySQL Relational Database",
          "PHP 8 Backend Logic",
          "Modern JavaScript & Interactive UI Components",
          "Responsive CSS3 & HTML5 Semantic Layouts",
          "REST APIs & Web Services Integration",
          "Search Engine & Performance Optimization",
        ],
      },
    ],
    relatedSlugs: ["shipping-adaptor", "real-estate-application", "touchstone-essentials"],
  },
  {
    slug: "zocular",
    title: "Transforming Eye Care Ecommerce with Innovation",
    tagline: "Bringing the science of okra-based eye care to the world with a scalable, user-centric digital platform.",
    clientName: "Zocular",
    country: "United States",
    industry: "Healthcare & Ecommerce",
    service: "Custom Software Development",
    region: "North America",
    location: "United States",
    tags: ["Healthcare & Ecommerce", "Custom Software Development", "B2B & B2C Platform"],
    thumbnailUrl: "/images/case-studies/zocular-mockup.jpg",
    bannerUrl: "/images/case-studies/zocular-mockup.jpg",
    galleryImages: [
      "/images/case-studies/zocular-mockup.jpg",
      "/images/case-studies/zocular-blog-ui.jpg",
    ],
    metrics: [
      {
        value: "50%",
        label: "Faster Page Load Speed",
      },
      {
        value: "30%",
        label: "Increase in B2B Orders",
      },
      {
        value: "40%",
        label: "Reduction in Cart Abandonment Rate",
      },
    ],
    summary:
      "A high-performance, scalable ecommerce platform built for Zocular, a revolutionary skincare and eye care brand powered by okra-based Zokrex™ technology. Narola Infotech engineered a dual-function B2B/B2C platform that empowered doctors, clinics, and individual consumers with bulk purchasing, automated commissions, real-time order tracking, and a dynamic admin panel.",
    businessNeeds: [
      "Build a dual-function platform catering to both B2B (doctors & clinics) and B2C (individual consumers).",
      "Enable bulk purchasing for doctors with seamless payment options including PayPal, Stripe, and Invoicing.",
      "Implement a commission-based referral system allowing doctors to earn from product sales.",
      "Provide efficient order tracking so both doctors and customers could monitor shipments.",
      "Deliver a dynamic Admin Panel with role-based access to manage products, stock, orders, emails, and SMS marketing.",
    ],
    challenges: [
      "Gaining traction quickly and ranking well on search engines for a new medical ecommerce platform.",
      "Providing an intuitive shopping experience while handling both bulk and individual orders.",
      "Automating commissions so doctors didn't have to manually track sales.",
      "Ensuring real-time stock updates and efficient product tracking for all stakeholders.",
    ],
    proposedSolution: [
      "Built on CodeIgniter (PHP Framework) for speed, flexibility, and security.",
      "MySQL for seamless data management, ensuring high performance even as orders scaled.",
      "Integrated Stripe & PayPal APIs for hassle-free transactions, along with Invoice-based payments for bulk buyers.",
      "Shippo API for real-time tracking, making sure every order was visible from checkout to delivery.",
      "Twilio & Send-In-Blue APIs for automated SMS and email notifications, keeping customers updated.",
      "Cron Jobs for scheduled tasks, handling commission distribution and professional hierarchy seamlessly.",
    ],
    objectivesAchieved: [
      "Achieved 50% faster page load speed, increasing engagement and conversions.",
      "Delivered a 30% increase in B2B orders as doctors found it easier to place bulk orders and track commissions.",
      "Reduced cart abandonment rate by 40% through an optimized checkout process.",
      "Automated the commission system, saving hours of manual tracking and boosting doctor engagement.",
      "Enabled real-time order tracking, reducing customer inquiries and increasing transparency.",
    ],
    technologies: [
      "CodeIgniter",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Nginx",
      "Stripe",
      "PayPal",
      "Shippo",
      "Twilio",
      "Send-In-Blue",
      "jQuery",
    ],
    testimonial: {
      quote: "Able to complete complex jobs in a very professional manner. Great to work with the Narola team.",
      author: "Dr. Peter Pham",
      role: "Founder, Zocular | USA",
    },
    sections: [
      {
        id: "the-challenge",
        title: "The Challenge: A Vision for Growth",
        kind: "prose",
        content: [
          "When Dr. Peter Pham, an ophthalmologist and innovator, set out to change the way dry eye was treated, he didn't expect technology to be his biggest roadblock. Zocular®, a revolutionary skincare and eye care brand, had a groundbreaking product infused with okra-based Zokrex™ technology, but it lacked an online platform that could truly serve its growing community of patients, doctors, and retailers.",
          "Zocular needed more than just an ecommerce website. They required a dual-function platform catering to both B2B (doctors & clinics) and B2C (individual consumers) with complex features like bulk purchasing, a commission-based referral system, efficient order tracking, and a dynamic Admin Panel.",
          "Dr. Pham wanted to empower eye care professionals with an automated system while keeping the process hassle-free for individual buyers. However, building such a seamless, scalable system was no small feat.",
        ],
      },
      {
        id: "business-needs",
        title: "Key Requirements",
        kind: "features",
        content: [
          "Bulk purchasing for doctors with seamless payment options like PayPal, Stripe, and Invoicing.",
          "A commission-based referral system, allowing doctors to earn from product sales.",
          "Efficient order tracking, so both doctors and customers could monitor shipments.",
          "A dynamic Admin Panel, granting role-based access to manage products, stock, orders, emails, and SMS marketing.",
        ],
      },
      {
        id: "our-approach",
        title: "The Solution: A Tailor-Made Tech Ecosystem",
        kind: "steps",
        content: [
          {
            title: "Framework & Data Layer",
            description:
              "Built on CodeIgniter (PHP Framework) for speed, flexibility, and security, with MySQL for seamless data management ensuring high performance even as orders scaled.",
          },
          {
            title: "Payments for B2B and B2C",
            description:
              "Integrated Stripe & PayPal APIs for hassle-free transactions, along with Invoice-based payments for bulk buyers.",
          },
          {
            title: "Real-Time Shipment Tracking",
            description:
              "Shippo API for real-time tracking, making sure every order was visible from checkout to delivery.",
          },
          {
            title: "Automated Communication",
            description:
              "Twilio & Send-In-Blue APIs for automated SMS and email notifications, keeping customers updated.",
          },
          {
            title: "Commission Automation",
            description:
              "Cron Jobs for scheduled tasks, handling commission distribution and professional hierarchy seamlessly.",
          },
        ],
      },
      {
        id: "the-outcomes",
        title: "The Outcome: Measurable Success",
        kind: "stats",
        content: [
          {
            value: "50%",
            label: "Faster page load speed, increasing engagement & conversions",
          },
          {
            value: "30%",
            label: "Increase in B2B orders as doctors found it easier to place bulk orders",
          },
          {
            value: "40%",
            label: "Reduction in cart abandonment rate via optimized checkout",
          },
        ],
      },
      {
        id: "objectives-achieved",
        title: "Key Results & Milestones",
        kind: "features",
        content: [
          "Automated Commission System, saving hours of manual tracking and boosting doctor engagement.",
          "Real-Time Order Tracking, reducing customer inquiries and increasing transparency.",
          "With the streamlined admin panel, Zocular's team could now effortlessly manage orders, track revenue, and oversee doctor commissions—all in one place.",
        ],
      },
      {
        id: "platform-screens",
        title: "Ecommerce Platform Interface",
        kind: "screenshots",
        content: {
          web: [
            "/images/case-studies/zocular-mockup.jpg",
            "/images/case-studies/zocular-blog-ui.jpg",
          ],
        },
      },
      {
        id: "technologies-used",
        title: "Tools & Technologies",
        kind: "features",
        content: [
          "CodeIgniter (PHP Framework)",
          "MySQL",
          "Bootstrap",
          "Nginx",
          "Stripe & PayPal",
          "Shippo API",
          "Twilio & Send-In-Blue",
          "jQuery",
        ],
      },
    ],
    relatedSlugs: ["touchstone-essentials", "predictive-ecommerce", "shipping-adaptor"],
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

async function sync() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB!");

    console.log(`🗑️  Removing ${RETIRED_SLUGS.length} retired case studies...`);
    const deleteResult = await CaseStudy.deleteMany({ slug: { $in: RETIRED_SLUGS } });
    console.log(`  ✓ Deleted ${deleteResult.deletedCount} document(s): ${RETIRED_SLUGS.join(", ")}`);

    console.log(`🌱 Syncing all ${caseStudies.length} case studies to 'case_studies' collection...`);
    for (const cs of caseStudies) {
      await CaseStudy.findOneAndUpdate(
        { slug: cs.slug },
        { $set: cs },
        { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
      );
      console.log(`  ✓ Synced case study: "${cs.title}"`);
    }

    const totalCount = await CaseStudy.countDocuments();
    const remainingRetired = await CaseStudy.countDocuments({ slug: { $in: RETIRED_SLUGS } });
    const allSlugs = (await CaseStudy.find({}, { slug: 1, _id: 0 }).lean()).map((d) => d.slug);

    console.log("\n==================================================");
    console.log("🎉 CASE STUDIES SUCCESSFULLY SYNCED TO MONGODB!");
    console.log("==================================================");
    console.log(`📄 Total documents in 'case_studies': ${totalCount}`);
    console.log(`🚫 Retired slugs still present (should be 0): ${remainingRetired}`);
    console.log(`📋 All slugs now in DB: ${allSlugs.join(", ")}`);
    console.log("==================================================\n");

    await mongoose.disconnect();
    console.log("🔒 Disconnected cleanly.");
  } catch (error) {
    console.error("❌ Error syncing case_studies collection:", error.message);
    process.exit(1);
  }
}

sync();
