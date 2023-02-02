export default function BusinessInfoForm2(props) {
    const { setStep } = props;
    return (
      <>
        <div className=" text-grey mx-3 mt-8 mb-4 pr-10">
          <h1 className=" text-2xl font-semibold text-black">
            Business Information 2
          </h1>
          {/* <span className=" mt-2">
            Use a permanent address where you can receive mail.
          </span>
  
          <div className=" my-3 w-full">
            <div className="md:col-span-1 col-span-3 md:my-2 my-2 w-full flex flex-col items-start justify-center">
              <label htmlFor="">Account ID</label>
              <input
                className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
                type="text"
              />
            </div>
          </div>
  
          <div className="w-full my-5 col-span-1">
            <label htmlFor="">Company Name</label>
  
            <input
              className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
              type="text"
            />
          </div>
  
          <div className="w-full my-5 grid grid-cols-2">
            <div className=" md:col-span-1 col-span-2 my-2 md:mr-2">
              <label htmlFor="">Country of Incorporation</label>
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
            <div className=" md:col-span-1 col-span-2 my-2 md:ml-2">
              <label htmlFor="">County of Operation</label>
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
          </div>
  
          <div className="w-full my-5">
            <label htmlFor="">Business Type</label>
            <select
              className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
              name=""
              id=""
            >
              <option value="small">Small Scale</option>
              <option value="medium">Medium Scale</option>
              <option value="large">Large Scale</option>
            </select>
          </div>
  
          <div className="w-full my-5">
            <label htmlFor="">Company Address</label>
            <input
              className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
              type="text"
            />
          </div>
  
          <div className=" my-3 w-full grid grid-cols-3">
            <div className=" md:col-span-1 col-span-3 md:my-2 my-2 w-full md:w-11/12 md:mr-2 flex flex-col items-start justify-center">
              <label htmlFor="">ZIP / POSTAL</label>
              <input
                className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
                type="text"
              />
            </div>
            <div className="md:col-span-1 col-span-3 wf md:my-2 my-2  w-full md:w-11/12 md:ml-2 flex flex-col items-start justify-center">
              <label htmlFor="">State / Province</label>
              <input
                className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
                type="text"
              />
            </div>
            <div className="md:col-span-1 col-span-3 md:my-2 my-2 w-full flex flex-col items-start justify-center">
              <label htmlFor="">City</label>
              <input
                className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
                type="text"
              />
            </div>
          </div>
  
          <div className="w-full my-5">
            <label htmlFor="">Registration Number</label>
            <input
              className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
              type="number"
            />
          </div>
  
          <div className="w-full my-5">
            <label htmlFor="">Incorportation Date</label>
            <input
              className="my-1 w-full bg-white border border-gray-300 px-2 py-1 rounded-md"
              type="date"
            />
          </div>
   */}
          <div className="w-full my-5 flex justify-between items-center mt-1 md:mt-16">
            <button
              onClick={() => setStep(3)}
              className=" bg-white border py-2 px-3 rounded-md w-auto active:bg-gray- transition ease-in-out active:scale-105 200"
              type="button"
            >
              Back
            </button>
            <button
              onClick={() => setStep(5)}
              className=" transition ease-in-out active:scale-105  bg-purple border py-2 px-3 rounded-md text-white active:bg-violet-600"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
  