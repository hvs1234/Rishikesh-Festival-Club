/* eslint-disable no-unused-vars */
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import "./Nav.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const { toggleNavbar, isActive } = Handlers();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    toggleNavbar();
  };

  const handleMouseEnter = (id) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`header bg-[#43438b] flex justify-center gap-[2rem] w-[100%] h-[auto] top-0 left-0 
        items-center shadow-sm z-[9999] max-md:justify-between transition-all duration-[0.4s] ease-in-out ${
          isActive || isNavOpen ? "active" : ""
        }`}
      >
        <nav
          className={`navbar flex justify-center items-center py-[2rem] border-r-[1px] border-[white] pr-[4rem] max-[768px]:border-0 ${
            isNavOpen ? "active" : ""
          }`}
        >
          <ul className="flex justify-center items-center gap-[2rem] relative">
            {Handlers().navlinkdata.map((e) => (
              <li
                key={e.id}
                onMouseEnter={() => e.dropdown && handleMouseEnter(e.id)}
                onMouseLeave={() => e.dropdown && handleMouseLeave()}
                ref={dropdownRef}
                className="relative"
              >
                <span
                  className={e.class}
                  onClick={() =>
                    !e.dropdown && handleNavigation(e.to)
                  }
                  style={{ cursor: e.dropdown ? "default" : "pointer" }}
                >
                  {e.title}
                </span>
                {openDropdown === e.id && e.dropdown && (
                  <ul className="absolute top-full left-0 bg-[#6b6bb2] text-white shadow-lg rounded-md py-2 z-10">
                    {e.dropdown.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-[#43438b] cursor-pointer text-[1.4rem]"
                        onClick={() => {
                          handleNavigation(item.to);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end items-center px-[2rem] gap-[2rem] py-[2rem] relative text-[white] max-[768px]:w-[100%]">
          <div className="flex items-center justify-center gap-[2rem]">
            <a href="#" target="_blank">
              <FaFacebookF
                size={40}
                className="text-[white] px-[1rem] py-[1rem] rounded-full bg-[#6b6bb2] hover:opacity-[0.5]
              transition-all duration-[0.2s] ease-linear max-[768px]:size-[4rem]"
              />
            </a>
            <a href="#" target="_blank">
              <FaInstagram
                size={40}
                className="text-[white] px-[1rem] py-[1rem] rounded-full bg-[#6b6bb2] hover:opacity-[0.5]
              transition-all duration-[0.2s] ease-linear max-[768px]:size-[4rem]"
              />
            </a>
          </div>
          <HiMenuAlt1
            size={26}
            className="cursor-pointer nav-btn"
            onClick={toggleNav}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
