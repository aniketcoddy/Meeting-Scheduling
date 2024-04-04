import React, { useEffect } from "react";
import logo from "../assets/logo.jpg";
import { MdOutlinePerson } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import check from "../assets/check.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import user from "../assets/user4.jpeg";
import "aos/dist/aos.css";
import Aos from "aos";

const CalendlyStep4 = ({}) => {
  // useEffect(() => {
  //   Aos.init();
  // }, []);

  return (
    <div
      // data-aos="zoom-in"
      // data-aos-duration="500"
      className={`border-2 border-white border-solid bg-white rounded-lg sm:w-[700px] shadow-2xl p-3 sm:p-0`}
    >
      <div className="flex justify-center flex-col bg-white  items-center ">
        <div className="sm:flex sm:p-3 sm:rounded-lg">
          {/* heading container */}
          <div className="sm:p-3">
            <div className="flex flex-col sm:gap-4 bg-white">
              <div className="flex flex-col  gap-3">
                {/* user image */}
                <div className="flex flex-col gap-3 items-center">
                  <img
                    src={user}
                    alt="Logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <img src={check} alt="check" className="w-5 h-5" />
                  <h1 className="text-lg font-bold">You are scheduled</h1>
                </div>
              </div>

              <div className="flex items-center pl-7 sm:pl-5 justify-center">
                <h1 className=" text-[9px] font-semibold sm:text-sm flex w-[300px] sm:w-full text-center">
                  A calender invitation has been sent to
                  vishnoianiket903@gmail.com
                </h1>
              </div>

              <div className="flex flex-col gap-4  ring-1 ring-gray-300 p-3 rounded-md">
                <div>
                  <h1 className="text-base sm:text-2xl font-bold">
                    Fibery Demo
                  </h1>
                </div>

                {/*  the time selected display here */}
                <div className="flex gap-2 items-center ">
                  {" "}
                  <MdOutlinePerson className="w-5 h-5 sm:w-4 sm:h-4  text-gray-500" />
                  <p className="font-semibold text-sm sm:text-[14px] text-gray-500">
                    Polina Zenevich
                  </p>
                </div>

                <div className="flex items-center gap-1 -ml-1">
                  <CiCalendarDate className="w-6 h-6 text-gray-500" />
                  <div>
                    <span className="flex text-gray-500 w-72 text-sm font-semibold">
                      12:00 - 12:45, Thursday, November 30,2023
                    </span>
                  </div>
                </div>

                {/* the time zone conatiner */}
                <div className="flex flex-col  gap-2">
                  <span className="flex items-center gap-3">
                    <FaEarthAfrica className="text-gray-500" />
                    <h1 className="text-sm font-semibold sm:text-xs text-gray-500">
                      UK,Ireland,Lisbon Time
                    </h1>
                  </span>
                </div>

                <div className="flex flex-col  gap-2">
                  <span className="flex items-center gap-3">
                    <FaVideo className="text-gray-500" />
                    <h1 className="text-sm font-semibold sm:text-xs text-gray-500">
                      Web conferencing details to follow
                    </h1>
                  </span>
                </div>
              </div>

              <div className="flex ring-[0.5px] ring-gray-300 my-6"></div>

              {/* footer of the page */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xs font-bold">
                  Schedule your own meetings with Calendly for free.
                </h1>
                <h1 className="text-xs">
                  Eliminate the back-and-forth emails for finding time.
                </h1>
                <div className="flex gap-4">
                  <div className="hidden sm:flex items-center gap-2 ring-1 ring-black w-fit p-1 px-7 rounded-2xl">
                    <img src={google} className="w-5 h-5" />
                    <p>Sign up with Google</p>
                  </div>
                  <div className="flex sm:hidden items-center gap-2 ring-1 ring-black w-fit p-1 px-10 rounded-2xl">
                    <img src={google} className="w-5 h-5" />
                    <p>Google</p>
                  </div>
                  <div className=" hidden sm:flex items-center gap-2 ring-1 ring-black w-fit p-1 px-5 rounded-2xl">
                    <img src={microsoft} className="w-5 h-5" />
                    <p>Sign up with Microsoft</p>
                  </div>
                  <div className="sm:hidden flex items-center gap-2 ring-1 ring-black w-fit p-1 px-8 rounded-2xl">
                    <img src={microsoft} className="w-5 h-5" />
                    <p>Microsoft</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-[11px] text-[#2259CA]">
                    Sign up with work email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyStep4;
