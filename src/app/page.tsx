import Hero from "@/app/_components/hero";
import WorkExperience from "@/app/_components/work";
import Projects from "@/app/_components/projects";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col mx-auto text-black m-10 max-w-3xl gap-4">
        <Hero />
        <WorkExperience />
        <Projects />
      </main>
  );
}
