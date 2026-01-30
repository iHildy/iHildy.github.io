import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Hero() {
  return (
<div className="flex flex-col gap-3">

        <Image src="/pfp.webp" alt="Ian Hildebrand" width={100} height={100} className="rounded-lg" priority />
        <h1 className="text-3xl font-bold font-celine">Ian Hildebrand</h1>

        <p className="text-base">
          Welcome to my corner of the internet. I&apos;m a software engineer and
          entrepreneur based in Texas. I&apos;m a perfectionist turned interface and tool developer, that loves to make pixel perfect UIs and automations to make lives easier.
        </p>
        <div className="flex flex-row gap-3">
          <Link className="hover:bg-gray-100 transition-all duration-200 p-1 rounded-lg" target="_blank" href="https://github.com/ihildy">
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link className="hover:bg-gray-100 transition-all duration-200 p-1 rounded-lg" target="_blank" href="https://www.linkedin.com/in/ian-hildebrand/">
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link className="hover:bg-gray-100 transition-all duration-200 p-1 rounded-lg" target="_blank" href="https://x.com/ianhildy">
            <FaXTwitter className="w-6 h-6" />
          </Link>
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-black hover:bg-gray-100 transition-all duration-200 rounded-lg font-medium"
          >
            <span>View CV</span>
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
    </div>
  );
}