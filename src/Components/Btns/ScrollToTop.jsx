/* eslint-disable no-unused-vars */
// import React from 'react'
import { BsArrow90DegUp } from "react-icons/bs";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={handleScrollToTop}
        className="fixed bottom-[3rem] z-[99] right-[2rem] rounded-full px-[1rem] py-[1rem] bg-[#51369b] cursor-pointer"
      >
        <BsArrow90DegUp size={20} className="text-[white] font-bold" />
      </div>
    </>
  );
};

export default ScrollToTop;
