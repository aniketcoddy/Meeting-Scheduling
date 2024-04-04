import React from "react";
import logo from "../assets/logo.jpg";
import { LuClock4 } from "react-icons/lu";
import unicorn from "../assets/unicorn.jpg"
import shit from "../assets/shit.jpg"



const FiberySideBar = () => {
  
  return (
    <div className="flex flex-col sm:gap-4 ">
      <div className="flex flex-col my-5 lg:my-3 gap-3 items-center">
        <img src={logo} alt="Logo" className="w-10 animate-pulse h-10 sm:w-24 sm:h-24"/>
      </div>
      <div className="hidden sm:flex ring-[0.5px] ring-gray-200"></div>
      <div className="flex flex-col gap-4 lg:w-80">
        <div>
          <h1 className="text-3xl sm:text-2xl font-bold">Fibery Demo</h1>
        </div>
       
        <div className="flex gap-2 items-center ">
          {" "}
          <LuClock4 className="w-5 h-5 sm:w-4 sm:h-4  text-gray-500" />
          <p className="font-semibold text-base sm:text-[14px] text-gray-500">45 min</p>
        </div>
        <div className="flex">
            <p className="text-sm sm:text-sm sm:w-72 w-60 inline-block font-semibold">Book a meeting with our Fibery team. Talk to a real person about how to get your processes set up with us
           <img src={unicorn} className="w-7 h-7 inline-block"/>or not<img src={shit} className="w-7 h-7 inline-block"/></p>
        </div>
      </div>
    </div>
  );
};

export default FiberySideBar;
