// import React from 'react'

const Hero = () => {

  return (
    <>
      <div className="section-main w-[100%] relative object-cover h-[70vh] pt-[9rem] pb-[4rem] transition-all duration-[0.2s] ease-linear max-xl:px-[5rem] max-md:px-[2rem] max-md:h-[70vh] max-md:pb-[6rem]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Media/hero-video2.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#ffffff] opacity-[0]"></div>
        <div className="relative flex flex-col gap-[2rem] h-[100%] justify-end items-end text-end pr-[4rem] object-cover rounded-md max-xl:pr-[0rem] max-md:justify-end max-md:items-center max-md:text-center">
          <div className="relative py-[1rem] px-[2rem] max-md:ml-[0rem]">
            <div className="absolute top-0 left-0 w-[100%] h-[100%] rounded-md bg-[black] opacity-[0.2]"></div>
            <h1 className="relative text-[5rem] max-xl:text-[4rem] max-md:text-[3.5rem] text-[white] font-semibold capitalize">
              Welcome to Rishikesh Photography Club (RPC)
            </h1>
          </div>
          <div className="relative py-[1rem] px-[2rem] ml-[50rem] max-xl:ml-[10rem] max-lg:ml-[5rem] max-md:ml-[0rem] max-md:px-[0.5rem]">
            <div className="absolute top-0 left-0 w-[100%] h-[100%] rounded-md bg-[black] opacity-[0.2]"></div>
            <p className="relative text-[2rem] text-[white] font-normal capitalize">
              RPC, established in 2015 serves as a nurturing platform for
              budding photographers to learn, showcase their talent, and connect
              with like-minded individuals. Since its inception, RPC has become
              a cornerstone for photography enthusiasts, fostering creativity
              and skill development through dynamic activities and events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
