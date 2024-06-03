import { useState } from "react";
import logo from "../assets/moritlogo.png";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);

  };

  return (
    <header className="bg-[#f0efef] w-screen h-20 z-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <img src={logo} alt="Logo" className="h-14 w-40" />
            </Link>
          </div>

          <div className="hidden md:block pr-10">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg transition text-blue-500">
                <li>
                  <Link
                    className="p-2 hover:border-b-red-500/75 hover:border-b-2 "
                    to="/"
                  >
                    Accueil
                  </Link>
                </li>

                <li>
                  <Link
                    className=" p-2 hover:border-b-red-500/75 hover:border-b-2  "
                    to="/services"
                  >
                    Nos Services
                  </Link>
                </li>
                <li>
                  <Link
                    className=" p-2 hover:border-b-red-500/75 hover:border-b-2  "
                    to="/nosrealisations"
                  >
                    Nos Réalisations
                  </Link>
                </li>
                <li>
                  <Link
                    className=" p-2 hover:border-b-red-500/75 hover:border-b-2  "
                    to="/Blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 hover:border-b-red-500/75 hover:border-b-2   "
                    to="/ContactPage"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="absolute left-[80%] top-[0%]">
            <div className="absolute top-1 left-0 p-3 hidden lg:block border-r-2 border-gray-500 h-14 ">
              <FaPhone className="w-10 h-10 text-gray-700" />
            </div>
            <div className="absolute top-0 left-16 p-4 hidden lg:block">
              <p className="text-blue-500">Service Client</p>
              <p className="text-blue-700 font-bold">+212661316191</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                className="rounded bg-blue-100 p-2 text-blue-600 transition hover:text-blue-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-blue-100 transition-transform duration-300 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <nav aria-label="Mobile Global" className="flex flex-col  h-full">
          <button
            className="self-end mr-4 p-2 rounded-full bg-blue-600 text-white mt-5"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-4 justify-center items-center text-lg mt-[40%]">
            <li>
              <Link className="p-2 hover:text-red-500" to="Accueil">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="p-2 hover:text-red-500" to="Services">
                Nos Services
              </Link>
            </li>

            <li>
              <Link className="p-2 hover:text-red-500" to="Logiciels">
                Nos Logiciels
              </Link>
            </li>

            <li>
              <Link className="p-2 hover:text-red-500" to="Blog">
                Blog
              </Link>
            </li>

            <li>
              <Link className="p-2 hover:text-red-500" to="Contact">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
