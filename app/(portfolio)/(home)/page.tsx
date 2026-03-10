import { HeroBanner } from "@/components/features/home/HeroBanner";
import { RecentProjects } from "@/components/features/home/RecentProjects";
import { ContactCTA } from "@/components/features/home/ContactCTA";

export default function HomePage() {
  return (
    <main className="w-full px-6 py-8 flex justify-center">
      
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <HeroBanner />
        <RecentProjects />
        <ContactCTA />
      </div>

    </main>
  );
}