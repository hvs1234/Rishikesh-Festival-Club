/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import PhotoCard from "../../Components/Card/PhotoCard";
import { HomePhotoCardData } from "../../APIs/PhotoCardAPI";

const AboutPhotos = () => {
  const [homephotocarddata1] = useState(HomePhotoCardData);

  return (
    <>
      <div className="pt-[6rem] px-[20rem] w-[100%] relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        {/* <div className="absolute"></div> */}
        <div className="relative w-[100%]">
          <div className="flex flex-col items-center justify-center text-center gap-[1rem] w-[100%]">
            <h2 className="text-[3rem] max-md:text-[3rem] text-[#414141] font-normal uppercase">
              Various photography workshops in progress.
            </h2>
          </div>
          <div className="w-[50%] h-[1px] ml-auto mr-auto bg-[goldenrod] my-[1rem]"></div>
          <PhotoCard carddata={homephotocarddata1} />
        </div>
      </div>
    </>
  );
};

export default AboutPhotos;
