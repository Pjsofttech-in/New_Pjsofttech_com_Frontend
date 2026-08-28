"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Career/Career"), { ssr: false });
export default function CareerPage() { return <Page />; }