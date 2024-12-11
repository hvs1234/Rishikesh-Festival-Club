/* eslint-disable no-unused-vars */
// import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import "./Nav.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Nav = () => {
  const navigate = useNavigate();
  const { handleOnClick, navlinkdata, toggleNavbar, isActive } = Handlers();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    toggleNavbar();
  };

  return (
    <>
      <header
        className={`header bg-[#43438b] flex justify-center gap-[2rem] w-[100%]] h-[auto] top-0 left-0 
        items-center shadow-sm z-[9999] max-md:justify-between transition-all duration-[0.4s] ease-in-out ${
          isActive ? "active" : ""
        }`}
      >
        <nav className="navbar flex justify-center items-center py-[2rem] border-r-[1px] border-[white] pr-[4rem] max-[768px]:border-0">
          <ul className="flex justify-center items-center gap-[2rem] relative">
            {navlinkdata.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={() => handleNavigation(e.to)}
                  className={e.class}
                >
                  {e.title}
                </Link>
              );
            })}
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
            onClick={toggleNavbar}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
