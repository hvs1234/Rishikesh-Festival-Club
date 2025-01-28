/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import Handlers from "../../Services/Handlers";

const TopBannerCard = ({ topbannerdata }) => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      {topbannerdata.map((e) => {
        return (
          <div
            key={e.id}
            className={`section-main relative object-cover w-[100%] h-[100%] bg-[url('/Media/banner1.jpg')] bg-no-repeat bg-center bg-cover 
            bg-fixed px-[10rem] py-[12rem] max-xl:px-[5rem] max-md:px-[2rem]`}
          >
            <div
              className={`absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.7]`}
            ></div>
            <div
              className={`relative w-[100%] h-[100%] flex flex-col justify-center items-center text-center gap-[1rem]`}
            >
              <h1
                className={`text-[5rem] max-xl:text-[4rem] text-[white] font-semibold`}
              >
                {e.title}
              </h1>
              <p
                className={`text-[2rem] text-[white] font-normal ml-auto mr-auto w-[50%] max-xl:w-[100%]`}
              >
                {e.desc}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopBannerCard;
