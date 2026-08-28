"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Apps/app"), { ssr: false });
export default function AppsPage() { return <Page />; }