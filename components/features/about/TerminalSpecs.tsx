import { RetroWindow } from "@/components/common/RetroWindow";

export function TerminalSpecs() {
  return (
    <RetroWindow title="cmd.exe" id="terminal" noPadding>
      
      <div className=" border border-white dark:border-0 font-mono text-xs md:text-sm bg-[#0a0a0a] text-[#ededed] p-6 md:p-8 flex flex-col gap-6">
        
        <div>
          <span className="font-bold">C:\Users\Chimairel&gt;</span> execute --skills
          <br />
          <span className="opacity-70 mt-1 inline-block">[OK] Loading system specs...</span>
          <br /><br />
          <div className="pl-4 flex flex-col gap-2">
            <span>
              <span className="text-[#a3a3a3]">&gt; FRONTEND:</span> React, Next.js, Vue, TypeScript, Tailwind CSS, JavaScript, HTML5, ShadCN, Vite
            </span>
            <span>
              <span className="text-[#a3a3a3]">&gt; BACKEND:</span> Node.js, Express.js, PHP, Laravel, DrizzleORM, REST
            </span>
            <span>
              <span className="text-[#a3a3a3]">&gt; AUTH & SEC:</span> OAuth, JWT, Clerk, NextAuth
            </span>
            <span>
              <span className="text-[#a3a3a3]">&gt; DATABASE:</span> PostgreSQL, MySQL
            </span>
            <span>
              <span className="text-[#a3a3a3]">&gt; HOSTING:</span> Vercel
            </span>
            <span>
              <span className="text-[#a3a3a3]">&gt; DEV TOOLS:</span> Git, VS Code, Postman, Figma, GitHub, AWS, ESLint, Prettier
            </span>
          </div>
        </div>


        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold">C:\Users\Chimairel&gt;</span> 
          <span className="w-2 md:w-2.5 h-4 md:h-5 bg-[#ededed] animate-pulse inline-block" />
        </div>

      </div>

    </RetroWindow>
  );
}