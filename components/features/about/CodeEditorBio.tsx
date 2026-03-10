import { RetroWindow } from "@/components/common/RetroWindow";

export function CodeEditorBio() {
  return (
    <RetroWindow title="about_me.ts" id="bio" noPadding>
      
      <div className="font-mono text-base md:text-lg flex bg-card overflow-hidden">
        
        <div className="flex flex-col text-muted-foreground py-6 pl-4 pr-4 border-r-2 border-border select-none text-right opacity-50 hidden md:flex">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="flex flex-col py-6 px-4 w-full">
          
          <span className="text-green-600 dark:text-[#6A9955] mb-2 italic">
            // Initializing developer profile...
          </span>
          
          <span>
            <span className="text-blue-600 dark:text-[#569CD6] font-bold">const</span>{" "}
            <span className="text-blue-800 dark:text-[#9CDCFE]">developerBio</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-orange-700 dark:text-[#CE9178]">`</span>
          </span>
          
          <div className="text-orange-700 dark:text-[#CE9178]">
            <p className="mt-2 leading-relaxed pl-2 md:pl-4 pr-2">
              Hello! I'm Chimairel Pacaldo, an IT student based in the Philippines. I focus on building modern, interactive, and efficient web applications using Next.js, React, and Tailwind CSS.
            </p>
            
            <p className="mt-4 leading-relaxed pl-2 md:pl-4 pr-2">
              Beyond just writing code, I am deeply interested in technopreneurship and how technology can solve real-world business problems. I love turning complex logic into clean, user-friendly digital experiences that actually streamline operations.
            </p>

            <p className="mt-4 mb-2 leading-relaxed pl-2 md:pl-4 pr-2">
              When I'm not studying for classes or debugging layouts, I'm usually working on my capstone project, NutriMind, or playing Roblox.
            </p>
          </div>
          
          <span>
            <span className="text-orange-700 dark:text-[#CE9178]">`</span>
            <span className="text-foreground">;</span>
          </span>
          <br />
          <span>
            <span className="text-purple-600 dark:text-[#C586C0] font-bold">export</span>{" "}
            <span className="text-purple-600 dark:text-[#C586C0] font-bold">default</span>{" "}
            <span className="text-blue-800 dark:text-[#9CDCFE]">developerBio</span>
            <span className="text-foreground">;</span>
          </span>

        </div>

      </div>

    </RetroWindow>
  );
}