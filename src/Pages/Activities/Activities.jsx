/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import Nav from "../../Components/Header/Nav";
import { ActivitiesBannerData } from "../../APIs/TopBannerData";
import Footer from "../../Components/Footer/Footer";
import ActivitiesMain from "./ActivitiesMain";

const Activities = () => {
  const [activitiesbannerdata] = useState(ActivitiesBannerData);

  return (
    <>
      <Nav />
      <TopBannerCard topbannerdata={activitiesbannerdata} />
      <ActivitiesMain />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Activities;
