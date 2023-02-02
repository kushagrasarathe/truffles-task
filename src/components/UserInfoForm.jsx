import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function UserInfoForm(props) {
  const { setStep } = props;
  return (
    <div className=" text-grey mx-3 mt-8 mb-4 pr-10">
      <h1 className=" text-2xl font-semibold text-black">User Information</h1>
      <span className=" mt-8">Please enter your details</span>

      <div className=" my-3 w-full grid grid-cols-3">
        <div className=" md:col-span-1 col-span-3 md:my-2 my-2 w-full md:w-11/12 md:mr-2 flex flex-col items-start justify-center">
          <label htmlFor="">Title</label>
          <select
            className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
            name=""
            id=""
          >
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss.">Miss</option>
          </select>
        </div>
        <div className="md:col-span-1 col-span-3 wf md:my-2 my-2  w-full md:w-11/12 md:ml-2 flex flex-col items-start justify-center">
          <label htmlFor="">First Name</label>
          <input
            className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
            type="text"
          />
        </div>
        <div className="md:col-span-1 col-span-3 md:my-2 my-2 w-full flex flex-col items-start justify-center">
          <label htmlFor="">Last Name</label>
          <input
            className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
            type="text"
          />
        </div>
      </div>

      <div className="w-full my-5 col-span-1">
        <label htmlFor="">Mobile Number</label>
        <div className=" w-full flex">
          <select
            className="my-1 w-28 bg-white border border-gray-300 px-2 py-1 rounded-l-md"
            name=""
            id=""
          >
            <option value="+1">US</option>
            <option value="+91">IN</option>
            <option value="+63">CA</option>
          </select>
          <input
            className="my-1 w-full bg-white border border-l-0 border-gray-300 px-2 py-1 rounded-r-md"
            type="number"
          />
        </div>
      </div>

      <div className="w-full my-5">
        <label htmlFor="">Gender</label>
        <select
          className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
          name=""
          id=""
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="trans">Trans</option>
        </select>
      </div>

      <div className="w-full my-5">
        <label htmlFor="">Nationality</label>
        <select
          className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
          name=""
          id=""
        >
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="w-full my-5 grid grid-cols-2">
        <div className=" md:col-span-1 col-span-2 my-2 md:mr-2">
          <label htmlFor="">Residential Address</label>
          <input
            className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
            type="text"
          />
        </div>
        <div className=" md:col-span-1 col-span-2 my-2 md:ml-2">
          <label htmlFor="">Postal Code</label>
          <input
            className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
            type="number"
          />
        </div>
      </div>

      <div className="w-full my-5">
        <label htmlFor="">Occupation</label>
        <input
          className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
          type="text"
        />
      </div>

      <div className="w-full my-5">
        <label htmlFor="">Date of Birth</label>
        <input
          className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
          type="date"
        />
      </div>

      <div className="w-full my-5 flex justify-between items-center mt-1 md:mt-16">
        <button
        disabled={true}
          className=" bg-white border py-2 px-3 rounded-md w-auto active:bg-gray- transition ease-in-out active:scale-105 200"
          type="button"
        >
          Back
        </button>
        <button
          onClick={() => setStep(2)}
          className=" transition ease-in-out active:scale-105  bg-purple border py-2 px-3 rounded-md text-white active:bg-violet-600"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
