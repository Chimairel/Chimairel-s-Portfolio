import { ProjectsList } from "@/components/features/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-6xl flex flex-col gap-12">
        <ProjectsList />
      </div>
    </main>
  );
}