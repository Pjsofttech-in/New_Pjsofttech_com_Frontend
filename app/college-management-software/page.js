"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/CollegeManagementSoftware"), { ssr: false });
export default function CollegeManagementSoftwarePage() { return <Page />; }