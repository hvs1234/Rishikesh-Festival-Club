/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import { AboutRPCObjectivesData } from "../../APIs/AboutAPIs";
import about_rpc_img from "/Media/About/2.jpg";

const AboutRPC = () => {
  const [aboutrpcobjectivesdata] = useState(AboutRPCObjectivesData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] h-[100%] relative object-cover bg-[#f2f2f2] transition-all duration-[0.4s] ease-linear">
        <div className="grid grid-cols-2 gap-[4rem] w-[100%] justify-center max-lg:grid-cols-1">
          <div className="flex flex-col justify-center gap-[1rem] w-[100%]">
            <h2 className="text-[4rem] max-md:text-[3rem] text-[#212121] font-normal uppercase">
              About RPC
            </h2>
            <h3 className="text-[2.5rem] text-[#414141]">Our Objectives</h3>
            <div className="flex flex-col gap-[2rem] w-[100%] mt-[2rem]">
              {aboutrpcobjectivesdata.map((e) => {
                return (
                  <p
                    key={e.id}
                    className="text-[2rem] text-[#212121] font-normal"
                  >
                    <i className="fa-solid fa-circle-check text-[green]"></i>
                    &nbsp; {e.desc}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center w-[auto] h-[100%] rounded-md shadow-md">
            <img
              src={about_rpc_img}
              alt="img"
              className="w-[100%] rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRPC;
