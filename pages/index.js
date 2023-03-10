import AdminOps from "@/src/components/Admin&OpsForm";
import BusinessInfoForm from "@/src/components/BusinessInforForm";
import BusinessInfoForm2 from "@/src/components/BusinessInforForm2";
import PreviewData from "@/src/components/PreviewData";
import StepBar from "@/src/components/StepBar";
import UploadDocs from "@/src/components/UploadDocs";
import UserInfoForm from "@/src/components/UserInfoForm";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logo from "../src/assets/logo.png";

export default function Home() {
  const [step, setStep] = useState(1);
  // console.log(step)

  return (
    <>
      <Head>
        <title>Truffles Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" py-4 px-6 flex justify-between items-center border-b-2">
        <div>
          <Image alt="logo" src={logo} />
        </div>
        <div>
          <span>
            Having trouble?{" "}
            <a className=" text-purple" href="">
              Get Help
            </a>
          </span>
        </div>
      </div>
      <div className=" w-full grid grid-cols-12">
        <div className=" col-span-12 md:col-span-5 lg:col-span-3">
          <StepBar onStep={step} />
        </div>
        <div className=" ml-10 col-span-12 md:col-span-7 lg:col-span-9">
          {step === 1 ? (
            <UserInfoForm setStep={setStep} />
          ) : step === 2 ? (
            <AdminOps setStep={setStep} />
          ) : step === 3 ? (
            <BusinessInfoForm setStep={setStep} />
          ) : step === 4 ? (
            <BusinessInfoForm2 setStep={setStep} />
          ) : step === 5 ? (
            <UploadDocs setStep={setStep} />
          ) : step === 6 ? (
            <PreviewData setStep={setStep} />
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </>
  );
}
