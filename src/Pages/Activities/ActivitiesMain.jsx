/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useRef, useState } from "react";
import { ActivitiesMainData } from "../../APIs/ActivitiesAPI";

const ActivitiesMain = () => {
  const [activitiesmaindata] = useState(ActivitiesMainData);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover transition-all duration-[0.4s] ease-linear">
        <div className="flex flex-col items-center justify-center text-center w-[100%]">
          <h2 className="text-[3rem] text-[#212121] font-normal">What We Do</h2>
        </div>
        <div className="w-[50%] h-[1px] ml-auto mr-auto bg-[goldenrod] my-[1rem]"></div>
        <div
          ref={sectionRef}
          className="grid grid-cols-3 gap-[2rem] w-[100%] justify-center mt-[4rem] max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {activitiesmaindata.map((e, index) => {
            return (
              <div
                key={e.id}
                className={`flex flex-col justify-between gap-[0rem] transition-all duration-[0.8s] ease-in-out w-[100%] h-[100%] rounded-md border-[1px] border-[#d2d2d2] shadow-xl overflow-hidden group cursor-pointer ${
                  isVisible
                    ? `translate-y-0 opacity-100 delay-[${index * 600}ms]`
                    : "translate-y-[10rem] opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 300}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-center w-[auto] h-[100%] transition-all duration-[0.2s] ease-in-out overflow-hidden">
                  <img
                    src={e.img}
                    alt="img"
                    className="w-[100%] h-[100%] group-hover:scale-[1.2] transition-all duration-[0.2s] ease-in-out"
                  />
                </div>
                <div className="flex flex-col justify-end gap-[1rem] px-[2rem] py-[2rem]">
                  <h2 className="text-[2.5rem] text-[#212121] capitalize font-normal">
                    {e.title}
                  </h2>
                  <p className="text-[1.6rem] text-[#212121] font-normal">
                    {e.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ActivitiesMain;
