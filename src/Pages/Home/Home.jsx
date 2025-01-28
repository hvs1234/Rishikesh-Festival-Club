// import React from 'react'

import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero";
import HomeMain from "./HomeMain";
import HomePartners from "./HomePartners";
import HomePhotos from "./HomePhotos";
import { HomePhotoCardData } from "../../APIs/PhotoCardAPI";

const Home = () => {
  const [homephotocarddata1] = useState(HomePhotoCardData);
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
