"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BLOG_CATEGORIES } from "@/constants/blog";

export function BlogCategoryNav() {
  const pathname = usePathname();

  // If the URL is exactly "/blog", the "All Posts" button should be highlighted
  const isAllActive = pathname === "/blog";

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <Button
        variant={isAllActive ? "default" : "outline"}
        className="font-mono uppercase tracking-widest"
        asChild
      >
        <Link href="/blog">All Posts</Link>
      </Button>

      {BLOG_CATEGORIES?.map((cat) => {
        // If the URL includes this category's slug, highlight it
        const isActive = pathname.includes(`/blog/category/${cat.slug}`);
        
        return (
          <Button
            key={cat.slug}
            variant={isActive ? "default" : "outline"}
            className="font-mono uppercase tracking-widest"
            asChild
          >
            <Link href={`/blog/category/${cat.slug}`}>{cat.name}</Link>
          </Button>
        );
      })}
    </div>
  );
}