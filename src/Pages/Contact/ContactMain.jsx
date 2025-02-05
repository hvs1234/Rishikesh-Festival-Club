/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useState } from "react";
import ContactForm from "../../Components/Form/ContactForm";
import contact_img from "/Media/Contact/3.jpg";
import mobile_contact_img from "/Media/Contact/4.jpg";
import { ContactUsFormData } from "../../APIs/FormAPI";
const ContactMain = () => {
  const [contactusformdata] = useState(ContactUsFormData);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="grid grid-cols-2 w-[100%] relative justify-center max-sm:grid-cols-1">
          <div className="flex items-center justify-center w-[auto] h-[auto] object-cover relative">
            <img
              src={isSmallScreen ? mobile_contact_img : contact_img}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div
            className={`flex gap-[1rem] w-[100%] justify-center px-[5rem] py-[5rem] max-md:px-[2rem] max-md:py-[2rem] relative`}
          >
            <ContactForm contactformdata={contactusformdata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
