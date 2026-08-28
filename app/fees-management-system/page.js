"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/FeesManagementSystem"), { ssr: false });
export default function FeesManagementSystemPage() { return <Page />; }