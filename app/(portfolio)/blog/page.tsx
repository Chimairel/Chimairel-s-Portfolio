"use client"; 

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { blogData } from "@/constants/blog";

export default function BlogPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Stacking these vertically takes up more room, so let's limit to 3 per page
  const itemsPerPage = 3; 

  // Filter the posts based on title, excerpt, OR category!
  const filteredPosts = blogData.filter((post) =>
    post.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(activeSearch.toLowerCase()) ||
    post.category.toLowerCase().includes(activeSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchInput);
    setCurrentPage(1); 
  };

  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        
        <RetroWindow title="RSS_Feed_Reader.exe" id="blog-main">
          
          {/* OS Directory Status Bar & Search Interface */}
          <div className="mb-8 border-b-2 border-border pb-6 flex flex-col gap-4">
            
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
              
              <form onSubmit={handleSearch} className="flex flex-1 items-stretch max-w-2xl font-mono text-sm shadow-[2px_2px_0px_0px_var(--color-border)]">
                <div className="hidden sm:flex items-center bg-muted border-2 border-border border-r-0 px-3 text-muted-foreground whitespace-nowrap">
                  &gt; PATH: C:\Chimairel\Blog\
                </div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="search_posts..."
                  className="flex-1 bg-card text-foreground border-2 border-border border-r-0 px-3 py-2 outline-none focus:bg-muted transition-colors w-full"
                />
                <button 
                  type="submit"
                  className="bg-foreground text-background font-bold px-4 border-2 border-foreground hover:opacity-90 active:translate-y-[1px] transition-all uppercase tracking-widest"
                >
                  Query
                </button>
              </form>

              <span className="bg-foreground text-background px-3 py-1 font-mono font-bold text-sm w-fit tracking-widest uppercase">
                {filteredPosts.length} Logs Found
              </span>
            </div>
            
          </div>

          {/* The Stacked RSS List Layout */}
          <div className="flex flex-col gap-8">
            
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div key={post.id} className="flex flex-col md:flex-row border-2 border-border bg-card transition-colors duration-200 hover:shadow-[4px_4px_0px_0px_var(--color-border)] group">
                  
                  {/* Left Side: Thumbnail */}
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-border bg-muted flex-shrink-0 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>

                  {/* Right Side: Content Area */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-4">
                    <div>
                      {/* Meta Data: Date and Category */}
                      <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="bg-foreground text-background px-2 py-0.5">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      
                      {/* Title & Excerpt */}
                      <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">
                        {post.title}
                      </h3>
                      <p className="text-base font-medium text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    {/* Interactive Link */}
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-10 pt-6 border-t-2 border-border flex justify-center items-center gap-6 font-mono text-sm font-bold">
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt; Prev
              </Button>
              
              <span>
                Page {currentPage} of {totalPages}
              </span>
              
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </Button>
            </div>
          )}

        </RetroWindow>

      </div>
    </main>
  );
}