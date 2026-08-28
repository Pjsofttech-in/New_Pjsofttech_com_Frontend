"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/EcommerceManagementSystem"), { ssr: false });
export default function EcommerceManagementSystemPage() { return <Page />; }