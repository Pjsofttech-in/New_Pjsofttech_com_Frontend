"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/AttendanceManagementSystem"), { ssr: false });
export default function AttendanceManagementSystemPage() { return <Page />; }