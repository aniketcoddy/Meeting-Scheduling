import React from "react";
import logo from "../assets/logo.jpg";
import { LuClock4 } from "react-icons/lu";
import unicorn from "../assets/unicorn.jpg";
import  {formatDate} from "../HelperFunction";
import shit from "../assets/shit.jpg";
import { FaEarthAfrica } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const FiberySideBar2 = ({ formData, setFormData, setCurrentStep }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const selectedTime = new Date(`2000-01-01T${formData.selectedTime.data}:00`);
  selectedTime.setMinutes(selectedTime.getMinutes() + 45);
  const result = `${selectedTime.getHours().toString().padStart(2, '0')}:${selectedTime.getMinutes().toString().padStart(2, '0')}`;


  return (
    // parent conatiner
    <div className="flex flex-col sm:gap-4 bg-white">
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="flex flex-col my-5 lg:my-3 gap-3 items-center"
      >
        <img src={logo} alt="Logo" className="w-10 h-10 animate-pulse sm:w-24 sm:h-24" />
      </div>
      <div className="hidden sm:flex ring-[0.5px] ring-gray-200"></div>
      <div className="flex flex-col gap-4 lg:w-80">
        <div>
          <h1 className="text-3xl sm:text-2xl font-bold">Fibery Demo</h1>
        </div>

        {/*  the time selected display here */}
        <div className="flex gap-2 items-center ">
          {" "}
          <LuClock4 className="w-5 h-5 sm:w-4 sm:h-4  text-gray-500" />
          <p className="font-semibold text-base sm:text-[14px] text-gray-500">
            45 min
          </p>
        </div>

        <div className="flex items-center gap-1 -ml-1">
          <CiCalendarDate className="w-6 h-6 text-gray-500" />
          <div>
            <span className="text-gray-500 text-[14px] font-semibold">
              {formData.selectedTime.data} - {result}, {formatDate(new Date(formData.selectedDate))}
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
        <div className="flex">
          <p className="text-sm sm:text-xs sm:w-64 w-60 font-semibold inline-block text-black">
            Book a meeting with our Fibery team. Talk to a real person about how
            to get your processes set up with us
            <img src={unicorn} className="w-7 h-7 inline-block" />
            or not
            <img src={shit} className="w-7 h-7 inline-block" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiberySideBar2;
