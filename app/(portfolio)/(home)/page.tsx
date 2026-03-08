import { HeroBanner } from "@/components/features/home/HeroBanner";
// import { AboutMe } from "@/components/features/home/AboutMe";
// import { Portfolio } from "@/components/features/home/Portfolio";
// import { Contact } from "@/components/features/home/Contact";

export default function HomePage() {
  return (
    // Outer wrapper handles full width and the side padding (just like Header/Footer)
    <main className="w-full px-6 py-8 flex justify-center">
      
      {/* Inner wrapper strictly enforces the max-width line without any squishing! */}
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <HeroBanner />
        {/* <AboutMe /> */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </div>

    </main>
  );
}