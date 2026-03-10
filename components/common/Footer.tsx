import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground w-full px-6 pb-12 mt-20 flex justify-center">
      
      <div className="w-full max-w-6xl pt-10 border-t-2 border-border flex flex-col gap-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono">
          
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold uppercase tracking-widest underline underline-offset-4 decoration-2">
              Chimairel.app
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT Student & Front-end Developer
              <br />
              Cebu, Philippines
            </p>
          </div>

          {/* Footer Nav */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-70">// Pages</h4>
            <nav className="flex flex-col gap-2 text-sm font-bold">
              <Link href="/" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">About</Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Projects</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Blog</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Contact</Link>
            </nav>
          </div>
          
          {/* Footer Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-70">// Resources</h4>
            <nav className="flex flex-col gap-2 text-sm font-bold">
              <a href="#" className="hover:text-blue-600 transition-colors italic">GitHub Boilerplates</a>
              <a href="#" className="hover:text-blue-600 transition-colors italic">CodePen Examples</a>
              <a href="#" className="hover:text-blue-600 transition-colors italic">MDN Docs</a>
            </nav>
          </div>

          {/* Footer Connect */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-70">// Connect</h4>
            <nav className="flex flex-col gap-2 text-sm font-bold">
              <a href="https://github.com/chimairel" target="_blank" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">GitHub</a>
              <a href="https://facebook.com/chimairel.pacaldo" target="_blank" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Facebook</a>
              <a href="mailto:chimairelp@gmail.com" className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline">Email</a>
            </nav>
          </div>

        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase font-mono">
          <p>© 2026 CHIMAIREL PACALDO. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0 text-muted-foreground opacity-70">SYSTEM_STATUS: STABLE // INSPIRED BY CLASSIC OS</p>
        </div>

      </div>
    </footer>
  );
}