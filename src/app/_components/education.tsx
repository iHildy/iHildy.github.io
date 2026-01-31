import Image from "next/image";

const education = [
  {
    school: "University of Texas at Dallas",
    degree: "B.S. Information Systems & Technology",
    period: "2023 — 2027",
    achievements: [
      "GPA: 3.7",
      "Dean's List Fall '24 & Spring '25",
      "Minor in Entrepreneurship",
    ],
    logoSrc: "/education/utd.svg",
    logoAlt: "University of Texas at Dallas icon",
  },
];

export default function Education() {
  return (
    <div className="flex flex-col gap-4 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Image
                src={edu.logoSrc}
                alt={edu.logoAlt}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium sm:whitespace-nowrap">
                  {edu.period}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
