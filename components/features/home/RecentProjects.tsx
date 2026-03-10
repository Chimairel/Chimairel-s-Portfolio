import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { projectsData } from "@/constants/projects"; 

export function RecentProjects() {
  const recentProjects = [...projectsData].reverse().slice(0, 2);

  return (
    <RetroWindow title="Recent Projects" id="portfolio">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {recentProjects.map((project) => (
          <RetroWindow key={project.id} variant="card" title={project.fileName} className="h-full">
            
            <div className="relative w-full aspect-video border-b-2 border-border bg-muted flex items-center justify-center overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>

            <div className="p-4 flex flex-col flex-grow gap-3 justify-between">
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-1 text-foreground">{project.title}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-snug line-clamp-3">
                  {project.description}
                </p>
              </div>
              
              <Button variant="outline" className="w-fit mt-2" asChild>
                <Link 
                  href={project.link}
                  target={project.openInNewTab ? "_blank" : undefined}
                  rel={project.openInNewTab ? "noopener noreferrer" : undefined}
                >
                  View Project
                </Link>
              </Button>
            </div>
            
          </RetroWindow>
        ))}

      </div>

      <div className="mt-10 pt-6 border-t-2 border-border flex justify-center w-full text-center font-mono">
        <p className="text-muted-foreground text-sm md:text-base">
          &gt; Want to see what else I've been building? You can{" "}
          <Link 
            href="/projects" 
            className="font-bold text-blue-600 dark:text-[#569CD6] hover:underline hover:text-blue-800 dark:hover:text-[#9CDCFE] underline-offset-4 transition-colors"
          >
            browse my full project directory here.
          </Link>
        </p>
      </div>

    </RetroWindow>
  );
}