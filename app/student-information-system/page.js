"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/StudentInformationSystem"), { ssr: false });
export default function StudentInformationSystemPage() { return <Page />; }