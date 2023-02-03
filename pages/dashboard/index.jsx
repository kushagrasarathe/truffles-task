import DashboardLayout from "@/src/components/DashboardLayout";
import Image from "next/image";
import React, { useState } from "react";
// import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// dashboard icons
import iIcon from "../../src/assets/i-icon.png";
import cross from "../../src/assets/cross.png";
import up from "../../src/assets/up.png";
import down from "../../src/assets/down.png";
import wallet1 from "../../src/assets/wallet1.png";
import wallet2 from "../../src/assets/wallet2.png";
import Graph from "@/src/components/Graph";
import Calendar from "@/src/components/Calendar";

// calendar
// import "@natscale/react-calendar/dist/main.css";
// import { Calendar } from "@natscale/react-calendar";
// import styles from "../../styles/Customs.module.css";

export default function Dashboard({ children }) {
  const [hideKyc, setHideKyc] = useState(true);

  return (
    <>
      <DashboardLayout>
        {hideKyc && (
          <div className=" grid grid-cols-6 relative mt-2 md:mb-10 mb-12 py-3 px-6  text-white rounded-md bg-violet-500 col-span-3">
            <div className="md:col-span-5 col-span-full flex justify-start items-start md:items-center ">
              <Image className="" alt="i-icon" src={iIcon} />
              <p className=" px-4 text-justify ">
                Plese complete the KYC
                <br />
                Please follow the instructions in the email to complete account
                verification. Make sure to check your promotions/spam as well.
              </p>
            </div>
            <div
              onClick={() => {
                setHideKyc(false);
              }}
              className=" md:relative absolute right-0 p-2 ml-auto cursor-pointer col-span-1 my-auto"
            >
                <Image alt="cross" src={cross} />
            </div>
          </div>
        )}
        <div className=" grid grid-cols-3 gap-10 grid-rows-6">
          <div className=" md:row-span-2 grid grid-cols-2 md:col-span-2 col-span-full gap-8">
            <div className=" bg-white p-5 rounded-2xl shadow-md col-span-full md:col-span-1 flex justify-between items-center">
              <div>
                <span className=" leading-8 text-grey">Fiat Balance</span>
                <h3 className=" leading-8 text-2xl font-semibold">$00,000</h3>
              </div>
              <div>
                <Image alt="wallet1" src={wallet1} />
              </div>
            </div>
            <div className=" bg-white p-5 rounded-2xl shadow-md col-span-full md:col-span-1 flex justify-between items-center">
              <div>
                <span className=" leading-8 text-grey">Crypto Balance</span>
                <h3 className=" leading-8 text-2xl font-semibold">$00,000</h3>
              </div>
              <div>
                <Image alt="wallet2" src={wallet2} />
              </div>
            </div>
            <div className=" bg-white p-5 rounded-2xl shadow-md col-span-full md:col-span-1 flex justify-between items-center">
              <div>
                <span className=" leading-8 text-grey">Receivable</span>
                <h3 className=" leading-8 text-2xl font-semibold">$00,000</h3>
              </div>
              <div>
                <Image alt="down" src={down} />
              </div>
            </div>
            <div className=" bg-white p-5 rounded-2xl shadow-md col-span-full md:col-span-1 flex justify-between items-center">
              <div>
                <span className=" leading-8 text-grey">Payables</span>
                <h3 className=" leading-8 text-2xl font-semibold">$00,000</h3>
              </div>
              <div>
                <Image alt="up" src={up} />
              </div>
            </div>
          </div>
          <div className=" ml-auto w-full md:w-auto md:col-span-1 col-span-full md:row-span-6 bg-red-00">
            {/* <span>Sample Calendar</span> */}
            <Calendar />
          </div>
          <div className=" bg-red-30 md:row-span-3 col-span-full md:col-span-2 row-span-full">
            <Graph />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
