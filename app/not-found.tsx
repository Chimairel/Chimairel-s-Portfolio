import Link from "next/link";
import { RetroWindow } from "@/components/common/RetroWindow";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="w-full px-6 py-12 flex justify-center items-center min-h-[80vh] animate-in fade-in duration-500">
      <div className="w-full max-w-2xl">
        <RetroWindow title="FATAL_ERROR_404.exe" id="not-found" noPadding>
          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6 bg-muted/20">
            
            {/* The Giant Error Text */}
            <div className="font-mono text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              404
            </div>
            
            <div className="bg-foreground text-background px-4 py-1 font-mono font-bold uppercase tracking-widest text-sm md:text-base mb-4 inline-block">
              Directory Not Found
            </div>
            
            {/* The Terminal Error Log */}
            <div className="font-mono text-muted-foreground text-sm md:text-base border-l-4 border-foreground pl-4 text-left w-full bg-background p-4 shadow-[inset_2px_2px_0px_0px_var(--color-border)]">
              &gt; SYSTEM EXCEPTION: The requested sector is empty or corrupted.<br/><br/>
              &gt; DIAGNOSTIC: <br/>
              &nbsp;&nbsp;- File may have been moved.<br/>
              &nbsp;&nbsp;- File may have been deleted.<br/>
              &nbsp;&nbsp;- Typographical error in path string.<br/><br/>
              &gt; RECOMMENDED ACTION: Return to root directory immediately.
            </div>

            {/* Recovery Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button 
                variant="default" 
                className="font-mono uppercase tracking-widest border-2 border-foreground" 
                asChild
              >
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="font-mono uppercase tracking-widest border-2 border-border" 
                asChild
              >
                <Link href="https://www.roblox.com/">
                  Mag Roblox ka nalang boy
                </Link>
              </Button>
            </div>

          </div>
        </RetroWindow>
      </div>
    </main>
  );
}