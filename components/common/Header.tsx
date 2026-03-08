import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    
    <header className="bg-background text-foreground w-full px-6 pt-6 flex justify-center">
      
      
      <div className="flex justify-between items-center w-full max-w-6xl border-b-2 border-border pb-4">
        
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
          <Link href="#">
            <span>Chimairel.app</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 font-semibold">
            <Link href="#" className="hover:underline hover:decoration-2 underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="hover:underline hover:decoration-2 underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="hover:underline hover:decoration-2 underline-offset-4">
              Projects
            </Link>
            <Link href="#blog" className="hover:underline hover:decoration-2 underline-offset-4">
              Blog
            </Link>
            <Link href="#contact" className="hover:underline hover:decoration-2 underline-offset-4">
              Contact
            </Link>
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}