"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/TestSeriesManagemenSystem"), { ssr: false });
export default function TestSeriesManagementSystemPage() { return <Page />; }