import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn", hasDropdown: true },
    { name: "Tools", path: "/tool", hasDropdown: true },
    { name: "Community", path: "/community", hasDropdown: true },
    { name: "Support", path: "/support" },
    { name: "About us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-15 flex flex-row bg-[rgba(0,0,0,0.5)] justify-between items-center px-8 py-4 z-50">
      <Link to="/" onClick={scrollToTop} className="ml-5">
        <h1 className="text-white cursor-pointer">Logo</h1>
      </Link>

      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <FaTimes size={24} className="text-red-500 hover:text-red-400" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      <ul
        className={`
        fixed sm:static top-15 left-0 right-0 sm:bg-transparent bg-[rgba(0,0,0,0.5)]
        transition-all duration-300 ease-in-out overflow-hidden
        flex flex-col sm:flex-row items-center
        ${
          isOpen
            ? "max-h-screen opacity-100 h-auto"
            : "max-h-0 sm:max-h-full opacity-0 sm:opacity-100"
        }
        ${
          isOpen
            ? "pointer-events-auto"
            : "pointer-events-none sm:pointer-events-auto"
        }
        space-y-6 sm:space-y-0 sm:space-x-6
        p-6 sm:p-0
        sm:mr-5
      `}
      >
        {navItems.map((item) => (
          <li
            key={item.path}
            className="relative"
            onMouseEnter={() =>
              item.hasDropdown && setActiveDropdown(item.name)
            }
            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
          >
            <div className="flex items-center">
              <Link
                to={item.path}
                className="text-white hover:text-red-500 text-lg sm:text-base"
                onClick={() => {
                  setIsOpen(false);
                  if (!item.hasDropdown) setActiveDropdown(null);
                  scrollToTop();
                }}
              >
                {item.name}
              </Link>
              {item.hasDropdown && (
                <IoMdArrowDropdown
                  className={`ml-1 text-white transition-transform duration-200 ${
                    activeDropdown === item.name ? "rotate-180" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(item.name);
                  }}
                />
              )}
            </div>

            {item.hasDropdown && activeDropdown === item.name && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-1">
                  <Link
                    to={`${item.path}/subitem1`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                  >
                    Subitem 1
                  </Link>
                  <Link
                    to={`${item.path}/subitem2`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                  >
                    Subitem 2
                  </Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <button className="hidden sm:block">
        <PiMagnifyingGlassBold className="text-white cursor-pointer" />
      </button>
    </nav>
  );
}

export default Navigation;
