import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../pages/CalenderLogic";
import cn from "../pages/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import FiberySideBar from "./FiberySideBar";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function Calender({ formData, setFormData, setCurrentStep }) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [select, setSelect] = useState(false);
  //const [selectDate, setSelectDate] = useState(currentDate);
  
  return (
    //calender parent div
    <div className="flex justify-center flex-col bg-white w-full mx-auto items-center ">
      <div className="sm:flex sm:p-3 sm:rounded-lg">
        {/* heading container */}
        <div className="sm:p-3">
          <FiberySideBar />
        </div>
        <div className="hidden sm:flex ring-[0.5px] ring-gray-200"></div>

        <div className="sm:p-3">
          <div>
            <h1 className="text-xl sm:text-lg sm:ml-4 font-bold my-6 sm:my-0 sm:mb-5 ">Select a Date & Time</h1>
          </div>

          {/* main calender div */}
          <div className="w-64 h-30 sm:w-72  p-3">
            {/* container for changing the month */}
            <div className="flex items-center justify-center lg:ml-10 ">
              <GrFormPrevious
                className="w-6 h-6 cursor-pointer hover:scale-105 text-gray-500 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <div className="w-36 flex justify-center">
                <h1 className="select-none lg:text-base font-semibold">
                  {months[today.month()]} {today.year()}
                </h1>
              </div>

              {/* <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1> */}
              <GrFormNext
                className={`w-6 h-6 cursor-pointer hover:scale-105 transition-all ${
                  select
                    ? "bg-[#d2f0f8] text-[#2259CA]"
                    : "bg-white text-gray-500"
                } rounded-full`}
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                  setSelect(true);
                }}
              />
            </div>

            {/* the day container */}
            <div className="grid grid-cols-7 lg:gap-4">
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className="text-xs text-center lg: h-14 w-10 lg:w-12  grid place-content-center text-black font-semibold select-none"
                  >
                    {day}
                  </h1>
                );
              })}
            </div>

            {/* the calender element container */}
            <div className=" grid grid-cols-7 lg:w-72 ">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2  text-center h-8 lg:h-12 grid place-content-center text-sm "
                    >
                      <h1
                        className={cn(
                          currentMonth ? "" : "text-gray-400",
                          today
                            ? "border-b-2 w-7 h-8 rounded-full border-[#2259CA]"
                            : "",
                          formData?.selectedDate?.toDate()?.toDateString() ===
                            date.toDate().toDateString()
                            ? "bg-[#d2f0f8] text-[#2259CA]"
                            : "text-[#b0afaf]",
                          "h-8 w-8 grid font-semibold place-content-center hover:bg-[#d2f0f8] hover:text-[#757474] rounded-full transition-all cursor-pointer select-none"
                        )}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            selectedDate: date,
                          }));
                          setCurrentStep(2);
                          //setSelectDate(date);
                        }}
                      >
                        {date.date()}
                      </h1>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* time zone container */}
          <div className="flex flex-col mx-2 my-2 sm:mb-12 sm:ml-6 gap-2">
            <h1 className="font-bold text-base sm:text-sm">Time zone</h1>
            <span className="flex items-center gap-3">
              <FaEarthAfrica />
              <h1 className="text-sm font-semibold sm:text-xs">
                UK,Ireland,Lisbon Time(16:54)
              </h1>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
