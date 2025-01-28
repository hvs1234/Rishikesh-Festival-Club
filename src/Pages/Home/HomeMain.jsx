/* eslint-disable no-unused-vars */
// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import img from "/Media/Home/2.jpeg";

const HomeMain = () => {
  const { handleOnClick, homeposterdata } = Handlers();

  return (
    <>
      <div
        className="py-[6rem] px-[20rem] max-xl:px-[5rem] h-[auto] max-md:px-[2rem] w-[100%] relative object-cover 
        bg-[url('/Media/Home/1.jpg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] opacity-[0.8] bg-[goldenrod]"></div>
        <div className="relative flex flex-col justify-center gap-[2rem] w-[100%] items-center h-[100%] max-md:flex-col max-md:gap-[6rem]">
          <div
            className="relative flex flex-col gap-[1rem] items-center justify-center text-center w-[100%] 
            max-md:px-[2rem]"
          >
            <h2 className="text-[3rem] max-[400px]:text-[2.5rem] text-[black] font-normal">
              Quick Stats&nbsp; <i className="fa-solid fa-bars-progress"></i>
            </h2>
            <div className="flex gap-[6rem] items-center w-[100%] justify-center mt-[2rem]">
              <div className="flex flex-col gap-[1rem] items-center justify-start text-center">
                <p className="text-[2rem] text-[black] font-semibold">
                  Founded
                </p>
                <p className="text-[2rem] text-[#212121] font-normal">
                  29th November 2015
                </p>
              </div>
              <div className="flex flex-col gap-[1rem] items-center justify-start text-center">
                <p className="text-[2rem] text-[black] font-semibold">
                  Photowalks Conducted
                </p>
                <p className="text-[2rem] text-[#212121] font-normal">81</p>
              </div>
              <div className="flex flex-col gap-[1rem] items-center justify-start text-center">
                <p className="text-[2rem] text-[black] font-semibold">
                  Years of Operation
                </p>
                <p className="text-[2rem] text-[#212121] font-normal">9+</p>
              </div>
              <div className="flex flex-col gap-[1rem] items-center justify-start text-center">
                <p className="text-[2rem] text-[black] font-semibold">
                  Workshops and Exhibitions Held
                </p>
                <p className="text-[2rem] text-[#212121] font-normal">10</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[100%] mt-[1rem]">
            <a
              href="tel:"
              className="rounded-full px-[2rem] py-[1rem] bg-[black] text-[white] text-[1.6rem] font-normal transition-all duration-[0.2s] ease-linear 
              hover:opacity-[0.8]"
            >
              Call: +91-01010101
            </a>
          </div>
        </div>
      </div>
      <div className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[1]"></div>
        <div className="relative w-[100%] left-0 h-[100%] flex justify-center gap-[2rem] items-center text-center overflow-x-auto no-scrollbar">
          {homeposterdata.map((e) => {
            return (
              <Link
                key={e.id}
                to={e.to}
                onClick={handleOnClick(e.to)}
                className="flex flex-col gap-[1rem] items-center justify-center w-[100%] h-[100%] transition-all duration-[0.4s] ease-linear hover:scale-[1.05]"
              >
                <div className="flex items-center justify-center w-[100%] h-[100%]">
                  <img
                    src={e.img}
                    alt="img"
                    className="w-[100%] h-[100%] rounded-md"
                  />
                </div>
                <p className="text-[1.6rem] text-[goldenrod] uppercase font-normal w-[100%]">
                  {e.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeMain;
