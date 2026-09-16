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
    buttonHref: "#",
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
  services: [
    { label: "Custom Software Development", href: "#" },
    { label: "Software Product Engineering", href: "#" },
    { label: "Software Modernization", href: "#" },
    { label: "Software Maintenance and Support", href: "#" },
    { label: "Ecommerce Software Development", href: "#" },
    { label: "Staff Augmentation", href: "#" },
    { label: "Cloud Transformation Services", href: "#" },
  ],
  technologies: [
    { label: "ReactJS", href: "#" },
    { label: "AngularJS", href: "#" },
    { label: "NodeJS", href: "#" },
    { label: "PHP", href: "#" },
    { label: "Dot NET", href: "#" },
    { label: "JAVA", href: "#" },
    { label: "WordPress", href: "#" },
    { label: "CodeIgniter", href: "#" },
    { label: "Laravel", href: "#" },
    { label: "Android", href: "#" },
    { label: "iOS", href: "#" },
    { label: "React Native", href: "#" },
    { label: "Flutter", href: "#" },
  ],
  resources: [
    { label: "Our Story", href: "#" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Agile Methodologies", href: "#" },
    { label: "Engagement Models", href: "#" },
  ],
  globalPresence: {
    title: "Global Presence",
    offices: [
      {
        country: "US" as const,
        city: "North Carolina",
        address: "187 E Chatham St Suite 300, Cary, NC 27511",
      },
      {
        country: "US" as const,
        city: "Virginia",
        address: "43519 Wheadon Ter, Chantilly VA 20152",
      },
    ],
    devCentersTitle: "Development Centers",
    devCenters: [
      {
        country: "IN" as const,
        city: "Surat",
        address: "5th Floor, Unity Corner, TP 10 Main Road, Pal, Surat 395009",
      },
      {
        country: "IN" as const,
        city: "Nashik",
        address: "2nd Floor, Pawar Business Square, Pathardi Phata, Nashik 422010",
      },
    ],
  },
  socialLinks: [
    {
      platform: "LinkedIn" as const,
      label: "LinkedIn",
      href: "#",
    },
    {
      platform: "Instagram" as const,
      label: "Instagram",
      href: "#",
    },
  ],
};
