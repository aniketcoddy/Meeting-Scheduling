import Calender from "./Calender";
import FiberySideBar from "./FiberySideBar";

const CalendlyStep1 = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div className="border-2 border-white border-solid bg-white rounded-lg w-full shadow-2xl p-2 px-3 sm:px-0 sm:p-0 ">
      <Calender
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default CalendlyStep1;
