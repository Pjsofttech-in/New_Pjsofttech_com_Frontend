"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/SalesManagementSystem"), { ssr: false });
export default function SalesManagementSystemPage() { return <Page />; }