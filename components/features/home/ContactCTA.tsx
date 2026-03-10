import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="w-full border-2 border-border bg-foreground text-background py-12 px-6 md:py-16 flex flex-col items-center justify-center text-center transition-colors duration-200">
      
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
        Need help building something?
      </h2>
      
      <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl opacity-90">
        Whether you're searching for a dedicated partner to develop your project or simply need expert support, I'm here to help.
      </p>
      
      <Link 
        href="/contact"
        className="inline-block bg-background text-foreground px-8 py-3 font-bold uppercase tracking-widest border-2 border-background hover:opacity-90 hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
      >
        Get in Touch
      </Link>

    </section>
  );
}