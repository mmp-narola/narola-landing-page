export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
  subItems?: { id: string; title: string }[];
}

export interface BlogImage {
  url: string;
  alt?: string;
  caption?: string;
  position?: "top" | "middle" | "bottom";
}

export interface BlogTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  id: string;
  heading: string;
  content: string[];
  bulletPoints?: string[];
  images?: BlogImage[];
  table?: BlogTable;
  callout?: {
    type: "tip" | "insight" | "note";
    title?: string;
    text: string;
  };
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "ecommerce"
    | "technology"
    | "it-services"
    | "ai-ml"
    | "cloud-devops"
    | "mobile-app";
  categoryLabel: string;
  author: BlogAuthor;
  publishedDate?: string;
  lastUpdated?: string;
  readTime: string;
  readTimeMinutes: number;
  featured?: boolean;
  coverImage?: string;
  gradient: string;
  tableOfContents: TableOfContentItem[];
  introduction: string[];
  sections: BlogSection[];
  faqs?: BlogFaq[];
  conclusion?: string[];
  relatedSlugs: string[];
  layout?: "blog-layout-1" | "blog-layout-2" | string;
}

export interface BlogCategoryInfo {
  id: "all" | BlogPost["category"];
  label: string;
  description: string;
  iconName: string;
}

export const defaultAuthor: BlogAuthor = {
  name: "Narola Think Tank",
  role: "Technology & Software Engineering Team",
  avatarUrl: "/images/favicon.png",
};

export const blogCategories: BlogCategoryInfo[] = [
  {
    id: "all",
    label: "All Topics",
    description:
      "Explore all technical articles, guides, and industry analyses.",
    iconName: "grid",
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    description:
      "Strategies, platforms, and architectures to scale digital commerce.",
    iconName: "shopping-bag",
  },
  {
    id: "technology",
    label: "Technology",
    description:
      "Deep-dives into modern frameworks, frontend/backend engineering, and tools.",
    iconName: "code",
  },
  {
    id: "it-services",
    label: "IT Services",
    description:
      "Best practices in custom development, staff augmentation, and QA.",
    iconName: "briefcase",
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    description:
      "Practical implementations of AI, generative models, and smart automation.",
    iconName: "cpu",
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    description:
      "Cloud migrations, serverless architectures, CI/CD pipelines, and scalability.",
    iconName: "cloud",
  },
  {
    id: "mobile-app",
    label: "Mobile Apps",
    description:
      "Native and cross-platform mobile development using Flutter, React Native, iOS, and Android.",
    iconName: "smartphone",
  },
];

