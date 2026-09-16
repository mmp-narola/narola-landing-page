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
 * Category metadata mapping
 */
const CATEGORY_MAP = {
  ecommerce: { label: "Ecommerce", gradient: "from-blue-600 to-indigo-800" },
  technology: { label: "Technology", gradient: "from-cyan-600 to-blue-700" },
  "it-services": { label: "IT Services", gradient: "from-slate-700 to-indigo-900" },
  "ai-ml": { label: "AI & ML", gradient: "from-indigo-700 to-purple-900" },
  "cloud-devops": { label: "Cloud & DevOps", gradient: "from-blue-700 to-sky-900" },
  "mobile-app": { label: "Mobile Apps", gradient: "from-blue-600 to-teal-800" },
};

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
 * Auto-calculate read time from text content
 */
export function calculateReadTime(text) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return {
    readTime: `${minutes} min read`,
    readTimeMinutes: minutes,
  };
}

/**
 * Auto-format simplified blog input into full MongoDB schema
 */
export function formatBlogData(rawInput) {
  const title = rawInput.title;
  const slug = rawInput.slug || generateSlug(title);
  const category = (rawInput.category || "technology").toLowerCase();
  const categoryMeta = CATEGORY_MAP[category] || {
    label: category.charAt(0).toUpperCase() + category.slice(1),
    gradient: "from-blue-600 to-indigo-800",
  };

  const sections = (rawInput.sections || []).map((sec, idx) => {
    const heading = sec.heading || `Section ${idx + 1}`;
    const id = sec.id || generateSlug(heading);
    return {
      id,
      heading,
      content: Array.isArray(sec.content) ? sec.content : [sec.content || ""],
      bulletPoints: sec.bulletPoints || [],
      ...(sec.images && sec.images.length > 0 ? { images: sec.images } : {}),
      ...(sec.table ? { table: sec.table } : {}),
      ...(sec.callout ? { callout: sec.callout } : {}),
    };
  });

  // Auto-generate Table of Contents from sections
  const tableOfContents = rawInput.tableOfContents || sections.map((sec) => ({
    id: sec.id,
    title: sec.heading,
    ...(sec.subItems
      ? {
          subItems: sec.subItems.map((sub) => ({
            id: sub.id || generateSlug(sub.title || sub),
            title: sub.title || sub,
          })),
        }
      : {}),
  }));

  // Auto-generate excerpt if omitted
  const introduction = Array.isArray(rawInput.introduction)
    ? rawInput.introduction
    : [rawInput.introduction || ""];

  const excerpt =
    rawInput.excerpt ||
    (introduction[0] ? introduction[0].slice(0, 160).trim() + "..." : title);

  // Auto-calculate read time
  const allText = [
    ...introduction,
    ...sections.flatMap((s) => [s.heading, ...s.content, ...(s.bulletPoints || [])]),
    ...(rawInput.faqs || []).flatMap((f) => [f.question, f.answer]),
    ...(rawInput.conclusion || []),
  ].join(" ");

  const { readTime, readTimeMinutes } = calculateReadTime(allText);

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    slug,
    title,
    excerpt,
    category,
    categoryLabel: rawInput.categoryLabel || categoryMeta.label,
    author: {
      name: rawInput.author?.name || "Narola Think Tank",
      role: rawInput.author?.role || "Technology & Software Engineering Team",
      avatarUrl: rawInput.author?.avatarUrl || "/images/favicon.png",
    },
    publishedDate: rawInput.publishedDate || today,
    lastUpdated: rawInput.lastUpdated || rawInput.publishedDate || today,
    readTime: rawInput.readTime || readTime,
    readTimeMinutes: rawInput.readTimeMinutes || readTimeMinutes,
    featured: Boolean(rawInput.featured),
    coverImage: rawInput.coverImage || "",
    gradient: rawInput.gradient || categoryMeta.gradient,
    tableOfContents,
    introduction,
    sections,
    faqs: rawInput.faqs || [],
    conclusion: Array.isArray(rawInput.conclusion)
      ? rawInput.conclusion
      : rawInput.conclusion
      ? [rawInput.conclusion]
      : [],
    relatedSlugs: rawInput.relatedSlugs || [],
    layout: rawInput.layout || "blog-layout-1",
  };
}

/**
 * Upsert blog into MongoDB
 */
export async function saveBlogToMongoDB(blogData) {
  const formatted = formatBlogData(blogData);
  const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  const db = conn.connection.db;
  const blogsCollection = db.collection("blogs");

  const result = await blogsCollection.updateOne(
    { slug: formatted.slug },
    { $set: formatted },
    { upsert: true }
  );

  await mongoose.disconnect();
  return { result, formatted };
}
