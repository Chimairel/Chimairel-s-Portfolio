import { FormEvent } from "react";

interface DirectorySearchProps {
  path: string;
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  resultCount: number;
  placeholder?: string;
  buttonText?: string;
  itemLabel?: string;
}

export function DirectorySearch({
  path,
  searchInput,
  setSearchInput,
  handleSearch,
  resultCount,
  placeholder = "search...",
  buttonText = "Find",
  itemLabel = "Items Found"
}: DirectorySearchProps) {
  return (
    <div className="mb-8 border-b-2 border-border pb-6 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
        
        <form onSubmit={handleSearch} className="flex flex-1 items-stretch max-w-2xl font-mono text-sm shadow-[2px_2px_0px_0px_var(--color-border)]">
          <div className="hidden sm:flex items-center bg-muted border-2 border-border border-r-0 px-3 text-muted-foreground whitespace-nowrap">
            &gt; PATH: {path}
          </div>
          <input 
            type="text" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-card text-foreground border-2 border-border border-r-0 px-3 py-2 outline-none focus:bg-muted transition-colors w-full"
          />
          <button 
            type="submit"
            className="bg-foreground text-background font-bold px-4 border-2 border-foreground hover:opacity-90 active:translate-y-[1px] transition-all uppercase tracking-widest cursor-pointer"
          >
            {buttonText}
          </button>
        </form>

        <span className="bg-foreground text-background px-3 py-1 font-mono font-bold text-sm w-fit tracking-widest uppercase">
          {resultCount} {itemLabel}
        </span>
        
      </div>
    </div>
  );
}