"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react"; 
import { cn } from "@/lib/utils"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background text-foreground w-full px-6 pt-6 pb-2 flex justify-center transition-colors duration-200">
      <div className="flex justify-between items-center w-full max-w-6xl border-b-2 border-border pb-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
          <Link href="/">
            <span>Chimairel.app</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 font-semibold">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "px-3 py-1 transition-none font-mono uppercase tracking-widest text-sm",
                    active 
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-foreground hover:text-background"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav */}
          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button suppressHydrationWarning className="flex items-center justify-center p-1.5 text-foreground cursor-pointer outline-none focus:outline-none transition-none">
                  <Menu className="w-6 h-6 stroke-3" />
                  <span className="sr-only">Open Menu</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 border-2 border-border rounded-none bg-card text-foreground font-bold uppercase tracking-wider shadow-none">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <DropdownMenuItem 
                      key={link.name} 
                      asChild 
                      className={cn(
                        "cursor-pointer rounded-none transition-none focus:bg-foreground focus:text-background",
                        active && "bg-foreground text-background"
                      )}
                    >
                      <Link href={link.href}>
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ThemeToggle />
          
        </div>
      </div>
    </header>
  );
}