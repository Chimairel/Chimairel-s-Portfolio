import { Button } from "@/components/ui/button";

interface DirectoryPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

export function DirectoryPagination({ currentPage, totalPages, setCurrentPage }: DirectoryPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 pt-6 border-t-2 border-border flex justify-center items-center gap-6 font-mono text-sm font-bold">
      <Button 
        variant="outline" 
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </Button>
      
      <span>
        Page {currentPage} of {totalPages}
      </span>
      
      <Button 
        variant="outline" 
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </Button>
    </div>
  );
}