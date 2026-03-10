"use client"; 

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { blogData } from "@/constants/blog";
import { useDirectory } from "@/hooks/useDirectory";

// Since dili ra kailangan ug multiple sections, ari ra ge butang ang code
export default function BlogPage() {
  const {
    searchInput, setSearchInput, currentPage, setCurrentPage,
    totalPages, currentItems, totalItemsFound, handleSearch
  } = useDirectory(
    blogData,   
    3,
    (post, search) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        
        <RetroWindow title="RSS_Feed_Reader.exe" id="blog-main">
          
          <DirectorySearch 
            path="C:\Chimairel\Blog\"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
            resultCount={totalItemsFound}
            placeholder="search_posts..."
            buttonText="Query"
            itemLabel="Logs Found"
          />

          <div className="flex flex-col gap-8">
            
            {currentItems.length > 0 ? (
              currentItems.map((post) => (
                <div key={post.id} className="flex flex-col md:flex-row border-2 border-border bg-card transition-colors duration-200 hover:shadow-[4px_4px_0px_0px_var(--color-border)] group">
                  
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-border bg-muted flex-shrink-0 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col grow justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="bg-foreground text-background px-2 py-0.5">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">
                        {post.title}
                      </h3>
                      <p className="text-base font-medium text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-2">
                      <Button variant="outline" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read Article
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                </div>
              ))
            ) : (
              <div className="py-12 text-center font-mono text-muted-foreground border-2 border-dashed border-border">
                &gt; ERROR 404: No log entries match your query.
              </div>
            )}

          </div>

          <DirectoryPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />

        </RetroWindow>

      </div>
    </main>
  );
}