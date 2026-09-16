import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICaseStudyMetric {
  value: string;
  label: string;
}

export interface ICaseStudyDocument extends Document {
  slug: string;
  title: string;
  tagline: string;
  clientName: string;
  country: string;
  industry: string;
  service: string;
  region: string;
  thumbnailUrl: string;
  bannerUrl: string;
  logoUrl?: string;
  galleryImages: string[];
  metrics: ICaseStudyMetric[];
  summary: string;
  businessNeeds: string[];
  challenges: string[];
  proposedSolution: string[];
  objectivesAchieved: string[];
  technologies: string[];
  relatedSlugs: string[];
  createdAt: Date;
  updatedAt: Date;
}

const CaseStudyMetricSchema = new Schema<ICaseStudyMetric>(
  {
    value: { type: String, required: true },
    label: { type: String, required: true },
  },
  { _id: false }
);

const CaseStudySchema = new Schema<ICaseStudyDocument>(
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
      required: [true, "Title is required"],
      trim: true,
    },
    tagline: {
      type: String,
      required: [true, "Tagline is required"],
    },
    clientName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
      index: true,
    },
    service: {
      type: String,
      required: true,
      index: true,
    },
    region: {
      type: String,
      required: true,
      index: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    bannerUrl: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
    },
    galleryImages: [{ type: String }],
    metrics: [CaseStudyMetricSchema],
    summary: {
      type: String,
      required: true,
    },
    businessNeeds: [{ type: String }],
    challenges: [{ type: String }],
    proposedSolution: [{ type: String }],
    objectivesAchieved: [{ type: String }],
    technologies: [{ type: String }],
    relatedSlugs: [{ type: String }],
  },
  {
    timestamps: true,
    collection: "case_studies", // Explicitly names the MongoDB collection 'case_studies'
  }
);

// Prevent re-compilation of model across Next.js hot-reloading
export const CaseStudy: Model<ICaseStudyDocument> =
  mongoose.models.CaseStudy ||
  mongoose.model<ICaseStudyDocument>("CaseStudy", CaseStudySchema);

export default CaseStudy;
