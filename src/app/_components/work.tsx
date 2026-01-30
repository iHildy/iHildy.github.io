import Image from "next/image";
import Link from "next/link";

const workExperiences = [
  {
    company: "Google",
    position: "Software Engineer",
    period: "Jan 2025 — Current",
    logoSrc: "/work/google.webp",
    logoAlt: "Google logo",
    description: "Helping build Jules at Google Labs - a proactive autonomous AI coding agent.",
    companyUrl: "https://jules.google/"
  },
  {
    company: "GreekPoints",
    position: "Founder and Chief Executive Officer",
    period: "Mar 2024 — Sep 2025",
    logoSrc: "/work/greekpoints.webp",
    logoAlt: "GreekPoints logo",
    description: "Helping frats & sororites raise more money for philanthropy on a modern donation platform. $25k+ processed in it's first semester.",
    companyUrl: "https://greekpoints.org/"
  },
  {
    company: "Linear Consulting",
    position: "Founder and Chief Executive Officer",
    period: "Sep 2020 — Apr 2024",
    logoSrc: "/work/linear.webp",
    logoAlt: "Linear logo",
    description: "Getting startups off the ground with logos, websites, marketing, taxes, etc. 700+ clients that generated over $10M in revenue. Personally developing ecommerce stores, dashboards, email marketing, and more.",
    companyUrl: "https://linear.hildy.io/"
  },
  {
    company: "H-E-B Digital",
    position: "Design Technologist Intern",
    period: "Jun 2023 — Aug 2023",
    logoSrc: "/work/heb.webp",
    logoAlt: "H-E-B Digital logo",
    description: "The 5th largest private company by revenue. Built an AI enabled way of making grocery pickup orders easier.",
    companyUrl: "https://careers.heb.com/digital"
  },
  {
    company: "TC Detail & Power Washing",
    position: "Founder and Chief Executive Officer",
    period: "Apr 2022 — Aug 2023",
    logoSrc: "/work/tcdetail.webp",
    logoAlt: "TC Detail & Power Washing logo",
    description: "Scaled from just the cars on my street to a mobile detailing business across Austin with 5 stars and 10 employees.",
    companyUrl: "https://tcdetail.net/"
  },
  {
    company: "H-E-B Digital",
    position: "Software Engineer Intern",
    period: "May 2022 — Jul 2022",
    logoSrc: "/work/heb.webp",
    logoAlt: "H-E-B Digital logo",
    description: "Utilized geospatial analytics to determine new markets for expansion, analyze customer behavior, and improve customer growth.",
    companyUrl: "https://careers.heb.com/digital"
  }
];

export default function Work() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
      {/* <div className="flex items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Work</h2>
      </div> */}

      <div className="flex flex-col gap-4 sm:gap-6">
        {workExperiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image
                src={experience.logoSrc}
                alt={experience.logoAlt}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white transition-colors leading-tight">
                    {experience.companyUrl ? (
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4 decoration-dashed decoration-2 decoration-gray-700 dark:decoration-gray-400 transition-all ease-in-out transform duration-200"
                      >
                        {experience.company}
                      </Link>
                    ) : (
                      experience.company
                    )}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-tight">
                    {experience.position}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                  {experience.period}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}