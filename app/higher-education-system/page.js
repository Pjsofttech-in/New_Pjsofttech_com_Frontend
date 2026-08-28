"use client";
import dynamic from "next/dynamic";
const Page = dynamic(() => import("../../components/Services/HigherEducationSystem"), { ssr: false });
export default function HigherEducationSystemPage() { return <Page />; }