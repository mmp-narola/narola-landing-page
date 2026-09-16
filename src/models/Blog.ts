import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface ITableOfContentItem {
  id: string;
  title: string;
  subItems?: { id: string; title: string }[];
}

export interface IBlogImage {
  url: string;
  alt?: string;
  caption?: string;
  position?: "top" | "middle" | "bottom";
}

export interface IBlogTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface IBlogSection {
  id: string;
  heading: string;
  content: string[];
  bulletPoints?: string[];
  images?: IBlogImage[];
  table?: IBlogTable;
  callout?: {
    type: "tip" | "insight" | "note";
    title?: string;
    text: string;
  };
}

export interface IBlogFaq {
  question: string;
  answer: string;
}

export interface IBlogDocument extends Document {
  slug: string;
  title: string;
  excerpt: string;
  category: "ecommerce" | "technology" | "it-services" | "ai-ml" | "cloud-devops" | "mobile-app";
  categoryLabel: string;
  author: IBlogAuthor;
  publishedDate?: string;
  lastUpdated?: string;
  readTime: string;
  readTimeMinutes: number;
  featured: boolean;
  coverImage?: string;
  gradient: string;
  tableOfContents: ITableOfContentItem[];
  introduction: string[];
  sections: IBlogSection[];
  faqs?: IBlogFaq[];
  conclusion?: string[];
  relatedSlugs: string[];
  layout?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogAuthorSchema = new Schema<IBlogAuthor>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    avatarUrl: { type: String, default: "/images/favicon.png" },
  },
  { _id: false }
);

const TableOfContentSubItemSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
  },
  { _id: false }
);

const TableOfContentItemSchema = new Schema<ITableOfContentItem>(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    subItems: [TableOfContentSubItemSchema],
  },
  { _id: false }
);

const BlogImageSchema = new Schema<IBlogImage>(
  {
    url: { type: String, required: true },
    alt: { type: String, default: "" },
    caption: { type: String },
    position: {
      type: String,
      enum: ["top", "middle", "bottom"],
      default: "middle",
    },
  },
  { _id: false }
);

const BlogTableSchema = new Schema<IBlogTable>(
  {
    caption: { type: String },
    headers: [{ type: String, required: true }],
    rows: [[{ type: String }]],
  },
  { _id: false }
);

const BlogSectionSchema = new Schema<IBlogSection>(
  {
    id: { type: String, required: true },
    heading: { type: String, required: true },
    content: [{ type: String, required: true }],
    bulletPoints: [{ type: String }],
    images: [BlogImageSchema],
    table: BlogTableSchema,
    callout: {
      type: {
        type: String,
        enum: ["tip", "insight", "note"],
      },
      title: { type: String },
      text: { type: String },
    },
  },
  { _id: false }
);

const BlogFaqSchema = new Schema<IBlogFaq>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlogDocument>(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "ecommerce",
        "technology",
        "it-services",
        "ai-ml",
        "cloud-devops",
        "mobile-app",
      ],
      index: true,
    },
    categoryLabel: {
      type: String,
      required: true,
    },
    author: {
      type: BlogAuthorSchema,
      required: true,
    },
    publishedDate: {
      type: String,
      default: () =>
        new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
    },
    lastUpdated: {
      type: String,
      default: function (this: IBlogDocument) {
        return (
          this.publishedDate ||
          new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        );
      },
    },
    readTime: {
      type: String,
      required: true,
    },
    readTimeMinutes: {
      type: Number,
      required: true,
      default: 5,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    coverImage: {
      type: String,
    },
    gradient: {
      type: String,
      default: "from-blue-600 to-indigo-800",
    },
    tableOfContents: [TableOfContentItemSchema],
    introduction: [{ type: String, required: true }],
    sections: [BlogSectionSchema],
    faqs: [BlogFaqSchema],
    conclusion: [{ type: String }],
    relatedSlugs: [{ type: String }],
    layout: {
      type: String,
      default: "blog-layout-1",
    },
  },
  {
    timestamps: true,
    collection: "blogs", // Explicitly names the MongoDB collection 'blogs'
  }
);

// Prevent re-compilation of model across Next.js hot-reloading
export const Blog: Model<IBlogDocument> =
  mongoose.models.Blog || mongoose.model<IBlogDocument>("Blog", BlogSchema);

export default Blog;
