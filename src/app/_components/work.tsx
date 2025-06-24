import Link from "next/link";
import Image from "next/image";

const workExperiences = [
  {
    company: "GreekPoints",
    position: "Founder and Chief Executive Officer",
    period: "Mar 2024 — Present",
    logoSrc: "/work/greekpoints.png",
    logoAlt: "GreekPoints logo",
    description: "Helping frats & sororites raise more money for philanthropy on a modern donation platform. $25k+ processed in it's first semester",
    companyUrl: "https://greekpoints.org/"
  },
  {
    company: "Linear Consulting",
    position: "Founder and Chief Executive Officer",
    period: "Sep 2020 — Apr 2024",
    logoSrc: "/work/linear.png",
    logoAlt: "Linear logo",
    description: "Getting startups off the ground in terms of logos, websites, marketing, taxes, etc.",
    companyUrl: "https://linear.hildy.io/"
  },
  {
    company: "H-E-B Digital",
    position: "Design Technologist Intern",
    period: "Jun 2023 — Aug 2023",
    logoSrc: "/work/heb.png",
    logoAlt: "H-E-B Digital logo",
    description: "The 5th largest private company by revenue. Prototyped an AI enabled way of making pickup orders easier.",
    companyUrl: ""
  },
  {
    company: "TC Detail & Power Washing",
    position: "Founder and Chief Executive Officer",
    period: "Apr 2022 — Aug 2023",
    logoSrc: "/work/tcdetail.png",
    logoAlt: "TC Detail & Power Washing logo",
    description: "Scaled from just the cars on my street to a mobile detailing business across Austin with 5 stars and 10 employees.",
    companyUrl: "https://tcdetail.net/"
  },
  {
    company: "H-E-B Digital",
    position: "Software Engineer Intern",
    period: "May 2022 — Jul 2022",
    logoSrc: "/work/heb.png",
    logoAlt: "H-E-B Digital logo",
    description: "Utilized geospatial analytics to determine new markets for expansion, analyze customer behavior, and improve customer growth.",
    companyUrl: ""
  }
];

export default function Work() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full border-t border-gray-100 pt-4">
      {/* <div className="flex items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-black">Work</h2>
      </div> */}

      <div className="flex flex-col gap-4 sm:gap-6">
        {workExperiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-white border border-gray-200">
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
                  <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-gray-700 transition-colors leading-tight">
                    {experience.company}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-tight">
                    {experience.position}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium sm:whitespace-nowrap mt-1 sm:mt-0">
                  {experience.period}
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
        <Link 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors group"
        >
          <span className="font-medium text-sm sm:text-base">Download CV</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}