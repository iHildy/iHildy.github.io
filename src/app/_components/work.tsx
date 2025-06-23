import Link from "next/link";
import Image from "next/image";
import { FaBusinessTime } from "react-icons/fa6";

const workExperiences = [
  {
    company: "GreekPoints",
    position: "Founder and Chief Executive Officer",
    period: "Mar 2024 — Present",
    logoSrc: "/greekpoints.png",
    logoAlt: "GreekPoints logo"
  },
  {
    company: "Linear",
    position: "Founder and Chief Executive Officer",
    period: "Sep 2020 — Apr 2024",
    logoSrc: "/linear.png",
    logoAlt: "Linear logo"
  },
  {
    company: "H-E-B Digital",
    position: "Design Technologist Intern",
    period: "Jun 2023 — Aug 2023",
    logoSrc: "/heb.jpeg",
    logoAlt: "H-E-B Digital logo"
  },
  {
    company: "TC Detail & Power Washing",
    position: "Founder and Chief Executive Officer",
    period: "Apr 2022 — Aug 2023",
    logoSrc: "/tcdetail.png",
    logoAlt: "TC Detail & Power Washing logo"
  },
  {
    company: "H-E-B Digital",
    position: "Software Engineer Intern",
    period: "May 2022 — Jul 2022",
    logoSrc: "/heb2.png",
    logoAlt: "H-E-B Digital logo"
  }
];

export default function Work() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center gap-3">
        <FaBusinessTime className="w-5 h-5 text-black" />
        <h2 className="text-2xl font-bold text-black">Work</h2>
      </div>

      <div className="flex flex-col gap-6">
        {workExperiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-gray-200">
              <Image
                src={experience.logoSrc}
                alt={experience.logoAlt}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-base text-gray-600">
                    {experience.position}
                  </p>
                </div>
                <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                  {experience.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link 
          href="/resume.pdf" 
          target="_blank"
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors group"
        >
          <span className="font-medium">Download CV</span>
          <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}