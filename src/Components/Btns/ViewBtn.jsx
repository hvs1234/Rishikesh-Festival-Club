/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

const ViewBtn = ({ btnTitle, btnType }) => {
  return (
    <>
      <button
        type={btnType}
        className="bg-[#444480] flex items-center justify-center text-center w-[auto] rounded-full px-[4rem] py-[1rem] 
        transition-all duration-[0.2s] text-[2rem] ease-linear hover:opacity-[0.8] text-[white]"
      >
        {btnTitle}
      </button>
    </>
  );
};

export default ViewBtn;
