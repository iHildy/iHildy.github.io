import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
<div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Ian Hildebrand</h1>

        <p className="text-base">
          Welcome to my corner of the internet. I&apos;m a software engineer and
          entrepreneur based in Texas. I&apos;m the founder of <Link href="https://www.greekpoints.org" className="hover:underline decoration-black underline-offset-2 transition-all duration-200">GreekPoints</Link>,
          where I help frats & sororites raise more money for philanthropy on a
          modern donation platform.
        </p>
        <div className="flex flex-row gap-3">
          <Link target="_blank" href="https://github.com/ihildy">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/ian-hildebrand/">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link target="_blank" href="https://x.com/ianhildy">
            <FaXTwitter className="w-5 h-5" />
          </Link>
        </div>
    </div>
  );
}