/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

const FormBtn = ({ btnTitle, btnType }) => {
    return (
      <>
        <button
          type={btnType}
          className="bg-[darkgreen] flex items-center justify-center text-center w-[100%] rounded-xl px-[6rem] py-[1rem] 
          transition-all duration-[0.2s] text-[2rem] ease-linear hover:opacity-[0.8] text-[white]"
        >
          {btnTitle}
        </button>
      </>
    );
  };
  
  export default FormBtn;
  