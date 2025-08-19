import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Hero() {
  return (
<div className="flex flex-col gap-3">

        <Image src="/pfp.webp" alt="Ian Hildebrand" width={80} height={80} className="rounded-lg" />
        <h1 className="text-3xl font-bold font-celine">Ian Hildebrand</h1>

        <p className="text-base">
          Welcome to my corner of the internet. I&apos;m a software engineer and
          entrepreneur based in Texas. Currently I&apos;m a student working through university while founding GreekPoints and probably 3 other side projects.
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
        </div>
    </div>
  );
}