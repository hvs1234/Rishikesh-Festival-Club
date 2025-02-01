/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Header/Nav";
import { AboutBannerData } from "../../APIs/TopBannerData";
import AboutPhotos from "./AboutPhotos";
import AboutRPC from "./AboutRPC";
import JoinUs from "../../Components/Contact/JoinUs";

const About = () => {
  const [aboutbannerdata] = useState(AboutBannerData);

  return (
    <>
      <TopBannerCard topbannerdata={aboutbannerdata} />
      <AboutRPC />
      <AboutPhotos />
      <JoinUs />
    </>
  );
};

export default About;
