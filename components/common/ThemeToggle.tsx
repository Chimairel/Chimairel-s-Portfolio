"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9"></div> 
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center p-1.5 text-foreground cursor-pointer outline-none focus:outline-none transition-none">
          {resolvedTheme === "dark" ? (
             <Moon className="w-6 h-6 stroke-3" />
          ) : (
             <Sun className="w-6 h-6 stroke-3" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="border-2 border-border rounded-none bg-background text-foreground font-bold uppercase tracking-wider shadow-none">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer focus:bg-foreground focus:text-background rounded-none transition-none">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer focus:bg-foreground focus:text-background rounded-none transition-none">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer focus:bg-foreground focus:text-background rounded-none transition-none">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}