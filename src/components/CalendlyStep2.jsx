import dayjs from "dayjs";
import  {formatDate} from "../HelperFunction";
import React, { useEffect, useState } from "react";
import { generateDate, months } from "../pages/CalenderLogic";
import cn from "../pages/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import FiberySideBar from "./FiberySideBar";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import "aos/dist/aos.css";
import Aos from "aos";

// this is the next page where you select time for the meeting

export default function CalendlyStep2({
  formData,
  setFormData,
  setCurrentStep,
}) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [select, setSelect] = useState(false);
  const [openStates, setOpenStates] = useState(Array(time.length).fill(false));
  const [selectedItem, setSelectedItem] = useState(null);
  const [next, setNext] = useState(false);
  //const [selectDate, setSelectDate] = useState(currentDate);

  const handleItemClick = (index) => {
    const updatedOpenStates = [...openStates];
    setSelectedItem(index);
    updatedOpenStates[index] = true;
    setOpenStates(updatedOpenStates);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //calender parent div
    <div
      className={`border-2 border-white border-solid ${
        next ? "mt-44" : "mt-32"
      } mb-5 bg-white rounded-lg sm:mt-0 shadow-2xl p-3 sm:p-0`}
    >
      <div className="flex justify-center flex-col bg-white  items-center ">
        <div className="sm:flex sm:p-3 sm:rounded-lg">
          {/* heading container */}
          <div className="sm:p-3">
            <FiberySideBar />
          </div>

          <div className="hidden sm:flex ring-[0.5px] ring-gray-200"></div>

          <div className="sm:p-3">
            <div>
              <h1 className="text-xl sm:text-lg sm:ml-4 font-bold my-6 sm:my-0 sm:mb-5 ">
                Select a Date & Time
              </h1>
            </div>

            {/* main calender div */}
            <div className="flex flex-col sm:flex-row">
              <div>
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
                                formData?.selectedDate
                                  ?.toDate()
                                  ?.toDateString() ===
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

                <div className="md:flex hidden flex-col mx-2 my-2 sm:mb-12 sm:ml-6 gap-2">
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

              {/* choose time full screen */}
              <div 
               data-aos="zoom-in"
               data-aos-duration="500"
              className="hidden gap-7 mt-3 sm:flex md:ml-8 sm:flex-col">
                <div className="flex items-center sm:-ml-4 justify-center">
                  <p className="text-base font-semibold">{formatDate(new Date(formData.selectedDate))}</p>
                </div>

                <div className="flex sm:flex-col overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0f1829] h-80 ml-2">
                  {time.map((data, index) => {
                    return (
                      <p
                        className={`border-2 mb-3 hover:bg-[#2259CA] hover:text-white rounded-md font-bold cursor-pointer border-solid p-1 px-12 mr-3 mx-1 ${
                          selectedItem === index
                            ? "bg-gray-700 text-white"
                            : "border-[#8db3ff] text-[#2259CA]"
                        }`}
                        key={index}
                        onClick={() => {
                          handleItemClick(index);
                          setFormData((prev) => ({
                            ...prev,
                            selectedTime: { data },
                          }));
                          setNext(true);
                        }}
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
                <div
                  className={`${
                    next ? "flex" : "hidden"
                  } justify-center mr-3 items-center gap-1`}
                >
                  <p className="bg-gray-700 p-2 -mt-5 rounded-[5px] px-5 text-sm text-white font-semibold ">
                    {formData?.selectedTime?.data}
                  </p>

                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-[#2259CA] p-2 -mt-5 rounded-[5px] px-5 text-sm text-white font-semibold hover:bg-[#87abf5] hover:text-black"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* choose the time section */}
              <div className="sm:hidden">
                <div className="flex w-60 m-2 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#6c7b96]">
                  {time.map((data, index) => {
                    return (
                      <p
                        className={`border-2 mb-3 hover:bg-[#2259CA] hover:text-white rounded-md font-bold cursor-pointer border-solid p-1 px-4 mx-1 ${
                          selectedItem === index
                            ? "bg-gray-700 text-white"
                            : "border-[#8db3ff] text-[#2259CA]"
                        }`}
                        key={index}
                        onClick={() => {
                          handleItemClick(index);
                          setFormData((prev) => ({
                            ...prev,
                            selectedTime: { data },
                          }));
                          setNext(true);
                        }}
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
                <div className={`${next ? "flex" : "hidden"} justify-end mr-3`}>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-[#2259CA] p-2 rounded-[5px] px-4 text-sm text-white font-semibold hover:bg-[#87abf5] hover:text-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* time zone container */}
            <div className="md:hidden flex flex-col mx-2 my-2 sm:mb-12 sm:ml-6 gap-2">
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
    </div>
  );
}

const time = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:30",
  "15:00",
  "15:30",
];
