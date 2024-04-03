import Calender from "./Calender";

const CalendlyStep2 = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div>
      <Calender
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
      <p>We are on step 2</p>
    </div>
  )
}

export default CalendlyStep2
