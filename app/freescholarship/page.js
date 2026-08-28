"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Scholarship/Schorlarship"), { ssr: false });
export default function FreeScholarshipPage() { return <Page />; }