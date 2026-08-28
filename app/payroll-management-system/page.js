"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/PayrollManagementSystem"), { ssr: false });
export default function PayrollManagementSystemPage() { return <Page />; }