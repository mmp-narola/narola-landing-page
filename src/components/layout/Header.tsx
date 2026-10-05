import { HeaderClient } from "./HeaderClient";
import { getMegaMenuFeaturedCaseStudies } from "@/lib/caseStudies";

export async function Header() {
  const featuredCases = await getMegaMenuFeaturedCaseStudies();

  return <HeaderClient featuredCases={featuredCases} />;
}
