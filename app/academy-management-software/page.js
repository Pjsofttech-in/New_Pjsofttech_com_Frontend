"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/AcademyManagementSoftware"), { ssr: false });
export default function AcademyManagementSoftwarePage() { return <Page />; }