/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import ContentCard from "../../Components/Card/ContentCard";
import { FoundersContentCardData } from "../../APIs/ContentCardAPI";

const FoundersMain = () => {
  const [founderscontentcarddata] = useState(FoundersContentCardData);

  return (
    <>
      <div className="px-[20rem] py-[6rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center">
          <h2 className="text-[3rem] max-md:text-[3rem] text-[#414141] font-normal uppercase">
            The Visionaries Who Frame Our Story
          </h2>
        </div>
        <div className="w-[50%] h-[1px] ml-auto mr-auto bg-[goldenrod] my-[1rem]"></div>
        <div className="mt-[2rem]">
          <ContentCard contentcarddata={founderscontentcarddata} />
        </div>
      </div>
    </>
  );
};

export default FoundersMain;
