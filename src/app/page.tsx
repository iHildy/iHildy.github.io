import Hero from "@/app/_components/hero";
import WorkExperience from "@/app/_components/work";
import Projects from "@/app/_components/projects";
import OpenSourceContributions from "@/app/_components/open-source";
import Navigation from "@/app/_components/navigation";
import BackToTop from "@/app/_components/back-to-top";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ian Hildebrand",
  url: "https://ihildy.com",
  image: "https://ihildy.com/pfp.webp",
  jobTitle: "Software Engineer",
  description:
    "Software engineer and entrepreneur based in Texas. Building pixel-perfect UIs and automations to make lives easier.",
  sameAs: [
    "https://github.com/ihildy",
    "https://www.linkedin.com/in/ian-hildebrand/",
    "https://x.com/ianhildy",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navigation />
      <main className="flex min-h-screen flex-col mx-auto text-black dark:text-white m-10 max-w-3xl gap-4 px-4 lg:px-0">
        <Hero />
        <section id="work">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="opensource">
          <OpenSourceContributions />
        </section>
      </main>
      <BackToTop />
    </>
  );
}
