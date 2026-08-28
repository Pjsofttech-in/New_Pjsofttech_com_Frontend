"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Refund"), { ssr: false });
export default function RefundPage() { return <Page />; }