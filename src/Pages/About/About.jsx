/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Header/Nav";
import { AboutBannerData } from "../../APIs/TopBannerData";
import AboutPhotos from "./AboutPhotos";
import AboutRPC from "./AboutRPC";

const About = () => {
  const [aboutbannerdata] = useState(AboutBannerData);

  return (
    <>
      <Nav />
      <TopBannerCard topbannerdata={aboutbannerdata} />
      <AboutRPC />
      <AboutPhotos />

      <Footer />
    </>
  );
};

export default About;
