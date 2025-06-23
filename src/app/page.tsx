import { HydrateClient } from "@/trpc/server";
import Hero from "@/app/_components/hero";
import WorkExperience from "@/app/_components/work";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-start justify-start text-black m-10 max-w-2xl gap-8">
        <Hero />
        <WorkExperience />
      </main>
    </HydrateClient>
  );
}
