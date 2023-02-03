import Image from "next/image";
import React, { useState } from "react";

// header icons
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import bell from "../assets/bell.png";

// sidebar icons
import dash from "../assets/dash.png";
import invoice from "../assets/invoice.png";
import proforma from "../assets/proforma.png";
import swap from "../assets/swap.png";
import transfer from "../assets/transfer.png";
import contacts from "../assets/contacts.png";
import Link from "next/link";
import { useRouter } from "next/router";

// sidebar ham icons
import show from "../assets/hamshow.png";
import hide from "../assets/hamhide.png";

const sidebarOptions = [
  {
    title: "Dashboard",
    img: dash,
    isActive: true,
    path: "/dashboard",
  },
  {
    title: "Invoice",
    img: invoice,
    isActive: false,
    path: "/dashboard/invoice",
  },
  {
    title: "Proforma",
    img: proforma,
    isActive: false,
    path: "/dashboard/proforma",
  },
  {
    title: "Swap",
    img: swap,
    isActive: false,
    path: "/dashboard/swap",
  },
  {
    title: "Transfer",
    img: transfer,
    isActive: false,
    path: "/dashboard/transfer",
  },
  {
    title: "Contacts",
    img: contacts,
    isActive: false,
    path: "/dashboard/contacts",
  },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [toggleSideBar, setToggleSideBar] = useState(true);

  function formatPath(path) {
    let trimmedStr = path.replace(/\/dashboard\//g, "");
    return trimmedStr.charAt(0).toUpperCase() + trimmedStr.slice(1);
  }

  // console.log(capitalize("dayjs"));

  return (
    <>
      {/* header */}
      <div className="  py-4 px-6 bg-lightGrey border-b grid grid-cols-12">
        <div className=" md:col-span-2 col-span-6 md:ml-0 ml-auto ">
          <div>
            <Image alt="logo" src={logo} />
          </div>
        </div>
        <div className=" md:col-span-8 col-span-0 ">
          <h1 className=" md:visible invisible text-2xl font-semibold">
            {router.asPath === "/dashboard"
              ? "Dashboard"
              : formatPath(router.asPath)}
          </h1>
        </div>
        <div className=" md:col-span-2 col-span-5 ml-auto my-auto md:visible ">
          <div className=" flex justify-start items-center">
            <div className=" cursor-pointer flex justify-center items-center">
              <Image alt="user" src={user} />
              <span className=" px-3 text-grey">Evan Winter</span>
            </div>
            <div className=" cursor-pointer">
              <Image alt="bell" src={bell} />
            </div>
          </div>
        </div>
      </div>

      {/* sidebar */}

      <div
        onClick={() => setToggleSideBar((prev) => !prev)}
        className=" visible md:invisible absolute z-50 top-2 py-2 px-2 w-12 cursor-pointer"
      >
        <Image alt="hammenu" src={toggleSideBar ? hide : show} />
      </div>

      <div className=" grid grid-cols-12 bg-lightGrey">
        {toggleSideBar && (
          <div className=" h-screen md:py-4 md:px-6 md:col-span-2 col-span-2 ">
            {sidebarOptions.map((option, id) => {
              return (
                <Link key={id} legacyBehavior href={option.path}>
                  <div
                    className={` w-auto cursor-pointer flex justify-start items-center ${
                      router.asPath === option.path ? "bg-white" : "bg-inherit"
                    } md:py-4 md:px-2 py-4 px-2 rounded-md`}
                  >
                    <Image className=" ml-2" alt="dash" src={option.img} />
                    <span className=" md:visible invisible px-3">
                      {option.title}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        <div
          className={`py-4 px-6  ${
            toggleSideBar ? "col-span-10 md:col-span-10" : "col-span-12 "
          } `}
        >
          {children}
        </div>
      </div>
    </>
  );
}
