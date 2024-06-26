import { useState } from "react";
import CalendlyStep1 from "../components/CalendlyStep1";
import CalendlyStep2 from "../components/CalendlyStep2";
import CalendlyStep3 from "../components/CalendlyStep3";
import CalendlyStep4 from "../components/CalendlyStep4";

const Calendly = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedDate: undefined,
    selectedTime: undefined,
    detailsForm: {
      name: "",
      email: "",
    },
  });

//   setFormData((prev) => ({ ...prev, selectedDate: "" }));
//   setFormData((prev) => ({
//     ...prev,
//     detailsForm: { ...prev.detailsForm, name: "" },
//   }));

console.log('formData',formData )

  return (
    <div>
      {currentStep === 1 && (
        <CalendlyStep1
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 2 && (
        <CalendlyStep2
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 3 && (
        <CalendlyStep3
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 4 && (
        <CalendlyStep4
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Calendly;
