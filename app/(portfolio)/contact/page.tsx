import { SendMessage } from "@/components/features/contact/SendMessage";
import { Connections } from "@/components/features/contact/Connections";
import { RetroWindow } from "@/components/common/RetroWindow";

export default function ContactPage() {
  return (
    <main className="w-full px-6 py-8 flex flex-col min-h-[calc(100vh-64px)] animate-in fade-in duration-500">
      
      <RetroWindow 
        title="Contact.exe" 
        id="contact-main" 
        noPadding 
        className="grow max-w-6xl mx-auto [&>div:last-child]:flex [&>div:last-child]:flex-col [&>div:last-child]:grow"
      >
    
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full grow items-stretch overflow-hidden">

            {/* 2 SECTIONS PERO NAKA ROW INSTEAD OF COLUMN */}

          <div className="bg-background text-foreground transition-colors duration-200 border-b-2 lg:border-b-0 lg:border-r-2 border-border h-full">
            <SendMessage />
          </div>

          <div className="bg-[#121212] border border-white text-[#e5e5e5] dark:bg-[#e5e5e5] dark:text-[#121212] dark:border dark:border-black transition-colors duration-200 h-full">
            <Connections />
          </div>

        </div>

      </RetroWindow>

    </main>
  );
}