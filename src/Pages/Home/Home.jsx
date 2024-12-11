// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero";
import HomeMain from "./HomeMain";
import HomePartners from "./HomePartners";
import HomePhotos from "./HomePhotos";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeMain />
      <HomePhotos />
      <HomePartners />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
