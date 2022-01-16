import React from "react";
// import Modal from "../utils/Modal";

function HeroTips() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {/* <div class="inline-flex bg-gray-900 text-white py-3 px-5 z-10 items-center btn">
                  <div class="">Open for hire</div>
              </div> */}
            <div
              className="text-4xl sm:text-6xl text-center font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Thank you for <br></br>
              <span className="text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 relative z-50">
                choosing me
              </span>
            </div>
            <div className="max-w-3xl mx-auto mt-8">
              <p
                className="text-lg md:text-xl font-medium text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Tips are very much appreciated!
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-6"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="grid grid-cols-3 gap-3">
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/6oE29wad86xj1Ne00B"
                  >
                    $5
                  </a>
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/8wM9BYfxs4pbcrS8xb"
                  >
                    $10
                  </a>
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/fZe29w5WSdZLeA014G"
                  >
                    $15
                  </a>
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/5kA15s9944pbgI828L"
                  >
                    $25
                  </a>
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/3cs29wgBwaNzbnO5l0"
                  >
                    $50
                  </a>
                  <a
                    className="px-8 py-3 shadow-lg font-semibold inline-flex items-center justify-center rounded leading-snug transition duration-300 ease-in-out text-white bg-gray-500 hover:bg-gray-800 w-full"
                    href="https://buy.stripe.com/bIY15s994g7TfE48xa"
                  >
                    $100
                  </a>
                </div>
              </div>
            </div>
            <p
              className="text-lg md:text-xl font-medium text-gray-600 mt-6"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Please make sure you've left a{" "}
              <a
                href="https://discord.com/channels/777678965510897664/783806068567310336"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0.5 bg-blue-400 bg-opacity-30 hover:bg-opacity-70 rounded-md text-blue-500 text-opacity-70 hover:text-opacity-100 transition duration-300 ease-in-out"
              >
                #review
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTips;
