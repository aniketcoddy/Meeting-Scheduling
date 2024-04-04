import Calender from "./Calender";
import FiberySideBar from "./FiberySideBar";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const CalendlyStep1 = ({ formData, setFormData, setCurrentStep }) => {

  useEffect(() => {
    Aos.init();
  }, []);


  // this is the first step where you select date after you select the date it will redirect you to the next page for time selection

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="border-2 border-white border-solid bg-white rounded-lg w-full shadow-2xl p-2 px-3 sm:px-0 sm:p-0 "
    >
      <Calender
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default CalendlyStep1;
