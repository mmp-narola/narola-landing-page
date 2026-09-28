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
  mapUrl: string;
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
    buttonHref: "/contact",
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
    {
      label: "Custom Software Development",
      href: "/services/custom-software-development-company",
    },
    {
      label: "Software Product Engineering",
      href: "/services/software-product-engineering",
    },
    {
      label: "Software Modernization",
      href: "/services/software-modernization",
    },
    {
      label: "Software Maintenance and Support",
      href: "/services/software-maintenance-and-support",
    },
    {
      label: "Ecommerce Software Development",
      href: "/services/ecommerce-software-development",
    },
    { label: "Staff Augmentation", href: "/services/staff-augmentation" },
    {
      label: "Cloud Transformation Services",
      href: "/services/cloud-transformation-services",
    },
  ],
  technologies: [
    { label: "ReactJS", href: "/technologies/reactjs" },
    { label: "AngularJS", href: "/technologies/angularjs" },
    { label: "NodeJS", href: "/technologies/nodejs" },
    { label: "PHP", href: "/technologies/php" },
    { label: "Dot NET", href: "/technologies/dot-net" },
    { label: "JAVA", href: "/technologies/java" },
    { label: "WordPress", href: "/technologies/wordpress" },
    { label: "CodeIgniter", href: "/technologies/codeigniter" },
    { label: "Laravel", href: "/technologies/laravel" },
    { label: "Android", href: "/technologies/android" },
    { label: "iOS", href: "/technologies/ios" },
    { label: "React Native", href: "/services/react-native" },
    { label: "Flutter", href: "/technologies/flutter" },
  ],
  resources: [
    { label: "Our Story", href: "/company/our-story" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Agile Methodologies", href: "/company/agile-methodologies" },
    { label: "Engagement Models", href: "/company/engagement-models" },
  ],
  globalPresence: {
    title: "Global Presence",
    offices: [
      {
        country: "US" as const,
        city: "North Carolina",
        address: "167 E Chatham St Suite 300, Cary, NC 27511",
        mapUrl: "https://maps.app.goo.gl/nDWuha8kBQoEzTeJA",
      },
      {
        country: "US" as const,
        city: "Virginia",
        address: "43519 Wheadon Ter, Chantilly VA 20152",
        mapUrl: "https://maps.app.goo.gl/Bbd1jesGZuzqMbff7",
      },
    ],
    devCentersTitle: "Development Centers",
    devCenters: [
      {
        country: "IN" as const,
        city: "Surat",
        address: "5th Floor, Unity Corner, TP 10 Main Road, Pal, Surat 395009",
        mapUrl: "https://maps.app.goo.gl/P366KE28dTVJmEp1A",
      },
      {
        country: "IN" as const,
        city: "Nashik",
        address:
          "2nd Floor, Pawar Business Square, Pathardi Phata, Nashik 422010",
        mapUrl: "https://maps.app.goo.gl/rXMd7kgyJiQo1Q7p9",
      },
    ],
  },
  socialLinks: [
    {
      platform: "LinkedIn" as const,
      label: "LinkedIn",
      href: "/",
    },
    {
      platform: "Instagram" as const,
      label: "Instagram",
      href: "/",
    },
  ],
};
