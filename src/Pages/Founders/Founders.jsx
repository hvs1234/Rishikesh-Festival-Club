/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import { FoundersBannerData } from "../../APIs/TopBannerData";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import FoundersMain from "./FoundersMain";

const Founders = () => {
  const [foundersbannerdata] = useState(FoundersBannerData);

  return (
    <>
      <TopBannerCard topbannerdata={foundersbannerdata} />
      <FoundersMain />
    </>
  );
};

export default Founders;
