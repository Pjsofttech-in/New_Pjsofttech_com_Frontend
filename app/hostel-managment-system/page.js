"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/HostelManagmentSystems"), { ssr: false });
export default function HostelManagmentSystemPage() { return <Page />; }