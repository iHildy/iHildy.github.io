import Link from "next/link";

const sideProjects = [
  {
    name: "Jules Task Queue",
    description: "An overengineered, task queue for Google Jules power users (AI async coding agent).",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "GitHub API", "tRPC"],
    githubUrl: "https://github.com/iHildy/jules-task-queue/tree/main",
    liveUrl: "https://jules.hildy.io",
    period: "2025",
    isPrivate: false
  },
  {
    name: "Homelab Server",
    description: "2x Dell R710s for hosting all my side projects, dev environments, backups, and more.",
    techStack: ["Ubuntu Server", "Docker", "Coolify", "Cloudflared Tunnel"],
    period: "Constant",
    isPrivate: true
  },
  {
    name: "create-hildy-app",
    description: "An opinionated version of create-next-app with all my tools and AI rules setup.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "tRPC"],
    githubUrl: "https://github.com/iHildy/create-hildy-app",
    liveUrl: "https://create-hildy-app.vercel.app/",
    period: "2025",
    isPrivate: false
  },
  {
    name: "Google Jules Workflow CLI",
    description: "A CLI tool to make working with Google Jules easier with Linear and Github - published on npm.",
    techStack: ["Node.js", "TypeScript"],
    githubUrl: "https://github.com/iHildy/google-jules-workflow",
    liveUrl: "https://www.npmjs.com/package/@ihildy/google-jules-workflow",
    period: "2025",
    isPrivate: false
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full border-t border-gray-200 pt-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-black">Side Projects</h2>
      </div>
      <div className="flex flex-col divide-y divide-gray-300 divide-dashed">
        {sideProjects.map((project, index) => (
          <div key={index} className="flex flex-col gap-3 group py-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-base font-semibold text-black transition-colors leading-tight">
                  {project.liveUrl ? (
                    <Link 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-700 transition-all ease-in-out transform duration-200"
                    >
                      {project.name}
                    </Link>
                  ) : (
                    project.name
                  )}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                {project.period}
              </div>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-4">
              {project.isPrivate ? (
                <div className="inline-flex items-center gap-1.5 text-gray-600 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Private</span>
                </div>
              ) : (
                <>
                  {project.githubUrl && (
                    <Link 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors text-xs"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors text-xs"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}