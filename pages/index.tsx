import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { CgFileDocument } from "react-icons/cg";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsPeopleFill } from "react-icons/bs";


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ian Hildebrand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 flex w-full flex-1 flex-col items-center justify-center px-3 text-center sm:mt-0 md:px-20 mx-auto">
        <h1 className="text-5xl font-bold sm:text-6xl">Ian Hildebrand</h1>
        {/* <h2 className="pt-1 text-lg font-medium">(ian@hildy.dev)</h2> */}

        <p className="mt-3 text-2xl">
          <a className="text-blue-600" href="mailto:ian@hildy.dev">
            ian@hildy.dev
          </a>
        </p>
        <div className="mt-5 flex max-w-4xl flex-wrap items-center justify-center space-x-3 sm:w-full">
          <a
            href="/resume.pdf"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgFileDocument className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://calendly.com/ian-hildebrand"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsPeopleFill className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ian-hildebrand/"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiLinkedin className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://github.com/ihildy"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://discord.gg/7PepvThQ9p"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDiscord className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://twitter.com/ianhildy"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTwitter className="text-2xl sm:text-3xl" />
          </a>
        </div>

        <div className="my-6 px-2 grid lg:grid-cols-2 gap-4 sm:gap-10">
          <a
            href="https://linear.consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">
              Linear Consulting
            </h3>
            <h3 className="text-2xl font-bold">CEO & Web Developer &rarr;</h3>
            <p className="pt-1 text-lg font-medium">Sep 2020 - Present</p>
            <p className="mt-4 text-xl">
              Bringing your vision to life with a talented team of designers and
              developers.
            </p>
          </a>

          <a
            href="https://tcdetail.net"
            target="_blank"
            rel="noopener noreferrer"
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">
              TC Detail
            </h3>
            <h3 className="text-2xl font-bold">CEO &rarr;</h3>
            <p className="pt-1 text-lg font-medium">Apr 2022 - Present</p>
            <p className="mt-4 text-xl">
              Top Quality Mobile Car Wash and Detailing for residents of Austin,
              TX.
            </p>
          </a>

          <a
            href="https://heb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">
              H-E-B Digital
            </h3>
            <h3 className="text-2xl font-bold">Software Developer &rarr;</h3>
            <p className="pt-1 text-lg font-medium">May 2022 - Jul 2022</p>
            <p className="mt-4 text-xl">
              "Here Everything's Better." - America's 6th Largest Private
              Company
            </p>
          </a>

          <a
            href="https://ensora.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">Ensora</h3>
            <h3 className="text-2xl font-bold">Software Developer &rarr;</h3>
            <p className="pt-1 text-lg font-medium">Mar 2021 - Sep 2021</p>
            <p className="mt-4 text-xl">
              A student-founded company-development business with clientele like
              the World Health Organization and Cancer Research UK.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home
