"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/EnquiryManagementSystem"), { ssr: false });
export default function EnquiryManagementSoftwarePage() { return <Page />; }