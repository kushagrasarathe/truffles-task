import Link from "next/link";
import React from "react";

export default function PreviewData(props) {
  const { setStep } = props;
  return (
    <div className=" text-grey mx-3 mt-8 mb-4 pr-10">
      <h1 className=" text-2xl font-semibold text-black">Preview Details</h1>
      <div className="w-full my-5 flex justify-between items-center mt-1 md:mt-16">
        <button
          onClick={() => setStep(5)}
          className=" bg-white border py-2 px-3 rounded-md w-auto active:bg-gray- transition ease-in-out active:scale-105 200"
          type="button"
        >
          Back
        </button>
        <Link href={'/dashboard'}>
        <button
          // onClick={() => alert("Application Successfully Submitted!!!")}
          className=" transition ease-in-out active:scale-105  bg-purple border py-2 px-3 rounded-md text-white active:bg-violet-600"
          type="button"
          >
          Take me to Dashboard
        </button>
          </Link>
      </div>
    </div>
  );
}
