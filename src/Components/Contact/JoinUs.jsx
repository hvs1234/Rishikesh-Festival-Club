/* eslint-disable no-unused-vars */
// import React from 'react'

import { FaNetworkWired } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineEventSeat } from "react-icons/md";
import ViewBtn from "../Btns/ViewBtn";

const JoinUs = () => {
  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover bg-[white] max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
          <h2 className="text-[3rem] max-md:text-[3rem] text-[#414141] font-normal uppercase">
            Join Us
          </h2>
          <div className="w-[30%] h-[1px] ml-auto mr-auto bg-[goldenrod] my-[1rem]"></div>
          <p className="text-[2.5rem] text-[#414141] font-normal">
            Become a part of RPC
          </p>
        </div>
        <div
          className="mt-[4rem] w-[100%] grid grid-cols-3 gap-[4rem] justify-center transition-all duration-[0.4s] ease-in-out
          max-sm:grid-cols-1"
        >
          <div
            className="flex flex-col gap-[1rem] justify-center rounded-md px-[2rem] py-[2rem] border-[1px] 
            border-[#d2d2d2] shadow-md"
          >
            <GrWorkshop size={50} className="text-[#414141]" />
            <p className="text-[2rem] text-[#212121]">
              <i className="fa-solid fa-circle-check text-[green] text-[2rem]"></i>
              &nbsp; Access to photowalks, workshops, and meetups.
            </p>
          </div>
          <div
            className="flex flex-col gap-[1rem] rounded-md justify-center px-[2rem] py-[2rem] border-[1px] 
            border-[#d2d2d2] shadow-md"
          >
            <MdOutlineEventSeat size={50} className="text-[#414141]" />
            <p className="text-[2rem] text-[#212121]">
              <i className="fa-solid fa-circle-check text-[green] text-[2rem]"></i>
              &nbsp; Opportunities to showcase work in exhibitions.
            </p>
          </div>
          <div
            className="flex flex-col gap-[1rem] rounded-md justify-center px-[2rem] py-[2rem] border-[1px] 
            border-[#d2d2d2] shadow-md"
          >
            <FaNetworkWired size={50} className="text-[#414141]" />
            <p className="text-[2rem] text-[#212121]">
              <i className="fa-solid fa-circle-check text-[green] text-[2rem]"></i>
              &nbsp; Networking with like-minded individuals and professionals.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[4rem]">
          <ViewBtn btnTitle={"Sign up Today"} />
        </div>
      </div>
    </>
  );
};

export default JoinUs;
