"use client"; 

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { projectsData } from "@/constants/projects";
import { useDirectory } from "@/hooks/useDirectory";

export function ProjectsList() {
  const {
    searchInput, setSearchInput, currentPage, setCurrentPage,
    totalPages, currentItems, totalItemsFound, handleSearch
  } = useDirectory(
    [...projectsData].reverse(),
    2,
    (project, search) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <RetroWindow title="Projects_Directory" id="projects-main">
          
      <DirectorySearch 
        path="C:\Chimairel\Projects"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        resultCount={totalItemsFound}
        placeholder="search_query.exe..."
        buttonText="Find"
        itemLabel="Items Found"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.length > 0 ? (
          currentItems.map((project) => (
            <RetroWindow key={project.id} variant="card" title={project.fileName} className="h-full">
              <div className="relative w-full aspect-video border-b-2 border-border bg-muted flex items-center justify-center overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow gap-3 justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight mb-1 text-foreground">{project.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground leading-snug">{project.description}</p>
                </div>
                <Button variant="outline" className="w-fit mt-2" asChild>
                  <Link href={project.link}>View Project</Link>
                </Button>
              </div>
            </RetroWindow>
          ))
        ) : (
          <div className="col-span-full py-12 text-center font-mono text-muted-foreground">
            &gt; ERROR 404: No projects match your search parameters.
          </div>
        )}
      </div>

      <DirectoryPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </RetroWindow>
  );
}
