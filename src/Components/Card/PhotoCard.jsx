/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PhotoCard = ({ carddata }) => {
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
    <div
      ref={sectionRef}
      className={`grid grid-cols-3 w-[100%] justify-center gap-[4rem] py-[6rem] max-sm:grid-cols-1`}
    >
      {carddata.map((e, index) => {
        return (
          <Link
            key={e.id}
            to={e.to}
            className={`flex flex-col gap-[2rem] w-[100%] transition-all duration-[0.8s] ease-in-out cursor-pointer shadow-xl ${
               isVisible
                 ? `translate-y-0 opacity-100 delay-[${index * 400}ms]`
                 : "translate-y-[10rem] opacity-0"
             }`}
            style={{
              transitionDelay: isVisible ? `${index * 300}ms` : "0ms",
            }}
          >
            <div className="flex justify-center items-center w-[100%] h-[100%]">
              <img
                src={e.img}
                alt="img"
                className="w-[100%] h-[100%] hover:opacity-[0.5] transition-all duration-[0.3s] ease-in-out rounded-md"
              />
            </div>
            <div className="flex flex-col gap-[1.5rem] w-[100%] px-[2rem] pb-[2rem]">
              <h2 className="text-[2rem] font-normal text-[#414141] capitalize">
                {e.title}
              </h2>
              <div className="w-[20%] h-[1px] bg-[goldenrod]"></div>
              <p className={`text-[1.6rem] font-normal text-[#414141] ${e.paraClass}`}>
                {e.desc}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

PhotoCard.propTypes = {
  carddata: PropTypes.array.isRequired,
};

export default PhotoCard;