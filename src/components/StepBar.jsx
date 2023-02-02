import React from "react";

export default function StepBar(props) {
  const { onStep } = props;

  // const stepsArr = ["Step1", "Step2", "Step3", "Step4", "Step5", "Step6"];

  return (
    <div className=" flex justify-start items-start md:w-6/6  bg-lightGrey md:h-screen ">
      <div className=" my-5 mx-auto ml-4 px-4">

        {/* step 1 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep >= 1 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep >= 1 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep >= 1
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            USER INFORMATION
          </div>
          <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                style={{ width: "100%" }}
                className={` w-0  h-16 ${
                  onStep >= 1 ? "bg-purple" : "bg-gray-200 "
                } text-black rounded-none `}
              ></div>
            </div>
          </div>
        </div>

        {/* step 2 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep >= 2 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep >= 2 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep >= 2
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            Admin and Operations
          </div>
          <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                style={{ width: "100%" }}
                className={` w-0  h-16 ${
                  onStep >= 2 ? "bg-purple" : "bg-gray-200 "
                } text-black rounded-none `}
              ></div>
            </div>
          </div>
        </div>
        {/* step 3 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep >= 3 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep >= 3 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep >= 3
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            Business Information
          </div>
          <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                style={{ width: "100%" }}
                className={` w-0  h-16 ${
                  onStep >= 3 ? "bg-purple" : "bg-gray-200 "
                } text-black rounded-none `}
              ></div>
            </div>
          </div>
        </div>

        {/* step 4 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep >= 4 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep >= 4 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep >= 4
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            Business Information 2
          </div>
          <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                style={{ width: "100%" }}
                className={` w-0  h-16 ${
                  onStep >= 4 ? "bg-purple" : "bg-gray-200 "
                } text-black rounded-none `}
              ></div>
            </div>
          </div>
        </div>

        {/* step 5 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep >= 5 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep >= 5 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep >= 5
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            Upload Documents
          </div>
          <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                style={{ width: "100%" }}
                className={` w-0  h-16 ${
                  onStep >= 5 ? "bg-purple" : "bg-gray-200 "
                } text-black rounded-none `}
              ></div>
            </div>
          </div>
        </div>

        {/* step 6 */}
        <div className="grid grid-cols-3 gap-0 ">
          <div className="mr-auto ">
            <div
              className={`w-10 h-10 bg-white border-2 ${
                onStep === 6 ? "border-purple " : " border-gray-300  "
              } mx-auto rounded-full text-lg text-black flex items-center`}
            >
              <span
                className={` ${
                  onStep === 6 ? "bg-purple" : "bg-white "
                }  w-3 h-3 rounded-full mx-auto`}
              ></span>
            </div>
          </div>
          <div
            className={` ${
              onStep === 6
                ? "text-purple font-semibold"
                : "text-grey font-normal"
            }   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-md w-64 `}
          >
            Preview
          </div>
        </div>
      </div>
    </div>
  );
}
