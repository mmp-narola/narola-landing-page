export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/custom-software-development-company",
    children: [
      {
        label: "Custom Software Development",
        href: "/custom-software-development-company",
        description:
          "Bespoke full-cycle software tailored to your business needs",
      },
      // {
      //   label: "Web Application Development",
      //   href: "/custom-software-development-company#services-breakdown",
      //   description: "Scalable, secure, and modern web applications",
      // },
      // {
      //   label: "Mobile Application Development",
      //   href: "/custom-software-development-company#services-breakdown",
      //   description:
      //     "Native iOS & Android and cross-platform Flutter/React Native",
      // },
      // {
      //   label: "QA & Testing",
      //   href: "/custom-software-development-company#process",
      //   description: "Manual, automated, performance, and security testing",
      // },
      // {
      //   label: "Support & Maintenance",
      //   href: "/custom-software-development-company#services-breakdown",
      //   description:
      //     "24/7 SLA monitoring, bug fixing, and continuous optimization",
      // },
      // {
      //   label: "Staff Augmentation",
      //   href: "/custom-software-development-company#engagement-models",
      //   description:
      //     "Hire dedicated top-tier developers within 3 business days",
      // },
      // {
      //   label: "Cloud Transformation",
      //   href: "/custom-software-development-company#tech-stack",
      //   description:
      //     "AWS, Azure, GCP cloud architecture & microservices migration",
      // },
      // {
      //   label: "DevOps Services",
      //   href: "/custom-software-development-company#tech-stack",
      //   description:
      //     "CI/CD pipelines, containerization, Kubernetes & infrastructure as code",
      // },
      // {
      //   label: "Artificial Intelligence & ML",
      //   href: "/custom-software-development-company#tech-stack",
      //   description:
      //     "Generative AI, machine learning models & workflow automation",
      // },
    ],
  },
  { label: "Technologies", href: "#technologies" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
];
