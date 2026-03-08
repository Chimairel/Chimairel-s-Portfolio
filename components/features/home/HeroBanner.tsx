import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import your updated global button

export function HeroBanner() {
  return (
    <section className="border-2 border-border p-8 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 bg-background">
      
      {/* Left Column: Text and Buttons */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
          Hello.<br />
          I'm Chimairel<br />
          Pacaldo.
        </h1>
        
        <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed max-w-xl">
          I'm a passionate web developer focused on building modern, interactive, and efficient web applications.
        </p>
        
        {/* Using the global Button component now! */}
        <div className="flex flex-wrap gap-5 mt-2">
          
          <Button asChild>
            <Link href="#projects">
              View My Work
            </Link>
          </Button>

          <Button asChild>
            <Link href="/resume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>

        </div>
      </div>

      {/* Right Column: Pixel Art Avatar */}
      <div className="w-full max-w-[300px] md:max-w-[400px] flex-shrink-0">
        <div className="relative w-full aspect-square flex items-center justify-center">
            <Image 
              src="/hero-img.png" 
              alt="Chimairel Pacaldo" 
              fill 
              priority 
              className="object-contain" 
            />
        </div>
      </div>
      
    </section>
  );
}