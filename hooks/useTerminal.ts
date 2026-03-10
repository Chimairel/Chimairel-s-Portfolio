import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

export function useTerminal(currentDirectory: string = "about") {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const promptString = `C:\\Chimairel\\${currentDirectory}>`;

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const pathMap: Record<string, string> = {
    "..": "/", "../": "/", "~": "/", "/": "/", "home": "/",
    "projects": "/projects", "../projects": "/projects", "/projects": "/projects",
    "blog": "/blog", "../blog": "/blog", "/blog": "/blog",
    "contact": "/contact", "../contact": "/contact", "/contact": "/contact",
  };

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const [command, ...args] = cmd.toLowerCase().split(" ");
    let output = "";

    const executeCommand: Record<string, () => string | void> = {
      cls: () => setHistory([]),
      clear: () => setHistory([]),
      help: () => "Supported commands: cd <path>, cls, clear, help",
      
      cd: () => {
        const target = args[0];
        if (!target) return promptString.replace(">", "");
        
        if (target === "." || target === "./" || target === currentDirectory) {
          return `Already in C:\\Chimairel\\${currentDirectory}`;
        }

        const route = pathMap[target];
        if (route) {
          setTimeout(() => router.push(route), 500);
          return `Navigating to ${route === "/" ? "root" : route} directory...`;
        }

        return `The system cannot find the path specified: ${target}`;
      }
    };

    if (executeCommand[command]) {
      const result = executeCommand[command]();
      if (typeof result === "string") {
        output = result;
      } else {
        setInput("");
        return;
      }
    } else {
      output = `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
    }

    setHistory(prev => [...prev, { cmd, output }]);
    setInput("");
  };

  return {
    input,
    setInput,
    history,
    inputRef,
    promptString,
    handleTerminalClick,
    handleCommand,
  };
}