"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/OnlineAdmissionSystem"), { ssr: false });
export default function OnlineAdmissionSystemPage() { return <Page />; }