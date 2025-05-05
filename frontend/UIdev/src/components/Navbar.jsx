import React, { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import CommunityDropDown from "./DropDown";
import { LearnDropDown } from "./DropDown";
import { ToolDropDown } from "./DropDown";
import { Link } from "react-router-dom";
import { LearnDropDownItem } from "./DropDownList";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState(""); // Add this line

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-100 w-full" ref={navRef}>
      <div className="sm:hidden flex justify-end p-4 bg-[rgba(0,0,0,0.8)]  ">
        <h1
          className={`${
            searchClicked ? "h-6" : "mt-3"
          } text-white absolute left-5 topx-4`}
        >
          Logo
        </h1>
        {searchClicked ? (
          <FaTimes
            className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-100-400"
            onClick={() => setSearchClicked(!searchClicked)}
          />
        ) : (
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none my-2.5 cursor-pointer"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-red-500 hover:text-red-100-400" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        )}

        {searchClicked && (
          <input
            type="text"
            placeholder="search..."
            className={`${
              searchClicked ? "my-3" : ""
            } absolute px-2 focus:outline-none h-8 mt-0.5 rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]`}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>

      <div className="hidden sm:flex relative justify-between items-center bg-[rgba(0,0,0,0.8)]   text-white w-full py-1 px-4">
        <h1 className="text-xl font-bold my-3 ml-4">Logo</h1>
        {searchClicked ? (
          <input
            type="text"
            placeholder="search..."
            className="absolute px-5 z-200 my-10 focus:outline-none h-8 mt-0.5 rounded-full text-black bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%]"
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <ul className="flex flex-row items-center space-x-1">
            <li className="p-4 hover:text-red-100 cursor-pointer">
              {" "}
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>

            <div className="flex items-center group relative">
              <li className="p-4 hover:text-red-100 cursor-pointer">
                <Link
                  to="/learn"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  Learn
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseOver={() => setHoverIndex(1)}
                className="p-1 hover:text-red-100 cursor-pointer"
              >
                <IoMdArrowDropdown
                  className={`transition-transform duration-200 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                />
              </li>
            </div>
            <div className="flex  items-center group relative">
              <li className="p-4 hover:text-red-100 cursor-pointer">
                <Link
                  to="/tool"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  Tools
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseOver={() => setHoverIndex(2)}
                className="p-1 hover:text-red-100 cursor-pointer"
              >
                <IoMdArrowDropdown
                  className={`transition-transform duration-200 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                />
              </li>
            </div>
            <div className="flex items-center group relative">
              <li className="p-4 hover:text-red-100 cursor-pointer">
                <Link
                  to="/community"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  Community
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="p-1 hover:text-red-100 cursor-pointer"
                onMouseOver={() => setHoverIndex(3)}
              >
                <IoMdArrowDropdown
                  className={`transition-transform duration-200 ${
                    isHovered ? "rotate-180" : ""
                  }`}
                  onMouseOver={() => setHoverIndex(3)}
                />
              </li>
            </div>

            <li className="p-4 hover:text-red-100 cursor-pointer">
              <Link
                to="/support"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Support
              </Link>
            </li>
            <li className="p-4 hover:text-red-100 cursor-pointer">
              <Link
                to="/aboutus"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                About us
              </Link>
            </li>
            <li className="p-4 hover:text-red-100 cursor-pointer">
              <Link
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}

        <div className="flex items-center mr-4">
          {searchClicked ? (
            <FaTimes
              className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-100-400"
              onClick={() => setSearchClicked(!searchClicked)}
            />
          ) : (
            <PiMagnifyingGlassBold
              className="w-5 h-5 cursor-pointer hover:text-gray-300"
              onClick={() => setSearchClicked(!searchClicked)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed inset-0 bg-[rgba(0,0,0,0.8)]  text-white z-4 mt-12 overflow-y-auto justify-between transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 "
        }`}
      >
        <ul className="flex flex-col p-1 space-y-2">
          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <Link
              to="/"
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
            >
              Home
            </Link>
          </li>

          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <div className="flex justify-between items-center">
              <Link
                to="/learn"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Learn
              </Link>
              <IoMdArrowDropdown className="ml-2" />
            </div>
          </li>

          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <div className="flex justify-between items-center">
              <Link
                to="/tool"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Tools
              </Link>
              <IoMdArrowDropdown className="ml-2" />
            </div>
          </li>

          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <div className="flex justify-between items-center">
              <Link
                to="/community"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                Community
              </Link>
              <IoMdArrowDropdown className="ml-2" />
            </div>
          </li>

          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <Link
              to="/support"
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
            >
              Support
            </Link>
          </li>
          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <Link
              to="/aboutus"
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
            >
              About us
            </Link>
          </li>
          <li className="p-4 hover:text-red-100 rounded cursor-pointer">
            <Link
              to="/contact"
              onClick={() => {
                setIsOpen(false);
                scrollToTop();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Dropdown */}
      {isHovered && (
        <div
          className="hidden sm:block fixed bg-[rgba(0,0,0,0.8)] shadow-lg z-50 overflow-hidden"
          style={{
            top: "4rem",
            height: "80vh",
            width: "100vw",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center items-center h-full w-full">
            <div className="w-full max-w-screen-xl px-4">
              {hoverIndex === 1 && <LearnDropDown />}
              {hoverIndex === 2 && <ToolDropDown />}
              {hoverIndex === 3 && <CommunityDropDown />}
            </div>
          </div>
        </div>
      )}

      {searchClicked && (
        <div className="w-100  absolute mx-h-[80vh] bg-black top-13 flex flex-col">
          <div className="flex flex-col absolute top-3 left-50">
          {LearnDropDownItem.filter((item) =>
            search.toLowerCase() === ""
              ? item
              : item.topic.toLowerCase().includes(search.toLowerCase())
          ).map((item) => (
            <Link
              onClick={() => setSearchClicked(!searchClicked)}
              to={`/Learn/${item.topic}`}
              key={item.topic}
              className="text-white  bg-[rgba(0,0,0,0.8)] p-2 cursor-pointer hover:text-red-100 "
            >
              {item.topic}
            </Link>
          ))}
            </div>
        
        </div>
      )}
    </div>
  );
}

export default Navbar;