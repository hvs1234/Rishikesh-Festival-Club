/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import TopBannerCard from "../../Components/Card/TopBannerCard";
import { ContactBannerData } from "../../APIs/TopBannerData";
import ContactMain from "./ContactMain";

const Contact = () => {
  const [contactbannerdata] = useState(ContactBannerData);

  return (
    <>
      <ContactMain />
    </>
  );
};

export default Contact;
