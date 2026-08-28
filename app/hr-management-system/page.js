"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/HRManagementSystem"), { ssr: false });
export default function HRManagementSystemPage() { return <Page />; }