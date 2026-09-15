import { BlogPost } from "@/content/blogs";
import { BlogLayout1, BlogLayoutProps } from "./BlogLayout1";

export type BlogLayoutType = "blog-layout-1" | string;

const layoutRegistry: Record<string, React.ComponentType<BlogLayoutProps>> = {
  "blog-layout-1": BlogLayout1,
};

export interface BlogDetailRendererProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

/**
 * BlogDetailRenderer dynamically chooses and renders the appropriate layout
 * component based on `post.layout`. Defaults to `blog-layout-1`.
 */
export function BlogDetailRenderer({
  post,
  relatedPosts,
}: BlogDetailRendererProps) {
  const selectedLayoutKey = post.layout || "blog-layout-1";
  const SelectedLayout = layoutRegistry[selectedLayoutKey] || BlogLayout1;

  return <SelectedLayout post={post} relatedPosts={relatedPosts} />;
}
