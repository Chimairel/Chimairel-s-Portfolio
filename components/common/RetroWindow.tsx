import { cn } from "@/lib/utils";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "card";
  noPadding?: boolean;
}

export function RetroWindow({ title, children, id, className, variant = "default", noPadding = false }: RetroWindowProps) {
  const isCard = variant === "card";

  return (
    <section 
      id={id} 
      className={cn(
        "border-2 border-border bg-card flex flex-col w-full transition-colors duration-200",
        className
      )}
    >
      <div className={cn(
        "border-b-2 border-border flex items-center transition-colors duration-200",
        isCard ? "p-2 px-3 gap-2 bg-muted" : "p-4 gap-3 bg-card"
      )}>
        <div className="flex gap-1.5">
          <div className={cn("rounded-full bg-foreground", isCard ? "w-2.5 h-2.5" : "w-3 h-3")} />
          <div className={cn("rounded-full bg-foreground", isCard ? "w-2.5 h-2.5" : "w-3 h-3")} />
        </div>
        
        {isCard ? (
          <span className="text-xs font-bold tracking-widest uppercase text-foreground">{title}</span>
        ) : (
          <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">{title}</h2>
        )}
      </div>

      <div className={cn(
        isCard || noPadding ? "" : "p-6 md:p-8" 
      )}>
        {children}
      </div>
    </section>
  );
}