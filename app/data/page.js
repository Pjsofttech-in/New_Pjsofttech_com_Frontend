"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Data"), { ssr: false });
export default function DataPage() { return <Page />; }