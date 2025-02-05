/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useEffect, useRef, useState } from "react";
import FormBtn from "../Btns/FormBtn";

const ContactForm = ({ contactformdata }) => {
  const [occupations, setOccupations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [filteredOccupations, setFilteredOccupations] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchOccupations = async () => {
      try {
        const response = await fetch(
          "https://data.usajobs.gov/api/codelist/occupationalseries"
        );
        const data = await response.json();
        let occupationList = data.CodeList[0].ValidValue;
        occupationList = occupationList.sort((a, b) =>
          a.Value.localeCompare(b.Value)
        );
        setOccupations(occupationList);
        setFilteredOccupations(occupationList);
      } catch (error) {
        console.error("Error fetching occupations:", error);
      }
    };

    fetchOccupations();
  }, []);

  useEffect(() => {
    setFilteredOccupations(
      occupations.filter((occupation) =>
        occupation.Value.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, occupations]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {contactformdata.map((e) => {
        return (
          <form
            key={e.id}
            action=""
            className={`w-[100%] relative flex flex-col gap-[2rem]`}
          >
            <div className="flex flex-col mr-auto w-[100%] gap-[0.5rem]">
              <h2 className={`text-[3rem] text-[#292730] font-normal`}>
                Let`s Connect
              </h2>
              <div className="w-[100%] h-[1px] bg-[#d2d2d2]"></div>
            </div>
            <h2 className={`text-[2.5rem] text-[#212121] font-normal`}>
              Personal Details&nbsp;{" "}
              <i className="fa-solid fa-user text-[grey]"></i>
            </h2>
            <div
              className={`grid grid-cols-2 gap-[2rem] w-[100%] justify-center max-lg:grid-cols-1`}
            >
              <div className={`flex flex-col gap-[1rem] w-[100%]`}>
                <label
                  htmlFor={`first_name`}
                  className={`text-[2rem] text-[#212121] font-normal`}
                >
                  First Name <span className="text-[red] text-[2rem]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter Your First Name"
                  name="First Name"
                  className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                  outline-none bg-transparent`}
                />
              </div>
              <div className={`flex flex-col gap-[1rem] w-[100%]`}>
                <label
                  htmlFor={`last_name`}
                  className={`text-[2rem] text-[#212121] font-normal`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="Last Name"
                  className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                  outline-none bg-transparent`}
                />
              </div>
            </div>
            <div className="flex w-[100%] flex-col gap-[1rem]">
              <label
                htmlFor={`email`}
                className={`text-[2rem] text-[#212121] font-normal`}
              >
                Email Address <span className="text-[red] text-[2rem]">*</span>
              </label>
              <input
                required
                type="email"
                placeholder="Enter Your Valid Email Address"
                name="Email Address"
                className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                outline-none`}
              />
            </div>
            <div className="flex w-[100%] flex-col gap-[1rem]">
              <label
                htmlFor={`phone`}
                className={`text-[2rem] text-[#212121] font-normal`}
              >
                Phone Number <span className="text-[red] text-[2rem]">*</span>
              </label>
              <input
                required
                type="number"
                placeholder="Enter Your Valid Phone Number"
                name="Phone Number"
                className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                outline-none`}
              />
            </div>
            <div
              className={`grid grid-cols-2 gap-[2rem] w-[100%] justify-center max-lg:grid-cols-1`}
            >
              <div className={`flex flex-col gap-[1rem] w-[100%]`}>
                <label
                  htmlFor={`gender`}
                  className={`text-[2rem] text-[#212121] font-normal`}
                >
                  Gender <span className="text-[red] text-[2rem]">*</span>
                </label>
                <select
                  required
                  name="Gender"
                  className={`text-[2rem] text-[#414141] px-[1rem] py-[0.7rem] rounded-xl border-[1px] border-[grey] 
                  outline-none bg-transparent cursor-pointer`}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={`flex flex-col gap-[1rem] w-[100%]`}>
                <label
                  htmlFor={`date_of_birth`}
                  className={`text-[2rem] text-[#212121] font-normal`}
                >
                  Date Of Birth{" "}
                  <span className="text-[red] text-[2rem]">*</span>
                </label>
                <input
                  required
                  type="date"
                  name="Date Of Birth"
                  className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                  outline-none cursor-pointer`}
                />
              </div>
            </div>
            <div
              ref={dropdownRef}
              className="flex w-[100%] flex-col gap-[1rem] relative"
            >
              <label
                htmlFor="occupation"
                className="text-[2rem] text-[#212121] font-normal"
              >
                Occupation (optional)
              </label>
              <div
                className="text-[2rem] text-[#414141] px-[1rem] py-[0.7rem] rounded-xl border-[1px] border-[grey] outline-none bg-transparent 
                cursor-pointer w-full flex items-center gap-[0.5rem]"
              >
                <i
                  className={`fa-solid fa-search text-[1.6rem] text-[grey]`}
                ></i>
                <input
                  type="text"
                  name="Occupation"
                  className="w-[100%] outline-none border-none"
                  value={selectedOccupation || searchTerm}
                  placeholder="Select Occupation"
                  onFocus={() => setDropdownOpen(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedOccupation("");
                  }}
                />
              </div>
              {dropdownOpen && filteredOccupations.length > 0 && (
                <ul className="absolute z-[100] top-[9rem] left-0 w-full max-h-[400px] no-scrollbar overflow-y-auto bg-white border-[1px] border-grey rounded-xl shadow-lg">
                  {filteredOccupations.map((occupation) => (
                    <li
                      key={occupation.Code}
                      className="px-[1rem] py-[0.7rem] text-[2rem] text-[#414141] cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        setSelectedOccupation(occupation.Value);
                        setSearchTerm("");
                        setDropdownOpen(false);
                      }}
                    >
                      {occupation.Value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <h2
              className={`text-[2.5rem] text-[#212121] font-normal mt-[2rem]`}
            >
              Additional Details&nbsp;{" "}
              <i className="fa-solid fa-circle-info text-[grey]"></i>
            </h2>
            <div className="flex w-[100%] flex-col gap-[1rem]">
              <label
                htmlFor={`house_no`}
                className={`text-[2rem] text-[#212121] font-normal`}
              >
                House/Flat No. (optional)
              </label>
              <input
                type="text"
                placeholder="Enter Your House/Flat No."
                name="House/Flat No."
                className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] rounded-xl border-[1px] border-[grey] 
                outline-none`}
              />
            </div>
            <div className="flex w-[100%] flex-col gap-[1rem]">
              <label
                htmlFor={`address`}
                className={`text-[2rem] text-[#212121] font-normal`}
              >
                Current Address{" "}
                <span className="text-[red] text-[2rem]">*</span>
              </label>
              <textarea
                cols={30}
                rows={5}
                required
                type="text"
                placeholder="Enter Your Valid Address"
                name="Current Address"
                className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] resize-none rounded-xl border-[1px] border-[grey] 
                outline-none`}
              />
            </div>
            <div className="flex w-[100%] flex-col gap-[1rem]">
              <label
                htmlFor={`message`}
                className={`text-[2rem] text-[#212121] font-normal`}
              >
                Message (optional)
              </label>
              <textarea
                cols={30}
                rows={5}
                type="text"
                placeholder="Enter Your Message"
                name="Message"
                className={`text-[2rem] text-[#212121] px-[1rem] py-[0.5rem] resize-none rounded-xl border-[1px] border-[grey] 
                outline-none`}
              />
            </div>
            <div className="flex w-[auto] gap-[1rem] mt-[2rem] mr-auto max-sm:w-[100%]">
              <FormBtn btnTitle={"Submit"} btnType={"submit"} />
            </div>
          </form>
        );
      })}
    </>
  );
};

export default ContactForm;
