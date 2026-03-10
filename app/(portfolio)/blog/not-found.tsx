import Link from "next/link";
import { RetroWindow } from "@/components/common/RetroWindow";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <main className="w-full px-6 py-12 flex justify-center items-center min-h-[80vh] animate-in fade-in duration-500">
      <div className="w-full max-w-2xl">
        <RetroWindow title="LOG_NOT_FOUND_404.txt" id="blog-not-found" noPadding>
          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6 bg-muted/20">
            
            <div className="font-mono text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              404
            </div>
            
            <div className="bg-foreground text-background px-4 py-1 font-mono font-bold uppercase tracking-widest text-sm md:text-base mb-4 inline-block">
              Log Entry Missing
            </div>
            
            <div className="font-mono text-muted-foreground text-sm md:text-base border-l-4 border-foreground pl-4 text-left w-full bg-background p-4 shadow-[inset_2px_2px_0px_0px_var(--color-border)]">
              &gt; SYSTEM EXCEPTION: The requested blog transmission could not be parsed.<br/><br/>
              &gt; DIAGNOSTIC: <br/>
              &nbsp;&nbsp;- Post may have been archived.<br/>
              &nbsp;&nbsp;- Invalid slug parameter provided in the URL.<br/><br/>
              &gt; RECOMMENDED ACTION: Return to RSS Feed Reader.
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="default" className="font-mono uppercase tracking-widest border-2 border-foreground" asChild>
                <Link href="/blog">
                  Return to Logs
                </Link>
              </Button>
            </div>

          </div>
        </RetroWindow>
      </div>
    </main>
  );
}