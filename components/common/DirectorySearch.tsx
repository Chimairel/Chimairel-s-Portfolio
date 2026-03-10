"use client";

import { FormEvent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DirectorySearchProps {
  path: string;
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  resultCount: number;
  placeholder?: string;
  buttonText?: string;
  itemLabel?: string;
  categories?: { name: string; slug: string }[];
  selectedCategory?: string;
  onCategoryChange?: (slug: string) => void;
}

export function DirectorySearch({
  path,
  searchInput,
  setSearchInput,
  handleSearch,
  resultCount,
  placeholder = "search...",
  buttonText = "Find",
  itemLabel = "Items Found",
  categories,
  selectedCategory,
  onCategoryChange
}: DirectorySearchProps) {
  
  const activeCategoryName = selectedCategory === "all" || !selectedCategory
    ? "ALL POSTS"
    : categories?.find(c => c.slug === selectedCategory)?.name || "ALL POSTS";

  return (
    <div className="mb-8 border-b-2 border-border pb-6 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
        
        <div className="flex flex-col sm:flex-row items-stretch gap-4 flex-1 max-w-4xl">
          
          <form onSubmit={handleSearch} className="flex flex-1 items-stretch font-mono text-sm shadow-[2px_2px_0px_0px_var(--color-border)]">
            <div className="hidden sm:flex items-center bg-muted border-2 border-border border-r-0 px-3 text-muted-foreground whitespace-nowrap">
              &gt; PATH: {path}
            </div>
            
            <input 
              type="text" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-card text-foreground border-2 border-border border-r-0 px-3 py-2 outline-none focus:bg-muted transition-colors w-full min-w-[100px]"
            />

            <button 
              type="submit"
              className="bg-foreground text-background font-bold px-4 border-2 border-foreground hover:opacity-90 active:translate-y-[1px] transition-all uppercase tracking-widest cursor-pointer"
            >
              {buttonText}
            </button>
          </form>

          {categories && onCategoryChange && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  type="button" 
                  className="bg-card text-foreground border-2 border-border px-4 py-2 outline-none focus:bg-muted font-mono uppercase font-bold cursor-pointer shadow-[2px_2px_0px_0px_var(--color-border)] min-w-[160px] flex justify-between items-center gap-3 transition-colors hover:bg-muted"
                >
                  <span className="truncate">{activeCategoryName}</span>
                  <span className="text-[10px] opacity-70">▼</span>
                </button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent 
                align="end" 
                className="w-48 border-2 border-border rounded-none bg-card text-foreground font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--color-border)] font-mono p-0"
              >
                <DropdownMenuItem 
                  onClick={() => onCategoryChange("all")}
                  className="cursor-pointer rounded-none transition-none focus:bg-foreground focus:text-background py-3 px-4 border-b-2 border-border last:border-0"
                >
                  ALL POSTS
                </DropdownMenuItem>
                
                {categories.map((cat) => (
                  <DropdownMenuItem 
                    key={cat.slug}
                    onClick={() => onCategoryChange(cat.slug)}
                    className="cursor-pointer rounded-none transition-none focus:bg-foreground focus:text-background py-3 px-4 border-b-2 border-border last:border-0"
                  >
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

        </div>

        {/* Right Side: Log Count */}
        <span className="bg-foreground text-background px-3 py-1 font-mono font-bold text-sm w-fit tracking-widest uppercase whitespace-nowrap lg:self-stretch flex items-center shadow-[2px_2px_0px_0px_var(--color-border)]">
          {resultCount} {itemLabel}
        </span>
        
      </div>
    </div>
  );
}