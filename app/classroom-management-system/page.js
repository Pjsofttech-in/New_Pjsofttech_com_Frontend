"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/ClassroomManagementSystem"), { ssr: false });
export default function ClassroomManagementSystemPage() { return <Page />; }