"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Footer/Return"), { ssr: false });
export default function ReturnPage() { return <Page />; }