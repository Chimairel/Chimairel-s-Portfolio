"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { blogData, BLOG_CATEGORIES } from "@/constants/blog";
import { useDirectory } from "@/hooks/useDirectory";
import { use } from "react";

export default function CategoryPage({ params }: { params: Promise<{ category: string[] }> }) {
  const router = useRouter();
  
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category ? resolvedParams.category[0] : "all";

  // Pre-filter the data based on the URL!
  const categoryPosts = blogData.filter((post) => {
    const postSlug = post.category.toLowerCase().replace(/\s+/g, '-');
    return postSlug === categorySlug;
  });

  const { searchInput, setSearchInput, currentPage, setCurrentPage, totalPages, currentItems, totalItemsFound, handleSearch } = useDirectory(
    categoryPosts, // Feed it the pre-filtered data           
    3,                           
    (post, search) => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <RetroWindow title={`Category_${categorySlug.toUpperCase()}.exe`}>
          
          <DirectorySearch 
            path={`C:\\Chimairel\\Blog\\${categorySlug}\\`}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
            resultCount={totalItemsFound}
            placeholder="search_posts..."
            buttonText="Query"
            itemLabel="Logs Found"
            categories={BLOG_CATEGORIES}
            selectedCategory={categorySlug} // Sets the dropdown to the active category
            onCategoryChange={(val) => {
              if (val === "all") router.push("/blog"); // Go back to root
              else router.push(`/blog/category/${val}`); // Switch category
            }}
          />

          <div className="flex flex-col gap-8">
            {currentItems.length > 0 ? (
              currentItems.map((post) => (
                <div key={post.id} className="flex flex-col md:flex-row border-2 border-border bg-card transition-colors duration-200 hover:shadow-[4px_4px_0px_0px_var(--color-border)] group">
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-border bg-muted flex-shrink-0 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{post.title}</h3>
                      <p className="text-base font-medium text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="mt-2">
                      <Button variant="outline" asChild>
                        <Link href={`/blog/${post.slug}`}>Read Article</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center font-mono text-muted-foreground">
                &gt; ERROR 404: No log entries match your query in this directory.
              </div>
            )}
          </div>
          <DirectoryPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </RetroWindow>
      </div>
    </main>
  );
}