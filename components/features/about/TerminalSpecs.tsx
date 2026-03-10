"use client";

import { RetroWindow } from "@/components/common/RetroWindow";
import { useTerminal } from "@/hooks/useTerminal";

export function TerminalSpecs() {
  const { 
    input, setInput, history, inputRef, 
    promptString, handleTerminalClick, handleCommand 
  } = useTerminal("about");

  return (
    <RetroWindow title="cmd.exe" id="terminal" noPadding>
      <div 
        className="border border-white dark:border-0 font-mono text-xs md:text-sm bg-[#0a0a0a] text-[#ededed] p-6 md:p-8 flex flex-col gap-6 h-full min-h-[400px] cursor-text"
        onClick={handleTerminalClick}
      >
        
        <div>
          <span className="font-bold">{promptString}</span> execute --skills
          <br />
          <span className="opacity-70 mt-1 inline-block">[OK] Loading system specs...</span>
          <br /><br />
          <div className="pl-4 flex flex-col gap-2">
            <span><span className="text-[#a3a3a3]">&gt; FRONTEND:</span> React, Next.js, Vue, TypeScript, Tailwind CSS, JavaScript, HTML5, ShadCN, Vite</span>
            <span><span className="text-[#a3a3a3]">&gt; BACKEND:</span> Node.js, Express.js, PHP, Laravel, DrizzleORM, REST</span>
            <span><span className="text-[#a3a3a3]">&gt; AUTH & SEC:</span> OAuth, JWT, Clerk, NextAuth</span>
            <span><span className="text-[#a3a3a3]">&gt; DATABASE:</span> PostgreSQL, MySQL</span>
            <span><span className="text-[#a3a3a3]">&gt; HOSTING:</span> Vercel</span>
            <span><span className="text-[#a3a3a3]">&gt; DEV TOOLS:</span> Git, VS Code, Postman, Figma, GitHub, AWS, ESLint, Prettier</span>
          </div>
        </div>

        {history.map((log, index) => (
          <div key={index} className="flex flex-col">
            <div><span className="font-bold">{promptString}</span> {log.cmd}</div>
            <div className={log.output.includes("Navigating") ? "text-green-400" : "opacity-70 mt-1"}>
              {log.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="font-bold whitespace-nowrap">{promptString}</span> 
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-[#ededed] caret-[#ededed]"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        
      </div>
    </RetroWindow>
  );
}