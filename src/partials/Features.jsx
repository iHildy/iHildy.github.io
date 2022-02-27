import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.jsx";
import SmallWebSelect from "./components/SmallWebSelect";
import WebSelectImage from "./components/WebSelectImage";

import logosLoopNft from "../images/portfolio/logos/loopnft.png";
import logoIntegrity from "../images/portfolio/logos/integrity.jpeg";
import logosThrone from "../images/portfolio/logos/throne.jpeg";
import logosDaniel from "../images/portfolio/logos/danielServices.svg";
import logosVanished from "../images/portfolio/logos/vanished.jpeg";
import logosElevate from "../images/portfolio/logos/elevate.jpeg";
import logosLinearTools from "../images/portfolio/logos/lineartools.png";
import logosStickyGmails from "../images/portfolio/logos/stickygmails.jpeg";
import logos300Chefs from "../images/portfolio/logos/300chefs.jpeg";
import logosWiseBricks from "../images/portfolio/logos/wisebricks.png";

import webshotLoop from "../images/portfolio/webshot/loopnft.png";
import webshotIntegrity from "../images/portfolio/webshot/integrity.jpeg";
import webshotDaniel from "../images/portfolio/webshot/danielServices.png";
import webshotThrone from "../images/portfolio/webshot/throne.jpeg";
import webshotVanished from "../images/portfolio/webshot/vanished.png";
import webshotElevate from "../images/portfolio/webshot/elevate.png";
import webshotLinearTools from "../images/portfolio/webshot/lineartools.jpeg";
import webshotStickyGmails from "../images/portfolio/webshot/stickygmails.png";
import webshot300Chefs from "../images/portfolio/webshot/300chefs.png";
import webshotWiseBricks from "../images/portfolio/webshot/wisebricks.png";

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
    <section className="relative mb-20" id="portfolio">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 h-full pointer-events-none pb-16"
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
                <div className="grid grid-cols-2 gap-3">
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 1
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(1);
                    }}
                  >
                    <SmallWebSelect
                      title="Wise Bricks"
                      image={logosWiseBricks}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 2
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(2);
                    }}
                  >
                    <SmallWebSelect
                      title="Daniel Services"
                      image={logosDaniel}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 7
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(7);
                    }}
                  >
                    <SmallWebSelect
                      title="Loop NFT"
                      image={logosLoopNft}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 10
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(10);
                    }}
                  >
                    <SmallWebSelect
                      title="Integrity"
                      image={logoIntegrity}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 3
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(3);
                    }}
                  >
                    <SmallWebSelect
                      title="Throne Proxies"
                      image={logosThrone}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 4
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(4);
                    }}
                  >
                    <SmallWebSelect
                      title="Vanished Gmails"
                      image={logosVanished}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 5
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(5);
                    }}
                  >
                    <SmallWebSelect title="Elevate AIO" image={logosElevate} />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 6
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(6);
                    }}
                  >
                    <SmallWebSelect
                      title="Linear Tools"
                      image={logosLinearTools}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 8
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(8);
                    }}
                  >
                    <SmallWebSelect
                      title="Sticky Gmails"
                      image={logosStickyGmails}
                    />
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 9
                        ? "bg-white shadow-md border-gray-200 hover:shadow-2xl"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(9);
                    }}
                  >
                    <SmallWebSelect
                      title="300 Chefs Group"
                      image={logos300Chefs}
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
                    image={webshotWiseBricks}
                    alt="Wise Bricks Screenshot"
                    link="https://www.wisegroup.io/"
                  />
                </Transition>
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
                    image={webshotDaniel}
                    alt="Daniel Services Screenshot"
                    link="https://www.daniel-services.com/"
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
                    image={webshotLoop}
                    alt="Loop NFT Screenshot"
                    link="https://www.theloopnodes.com/"
                  />
                </Transition>
                <Transition
                  show={tab === 10}
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
                    image={webshotIntegrity}
                    alt="Integrity Screenshot"
                    link="https://integrity.linear.tools/"
                  />
                </Transition>
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
                    image={webshotThrone}
                    alt="Throne Screenshot"
                    link="https://throneproxies.com/"
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
                    image={webshotVanished}
                    alt="Vanished Screenshot"
                    link="https://vanishedio.com/"
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
                    image={webshotElevate}
                    alt="Elevate Screenshot"
                    link="https://elevate.linear.tools/"
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
                    image={webshotLinearTools}
                    alt="Linear Tools Screenshot"
                    link="https://linear.tools/"
                  />
                </Transition>
                <Transition
                  show={tab === 8}
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
                  show={tab === 9}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
