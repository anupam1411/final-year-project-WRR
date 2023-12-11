/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import logo from "../assests/WWW.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" w-full bg-theme-dark shadow-2xl shadow-theme-dark text-xl sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <Link to="/">
                <div className="flex items-center md:ml-2">
                  <img src={logo} alt="Logo" className="mr-2 h-12" />
                  <span className=" font-mono text-white">
                    <div>WeRankResumes</div>
                  </span>
                </div>
              </Link>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-end justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-white border-b-2 border-white-300"
                  className="hover:text-emerald-300"
                  
                >
                  Home
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/resume"
                  activeClassName="text-white border-b-2 border-white-300 "
                  className="hover:text-emerald-300"
                 
                >
                  Resume
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/skills"
                  activeClassName="text-white border-b-2 border-white-300"
                  className="hover:text-emerald-300"
                  
                >
                  Skills
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/contact"
                  activeClassName="text-white border-b-2 border-white-300 transition"
                  className="hover:text-emerald-300"
                >
                  Contact
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to="/about"
                  activeClassName="text-white border-b-2 border-white-300"
                  className="hover:text-emerald-300"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
