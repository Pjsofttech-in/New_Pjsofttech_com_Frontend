"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Become/Become"), { ssr: false });
export default function BecomePage() { return <Page />; }