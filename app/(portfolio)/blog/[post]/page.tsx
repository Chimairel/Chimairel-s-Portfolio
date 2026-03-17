import { blogData } from "@/constants/blog";
import { notFound } from "next/navigation";
import { BlogPostReader } from "@/components/features/blog/BlogPostReader";

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  
  const { post } = await params;
  
  const blogPost = blogData.find((p) => p.slug === post);
  if (!blogPost) notFound();
  
  return <BlogPostReader post={blogPost} />;
}