
import FiberySideBar2 from "./FiberySideBar2";
import FormDetails from "./FormDetails";

const CalendlyStep3 = ({
  formData,
  setFormData,
  setCurrentStep,
}) => {
  return (
    <div
    className={`border-2 border-white border-solid mb-5 mt-[700px] sm:mt-0 bg-white rounded-lg shadow-2xl p-3 sm:p-0`}>
      <div className="flex justify-center flex-col bg-white  items-center ">
        <div className="sm:flex sm:p-3 sm:rounded-lg">
          {/* heading container */}
          <div className="sm:p-3">
           <FiberySideBar2 setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}/>
          </div>
          <div className="hidden sm:flex ring-[0.5px] ring-gray-200"></div>
          <div>
            <FormDetails setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyStep3;
