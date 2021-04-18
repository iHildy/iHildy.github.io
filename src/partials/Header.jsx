import React, { useState, useEffect } from "react";

import logo from '../images/favicon.png'

import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex items-center mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                className="h-16"
                src={logo}
                alt="Logo"
                draggable="false"
              />
            </Link>
            <h1 className="text-2xl font-extrabold">iHildy</h1>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center space-x-4">
              <li className="hidden md:block">
                <a data-tip data-for="discord" href="https://discord.gg/CeQatpWKKV">
                  <ReactTooltip place="bottom" id="discord">
                    <span>iHildy#3839</span>
                  </ReactTooltip>
                  <FaDiscord
                    className="fill-current text-black hover:text-blue-500 transition duration-300"
                    size="1.5em"
                  />
                </a>
              </li>
              <li className="hidden md:block">
                <a data-tip data-for="email" href="mailto:ian@jedi.net">
                  <ReactTooltip place="bottom" id="email">
                    <span>ian@jedi.net</span>
                  </ReactTooltip>
                  <MdEmail
                    className="fill-current text-black hover:text-blue-500 transition duration-300"
                    size="1.5em"
                  />
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  data-tip
                  data-for="github"
                  href="https://github.com/ihildy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactTooltip place="bottom" id="github">
                    <span>iHildy</span>
                  </ReactTooltip>
                  <FaGithub
                    className="fill-current text-black hover:text-blue-500 transition duration-300"
                    size="1.5em"
                  />
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  data-tip
                  data-for="twitter"
                  href="https://twitter.com/ianhildy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactTooltip place="bottom" id="twitter">
                    <span>@ianhildy</span>
                  </ReactTooltip>
                  <FaTwitter
                    className="fill-current text-black hover:text-blue-500 transition duration-300"
                    size="1.5em"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/CeQatpWKKV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 group"
                >
                  <span>Contact</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 -mr-1 transition duration-300 transform ml-2 group-hover:translate-x-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
