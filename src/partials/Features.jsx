import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.jsx";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Website Portfolio</h1>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div className="flex-1">
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Alien Raffles iOS
                    </div>
                    <div className="text-gray-600">
                      The first iOS Based Raffle Bot.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="rounded-full"
                      src={require("../images/portfolio/logos/alienRaffles.png")}
                      alt="Alien Raffles"
                    />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div className="flex-1">
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      VanishedIO
                    </div>
                    <div className="text-gray-600">
                      Never see a captcha again...
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="rounded-full"
                      src={require("../images/portfolio/logos/vanished.jpeg")}
                      alt="Vanished"
                    />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div className="flex-1">
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Elevate AIO
                    </div>
                    <div className="text-gray-600">
                      Botting Elevated, supporting a range of retail stores.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="rounded-full"
                      src={require("../images/portfolio/logos/elevate.jpeg")}
                      alt="Alien Raffles"
                    />
                  </div>
                </a>
                <div className='grid grid-cols-2 gap-3'>
                  <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                <div className="text-center md:text-left flex-1 font-bold leading-snug tracking-tight mb-1">
                    Linear Tools
                </div>
                  <div className="hidden md:block flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="rounded-full"
                      src={require("../images/portfolio/logos/lineartools.jpeg")}
                      alt="Alien Raffles"
                    />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 5
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(5);
                  }}
                >
                <div className="text-center md:text-left flex-1 font-bold leading-snug tracking-tight mb-1">
                    Sticky Gmails
                </div>
                  <div className="hidden md:block flex justify-center items-center w-10 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <img
                      className="rounded-full"
                      src={require("../images/portfolio/logos/stickgmails.jpeg")}
                      alt="Alien Raffles"
                    />
                  </div>
                </a>
                </div>
              </div>
            </div>
            {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">

            </div> */}

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../images/portfolio/webshot/alien.png")}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <a
                      href="https://alienios.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
                    >
                      Visit
                    </a>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../images/portfolio/webshot/vanished.png")}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <a
                      href="https://vanishedio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
                    >
                      Visit
                    </a>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../images/portfolio/webshot/elevate.png")}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <a
                      href="https://elevateaio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
                    >
                      Visit
                    </a>
                  </div>
                </Transition>
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../images/portfolio/webshot/lineartools.png")}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <a
                      href="https://linear.tools/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
                    >
                      Visit
                    </a>
                  </div>
                </Transition>
                <Transition
                  show={tab === 5}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require("../images/portfolio/webshot/stickygmails.png")}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <a
                      href="https://stickygmails.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto mt-2"
                    >
                      Visit
                    </a>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
