import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.jsx";
import WebSelect from "./components/WebSelect";
import SmallWebSelect from "./components/SmallWebSelect";
import WebSelectImage from "./components/WebSelectImage";

import logosAlienRaffles from "../images/portfolio/logos/alienRaffles.png";
import logosVanished from "../images/portfolio/logos/vanished.jpeg";
import logosElevate from "../images/portfolio/logos/elevate.jpeg";
import logosLinearTools from "../images/portfolio/logos/lineartools.jpeg";
import logosStickyGmails from "../images/portfolio/logos/stickygmails.jpeg";
import logos300Chefs from "../images/portfolio/logos/300chefs.jpeg";
import logosUnknown from "../images/portfolio/logos/unknown.jpeg";

import webshotAlien from "../images/portfolio/webshot/alien.png";
import webshotVanished from "../images/portfolio/webshot/vanished.png";
import webshotElevate from "../images/portfolio/webshot/elevate.png";
import webshotLinearTools from "../images/portfolio/webshot/lineartools.png";
import webshotStickyGmails from "../images/portfolio/webshot/stickygmails.png";
import webshot300Chefs from "../images/portfolio/webshot/300chefs.png";
import webshotUnknown from "../images/portfolio/webshot/unknownaio.png";

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
    <section className="relative" id="portfolio">
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
                  <WebSelect
                    title="Alien Raffles iOS"
                    description="The first iOS Based Raffle Bot."
                    image={logosAlienRaffles}
                    alt="Alien Raffles"
                  />
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
                  <WebSelect
                    title="VanishedIO"
                    description="Never see a captcha again..."
                    image={logosVanished}
                    alt="Vanished"
                  />
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
                  <WebSelect
                    title="Elevate AIO"
                    description="Botting Elevated, supporting a range of retail stores."
                    image={logosElevate}
                    alt="Elevate AIO"
                  />
                </a>
                <div className="grid grid-cols-2 gap-3">
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
                    <SmallWebSelect
                      title="Linear Tools"
                      image={logosLinearTools}
                      alt="Linear Tools"
                    />
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
                    <SmallWebSelect
                      title="Sticky Gmails"
                      image={logosStickyGmails}
                      alt="Sticky Gmails"
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 6
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(6);
                    }}
                  >
                    <SmallWebSelect
                      title="300 Chefs"
                      image={logos300Chefs}
                      alt="300 Chefs"
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 7
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(7);
                    }}
                  >
                    <SmallWebSelect
                      title="UnknownAIO"
                      image={logosUnknown}
                      alt="UnknownAIO"
                    />
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
                  <WebSelectImage
                    image={webshotAlien}
                    alt="Alien Raffles Screenshot"
                    link="https://alienios.netlify.app/"
                  />
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
                  <WebSelectImage
                    image={webshotVanished}
                    alt="Vanished Screenshot"
                    link="https://vanishedio.com/"
                  />
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
                  <WebSelectImage
                    image={webshotElevate}
                    alt="Elevate Screenshot"
                    link="https://elevateaio.com/"
                  />
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
                  <WebSelectImage
                    image={webshotLinearTools}
                    alt="Linear Tools Screenshot"
                    link="https://linear.tools/"
                  />
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
                  <WebSelectImage
                    image={webshotStickyGmails}
                    alt="Sticky Gmails Screenshot"
                    link="https://stickygmails.com/"
                  />
                </Transition>
                <Transition
                  show={tab === 6}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <WebSelectImage
                    image={webshot300Chefs}
                    alt="300 Chefs Screenshot"
                    link="https://300chefs.com/"
                  />
                </Transition>
                <Transition
                  show={tab === 7}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <WebSelectImage
                    image={webshotUnknown}
                    alt="UnknownAIO Screenshot"
                    link="https://unknownaio.com/"
                  />
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
