// import React from 'react'

import { useState } from "react";
import { HomePartnersData } from "../../APIs/HomeAPI";

const HomePartners = () => {
  const [homepartnersdata] = useState(HomePartnersData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover">
        <div className="relative w-[100%]">
          <div className="flex flex-col justify-center items-center text-center gap-[1rem] w-[100%]">
            <h2 className="text-[3rem] font-normal text-[#414141] capitalize">
              International Partners & Embassies
            </h2>
            <div className="w-[50%] h-[1px] bg-[goldenrod]"></div>
          </div>
          <div
            className="relative flex flex-grow gap-[1rem] w-[100%] ml-auto mr-auto overflow-x-auto items-center justify-center 
            no-scrollbar mt-[4rem] max-[500px]:grid max-[500px]:grid-cols-4 max-[500px]:gap-[4rem]"
          >
            {homepartnersdata.map((e) => {
              return (
                <div
                  className="flex justify-center items-center w-[100%] h-[100%] border-[1px] border-[#ededed] rounded-md"
                  key={e.id}
                >
                  <img src={e.logo} alt="img" className="w-[100%] h-[100%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePartners;
