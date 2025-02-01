/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useRef, useState } from "react";
import NavLink from "../../APIs/NavAPI";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [navlink] = useState(NavLink);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`header fixed top-0 left-0 z-[999] px-[2rem] py-[2rem] bg-[#4d4d8a] flex justify-center items-center 
        gap-[4rem] w-[100%] max-md:justify-end`}
      >
        <nav className="navbar w-[auto] hidden md:flex">
          <ul className="flex items-center gap-[2rem]">
            {navlink.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleNavigation}
                  className={`navlink ${e.class}`}
                >
                  {e.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-[2rem]">
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-facebook text-[white] text-[2rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-linkedin text-[white] text-[2rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-instagram text-[white] text-[2rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <div className="md:hidden">
            <HiMenuAlt1
              size={20}
              className="text-[wheat] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div
        ref={sidebarRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-[auto] h-screen bg-[#414175] transition-transform duration-[0.3s] ease-in-out 
        md:hidden z-[999]`}
      >
        <div className="flex justify-end p-[1rem]">
          <HiMenuAlt1
            size={20}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col justify-center h-[100%] px-[6rem] py-[6rem] gap-[4rem] text-white">
          {navlink.map((e) => {
            return (
              <Link
                key={e.id}
                to={e.to}
                onClick={handleNavigation}
                className={`navlink ${e.class}`}
              >
                {e.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
