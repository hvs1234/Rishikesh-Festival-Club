/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useRef, useState } from "react";

const ContentCard = ({ contentcarddata }) => {
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
      <div className="flex flex-col w-[100%]" ref={sectionRef}>
        {contentcarddata.map((e, index) => {
          return (
            <div
              key={e.id}
              className={`grid grid-cols-2 gap-[4rem] transition-all duration-[0.8s] ease-in-out w-[100%] justify-center my-[6rem] ${
                isVisible
                  ? `translate-y-0 opacity-100 delay-[${index * 1000}ms]`
                  : "translate-y-[10rem] opacity-0"
              } max-lg:grid-cols-1 max-lg:my-[4rem]`}
              style={{
                transitionDelay: isVisible ? `${index * 800}ms` : "0ms",
              }}
            >
              <div
                className={`flex flex-col gap-[1rem] w-[100%] justify-center ${e.contentClass}`}
              >
                <h2 className="text-[2.5rem] text-[#212121] font-medium">
                  {e.title}
                </h2>
                <p className="text-[2rem] text-[#414141] font-normal">
                  {e.desc}
                </p>
              </div>
              <div
                className={`flex items-center justify-center w-[auto] h-[auto] px-[1rem] py-[1rem] rounded-md 
              border-[1px] border-[grey] ${e.imgClass}`}
              >
                <img
                  src={e.img}
                  alt="img"
                  className="w-[100%] h-[100%] rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentCard;
