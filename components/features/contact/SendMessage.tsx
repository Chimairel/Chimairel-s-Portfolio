import { Button } from "@/components/ui/button";

export function SendMessage() {
  return (
    <div className="flex flex-col gap-6 font-mono p-6 md:p-10 h-full w-full">
      
      <div className="border-b-2 border-current pb-4">
        <h2 className="text-2xl font-bold tracking-tight uppercase">
          Ping My Server
        </h2>
        <p className="text-sm opacity-70 mt-1">
          Fill out the form below to establish a direct connection.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-current">
            &gt; INITIALIZE: Name
          </label>
          <input 
            type="text" 
            placeholder="John Doe"
            className="bg-transparent text-current border-2 border-current px-4 py-3 outline-none focus:bg-foreground/5 transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-current">
            &gt; INITIALIZE: Email_Address
          </label>
          <input 
            type="email" 
            placeholder="john@domain.com"
            className="bg-transparent text-current border-2 border-current px-4 py-3 outline-none focus:bg-foreground/5 transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-current">
            &gt; TRANSMIT: Message_Payload
          </label>
          <textarea 
            rows={5}
            placeholder="Type your message here..."
            className="bg-transparent text-current border-2 border-current px-4 py-3 outline-none focus:bg-foreground/5 transition-all resize-none"
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full mt-2 font-bold uppercase tracking-widest border-2 border-current">
          Execute Transmission
        </Button>
      </form>

    </div>
  );
}