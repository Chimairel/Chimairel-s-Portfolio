import { CodeEditorBio } from "@/components/features/about/CodeEditorBio";
import { TerminalSpecs } from "@/components/features/about/TerminalSpecs";

export default function AboutPage() {
  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <CodeEditorBio />
        <TerminalSpecs />
      </div>
    </main>
  );
}