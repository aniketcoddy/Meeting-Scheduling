import React from "react";
import Calender from "../pages/Calender";

const CalendlyStep1 = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div>
    
      <Calender
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default CalendlyStep1;
