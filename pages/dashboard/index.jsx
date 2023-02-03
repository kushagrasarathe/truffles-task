import Image from "next/image";
import React from "react";

// header icons
import logo from "../../src/assets/logo.png";
import user from "../../src/assets/user.png";
import bell from "../../src/assets/bell.png";

// sidebar icons
import dash from "../../src/assets/dash.png";
import invoice from "../../src/assets/invoice.png";
import proforma from "../../src/assets/proforma.png";
import swap from "../../src/assets/swap.png";
import transfer from "../../src/assets/transfer.png";
import contacts from "../../src/assets/contacts.png";
import Link from "next/link";
import { useRouter } from "next/router";
import DashboardLayout from "@/src/components/DashboardLayout";

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

export default function Dashboard({ children }) {
  const router = useRouter();

  return (
    <>
      <DashboardLayout>
        <h1>Dashboard Here</h1>
      </DashboardLayout>
    </>
  );
}
