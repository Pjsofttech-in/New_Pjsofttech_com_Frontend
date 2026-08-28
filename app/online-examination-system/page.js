"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/OnlineExaminationSystem"), { ssr: false });
export default function OnlineExaminationSystemPage() { return <Page />; }