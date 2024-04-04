import React, { useState } from "react";
import myself from "../assets/carrot.png";
import bomb from "../assets/bomb.png";
import books from "../assets/books.png";
import diamond from "../assets/diamond.png";
import eagle from "../assets/eagle.png";
import fishing from "../assets/fishing.png";
import hill from "../assets/hill.jpg";
import laptop from "../assets/laptop.png";
import unicorn from "../assets/unicorn.jpg";
import owl from "../assets/owl.png";
import paint from "../assets/paint.png";
import people from "../assets/people.png";
import question from "../assets/question.png";
import sun from "../assets/sun.png";

const FormDetails = ({
  formData,
  setFormData,
  setCurrentStep,
}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle changes in name input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle changes in email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddGuest = () => {
    // Here you can do whatever you want with the name and email, for now, just printing them
    setFormData((prev) => ({
          ...prev,
          detailsForm: { ...prev.detailsForm, name: {name} , email:{email} },
        }));
        setCurrentStep(4)
  };

  return (
    // parent conatiner
    <div className="flex flex-col gap-2 mt-8 sm:mt-2 sm:overflow-y-scroll sm:h-[550px]  scrollbar-thin scrollbar-track-white scrollbar-thumb-[#6c7b96] ">
      {/* form for name info and email */}
      <div className="sm:mx-8 ">
      <div className="font-bold text-base">Enter Details</div>
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-semibold">Name *</h1>
          <input
            className="ring-1 ring-black w-56 rounded-sm p-1"
            placeholder="enter your name" 
            type="text"
            value={name}
          onChange={handleNameChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-semibold">Email *</h1>
          <input
            className="ring-1 ring-black w-56 rounded-sm p-1"
            placeholder="enter your Email"
            type="email"
            value={email}
          onChange={handleEmailChange}
            required
          />
        </div>
        <button className="text-sm flex ring-[1px] ring-[#2259CA] py-1 px-2  text-[#2259CA] rounded-xl">
          Add Guests
        </button>

        {/* checkbox section*/}
        <div className=" flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">
              I want Fibery to Work for:*
            </h1>
            {work.map((data, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    name="work"
                    id={index}
                    type="checkbox"
                    className="w-4 h-4"
                  />
                  <img src={data.icon} className="w-4 h-4" />
                  <label htmlFor="work" className="text-sm font-normal">
                    {data.name}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">You are more about:*</h1>
            {brand.map((data, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    name="work"
                    id={index}
                    type="checkbox"
                    className="w-4 h-4"
                  />
                  <img src={data.icon} className="w-4 h-4" />
                  <label htmlFor="work" className="text-sm">
                    {data.type}
                  </label>
                </div>
              );
            })}
          </div>

          {/* text area for customer section */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px] font-semibold w-60">
              Please, share anything that will help prepare for our meeting
            </h1>
            <textarea
              type="textarea"
              className="border-2 pl-2  border-black border-solid"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[12px] font-semibold w-60">
              Please, share with us the name of your fibery workspace[if any]
            </h1>
            <textarea
              type="textarea"
              className="border-2 pl-2  border-black border-solid"
            ></textarea>
          </div>
          <button  onClick={handleAddGuest} className="text-sm flex items-center justify-center bg-[#2259CA] py-2 px-4 w-fit text-white rounded-xl">
            Schedule Event
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FormDetails;

const work = [
  {
    name: "Myself",
    icon: myself,
  },
  {
    name: "< 10 people",
    icon: people,
  },
  {
    name: "10-50 people",
    icon: unicorn,
  },
  {
    name: "50+ people",
    icon: eagle,
  },
];

const brand = [
  {
    type: "Leadership",
    icon: hill,
  },
  {
    type: "Consulting",
    icon: owl,
  },
  {
    type: "Product Management",
    icon: sun,
  },
  {
    type: "Design",
    icon: paint,
  },
  {
    type: "Engineering",
    icon: laptop,
  },
  {
    type: "Sales",
    icon: fishing,
  },
  {
    type: "Marketing",
    icon: bomb,
  },
  {
    type: "Human Resources",
    icon: diamond,
  },
  {
    type: "Education",
    icon: books,
  },
  {
    type: "Something else",
    icon: question,
  },
];
