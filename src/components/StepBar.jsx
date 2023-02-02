import React from 'react'

export default function StepBar() {
  return (
    <div className=" flex justify-start items-start md:w-6/6  bg-lightGrey md:h-screen ">
        <div className=" my-5 mx-auto ml-4 px-4">
          {/* trying */}
          <div className="grid grid-cols-3 gap-0 ">
            <div className="mr-auto ">
              <div className="w-10 h-10 bg-white border-2 border-purple mx-auto rounded-full text-lg text-black flex items-center">
                <span className=" bg-purple w-3 h-3 rounded-full mx-auto"></span>
              </div>
            </div>
            <div className=" font-semibold text-purple col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-lg w-64 ">
              USER INFORMATION
            </div>
            <div className="  col-span-3 ml-[19px] w-[2px] mt-[0px] align-center items-center align-middle content-center flex">
              <div className="w-full bg-purple-500  rounded items-center align-middle align-center flex-1">
                <div
                  style={{ width: "100%" }}
                  class=" w-0  h-16 bg-purple text-black rounded-none "
                ></div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-3 gap-0 ">
            {/*  */}
            <div className="mr-auto">
              <div className="w-10 h-10  bg-white border-2 border-gray-300 mx-auto rounded-full text-lg text-black flex items-center">
                <span className="text-black text-center w-full"></span>
              </div>

              {/* <div className="w-10 h-10 bg-white border-2 border-purple mx-auto rounded-full text-lg text-black flex items-center">
                <span className=" bg-purple w-3 h-3 rounded-full mx-auto"></span>
              </div> */}
            </div>
            {/*  */}
            <div className="  text-grey col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-lg w-64  ">
              ADMIN AND OPERATIONS
            </div>
            {/*  */}
            <div className=" col-span-3 ml-5 w-[2px] mt-[-px] align-center items-center align-middle content-center flex">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  style={{ width: "0%" }}
                  class=" w-0  h-16  text-black rounded-none "
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0 ">
            {/*  */}
            <div className="mr-auto">
              <div className="w-10 h-10  bg-white border-2 border-gray-300 mx-auto rounded-full text-lg text-black flex items-center">
                <span className="text-black text-center w-full"></span>
              </div>
              {/* <div className="w-10 h-10 bg-white border-2 border-purple mx-auto rounded-full text-lg text-black flex items-center">
                <span className=" bg-purple w-3 h-3 rounded-full mx-auto"></span>
              </div> */}
            </div>
            {/*  */}
            <div className="  text-grey   col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-lg w-64   ">
              BUSINESS INFORMATION
            </div>
            {/*  */}
            <div className=" col-span-3 ml-5 w-[2px] mt-[-px] align-center items-center align-middle content-center flex">
              <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  style={{ width: "0%" }}
                  class=" w-0  h-16  text-black rounded-none "
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0 ">
            {/*  */}
            <div className="mr-auto">
              <div className="w-10 h-10  bg-white border-2 border-gray-300 mx-auto rounded-full text-lg text-black flex items-center">
                <span className="text-black text-center w-full"></span>
              </div>
              {/* <div className="w-10 h-10 bg-white border-2 border-purple mx-auto rounded-full text-lg text-black flex items-center">
                <span className=" bg-purple w-3 h-3 rounded-full mx-auto"></span>
              </div> */}
            </div>
            {/*  */}
            <div className="  text-grey col-span-2 md:ml-[-15px] pl-8 md:pl-4 my-auto text-start text-base md:text-lg w-64 ">
              UPLOAD DOCUMENTS
            </div>
          </div>

          {/* end */}
        </div>
      </div>
  )
}
