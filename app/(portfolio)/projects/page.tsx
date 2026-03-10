"use client"; 

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { projectsData } from "@/constants/projects";

export default function ProjectsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 2; 

  // CHANGED: Reverse the array first so newest projects are at the top!
  const reversedProjects = [...projectsData].reverse();

  // Filter against our reversed array
  const filteredProjects = reversedProjects.filter((project) =>
    project.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
    project.description.toLowerCase().includes(activeSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchInput);
    setCurrentPage(1); 
  };

  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        
        <RetroWindow title="Projects_Directory" id="projects-main">
          
          <div className="mb-8 border-b-2 border-border pb-6 flex flex-col gap-4">
            
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
              
              <form onSubmit={handleSearch} className="flex flex-1 items-stretch max-w-2xl font-mono text-sm shadow-[2px_2px_0px_0px_var(--color-border)]">
                <div className="hidden sm:flex items-center bg-muted border-2 border-border border-r-0 px-3 text-muted-foreground whitespace-nowrap">
                  &gt; PATH: C:\Chimairel\Projects\
                </div>
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="search_query.exe..."
                  className="flex-1 bg-card text-foreground border-2 border-border border-r-0 px-3 py-2 outline-none focus:bg-muted transition-colors w-full"
                />
                <button 
                  type="submit"
                  className="bg-foreground text-background font-bold px-4 border-2 border-foreground hover:opacity-90 active:translate-y-[1px] transition-all uppercase tracking-widest"
                >
                  Find
                </button>
              </form>

              <span className="bg-foreground text-background px-3 py-1 font-mono font-bold text-sm w-fit tracking-widest uppercase">
                {filteredProjects.length} Items Found
              </span>
            </div>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <RetroWindow key={project.id} variant="card" title={project.fileName} className="h-full">
                  
                  <div className="relative w-full aspect-video border-b-2 border-border bg-muted flex items-center justify-center overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover" 
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow gap-3 justify-between">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight mb-1 text-foreground">{project.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground leading-snug">
                        {project.description}
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-fit mt-2" asChild>
                      <Link 
                        href={project.link}
                        target={project.openInNewTab ? "_blank" : undefined}
                        rel={project.openInNewTab ? "noopener noreferrer" : undefined}
                      >
                        View Project
                      </Link>
                    </Button>
                  </div>
                  
                </RetroWindow>
              ))
            ) : (
              <div className="col-span-full py-12 text-center font-mono text-muted-foreground">
                &gt; ERROR 404: Fahhhh! 
              </div>
            )}

          </div>

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