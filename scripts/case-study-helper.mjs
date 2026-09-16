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

/**
 * Auto-generate kebab-case slug from string
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/^[\d.]+\s*/, "") // remove leading "1. ", "2. ", etc.
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/-+/g, "-"); // remove duplicate hyphens
}

/**
 * Auto-format simplified case study input into full MongoDB schema
 */
export function formatCaseStudyData(rawInput) {
  const title = rawInput.title;
  const slug = rawInput.slug || generateSlug(title);

  return {
    slug,
    title,
    tagline: rawInput.tagline || `${title} Case Study by Narola Infotech`,
    clientName: rawInput.clientName || title,
    country: rawInput.country || "United States",
    industry: rawInput.industry || "Technology",
    service: rawInput.service || "Custom Software Development",
    region: rawInput.region || "North America",
    thumbnailUrl:
      rawInput.thumbnailUrl ||
      "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor_thumbnail.jpg",
    bannerUrl:
      rawInput.bannerUrl ||
      rawInput.thumbnailUrl ||
      "https://www.narolainfotech.com/wp-content/uploads/2023/10/shipping-adaptor_banner.jpg",
    logoUrl: rawInput.logoUrl || "",
    galleryImages: Array.isArray(rawInput.galleryImages)
      ? rawInput.galleryImages
      : rawInput.galleryImages
      ? [rawInput.galleryImages]
      : [],
    metrics: Array.isArray(rawInput.metrics) ? rawInput.metrics : [],
    summary: rawInput.summary || "",
    businessNeeds: Array.isArray(rawInput.businessNeeds)
      ? rawInput.businessNeeds
      : [],
    challenges: Array.isArray(rawInput.challenges) ? rawInput.challenges : [],
    proposedSolution: Array.isArray(rawInput.proposedSolution)
      ? rawInput.proposedSolution
      : [],
    objectivesAchieved: Array.isArray(rawInput.objectivesAchieved)
      ? rawInput.objectivesAchieved
      : [],
    technologies: Array.isArray(rawInput.technologies)
      ? rawInput.technologies
      : [],
    relatedSlugs: Array.isArray(rawInput.relatedSlugs)
      ? rawInput.relatedSlugs
      : [],
  };
}

/**
 * Upsert case study into MongoDB
 */
export async function saveCaseStudyToMongoDB(caseStudyData) {
  const formatted = formatCaseStudyData(caseStudyData);
  const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  const db = conn.connection.db;
  const collection = db.collection("case_studies");

  const result = await collection.updateOne(
    { slug: formatted.slug },
    { $set: formatted },
    { upsert: true }
  );

  await mongoose.disconnect();
  return { result, formatted };
}

/**
 * Delete case study from MongoDB by slug
 */
export async function deleteCaseStudyFromMongoDB(slug) {
  const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  const db = conn.connection.db;
  const collection = db.collection("case_studies");

  const result = await collection.deleteOne({ slug });
  await mongoose.disconnect();
  return result;
}
