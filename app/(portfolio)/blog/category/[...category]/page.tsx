import { blogData as BLOG_POSTS } from "@/constants/blog";
import { BlogCategoryContent } from "@/components/features/blog/BlogCategoryContent";

type Props = { params: Promise<{ category: string[] }> };

export default async function BlogCategoryPage({ params }: Props) {
  // 1. Changed 'slug' to 'category' to match your folder name exactly
  const { category } = await params;
  const activeCategories = category || [];
  
  // Gets the last part of the URL (e.g., 'hardware')
  const mainCategory = activeCategories[activeCategories.length - 1];
  
  // 2. Filter using strings instead of arrays so it matches your blog.ts file!
  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!mainCategory) return false;
    // We convert your post category ("Web Development") to a slug ("web-development")
    const postSlug = post.category.toLowerCase().replace(/\s+/g, '-');
    return postSlug === mainCategory.toLowerCase();
  });

  return (
    <BlogCategoryContent 
      activeCategories={activeCategories}
      filteredPosts={filteredPosts}
      mainCategory={mainCategory}
    />
  );
}