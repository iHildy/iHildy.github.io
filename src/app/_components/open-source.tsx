import Link from "next/link";

const openSourceContributions = [
  {
    name: "moltbot (formerly clawdbot)",
    projectDescription: "The proactive AI assistant that actually does (not ask) things.",
    contributionDescription: "Added Google Chat as a communication channel. Fixed hardcoded onboarding options.",
    githubUrl: "https://github.com/moltbot/moltbot",
    forkUrl: "https://github.com/iHildy/clawdbot",
  },
  {
    name: "OCMT (opencommit)",
    projectDescription: "AI-powered git commit message, changelog & documentation generator using opencode",
    contributionDescription: "Added global config, configurable providers, PR creation and branch management.",
    githubUrl: "https://github.com/R44VC0RP/ocmt",
    forkUrl: "https://github.com/iHildy/ocmt",
  },
  {
    name: "Docker iDRAC6",
    projectDescription: "Dell iDRAC 6 web interface and VNC proxy",
    contributionDescription: "Fixed server connection issue plaguing many users.",
    githubUrl: "https://github.com/DomiStyle/docker-idrac6",
    forkUrl: "https://github.com/iHildy/docker-idrac6",
  },
];

interface GitHubRepoResponse {
  stargazers_count: number;
}

function formatStars(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
  const match = regex.exec(url);
  if (!match?.[1] || !match?.[2]) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

async function fetchGitHubStars(githubUrl: string): Promise<number | null> {
  const parsed = parseGitHubUrl(githubUrl);
  if (!parsed) return null;

  const { owner, repo } = parsed;
  
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };
    
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers,
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch stars for ${owner}/${repo}: ${res.status}`);
      return null;
    }

    const data = await res.json() as GitHubRepoResponse;
    return data.stargazers_count;
  } catch (error) {
    console.error(`Error fetching stars for ${owner}/${repo}:`, error);
    return null;
  }
}

async function ContributionCard({ contribution }: { contribution: typeof openSourceContributions[0] }) {
  const stars = await fetchGitHubStars(contribution.githubUrl);

  return (
    <div className="flex flex-col gap-3 group py-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-base font-semibold text-black transition-colors leading-tight">
            <Link
              href={contribution.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-700 transition-all ease-in-out transform duration-200"
            >
              {contribution.name}
            </Link>
          </h3>
        </div>
        {stars !== null && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{formatStars(stars)} stars</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 font-medium mb-1">Project</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {contribution.projectDescription}
          </p>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 font-medium mb-1">My Contribution</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {contribution.contributionDescription}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={contribution.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors text-xs"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View on GitHub</span>
        </Link>
        {contribution.forkUrl && (
          <Link
            href={contribution.forkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors text-xs"
          >
            <svg className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-git-fork" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" /><path d="M12 12l0 4" /></svg>
            <span>My Fork</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default async function OpenSourceContributions() {
  return (
    <div className="flex flex-col gap-2 w-full border-t border-gray-200 pt-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-black">Open Source Contributions</h2>
      </div>
      <div className="flex flex-col divide-y divide-gray-300 divide-dashed">
        {openSourceContributions.map((contribution, index) => (
          <ContributionCard key={index} contribution={contribution} />
        ))}
      </div>
    </div>
  );
}
