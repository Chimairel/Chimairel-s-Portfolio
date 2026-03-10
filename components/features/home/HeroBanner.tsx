import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 border-2 border-border bg-card overflow-hidden gap-0 transition-colors duration-200">
      
      {/* Left Column */}
      <div className="md:col-span-3 flex flex-col gap-6 p-8 md:p-12 order-2 md:order-1 justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-foreground">
          Hello. <br /> I'm Chimairel Pacaldo.
        </h1>
        
        <p className="text-xl font-mono text-foreground leading-relaxed max-w-xl mb-6">
          I'm a passionate web developer focused on building modern, interactive, and efficient web applications.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-2">
          <Button asChild>
            <Link href="#portfolio">
              View My Work
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <a href="/chimairel-resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Right Column */}
      <div className="group relative w-full aspect-square md:aspect-auto md:col-span-2 shrink-0 order-1 md:order-2 border-b-2 md:border-b-0 md:border-l-2 border-border bg-muted">
          
          <Image 
            src="/hero.png"
            alt="Chimairel Pacaldo" 
            fill 
            priority 
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0" 
          />
          
          <Image 
            src="/hero-hover.jpg" 
            alt="Chimairel Pacaldo Alternate" 
            fill 
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" 
          />
      </div>
      
    </section>
  );
}