"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/StudyPointManagementSystem"), { ssr: false });
export default function StudyPointManagementSystemPage() { return <Page />; }