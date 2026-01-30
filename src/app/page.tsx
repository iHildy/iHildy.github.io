import Hero from "@/app/_components/hero";
import WorkExperience from "@/app/_components/work";
import Projects from "@/app/_components/projects";
import OpenSourceContributions from "@/app/_components/open-source";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col mx-auto text-black m-10 max-w-3xl gap-4 px-4 lg:px-0">
        <Hero />
        <WorkExperience />
        <Projects />
        <OpenSourceContributions />
      </main>
  );
}
