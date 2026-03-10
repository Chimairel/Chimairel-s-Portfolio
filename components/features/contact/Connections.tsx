export function Connections() {
  return (
    <div className="flex flex-col gap-8 font-mono h-full p-6 md:p-10 transition-colors duration-200 bg-transparent">
      
      <div className="border-b-2 border-current pb-4">
        <h2 className="text-2xl font-bold tracking-tight uppercase">
          System Status
        </h2>
        <p className="text-sm mt-1 flex items-center gap-2 font-bold text-green-600 dark:text-green-400">
          <span className="w-2.5 h-2.5 bg-current rounded-full animate-pulse inline-block" />
          STATUS: ONLINE & READY
        </p>
      </div>

      <div className="flex flex-col gap-6 text-base leading-relaxed grow">
        
        <div>
          <span className="font-bold opacity-60 uppercase tracking-widest block mb-1 text-sm">
            // Base of Operations
          </span>
          <p>Cebu, Philippines</p>
        </div>

        <div>
          <span className="font-bold opacity-60 uppercase tracking-widest block mb-1 text-sm">
            // Direct Protocol
          </span>
          <a 
            href="mailto:chimairelp@gmail.com" 
            className="text-blue-500 hover:underline underline-offset-4 transition-colors"
          >
            chimairelp@gmail.com
          </a>
        </div>

        <div>
          <span className="font-bold opacity-60 uppercase tracking-widest block mb-2 text-sm">
            // External Directories
          </span>
          <div className="flex flex-col gap-3">
            
            <a 
              href="https://github.com/chimairel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border-2 border-current hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
            >
              <span className="font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
              <span className="font-bold uppercase tracking-widest">GitHub_Repository</span>
            </a>

            <a 
              href="https://www.facebook.com/chimairel.pacaldo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border-2 border-current hover:bg-foreground hover:text-background transition-colors group cursor-pointer"
            >
              <span className="font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
              <span className="font-bold uppercase tracking-widest">Facebook_Profile</span>
            </a>

          </div>
        </div>

      </div>

    </div>
  );
}