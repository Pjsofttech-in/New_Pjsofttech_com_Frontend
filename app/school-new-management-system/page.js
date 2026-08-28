"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/SchoolNewManagementSystem"), { ssr: false });
export default function SchoolNewManagementSystemPage() { return <Page />; }