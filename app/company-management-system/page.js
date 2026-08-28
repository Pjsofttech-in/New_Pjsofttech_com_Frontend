"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/CompnayManagementSystem"), { ssr: false });
export default function CompanyManagementSystemPage() { return <Page />; }