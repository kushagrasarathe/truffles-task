import Image from "next/image";
import React from "react";
import greenArrow from "../assets/green-arrow.png";
import redArrow from "../assets/red-arrow.png";

export default function Calendar() {
  return (
    <div className="flex h-full w-full md:w-[480px]  items-start justify-center px-">
      <div className=" w-[100%] shadow-lg rounded-xl">
        <div className="md:p-8 p-5  bg-white rounded-xl">
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex="0"
              className="focus:outline-none  text-base font-bold  text-gray-800"
            >
              October 2020
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Mo
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Tu
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        We
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Th
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Fr
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Sa
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Su
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">1</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">2</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">3</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">4</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">5</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">6</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">7</p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          role="link"
                          tabIndex="0"
                          className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">9</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">10</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">11</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">12</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">13</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">14</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">15</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">16</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">17</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">18</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">19</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">20</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">21</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">22</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">23</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">24</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 ">25</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">28</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">29</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500  font-medium">30</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:py- py-5 md:px-8 px-5  bg-white rounded-b-xl">
          <div className="  bg-red-30">
            <div className=" mt-2 flex w-full justify-between items-center">
              <div>
                <Image alt="red arrow" src={redArrow} />
              </div>
              <div className=" px-3">
                <h4 className=" text-lg uppercase">QUICKSILVER LLC</h4>
                <span className=" text-sm ">TFID: 8045780</span>
              </div>
              <div className=" ml-auto">
                <span className=" text-md ">$ 145,000.00</span>
              </div>
            </div>
            <div className=" mt-4 flex w-full justify-between items-center">
              <div>
                <Image alt="red arrow" src={greenArrow} />
              </div>
              <div className=" px-3">
                <h4 className=" text-lg uppercase">QUICKSILVER LLC</h4>
                <span className=" text-sm ">TFID: 8045780</span>
              </div>
              <div className=" ml-auto">
                <span className=" text-md ">$ 145,000.00</span>
              </div>
            </div>
            <div className=" mt-4 flex w-full justify-between items-center">
              <div>
                <Image alt="red arrow" src={greenArrow} />
              </div>
              <div className=" px-3">
                <h4 className=" text-lg uppercase">QUICKSILVER LLC</h4>
                <span className=" text-sm ">TFID: 8045780</span>
              </div>
              <div className=" ml-auto">
                <span className=" text-md ">$ 145,000.00</span>
              </div>
            </div>
            <div className=" mt-4 flex w-full justify-between items-center">
              <div>
                <Image alt="red arrow" src={redArrow} />
              </div>
              <div className=" px-3">
                <h4 className=" text-lg uppercase">QUICKSILVER LLC</h4>
                <span className=" text-sm ">TFID: 8045780</span>
              </div>
              <div className=" ml-auto">
                <span className=" text-md ">$ 145,000.00</span>
              </div>
            </div>
            {/* <div className=" mt-3 flex w-full justify-between items-center">
              <div>
                <Image alt="red arrow" src={greenArrow} />
              </div>
              <div className=" px-3">
                <h4 className=" text-lg uppercase">QUICKSILVER LLC</h4>
                <span className=" text-sm ">TFID: 8045780</span>
              </div>
              <div className=" ml-auto">
                <span className=" text-md ">$ 145,000.00</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
