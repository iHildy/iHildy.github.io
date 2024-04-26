import type { NextPage } from "next";
import Head from "next/head";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import Script from "next/script";

import { CgFileDocument } from "react-icons/cg";
import { SiDiscord } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { TiLocation } from "react-icons/ti";
import { BsGithub, BsCalendar2PlusFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ian Hildebrand</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google tag (gtag.js) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=G-QP9SYVWC6L" />`,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QP9SYVWC6L"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QP9SYVWC6L');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-QP9SYVWC6L');
      `}
        </Script>
      </Head>

      <main className="mx-auto mt-10 sm:mt-0">
        <div className="flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold sm:text-6xl">Ian Hildebrand</h1>
          <div className="flex justify-center space-x-1 pt-2 text-lg">
            <TiLocation className="text-2xl" />
            <span>Austin & Dallas, TX</span>
          </div>
          <p className="mt-3 text-2xl">
            <a className="text-blue-600" href="mailto:ian@hildy.io">
              ian@hildy.io
            </a>
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center space-x-3">
          <a
            href="/resume.pdf"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgFileDocument className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://cal.com/ihildy"
            className="trans rounded-xl border-2 border-gray-200 bg-gray-200 p-2 hover:bg-transparent sm:p-2.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsCalendar2PlusFill className="text-2xl sm:text-3xl" />
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
        </div>

        <div className="my-6 mx-auto grid place-content-center gap-4 px-4 sm:gap-10 lg:grid-cols-2">
          <div
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">
              Stealth Startup
            </h3>
            <h3 className="text-2xl font-bold">Founder</h3>
            <p className="pt-1 text-lg font-medium">Mar 2024 - Present</p>
            <p className="mt-4 text-xl">Providing purchasing power to teens.</p>
          </div>
          <a
            href="https://hirelinear.com"
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
              developers. Generating millions for customers.
            </p>
          </a>

          <a
            href="https://heb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="trans w-96 rounded-xl border p-6 text-left hover:bg-gray-200 focus:bg-gray-200"
          >
            <h3 className="pb-1 text-xl font-semibold text-gray-600">
              H-E-B Digital (x2)
            </h3>
            <h3 className="text-2xl font-bold">Design Technologist &rarr;</h3>
            <p className="pt-1 text-lg font-medium">
              Summer 2022 & Summer 2023
            </p>
            <p className="mt-4 text-xl">
              "Here Everything's Better." - America's 6th Largest Private
              Company
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
            <p className="pt-1 text-lg font-medium">Apr 2022 - Aug 2023</p>
            <p className="mt-4 text-xl">
              Top Quality Mobile Car Wash and Detailing for residents of Austin,
              TX. Sold in Aug 2023.
            </p>
          </a>
        </div>
        <CurrentlyPlaying />
      </main>
    </div>
  );
};

export default Home;
