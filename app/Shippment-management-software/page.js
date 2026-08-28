"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/ShippmentManagementSystem"), { ssr: false });
export default function ShippmentManagementSoftwarePage() { return <Page />; }