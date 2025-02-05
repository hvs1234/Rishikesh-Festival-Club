/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import { EventsBannerData } from "../../APIs/TopBannerData";
import UpComingEvent from "./UpComingEvent";
import HighlightsEvent from "./HighlightsEvent";
import JoinUs from "../../Components/Card/JoinUs";

const Events = () => {
  const [eventbannerdata] = useState(EventsBannerData);

  return (
    <>
      <TopBannerCard topbannerdata={eventbannerdata} />
      <UpComingEvent />
      <HighlightsEvent />
      <JoinUs />
    </>
  );
};

export default Events;
